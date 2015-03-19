/**
 * 显示对象基类，实现了显示对象的基本渲染和事件逻辑，显示对象元素类和舞台类都基于此类。
 * @author Lanfei
 * @class DisplayObject
 * @extends EventEmitter
 *
 * @constructor
 * @param {object} canvas 用于渲染的画布对象
 */
var DisplayObject = go2d.DisplayObject = EventEmitter.extend({
	__init: function(canvas) {
		this._super();

		/**
		 * 用于渲染的画布对象
		 * @readonly
		 * @property canvas
		 * @type object
		 */
		this.canvas = canvas || document.createElement('canvas');

		/**
		 * 画布的上下文对象
		 * @readonly
		 * @property context
		 * @type object
		 */
		this.context = this.canvas.getContext('2d');

		/**
		 * 用于标识该对象的名字，该属性在兄弟对象中应该唯一
		 * @property name
		 * @type string
		 */
		this.name = '';

		/**
		 * 用于标识该对象的标签
		 * @property tag
		 * @type string
		 */
		this.tag = '';

		/**
		 * 该对象所属的舞台对象
		 * @readonly
		 * @property stage
		 * @type Stage
		 */
		this.stage = null;

		/**
		 * 是否已暂停
		 * @property paused
		 * @type Boolean
		 * @default false
		 */
		this.paused = false;

		/**
		 * 是否可点击
		 * @property touchable
		 * @type Boolean
		 * @default true
		 */
		this.touchable = true;

		/**
		 * 子节点是否可点击
		 * @property touchChildren
		 * @type Boolean
		 * @default true
		 */
		this.touchChildren = true;

		/**
		 * 是否需要重新渲染
		 * @protected
		 * @property _dirty
		 * @type Boolean
		 * @default true
		 */
		this._dirty = true;

		/**
		 * 触摸标识数组
		 * @protected
		 * @property _touches
		 * @type Array
		 */
		this._touches = [];

		/**
		 * 子对象数组
		 * @protected
		 * @property _children
		 * @type Array
		 */
		this._children = [];

		/**
		 * 遮罩层
		 * @property mask
		 * @type Sprite
		 */
		this._mask = null;

		var properties = {

			/**
			 * 水平方向锚点偏移比例
			 * @property anchorX
			 * @type number
			 * @default 0
			 */
			anchorX: 0,

			/**
			 * 垂直方向锚点偏移比例
			 * @property anchorY
			 * @type number
			 * @default 0
			 */
			anchorY: 0,

			/**
			 * 水平方向锚点偏移像素
			 * @property anchorOffsetX
			 * @type number
			 * @default 0
			 */
			anchorOffsetX: 0,

			/**
			 * 垂直方向锚点偏移像素
			 * @property anchorOffsetY
			 * @type number
			 * @default 0
			 */
			anchorOffsetY: 0,

			/**
			 * 不透明度
			 * @property opacity
			 * @type number
			 * @default 1
			 */
			opacity: 1,

			/**
			 * 背景颜色或样式
			 * @property background
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
						this.update();
					}
				},
				get: function() {
					return properties[key];
				}
			});
		}, this);

		/**
		 * 宽度
		 * @property width
		 * @type number
		 */
		Object.defineProperty(this, 'width', {
			set: function(width) {
				this.resize(width, this.canvas.height);
			},
			get: function() {
				return this.canvas.width;
			}
		});

		/**
		 * 高度
		 * @property height
		 * @type number
		 */
		Object.defineProperty(this, 'height', {
			set: function(height) {
				this.resize(this.canvas.width, height);
			},
			get: function() {
				return this.canvas.height;
			}
		});

		Director.getInstance().on('tick', this._tick, this);
	},
	/**
	 * 进入下一帧，该方法应只由引擎本身调用
	 * @function _tick
	 * @return {this}
	 */
	_tick: function(deltaTime) {
		if (!this.paused) {
			/**
			 * 步进（进入下一帧）事件
			 * @event step
			 * @param {number} deltaTime 两帧时间差
			 */
			this.emit('step', deltaTime);
		}
		return this;
	},
	/**
	 * 绘制子对象
	 * @protected
	 * @function _drawChild
	 * @param {Sprite} child 要绘制的对象
	 * @param {string} [blendMode] 混合模式
	 * @return {this}
	 */
	_drawChild: function(child, blendMode) {
		var ctx = this.context,
			matrix = this.getChildTransform(child);

		child.render();

		ctx.globalAlpha = child.opacity;
		ctx.globalCompositeOperation = blendMode || child.blendMode;

		if (matrix.a === 1 && matrix.b === 0 && matrix.c === 0 && matrix.d === 1) {
			ctx.drawImage(child.canvas, matrix.tx, matrix.ty, child.width, child.height);
		} else {
			ctx.save();
			ctx.transform.apply(ctx, matrix.toArray());
			ctx.drawImage(child.canvas, 0, 0, child.width, child.height);
			ctx.restore();
		}
	},
	/**
	 * 渲染该对象
	 * @function render
	 * @return {this}
	 */
	render: function() {
		if (this._dirty) {
			var ctx = this.context,
				children = this._children,
				event = new Event('render'),
				anchor = this.getAnchor();
			ctx.setTransform(1, 0, 0, 1, anchor.x, anchor.y);
			ctx.clearRect(-anchor.x, -anchor.y, this.width, this.height);
			ctx.beginPath();
			if (this.background) {
				ctx.save();
				ctx.fillStyle = this.background;
				ctx.fillRect(-anchor.x, -anchor.y, this.width, this.height);
				ctx.restore();
			}
			/**
			 * 开始渲染事件
			 * @event render
			 * @param {Event} event 事件对象
			 */
			this.emit('render', event);
			if (!event.isDefaultPrevented()) {
				forEach(children, function(child) {
					if (child.visible && child.opacity) {
						this._drawChild(child);
					}
				}, this);
				if (this._mask) {
					this._drawChild(this._mask, 'destination-in');
				}
			}
			this._dirty = false;
			/**
			 * 绘制完毕事件
			 * @event paint
			 * @param {object} context 绘制上下文对象
			 */
			this.emit('paint', ctx);
		}
		return this;
	},
	/**
	 * 触发触摸事件，不建议外部调用
	 * @function touch
	 * @param  {TouchEvent} event 触摸事件对象
	 * @return {Boolean} 是否成功触发事件
	 */
	touch: function(event) {
		if (!this.touchable) {
			return;
		}
		var emit = false,
			type = event.type,
			touches = this._touches,
			identifier = event.identifier,
			touchPos = new Vector(event.x, event.y),
			offsetPos = touchPos.clone().add(this.getAnchor()),
			inRect = offsetPos.x >= 0 && offsetPos.y >= 0 && offsetPos.x <= this.width && offsetPos.y <= this.height;

		switch (type) {
			case 'touchstart':
				if (inRect) {
					/**
					 * 触摸开始事件
					 * @event touchstart
					 * @param {TouchEvent} event 触摸事件对象
					 */
					emit = true;
					touches[identifier] = true;
				}
				break;
			case 'touchmove':
				if (touches[identifier]) {
					/**
					 * 触摸移动事件
					 * @event touchmove
					 * @param {TouchEvent} event 触摸事件对象
					 */
					emit = true;
				}
				break;
			case 'touchend':
				if (touches[identifier]) {
					/**
					 * 触摸结束事件
					 * @event touchend
					 * @param {TouchEvent} event 触摸事件对象
					 */
					emit = true;
					touches[identifier] = false;
				}
				break;
			case 'touchtap':
				if (inRect && touches[identifier] !== undefined) {
					/**
					 * 触摸点击事件
					 * @event touchtap
					 * @param {TouchEvent} event 触摸事件对象
					 */
					emit = true;
				}
				delete touches[identifier];
				break;
		}

		if (emit) {
			var children = this._children,
				propagationStopped = false;
			for (var i = children.length - 1; i >= 0; --i) {
				var child = children[i];
				if (child.visible && child.touchable) {
					var subLocalPos = this.getChildTransform(child).invert().multiply(touchPos),
						subPos = subLocalPos.clone().subtract(child.getAnchor()),
						subEvent = new TouchEvent(
							type,
							Math.round(subPos.x), Math.round(subPos.y),
							Math.round(subLocalPos.x), Math.round(subLocalPos.y),
							event.stageX, event.stageY,
							event.globalX, event.globalY,
							identifier
						);
					if (child.touch(subEvent)) {
						propagationStopped = subEvent.isPropagationStopped();
						break;
					}
				}
			}
			if (propagationStopped) {
				event.stopPropagation();
			} else {
				this.emit(type, event);
			}
			return true;
		}
		return false;
	},
	/**
	 * 触发添加到舞台事件，不建议外部调用
	 * @function addedToStage
	 * @param {Stage} stage 舞台对象
	 */
	addedToStage: function(stage) {
		/**
		 * 添加到舞台事件
		 * @event addedtostage
		 * @param {Stage} stage 舞台对象
		 */
		this.stage = stage;
		this.emit('addedtostage', stage);
		forEach(this._children, function(child) {
			child.addedToStage(stage);
		});
	},
	/**
	 * 触发移除出舞台事件，不建议外部调用
	 * @function removedFromStage
	 * @param {Stage} stage 舞台对象
	 */
	removedFromStage: function(stage) {
		/**
		 * 移除出舞台事件
		 * @event removedfromstage
		 * @param {Stage} stage 舞台对象
		 */
		this.stage = null;
		this.emit('removedfromstage', stage);
		forEach(this._children, function(child) {
			child.removedFromStage(stage);
		});
	},
	/**
	 * 设置对象大小
	 * @function resize
	 * @param {number} width 宽度
	 * @param {number} height 高度
	 * @return {this}
	 */
	resize: function(width, height) {
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
		 * @event resize
		 * @param {ResizeEvent} event 宽高变化事件对象
		 */
		this.emit('resize', event);
		if (!event.isDefaultPrevented()) {
			this.canvas.width = width;
			this.canvas.height = height;
			this.update();
		}
		return this;
	},
	/**
	 * 获取锚点偏移
	 * @function getAnchor
	 * @return {Object} 锚点锚点偏移
	 */
	getAnchor: function() {
		return new Vector(
			this.anchorOffsetX + this.anchorX * this.width,
			this.anchorOffsetY + this.anchorY * this.height
		);
	},
	/**
	 * 更新对象渲染状态，当对象的属性改变将影响其渲染结果时调用
	 * @function update
	 * @return {this}
	 */
	update: function() {
		this._dirty = true;
		this.updateParent();
		return this;
	},
	/**
	 * 更新父对象渲染状态，某些情况下，对象属性的改变并不影响本身的渲染，而只影响父元素的渲染，此时只需重新渲染父对象即可
	 * @function update
	 * @return {this}
	 */
	updateParent: function() {
		if (this.parent) {
			this.parent.update();
		}
		return this;
	},
	/**
	 * 获取子对象变换矩阵
	 * @param  {Sprite} child 子对象
	 * @return {Matrix} 子对象变换矩阵
	 */
	getChildTransform: function(child) {
		return child.getTransform();
	},
	/**
	 * 添加子对象
	 * @function addChild
	 * @param {DisplayObject} child 要添加的子对象
	 * @return {this}
	 */
	addChild: function(child) {
		this.addChildAt(child);
		return this;
	},
	/**
	 * 在指定深度添加子对象
	 * @function addChildAt
	 * @param {DisplayObject} child 要添加的子对象
	 * @param {number} index 深度，数值越小层级越低
	 * @return {this}
	 */
	addChildAt: function(child, index) {
		if (child.parent) {
			if (child.parent.getMask() === child) {
				child.parent.removeMask();
			} else {
				child.parent.removeChild(child);
			}
		}
		child.parent = this;
		if (this.stage) {
			child.addedToStage(this.stage);
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
	 * @function getChildByName
	 * @param {string} name 子对象名字
	 * @return {DisplayObject} 对应的子对象
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
	 * @function getChildrenByTag
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
	 * @function getChildAt
	 * @param {number} index 子对象深度
	 * @return {DisplayObject} 对应的子对象
	 */
	getChildAt: function(index) {
		return this._children[index];
	},
	/**
	 * 获取指定子对象的深度
	 * @function getChildIndex
	 * @param {DisplayObject} child 对应的子对象
	 * @return {number} 子对象深度
	 */
	getChildIndex: function(child) {
		return this._children.indexOf(child);
	},
	/**
	 * 交换两个子对象的深度
	 * @function swapChildren
	 * @param {DisplayObject} child1 要交换的子对象一
	 * @param {DisplayObject} child2 要交换的子对象二
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
	 * @function swapChildrenAt
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
	 * @function sortChildren
	 * @param {function} compare 用于比较的函数
	 * @return {this}
	 */
	sortChildren: function(compare) {
		this._children.sort(compare);
		return this;
	},
	/**
	 * 获取所有子对象
	 * @function getAllChildren
	 * @return {Array} 所有子对象数组
	 */
	getAllChildren: function() {
		return this._children;
	},
	/**
	 * 移除指定的子对象
	 * @function removeChild
	 * @param {DisplayObject} child 对应的子对象
	 * @param {Boolean} cleanup 是否销毁子对象
	 * @return {this}
	 */
	removeChild: function(child, cleanup) {
		this.removeChildAt(this.getChildIndex(child), cleanup);
		return this;
	},
	/**
	 * 移除指定深度的子对象
	 * @function removeChildAt
	 * @param {number} index 子对象的深度
	 * @param {Boolean} cleanup 是否销毁子对象
	 * @return {this}
	 */
	removeChildAt: function(index, cleanup) {
		if (index >= 0) {
			var child = this._children.splice(index, 1)[0];
			if (child) {
				if (cleanup) {
					child.dispose();
				} else {
					child.parent = null;
					if (child.stage) {
						child.removedFromStage(child.stage);
					}
				}
				this.update();
			}
		}
		return this;
	},
	/**
	 * 移除指定名字的子对象
	 * @function removeChildrenByName
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
	 * @function removeChildrenByTag
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
	 * @function removeAllChildren
	 * @param {Boolean} cleanup 是否销毁子对象
	 * @return {this}
	 */
	removeAllChildren: function(cleanup) {
		forEach(this._children, function(child) {
			child.parent = null;
			if (child.stage) {
				child.removedFromStage(child.stage);
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
	 * 设置遮罩对象
	 * @function setMask
	 * @param {Sprite} mask 遮罩对象
	 * @return {this}
	 */
	setMask: function(mask) {
		if (!mask) {
			this.removeMask();
		}
		if (mask.parent) {
			if (mask.parent.getMask() === mask) {
				mask.parent.removeMask();
			} else {
				mask.parent.removeChild(mask);
			}
		}
		mask.parent = this;
		if (this.stage) {
			mask.addedToStage(this.stage);
		}
		this._mask = mask;
		this.update();
		return this;
	},
	/**
	 * 获取遮罩对象
	 * @function getMask
	 * @return {Sprite}
	 */
	getMask: function() {
		return this._mask;
	},
	/**
	 * 移除遮罩对象
	 * @function removeMask
	 * @param {Boolean} cleanup 是否销毁遮罩对象
	 * @return {this}
	 */
	removeMask: function(cleanup) {
		var mask = this._mask;
		mask.parent = null;
		if (cleanup) {
			mask.dispose();
		}
		this._mask = null;
		this.update();
	},
	/**
	 * 开始该对象的帧播放
	 * @function play
	 * @return {this}
	 */
	play: function() {
		this.paused = false;
		return this;
	},
	/**
	 * 暂停该对象的帧播放
	 * @function pause
	 * @return {this}
	 */
	pause: function() {
		this.paused = true;
		return this;
	},
	/**
	 * 释放对象内存
	 * @function dispose
	 */
	dispose: function() {
		this.removeAllChildren(true);

		if (this.parent) {
			this.parent.removeChild(this);
		}

		Director.getInstance().off('tick', this._tick, this);

		this._super();
	}
});