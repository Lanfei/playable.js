/**
 * Resource (TODO)
 */
var Resource = go2d.Resource = EventDispatcher.extend({
	__init: function(data) {
		this._super();
		this._data = data;
		this._resources = [];
		this.total = 0;
		this.errorCount = 0;
		this.loadedCount = 0;
	},
	_load: function(name, url, type, retry) {
		var errorHandler,
			that = this;

		if (retry) {
			errorHandler = function() {
				that._onError(name);
			};
		} else {
			errorHandler = function() {
				that._load(name, url, type, true);
			};
		}

		switch (type) {
			case Resource.Type.XML:
			case Resource.Type.JSON:
			case Resource.Type.TEXT:
				var urlRequest = new URLRequest(url, {
					dataType: type
				});
				urlRequest.on('success', function(response) {
					that._save(name, response);
					that._onLoad();
				});
				urlRequest.on('error', errorHandler);
				urlRequest.send();
				break;
			case Resource.Type.IMAGE:
				var image = new Image();
				image.addEventListener('load', function() {
					that._onLoad();
				});
				image.addEventListener('error', errorHandler);
				image.src = url;
				this._save(name, image);
				break;
			case Resource.Type.AUDIO:
				var audio = document.createElement('audio');
				// TODO (iOS)
				audio.addEventListener('canplay', function() {
					that._onLoad();
				});
				audio.addEventListener('error', errorHandler);
				audio.src = url;
				this._save(name, audio);
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
			default:
				that._request(url, {
					success: function(xhr) {
						that._save(name, xhr.response);
						that._onLoad();
					},
					error: errorHandler
				});
		}
	},
	_save: function(name, resouce) {
		this._resources[name] = resouce;
	},
	_onLoad: function() {
		this.emit('progress', ++this.loadedCount, this.total);
		this._checkStatus();
	},
	_onError: function(name) {
		++this.errorCount;
		this.emit('error', name);
		this._checkStatus();
	},
	_checkStatus: function() {
		if (this.loadedCount === this.total) {
			this.emit('complete');
		}
		if (this.loadedCount + this.errorCount === this.total) {
			this.emit('finish');
		}
	},
	load: function() {
		var data = this._data;
		for (var type in data) {
			var list = data[type];
			this.total += list.length;
			for (var i = 0, l = list.length; i < l; ++i) {
				var item = list[i];
				this._load(item.name, item.url, type);
			}
		}
		delete this._data;
		return this;
	},
	get: function(name) {
		return this._resources[name];
	},
	destroy: function(name) {
		return delete this._resources[name];
	},
	destroyAll: function(name) {
		this._resources = [];
	}
}, {
	Type: {
		XML: 'xml',
		JSON: 'json',
		TEXT: 'text',
		IMAGE: 'image',
		AUDIO: 'audio',
		BINARY: 'binary'
	}
});
