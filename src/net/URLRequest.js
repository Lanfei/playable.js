/**
 * URL 请求类，用于发起 AJAX 请求，并获取返回数据。
 * @author Lanfei
 * @class URLRequest
 * @extends EventEmitter
 *
 * @constructor
 * @param {number} url 请求地址
 * @param {Object} [options] 配置参数
 * @param {string} [options.type=GET] 请求类型
 * @param {string} [options.dataType] 返回数据格式
 * @param {string} [options.contentType=application/x-www-form-urlencoded] 发送数据类型
 * @param {string} [options.responseType] 返回数据类型
 */
var URLRequest = go2d.URLRequest = EventEmitter.extend({
	__init: function(url, options) {
		options = options || {};
		this._super();

		/**
		 * 请求地址
		 * @property url
		 * @type {string}
		 */
		this.url = url;

		/**
		 * 请求类型
		 * @property type
		 * @type {string}
		 * @default GET
		 */
		this.type = options.type || 'GET';

		/**
		 * 返回数据格式
		 * @property dataType
		 * @type {string}
		 * @default
		 */
		this.dataType = options.dataType || '';

		/**
		 * 发送数据类型
		 * @property contentType
		 * @type {string}
		 * @default application/x-www-form-urlencoded
		 */
		this.contentType = options.contentType || 'application/x-www-form-urlencoded';

		/**
		 * 返回数据类型
		 * @property responseType
		 * @type {string}
		 */
		this.responseType = options.responseType || '';

		/**
		 * XMLHttpRequest 对象
		 * @readonly
		 * @property xhr
		 * @type {Object}
		 */
		this.xhr = new window.XMLHttpRequest();
	},
	/**
	 * 发送请求
	 * @function send
	 * @param {string|Object} data 请求数据
	 * @return {this}
	 */
	send: function(data) {
		var dataStr = null,
			that = this,
			xhr = this.xhr,
			url = this.url,
			type = this.type,
			dataType = this.dataType;

		if (isString(data)) {
			dataStr = data;
		} else {
			dataStr = '';
			forEach(data, function(value, key) {
				dataStr += '&' + key + '=' + value;
			});
			dataStr = dataStr.slice(1);
		}
		if (dataStr && type.toUpperCase() === 'GET') {
			url += (url.indexOf('?') < 0 ? '?' : '&') + dataStr;
			dataStr = null;
		}

		xhr.responseType = this.responseType;
		xhr.open(type, url, true);
		xhr.setRequestHeader('Content-Type', this.contentType);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					var response;
					if (dataType === 'xml') {
						response = xhr.responseXML;
						if (response === null) {
							that.emit('error', xhr, 'parseError');
							return;
						}
					} else if (dataType === 'json') {
						try {
							response = JSON.parse(xhr.responseText);
						} catch (e) {
							that.emit('error', xhr, 'parseError');
							return;
						}
					} else if (dataType === 'text') {
						response = xhr.responseText;
					} else {
						response = xhr.response;
					}

					/**
					 * 请求成功事件
					 * @event success
					 * @param {mixed} response 返回数据
					 */
					that.emit('success', response);
				} else {

					/**
					 * 请求失败事件
					 * @event error
					 * @param {Object} xhr XMLHttpRequest 对象
					 * @param {string} textStatus 失败状态
					 */
					that.emit('error', xhr, xhr.status ? 'error' : 'abort');
				}
			}
		};
		xhr.send(dataStr);
		return this;
	},
	/**
	 * 中断请求
	 * @function abort
	 * @return {this}
	 */
	abort: function() {
		this.xhr.abort();
		return this;
	}
});
