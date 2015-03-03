/**
 * Display Object
 */
var DisplayObject = go2d.DisplayObject = EventDispatcher.extend({
	__init: function(canvas) {
		this._super();
		this.canvas = canvas || document.createElement('canvas');
		this.context = this.canvas.getContext('2d');
		this.name = '';
		this.tag = '';
		this.stage = null;
		this.paused = false;
		this.touchable = true;
		this.touchChildren = true;
		this._dirty = true;
		this._touches = [];
		this._children = [];

		var properties = {
			opacity: 1,
			background: null
		};
		forEach(properties, function(value, key) {
			Object.defineProperty(this, key, {
				set: function(value) {
					if (properties[key] !== value) {
						properties[key] = value;
					}
					this.update();
				},
				get: function() {
					return properties[key];
				}
			});
		}, this);

		Object.defineProperty(this, 'width', {
			set: function(width) {
				this._onResize(width, this.canvas.height);
			},
			get: function() {
				return this.canvas.width;
			}
		});
		Object.defineProperty(this, 'height', {
			set: function(height) {
				this._onResize(this.canvas.width, height);
			},
			get: function() {
				return this.canvas.height;
			}
		});
	},
	_onTouch: function(event) {
		if (!this.touchable) {
			return;
		}
		var stoped = false,
			type = event.type;
		if (this.touchChildren) {
			var children = this._children,
				identifier = event.identifier,
				touchPos = new Vector(event.x, event.y);
			for (var i = children.length - 1; i >= 0; --i) {
				var child = children[i];
				if (child.visible && child.touchable) {
					var emit = false,
						touches = child._touches,
						subPos = child.getTransform().invert().vectorMultiply(touchPos),
						inRect = subPos.x >= 0 && subPos.y >= 0 && subPos.x <= child.width && subPos.y <= child.height;
					switch (type) {
						case 'touchstart':
							if (inRect) {
								emit = true;
								touches[identifier] = true;
							}
							break;
						case 'touchmove':
							if (touches[identifier]) {
								emit = true;
							}
							break;
						case 'touchend':
							if (touches[identifier]) {
								emit = true;
								touches[identifier] = false;
							}
							break;
						case 'touchtap':
							if (inRect && touches[identifier] !== undefined) {
								emit = true;
							}
							delete touches[identifier];
							break;
					}
					if (emit) {
						var subEvent = new TouchEvent(type, subPos.x, subPos.y, event.globalX, event.globalY, identifier);
						child._onTouch(subEvent);
						stoped = stoped || subEvent.isStopped();
						break;
					}
				}
			}
		}
		if (stoped) {
			event.stopPropagation();
		} else {
			this.emit(type, event);
		}
	},
	_onAddedToStage: function(stage) {
		this.stage = stage;
		this.emit('addedtostage');
		forEach(this._children, function(child) {
			child._onAddedToStage(stage);
		});
	},
	_onRemovedFromStage: function() {
		this.stage = null;
		this.emit('removedfromstage');
		forEach(this._children, function(child) {
			child._onRemovedFromStage();
		});
	},
	_onResize: function(width, height) {
		var oldWidth = this.width,
			oldHeight = this.height;
		if (width === oldWidth && height === oldHeight) {
			return;
		}
		var event = new ResizeEvent({
			width: oldWidth,
			height: oldHeight
		}, {
			width: width,
			height: height
		});
		this.emit('resize', event);
		if (!event.isDefaultPrevented()) {
			this.canvas.width = width;
			this.canvas.height = height;
			this.update();
		}
	},
	render: function() {
		if (this._dirty) {
			var ctx = this.context,
				children = this._children,
				event = new Event('render');
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			ctx.clearRect(0, 0, this.width, this.height);
			ctx.beginPath();
			if (this.background) {
				ctx.save();
				ctx.fillStyle = this.background;
				ctx.fillRect(0, 0, this.width, this.height);
				ctx.restore();
			}
			this.emit('render', event);
			if (!event.isDefaultPrevented()) {
				forEach(children, function(child) {
					if (child.visible && child.opacity) {
						var matrix = child.getTransform();
						child.render();
						ctx.globalAlpha = child.opacity;
						if (matrix.a === 1 && matrix.b === 0 && matrix.c === 0 && matrix.d === 1) {
							ctx.drawImage(child.canvas, child.x, child.y, child.width, child.height);
						} else {
							ctx.save();
							ctx.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
							ctx.drawImage(child.canvas, 0, 0, child.width, child.height);
							ctx.restore();
						}
					}
				});
			}
			this.emit('paint', ctx);
			this._dirty = false;
		}
		return this;
	},
	tick: function(deltaTime) {
		if (!this.paused) {
			forEach(this._children, function(child) {
				child.tick(deltaTime);
			});
			this.emit('step', deltaTime);
		}
		return this;
	},
	update: function() {
		this._dirty = true;
		this.updateParent();
		return this;
	},
	updateParent: function() {
		if (this.parent) {
			this.parent.update();
		}
		return this;
	},
	addChild: function(child) {
		this.addChildAt(child);
		return this;
	},
	addChildAt: function(child, index) {
		if (child.parent) {
			child.parent.removeChild(child);
		}
		child.parent = this;
		if (this.stage) {
			child._onAddedToStage(this.stage);
		}
		if (index === undefined) {
			this._children.push(child);
		} else {
			this._children.splice(index, 0, child);
		}
		this.update();
		return this;
	},
	getChildByName: function(name) {
		var child;
		forEach(this._children, function(item) {
			if (item.name === name) {
				child = item;
				return false;
			}
		});
		return child;
	},
	getChildrenByTag: function(tag) {
		var children = [];
		forEach(this._children, function(item) {
			if (item.tag === tag) {
				children.push(item);
			}
		});
		return children;
	},
	getChildAt: function(index) {
		return this._children[index];
	},
	getChildIndex: function(child) {
		var index = -1;
		forEach(this._children, function(item, i) {
			if (item === child) {
				index = i;
			}
		});
		return index;
	},
	swapChildren: function(child1, child2) {
		var index1 = this.getChildIndex(child1);
		var index2 = this.getChildIndex(child2);
		if (index1 >= 0 && index2 >= 0) {
			this.swapChildrenAt(index1, index2);
		}
		return this;
	},
	swapChildrenAt: function(index1, index2) {
		if (index1 !== index2) {
			var child1 = this._children[index1];
			var child2 = this._children[index2];
			if (child1 && child2) {
				this._children[index1] = child2;
				this._children[index2] = child1;
				this.update();
			}
		}
		return this;
	},
	sortChildren: function(compare) {
		this._children.sort(compare);
		return this;
	},
	getAllChildren: function() {
		return this._children;
	},
	removeChild: function(child, cleanup) {
		var children = this._children;
		for (var i = children.length - 1; i >= 0; --i) {
			if (children[i] === child) {
				this.removeChildAt(i, cleanup);
			}
		}
		return this;
	},
	removeChildAt: function(index, cleanup) {
		var child = this._children.splice(index, 1)[0];
		if (child) {
			if (cleanup) {
				child.dispose();
			} else {
				child.parent = null;
				if (child.stage) {
					child._onRemovedFromStage();
				}
			}
			this.update();
		}
		return this;
	},
	removeChildrenByTag: function(tag, cleanup) {
		var children = this._children;
		for (var i = children.length - 1; i >= 0; --i) {
			if (children[i].tag === tag) {
				this.removeChildAt(i, cleanup);
			}
		}
		return this;
	},
	removeAllChildren: function(cleanup) {
		forEach(this._children, function(child) {
			child.parent = null;
			if (child.stage) {
				child._onRemovedFromStage();
			}
			if (cleanup) {
				child.dispose();
			}
		});
		this._children = [];
		this.update();
		return this;
	},
	play: function() {
		this.paused = false;
		return this;
	},
	pause: function() {
		this.paused = true;
		return this;
	},
	dispose: function() {
		if (this.parent) {
			this.parent.removeChild(this);
		}
		this.removeAllChildren(true);
		this._super();
		return this;
	}
});
