/**
 * Scroll View
 */
var ScrollView = go2d.ScrollView = Sprite.extend({
	__init: function(content) {
		this._super();
		this._content = null;
		this._scrollPos = {
			top: 0,
			left: 0
		};
		this._initTouch();
		this.setContent(content);
		this.on('render', this._onRender);

		Object.defineProperty(this, 'scrollTop', {
			set: function(scrollTop) {
				this._onScroll(scrollTop, this.scrollLeft);
			},
			get: function() {
				return this._scrollPos.top;
			}
		});

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
		var content = this.getContent();
		if (content) {
			var newPos = {
				top: Math.max(0, Math.min(scrollTop, content.height - this.height)),
				left: Math.max(0, Math.min(scrollLeft, content.width - this.width))
			};
			var event = new Event('scroll', this._scrollPos, newPos);
			this.emit('scroll', event);
			if (!event.isDefaultPrevented()) {
				this._scrollPos = newPos;
				this.update();
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
	setContent: function(content) {
		this.removeContent();
		if (content) {
			this._children[0] = content;
		}
	},
	getContent: function() {
		return this._children[0];
	},
	removeContent: function(cleanup) {
		var content = this.getContent();
		if (content) {
			content.parent = null;
			if (cleanup) {
				content.dispose();
			}
			this._children = [];
		}
	},
	addChildAt: function(child) {
		this.setContent(child);
		console.warn('NotSupportError: Please use `setConent` instead.');
	},
	removeChildAt: function(index, cleanup) {
		this.removeContent(cleanup);
		console.warn('NotSupportError: Please use `removeConent` instead.');
	},
	removeAllChildren: function(cleanup) {
		this.removeContent(cleanup);
	}
});
