/**
 * 滑动视图类，可以在该视图中显示超过视图大小的显示对象，并可以通过滑动来显示内容视图的不同部分。
 * @author Lanfei
 * @class go2d.ScrollView
 * @extends go2d.Sprite
 * @param {Sprite} content 滚动视图的内容对象
 * @待优化重构
 */
var ScrollView = go2d.ScrollView = Sprite.extend({
	__init: function(content) {
		this._super();

		/**
		 * 内容对象
		 * @private
		 * @member go2d.ScrollView#_content
		 * @type go2d.Sprite
		 */
		this._content = null;
		this._scrollPos = {
			top: 0,
			left: 0
		};
		this._initTouch();
		this.setContent(content);
		this.on('render', this._onRender);

		/**
		 * 纵向滑动距离
		 * @member go2d.ScrollView#scrollTop
		 * @type number
		 * @default 0
		 */
		Object.defineProperty(this, 'scrollTop', {
			set: function(scrollTop) {
				this._onScroll(scrollTop, this.scrollLeft);
			},
			get: function() {
				return this._scrollPos.top;
			}
		});

		/**
		 * 横向滑动距离
		 * @member go2d.ScrollView#scrollLeft
		 * @type number
		 * @default 0
		 */
		Object.defineProperty(this, 'scrollLeft', {
			set: function(scrollLeft) {
				this._onScroll(this.scrollTop, scrollLeft);
			},
			get: function() {
				return this._scrollPos.left;
			}
		});
	},
	_initTouch: function() {
		var beginPos, beginTouch, prevTouch, prevTime, speed;
		this.on({
			touchstart: function(e) {
				beginPos = {
					top: this.scrollTop,
					left: this.scrollLeft
				};
				prevTime = +new Date();
				beginTouch = prevTouch = e;
			},
			touchmove: function(e) {
				var offsetTime = +new Date() - prevTime;
				var scrollTop = this.scrollTop = beginPos.top - e.y + beginTouch.y;
				var scrollLeft = this.scrollLeft = beginPos.left - e.x + beginTouch.x;
				speed = {
					top: (e.y - prevTouch.y) / offsetTime,
					left: (e.x - prevTouch.x) / offsetTime
				};
				prevTime = +new Date();
				prevTouch = e;
				if (this.scrollTop !== scrollTop || this.scrollLeft !== scrollLeft) {
					e.stopPropagation();
				}
			},
			touchend: function(e) {
				beginPos = beginTouch = prevTouch = prevTime = null;
			},
			step: function(deltaTime) {
				if (!beginPos && speed) {
					var friction = 0.9;
					var minOffset = 1;
					var prevTop = this.scrollTop;
					var prevLeft = this.scrollLeft;
					var offsetTop = (speed.top *= friction) * deltaTime;
					var offsetLeft = (speed.left *= friction) * deltaTime;
					this.scrollTop -= offsetTop;
					this.scrollLeft -= offsetLeft;
					if (Math.sqrt(offsetTop * offsetTop + offsetLeft * offsetLeft) < minOffset) {
						speed = null;
					}
				}
			}
		});
	},
	_onScroll: function(scrollTop, scrollLeft) {
		var content = this.getContent(),
			scrollPos = this._scrollPos;
		if (content) {
			var newPos = {
				top: Math.max(0, Math.min(scrollTop, content.height - this.height)),
				left: Math.max(0, Math.min(scrollLeft, content.width - this.width))
			};
			if (newPos.top !== scrollPos.top || newPos.left !== scrollPos.left) {
				/**
				 * 触摸移动事件
				 * @event go2d.ScrollView#scroll
				 */
				var event = new Event('scroll', scrollPos, newPos);
				this.emit('scroll', event);
				if (!event.isDefaultPrevented()) {
					this._scrollPos = newPos;
					this.update();
				}
			}
		}
	},
	_onRender: function() {
		var ctx = this.context,
			children = this._children;
		if (this.background) {
			ctx.save();
			ctx.fillStyle = this.background;
			ctx.fillRect(0, 0, this.width, this.height);
			ctx.restore();
		} else {
			ctx.clearRect(0, 0, this.width, this.height);
		}
		forEach(children, function(child) {
			if (child.visible) {
				var matrix = child.getTransform();
				child.render();
				ctx.save();
				ctx.globalAlpha = child.opacity;
				ctx.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx - this.scrollLeft, matrix.ty - this.scrollTop);
				ctx.drawImage(child.canvas, 0, 0, child.width, child.height);
				ctx.restore();
			}
		}, this);
		return false;
	},
	/**
	 * 设置滚动视图的内容对象
	 * @function go2d.ScrollView#setContent
	 * @param {Sprite} content 滚动视图的内容对象
	 * @return {this}
	 */
	setContent: function(content) {
		this.removeContent();
		if (content) {
			this._children[0] = content;
		}
		return this;
	},
	/**
	 * 获取滚动视图的内容对象
	 * @function go2d.ScrollView#getContent
	 * @return {Sprite} content 滚动视图的内容对象
	 */
	getContent: function() {
		return this._children[0];
	},
	/**
	 * 移除滚动视图的内容对象
	 * @function go2d.ScrollView#removeContent
	 * @param {Boolean} cleanup 是否销毁内容对象
	 * @return {this}
	 */
	removeContent: function(cleanup) {
		var content = this.getContent();
		if (content) {
			content.parent = null;
			if (cleanup) {
				content.dispose();
			}
			this._children = [];
		}
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
