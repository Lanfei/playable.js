/**
 * 显示对象基类，实现了显示对象的基本渲染和事件逻辑，显示对象元素类和舞台类都基于此类。
 * @author Lanfei
 * @class go2d.DisplayObject
 * @extends go2d.EventDispatcher
 * @param {object} canvas 用于渲染的画布对象
 */
var DisplayObject = go2d.DisplayObject = EventDispatcher.extend({
	__init: function(canvas) {
		this._super();

		/**
		 * 用于渲染的画布对象
		 * @readonly
		 * @member go2d.DisplayObject#canvas
		 * @type object
		 */
		this.canvas = canvas || document.createElement('canvas');

		/**
		 * 画布的上下文对象
		 * @readonly
		 * @member go2d.DisplayObject#context
		 * @type object
		 */
		this.context = this.canvas.getContext('2d');

		/**
		 * 用于标识该对象的名字，该属性在兄弟对象中应该唯一
		 * @member go2d.DisplayObject#name
		 * @type string
		 */
		this.name = '';

		/**
		 * 用于标识该对象的标签
		 * @member go2d.DisplayObject#tag
		 * @type string
		 */
		this.tag = '';

		/**
		 * 该对象所属的舞台对象
		 * @readonly
		 * @member go2d.DisplayObject#stage
		 * @type go2d.Stage
		 */
		this.stage = null;

		/**
		 * 是否已暂停
		 * @member go2d.DisplayObject#paused
		 * @type Boolean
		 * @default false
		 */
		this.paused = false;

		/**
		 * 是否可点击
		 * @member go2d.DisplayObject#touchable
		 * @type Boolean
		 * @default true
		 */
		this.touchable = true;

		/**
		 * 子节点是否可点击
		 * @member go2d.DisplayObject#touchChildren
		 * @type Boolean
		 * @default true
		 */
		this.touchChildren = true;

		/**
		 * 是否需要重新渲染
		 * @protected
		 * @member go2d.DisplayObject#_dirty
		 * @type Boolean
		 * @default true
		 */
		this._dirty = true;

		/**
		 * 触摸标识数组
		 * @protected
		 * @member go2d.DisplayObject#_touches
		 * @type Array
		 */
		this._touches = [];

		/**
		 * 子对象数组
		 * @protected
		 * @member go2d.DisplayObject#_children
		 * @type Array
		 */
		this._children = [];

		var properties = {

			/**
			 * 不透明度
			 * @member go2d.DisplayObject#opacity
			 * @type number
			 * @default 1
			 */
			opacity: 1,

			/**
			 * 背景颜色或样式
			 * @member go2d.DisplayObject#background
			 * @type null|string|Object
			 * @default null
			 */
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

		/**
		 * 宽度
		 * @member go2d.DisplayObject#width
		 * @type number
		 */
		Object.defineProperty(this, 'width', {
			set: function(width) {
				this._onResize(width, this.canvas.height);
			},
			get: function() {
				return this.canvas.width;
			}
		});

		/**
		 * 高度
		 * @member go2d.DisplayObject#height
		 * @type number
		 */
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
		var type = event.type,
			propagationStopped = false;
		if (this.touchChildren) {
			var children = this._children,
				identifier = event.identifier,
				touchPos = new Vector(event.x, event.y);
			for (var i = children.length - 1; i >= 0; --i) {
				var child = children[i];
				if (child.visible && child.touchable) {
					var emit = false,
						touches = child._touches,
						subPos = child.getTransform().invert().multiply(touchPos),
						inRect = subPos.x >= 0 && subPos.y >= 0 && subPos.x <= child.width && subPos.y <= child.height;
					switch (type) {
						case 'touchstart':
							if (inRect) {
								/**
								 * 触摸开始事件
								 * @event go2d.DisplayObject#touchstart
								 * @param {go2d.TouchEvent} event 触摸事件对象
								 */
								emit = true;
								touches[identifier] = true;
							}
							break;
						case 'touchmove':
							if (touches[identifier]) {
								/**
								 * 触摸移动事件
								 * @event go2d.DisplayObject#touchmove
								 * @param {go2d.TouchEvent} event 触摸事件对象
								 */
								emit = true;
							}
							break;
						case 'touchend':
							if (touches[identifier]) {
								/**
								 * 触摸结束事件
								 * @event go2d.DisplayObject#touchend
								 * @param {go2d.TouchEvent} event 触摸事件对象
								 */
								emit = true;
								touches[identifier] = false;
							}
							break;
						case 'touchtap':
							if (inRect && touches[identifier] !== undefined) {
								/**
								 * 触摸点击事件
								 * @event go2d.DisplayObject#touchtap
								 * @param {go2d.TouchEvent} event 触摸事件对象
								 */
								emit = true;
							}
							delete touches[identifier];
							break;
					}
					if (emit) {
						var subEvent = new TouchEvent(type, subPos.x, subPos.y, event.globalX, event.globalY, identifier);
						child._onTouch(subEvent);
						propagationStopped = subEvent.isPropagationStopped();
						break;
					}
				}
			}
		}
		if (propagationStopped) {
			event.stopPropagation();
		} else {
			this.emit(type, event);
		}
	},
	_onAddedToStage: function(stage) {
		/**
		 * 添加到舞台事件
		 * @event go2d.DisplayObject#addedtostage
		 * @param {go2d.Stage} stage 舞台对象
		 */
		this.stage = stage;
		this.emit('addedtostage', stage);
		forEach(this._children, function(child) {
			child._onAddedToStage(stage);
		});
	},
	_onRemovedFromStage: function(stage) {
		/**
		 * 移除出舞台事件
		 * @event go2d.DisplayObject#removedfromstage
		 * @param {go2d.Stage} stage 舞台对象
		 */
		this.stage = null;
		this.emit('removedfromstage', stage);
		forEach(this._children, function(child) {
			child._onRemovedFromStage(stage);
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
		/**
		 * 宽高变化事件
		 * @event go2d.DisplayObject#resize
		 * @param {go2d.ResizeEvent} event 宽高变化事件对象
		 */
		this.emit('resize', event);
		if (!event.isDefaultPrevented()) {
			this.canvas.width = width;
			this.canvas.height = height;
			this.update();
		}
	},
	/**
	 * 渲染该对象
	 * @function go2d.DisplayObject#render
	 * @return {this}
	 */
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
			/**
			 * 开始渲染事件
			 * @event go2d.DisplayObject#render
			 * @param {go2d.Event} event 事件对象
			 */
			this.emit('render', event);
			if (!event.isDefaultPrevented()) {
				forEach(children, function(child) {
					if (child.visible && child.opacity) {
						var matrix = child.getTransform();
						child.render();
						ctx.globalAlpha = child.opacity;
						if (matrix.a === 1 && matrix.b === 0 && matrix.c === 0 && matrix.d === 1) {
							ctx.drawImage(child.canvas, matrix.tx, matrix.ty, child.width, child.height);
						} else {
							ctx.save();
							ctx.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
							ctx.drawImage(child.canvas, 0, 0, child.width, child.height);
							ctx.restore();
						}
					}
				});
			}
			/**
			 * 绘制完毕事件
			 * @event go2d.DisplayObject#paint
			 * @param {object} context 绘制上下文对象
			 */
			this.emit('paint', ctx);
			this._dirty = false;
		}
		return this;
	},
	/**
	 * 更新对象渲染状态，当该对象需要重新渲染时调用
	 * @function go2d.DisplayObject#update
	 * @return {this}
	 */
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
	/**
	 * 添加子对象
	 * @function go2d.DisplayObject#addChild
	 * @param {go2d.DisplayObject} child 要添加的子对象
	 * @return {this}
	 */
	addChild: function(child) {
		this.addChildAt(child);
		return this;
	},
	/**
	 * 在指定深度添加子对象
	 * @function go2d.DisplayObject#addChildAt
	 * @param {go2d.DisplayObject} child 要添加的子对象
	 * @param {number} index 深度，数值越小层级越低
	 * @return {this}
	 */
	addChildAt: function(child, index) {
		if (child.parent) {
			child.parent.removeChild(child);
		}
		child.parent = this;
		if (this.stage) {
			child._onAddedToStage(this.stage);
		}
		if (index === undefined || index < 0) {
			this._children.push(child);
		} else {
			this._children.splice(index, 0, child);
		}
		this.update();
		return this;
	},
	/**
	 * 获取指定名字的子对象
	 * @function go2d.DisplayObject#getChildByName
	 * @param {string} name 子对象名字
	 * @return {go2d.DisplayObject} 对应的子对象
	 */
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
	/**
	 * 获取指定标签的子对象
	 * @function go2d.DisplayObject#getChildrenByTag
	 * @param {string} tag 子对象标签
	 * @return {Array} 对应的子对象数组
	 */
	getChildrenByTag: function(tag) {
		var children = [];
		forEach(this._children, function(item) {
			if (item.tag === tag) {
				children.push(item);
			}
		});
		return children;
	},
	/**
	 * 获取指定深度的子对象
	 * @function go2d.DisplayObject#getChildAt
	 * @param {number} index 子对象深度
	 * @return {go2d.DisplayObject} 对应的子对象
	 */
	getChildAt: function(index) {
		return this._children[index];
	},
	/**
	 * 获取指定子对象的深度
	 * @function go2d.DisplayObject#getChildIndex
	 * @param {go2d.DisplayObject} child 对应的子对象
	 * @return {number} 子对象深度
	 */
	getChildIndex: function(child) {
		var index = -1;
		forEach(this._children, function(item, i) {
			if (item === child) {
				index = i;
			}
		});
		return index;
	},
	/**
	 * 交换两个子对象的深度
	 * @function go2d.DisplayObject#swapChildren
	 * @param {go2d.DisplayObject} child1 要交换的子对象一
	 * @param {go2d.DisplayObject} child2 要交换的子对象二
	 * @return {this}
	 */
	swapChildren: function(child1, child2) {
		var index1 = this.getChildIndex(child1);
		var index2 = this.getChildIndex(child2);
		if (index1 >= 0 && index2 >= 0) {
			this.swapChildrenAt(index1, index2);
		}
		return this;
	},
	/**
	 * 交换两个子对象的深度
	 * @function go2d.DisplayObject#swapChildrenAt
	 * @param {number} index1 要交换的子对象深度一
	 * @param {number} index2 要交换的子对象深度二
	 * @return {this}
	 */
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
	/**
	 * 排列子对象
	 * @function go2d.DisplayObject#sortChildren
	 * @param {function} compare 用于比较的函数
	 * @return {this}
	 */
	sortChildren: function(compare) {
		this._children.sort(compare);
		return this;
	},
	/**
	 * 获取所有子对象
	 * @function go2d.DisplayObject#getAllChildren
	 * @return {Array} 所有子对象数组
	 */
	getAllChildren: function() {
		return this._children;
	},
	/**
	 * 移除指定的子对象
	 * @function go2d.DisplayObject#removeChild
	 * @param {go2d.DisplayObject} child 对应的子对象
	 * @param {Boolean} cleanup 是否销毁子对象
	 * @return {this}
	 */
	removeChild: function(child, cleanup) {
		var children = this._children;
		for (var i = children.length - 1; i >= 0; --i) {
			if (children[i] === child) {
				this.removeChildAt(i, cleanup);
			}
		}
		return this;
	},
	/**
	 * 移除指定深度的子对象
	 * @function go2d.DisplayObject#removeChildAt
	 * @param {number} index 子对象的深度
	 * @param {Boolean} cleanup 是否销毁子对象
	 * @return {this}
	 */
	removeChildAt: function(index, cleanup) {
		var child = this._children.splice(index, 1)[0];
		if (child) {
			if (cleanup) {
				child.dispose();
			} else {
				child.parent = null;
				if (child.stage) {
					child._onRemovedFromStage(child.stage);
				}
			}
			this.update();
		}
		return this;
	},
	/**
	 * 移除指定名字的子对象
	 * @function go2d.DisplayObject#removeChildrenByName
	 * @param {string} name 子对象的名字
	 * @param {Boolean} cleanup 是否销毁子对象
	 * @return {this}
	 */
	removeChildrenByName: function(name, cleanup) {
		var children = this._children;
		for (var i = children.length - 1; i >= 0; --i) {
			if (children[i].name === name) {
				this.removeChildAt(i, cleanup);
				break;
			}
		}
		return this;
	},
	/**
	 * 移除指定标签的子对象
	 * @function go2d.DisplayObject#removeChildrenByTag
	 * @param {string} tag 子对象的标签
	 * @param {Boolean} cleanup 是否销毁子对象
	 * @return {this}
	 */
	removeChildrenByTag: function(tag, cleanup) {
		var children = this._children;
		for (var i = children.length - 1; i >= 0; --i) {
			if (children[i].tag === tag) {
				this.removeChildAt(i, cleanup);
			}
		}
		return this;
	},
	/**
	 * 移除所有子对象
	 * @function go2d.DisplayObject#removeAllChildren
	 * @param {Boolean} cleanup 是否销毁子对象
	 * @return {this}
	 */
	removeAllChildren: function(cleanup) {
		forEach(this._children, function(child) {
			child.parent = null;
			if (child.stage) {
				child._onRemovedFromStage(child.stage);
			}
			if (cleanup) {
				child.dispose();
			}
		});
		this._children = [];
		this.update();
		return this;
	},
	/**
	 * 开始该对象的帧播放
	 * @function go2d.DisplayObject#play
	 * @return {this}
	 */
	play: function() {
		this.paused = false;
		return this;
	},
	/**
	 * 暂停该对象的帧播放
	 * @function go2d.DisplayObject#pause
	 * @return {this}
	 */
	pause: function() {
		this.paused = true;
		return this;
	},
	/**
	 * 进入下一帧，该方法应只由引擎本身调用
	 * @function go2d.DisplayObject#tick
	 * @return {this}
	 */
	tick: function(deltaTime) {
		if (!this.paused) {
			forEach(this._children, function(child) {
				child.tick(deltaTime);
			});
			/**
			 * 步进（进入下一帧）事件
			 * @event go2d.DisplayObject#step
			 * @param {number} deltaTime 两帧时间差
			 */
			this.emit('step', deltaTime);
		}
		return this;
	},
	/**
	 * 释放对象内存
	 * @function go2d.DisplayObject#dispose
	 */
	dispose: function() {
		if (this.parent) {
			this.parent.removeChild(this);
		}
		this.removeAllChildren(true);
		this._super();
	}
});
