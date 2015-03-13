/**
 * 资源加载器类，可用于加载和管理游戏资源。
 * @author Lanfei
 * @class ResourceLoader
 * @extends EventDispatcher
 * 
 * @constructor
 * @param {Object} resources 资源路径数据对象，格式如下：
 * @param {Object} [options] 配置参数
 * @param {Object} [options.retryTimes=3] 失败重试次数
 * @example
 * <pre><code>
 * new ResourceLoader({
 *     text: {
 *         name1: url1,
 *         name2: url2
 *         // ...
 *     },
 *     image: {
 *         name1: url1,
 *         name2: url2
 *         // ...
 *     }
 *     // ...
 * });
 * </code></pre>
 */
var ResourceLoader = go2d.ResourceLoader = EventDispatcher.extend({
	__init: function(resources, options) {
		options = options || {};
		this._super();

		/**
		 * 缓存的资源对象
		 * @protected
		 * @property _cache
		 * @type {Object}
		 */
		this._cache = {};

		/**
		 * 资源路径数据对象
		 * @protected
		 * @property _resources
		 * @type {Object}
		 */
		this._resources = resources;

		/**
		 * 资源总数
		 * @readonly
		 * @property total
		 * @type {number}
		 */
		this.total = 0;

		/**
		 * 加载失败资源数量
		 * @readonly
		 * @property errorCount
		 * @type {number}
		 */
		this.errorCount = 0;

		/**
		 * 加载完成资源数量
		 * @readonly
		 * @property loadedCount
		 * @type {number}
		 */
		this.loadedCount = 0;

		/**
		 * 失败重试次数
		 * @property retryTimes
		 * @type {number}
		 * @default 3
		 */
		this.retryTimes = options.retryTimes === undefined ? 3 : options.retryTimes;
	},
	_request: function(type, name, url, retryTimes) {
		var errorHandler,
			that = this;

		if (retryTimes < this.retryTimes) {
			errorHandler = function() {
				that._request(type, name, url, retryTimes + 1);
			};
		} else {
			errorHandler = function() {
				that._onError(name);
			};
		}

		switch (type) {
			case ResourceLoader.TYPE_IMAGE:
				var image = new Image();
				image.addEventListener('load', function() {
					that._onLoad();
				});
				image.addEventListener('error', errorHandler);
				image.src = url;
				this._save(type, name, image);
				break;
			case ResourceLoader.TYPE_AUDIO:
				var audio = document.createElement('audio');
				// TODO (iOS)
				audio.addEventListener('canplay', function() {
					that._onLoad();
				});
				audio.addEventListener('error', errorHandler);
				audio.src = url;
				this._save(type, name, audio);
				if ('ontouchend' in document) {
					var playing = false;
					var fnPlay = audio.play;
					var fnPause = audio.pause;
					audio.play = function() {
						playing = true;
						fnPlay.call(this);
					};
					audio.pause = function() {
						playing = false;
						fnPause.call(this);
					};
					document.addEventListener('touchstart', function() {
						if (playing) {
							audio.play();
						} else {
							audio.play();
							audio.pause();
						}
						document.removeEventListener('touchstart', arguments.callee, true);
					}, true);
				}
				break;
			case ResourceLoader.TYPE_XML:
			case ResourceLoader.TYPE_JSON:
			case ResourceLoader.TYPE_TEXT:
			default:
				var urlRequest = new URLRequest(url, {
					dataType: type,
					responseType: type === 'binary' ? 'arraybuffer' : ''
				});
				urlRequest.on('success', function(response) {
					that._save(type, name, response);
					that._onLoad();
				});
				urlRequest.on('error', errorHandler);
				urlRequest.send();
		}
	},
	_save: function(type, name, resource) {
		this._cache[type] = this._cache[type] || {};
		this._cache[type][name] = resource;
	},
	_onLoad: function() {
		/**
		 * 加载进度事件
		 * @event progress
		 * @param {number} loadedCount 已加载数量
		 * @param {number} total 总数量
		 */
		this.emit('progress', ++this.loadedCount, this.total);
		this._checkStatus();
	},
	_onError: function(name) {
		++this.errorCount;
		/**
		 * 加载错误事件
		 * @event error
		 * @param {string} name 加载出错资源名称
		 */
		this.emit('error', name);
		this._checkStatus();
	},
	_checkStatus: function() {
		if (this.loadedCount === this.total) {
			/**
			 * 加载完全事件
			 * @event complete
			 */
			this.emit('complete');
		}
		if (this.loadedCount + this.errorCount === this.total) {
			/**
			 * 加载完毕事件
			 * @event finish
			 */
			this.emit('finish');
		}
	},
	/**
	 * 开始加载资源
	 * @function load
	 * @return {this}
	 */
	load: function() {
		var that = this,
			data = this._resources;
		forEach(data, function(list, type) {
			forEach(list, function(url, name) {
				++that.total;
				that._request(type, name, url);
			});
		});
		return this;
	},
	/**
	 * 获取资源对象
	 * @function get
	 * @param {string} type 资源类型
	 * @param {string} name 资源名称
	 * @return {Object} 对应的资源对象
	 */
	get: function(type, name) {
		if (this._cache[type]) {
			return this._cache[type][name];
		}
	},
	/**
	 * 获取 XML 资源
	 * @function getXML
	 * @param {string} name 资源名称
	 * @return {Object} 对应的资源对象
	 */
	getXML: function(name) {
		return this.get(ResourceLoader.TYPE_XML, name);
	},
	/**
	 * 获取 JSON 资源
	 * @function getJSON
	 * @param {string} name 资源名称
	 * @return {Object} 对应的资源对象
	 */
	getJSON: function(name) {
		return this.get(ResourceLoader.TYPE_JSON, name);
	},
	/**
	 * 获取文本资源
	 * @function getText
	 * @param {string} name 资源名称
	 * @return {Object} 对应的资源对象
	 */
	getText: function(name) {
		return this.get(ResourceLoader.TYPE_TEXT, name);
	},
	/**
	 * 获取图像资源
	 * @function getImage
	 * @param {string} name 资源名称
	 * @return {Object} 对应的资源对象
	 */
	getImage: function(name) {
		return this.get(ResourceLoader.TYPE_IMAGE, name);
	},
	/**
	 * 获取音频资源
	 * @function getAudio
	 * @param {string} name 资源名称
	 * @return {Object} 对应的资源对象
	 */
	getAudio: function(name) {
		return this.get(ResourceLoader.TYPE_AUDIO, name);
	},
	/**
	 * 获取二进制资源
	 * @function getBinary
	 * @param {string} name 资源名称
	 * @return {Object} 对应的资源对象
	 */
	getBinary: function(name) {
		return this.get(ResourceLoader.TYPE_BINARY, name);
	},
	/**
	 * 移除资源
	 * @function destroy
	 * @param {string} [type] 资源类型，为空时移除所有资源
	 * @param {string} [name] 资源名称，为空时移除所有指定类型资源
	 * @return {this}
	 */
	destroy: function(type, name) {
		if (type === undefined) {
			this._cache = {};
		} else if (name === undefined) {
			delete this._cache[type];
		} else if (this._cache[type]) {
			delete this._cache[type][name];
		}
		return this;
	},
	/**
	 * 移除 XML 资源
	 * @function destroyXML
	 * @param {string} name 资源名称
	 * @return {this}
	 */
	destroyXML: function(name) {
		return this.destroy(ResourceLoader.TYPE_XML, name);
	},
	/**
	 * 移除 JSON 资源
	 * @function destroyJSON
	 * @param {string} name 资源名称
	 * @return {this}
	 */
	destroyJSON: function(name) {
		return this.destroy(ResourceLoader.TYPE_JSON, name);
	},
	/**
	 * 移除文本资源
	 * @function destroyText
	 * @param {string} name 资源名称
	 * @return {this}
	 */
	destroyText: function(name) {
		return this.destroy(ResourceLoader.TYPE_TEXT, name);
	},
	/**
	 * 移除图像资源
	 * @function destroyImage
	 * @param {string} name 资源名称
	 * @return {this}
	 */
	destroyImage: function(name) {
		return this.destroy(ResourceLoader.TYPE_IMAGE, name);
	},
	/**
	 * 移除音频资源
	 * @function destroyAudio
	 * @param {string} name 资源名称
	 * @return {this}
	 */
	destroyAudio: function(name) {
		return this.destroy(ResourceLoader.TYPE_AUDIO, name);
	},
	/**
	 * 移除二进制资源
	 * @function destroyBinary
	 * @param {string} name 资源名称
	 * @return {this}
	 */
	destroyBinary: function(name) {
		return this.destroy(ResourceLoader.TYPE_BINARY, name);
	},
	/**
	 * 移除所有资源
	 * @function destroyAll
	 * @return {this}
	 */
	destroyAll: function() {
		this._cache = {};
		return this;
	},
	/**
	 * 释放加载器内存
	 * @function dispose
	 */
	dispose: function() {
		this._resources = null;
		this._super();
	}
}, {
	
	/**
	 * XML 数据
	 * @static
	 * @final
	 * @property TYPE_XML
	 * @type {string}
	 * @default xml
	 */
	TYPE_XML: 'xml',
	
	/**
	 * JSON 数据
	 * @static
	 * @final
	 * @property TYPE_JSON
	 * @type {string}
	 * @default json
	 */
	TYPE_JSON: 'json',
	
	/**
	 * 文本数据
	 * @static
	 * @final
	 * @property TYPE_TEXT
	 * @type {string}
	 * @default text
	 */
	TYPE_TEXT: 'text',
	
	/**
	 * 图像
	 * @static
	 * @final
	 * @property TYPE_IMAGE
	 * @type {string}
	 * @default image
	 */
	TYPE_IMAGE: 'image',
	
	/**
	 * 音频
	 * @static
	 * @final
	 * @property TYPE_AUDIO
	 * @type {string}
	 * @default audio
	 */
	TYPE_AUDIO: 'audio',
	
	/**
	 * 二进制数据
	 * @static
	 * @final
	 * @property TYPE_BINARY
	 * @type {string}
	 * @default binary
	 */
	TYPE_BINARY: 'binary'
});
