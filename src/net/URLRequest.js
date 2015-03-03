/**
 * URL Request
 */
var URLRequest = go2d.URLRequest = EventDispatcher.extend({
	__init: function(url, options) {
		options = options || {};
		this._super();
		this.url = url;
		this.type = options.type || 'GET';
		this.dataType = options.dataType;
		this.contentType = options.contentType;
		this.xhr = new window.XMLHttpRequest();
	},
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

		xhr.open(type, url, true);
		xhr.setRequestHeader('Content-Type', this.contentType || 'application/x-www-form-urlencoded');
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
					} else {
						response = xhr.responseText;
					}
					that.emit('success', response);
				} else {
					that.emit('error', xhr, xhr.status ? 'error' : 'abort');
				}
			}
		};
		xhr.send(dataStr);
		return this;
	},
	abort: function() {
		this.xhr.abort();
		return this;
	}
});
