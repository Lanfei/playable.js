/**
 * 滑动视图类，可以在该视图中显示超过视图大小的显示对象，并可以通过滑动来显示内容视图的不同部分。
 * @author Lanfei
 * @class ScrollView
 * @extends Sprite
 * @todo 嵌套优化
 * @todo touchcancel
 *
 * @constructor
 * @param {Sprite} content 滚动视图的内容对象
 */
var ScrollView = go2d.ScrollView = Sprite.extend({
	__init: function(content) {
		this._super();

		/**
		 * 内容对象
		 * @protected
		 * @property _content
		 * @type Sprite
		 */
		this._content = null;
		this._scrollPos = new Vector();
		this._initTouchEvent();
		this.setContent(content);

		/**
		 * 纵向滑动距离
		 * @property scrollTop
		 * @type number
		 * @default 0
		 */
		Object.defineProperty(this, 'scrollTop', {
			set: function(scrollTop) {
				this.scrollTo(this.scrollLeft, scrollTop);
			},
			get: function() {
				return this._scrollPos.y;
			}
		});

		/**
		 * 横向滑动距离
		 * @property scrollLeft
		 * @type number
		 * @default 0
		 */
		Object.defineProperty(this, 'scrollLeft', {
			set: function(scrollLeft) {
				this.scrollTo(scrollLeft, this.scrollTop);
			},
			get: function() {
				return this._scrollPos.x;
			}
		});
	},
	_initTouchEvent: function() {
		var speed,
			prevTime,
			prevTouch,
			friction = 0.9;
		this.on({
			touchmove: function(e) {
				var now = +new Date();
				if (prevTime) {
					var offsetX = prevTouch.x - e.globalX,
						offsetY = prevTouch.y - e.globalY,
						offsetTime = now - prevTime;
					this.scrollBy(offsetX, offsetY);
					speed = new Vector(offsetX / offsetTime, offsetY / offsetTime);
				}
				prevTime = now;
				prevTouch = new Vector(e.globalX, e.globalY);
			},
			touchend: function() {
				prevTime = prevTouch = null;
			},
			step: function(deltaTime) {
				if (speed && !prevTime) {
					var offsetX = speed.x * deltaTime,
						offsetY = speed.y * deltaTime;
					speed.x *= friction;
					speed.y *= friction;
					this.scrollBy(offsetX, offsetY);
					if (Math.sqrt(offsetX * offsetX + offsetY * offsetY) < 1) {
						speed = null;
					}
				}
			}
		});
	},
	getChildTransform: function(child) {
		return child.getTransform().translate(this._scrollPos.clone().negate());
	},
	/**
	 * 在原有基础上滑动指定距离
	 * @function scrollBy
	 * @param {number} x 水平滑动距离
	 * @param {number} y 垂直滑动距离
	 * @return {this}
	 */
	scrollBy: function(x, y) {
		return this.scrollTo(this.scrollLeft + x, this.scrollTop + y);
	},
	/**
	 * 设置滑动距离
	 * @function scrollTo
	 * @param {number} x 水平滑动距离
	 * @param {number} y 垂直滑动距离
	 * @return {this}
	 */
	scrollTo: function(x, y) {
		var content = this.getContent();
		if (!content) {
			return;
		}

		var oldTop = this._scrollPos.y,
			oldLeft = this._scrollPos.x,
			newTop = Math.max(0, Math.min(Math.round(y), content.height - this.height)),
			newLeft = Math.max(0, Math.min(Math.round(x), content.width - this.width));
		if (newTop === oldTop && newLeft === oldLeft) {
			return;
		}

		/**
		 * 滑动距离变化事件
		 * @event scroll
		 * @param {ScrollEvent} event 滑动距离变化事件对象
		 */
		var event = new ScrollEvent({
			top: oldTop,
			left: oldLeft
		}, {
			top: newTop,
			left: newLeft
		});
		this.emit('scroll', event);
		if (!event.isDefaultPrevented()) {
			this._scrollPos.y = newTop;
			this._scrollPos.x = newLeft;
			this.update();
		}
		return this;
	},
	/**
	 * 设置滚动视图的内容对象
	 * @function setContent
	 * @param {Sprite} content 滚动视图的内容对象
	 * @return {this}
	 */
	setContent: function(content) {
		this.removeContent();
		if (content) {
			this._super.addChildAt.call(this, content);
		}
		return this;
	},
	/**
	 * 获取滚动视图的内容对象
	 * @function getContent
	 * @return {Sprite} content 滚动视图的内容对象
	 */
	getContent: function() {
		return this.getChildAt(0);
	},
	/**
	 * 移除滚动视图的内容对象
	 * @function removeContent
	 * @param {Boolean} cleanup 是否销毁内容对象
	 * @return {this}
	 */
	removeContent: function(cleanup) {
		this._super.removeAllChildren.call(this, cleanup);
		return this;
	},
	addChildAt: function(child) {
		this.setContent(child);
		console.error('NotSupportError: Please use `setConent` instead.');
		return this;
	},
	removeChildAt: function(index, cleanup) {
		this.removeContent(cleanup);
		console.error('NotSupportError: Please use `removeConent` instead.');
		return this;
	},
	removeAllChildren: function(cleanup) {
		this.removeContent(cleanup);
		console.error('NotSupportError: Please use `removeConent` instead.');
		return this;
	}
});