/*! Go2d 1.4.0 | A lightweight HTML5 game engine */
!function(a,b){"function"==typeof define?define(b):a.go2d=b()}(this,function(){function a(a){return function(b){return{}.toString.call(b)==="[object "+a+"]"}}var b={version:"1.4.0"},c=b.isObject=a("Object"),d=(b.isNumber=a("Number"),b.isString=a("String")),e=b.isFunction=a("Function"),f=b.isArray=Array.isArray||a("Array"),g=b.forEach=function(a,b,d){if(d=d||a,f(a))a.forEach(b,d);else if(c(a))for(var e in a)if(b.call(d,a[e],e,a)===!1)break},h=b.Class=function(){};h.extend=function(a,b){function c(){return this._super=d,this.constructor=c,e(this.__init)?this.__init.apply(this,arguments):void 0}var d=this.prototype;return c.prototype=Object.create(d),c.extend=h.extend,g(a,function(b,f){var g=Object.getOwnPropertyDescriptor(a,f);g.get||g.set?Object.defineProperty(c.prototype,f,g):c.prototype[f]=e(b)&&/\bthis\._super\(/.test(b)?function(a,b){return function(){this._super=d[a];var c=b.apply(this,arguments);return this._super=d,c}}(f,b):b}),g(b,function(a,b){c[b]=a}),c};{var i=(b.ObjectPool=h.extend({__init:function(a,b){this._pool=[],this._factory=a,this.size=b||30,Object.defineProperty(this,"length",{set:function(){},get:function(){return this._pool.length}})},_create:function(){return new this._factory},get:function(){return this._pool.length?this._pool.shift():this._create()},recycle:function(a){return this._pool.push(a),this._pool.length>this._size&&this._pool.shift(),this},clear:function(){return this._pool=[],this},dispose:function(){this._pool=null,this._factory=null,this._super()}}),b.Director=h.extend({__init:function(a,b){b=b||{},this.fps=0,this.frameRate=b.frameRate||60,this._stage=a,this._paused=!0,this._timer=null,this._prevTime=null,this._initEvent(),this._initTimer()},_initEvent:function(){var a=this,b=!1,c=["","ms","moz","webkit"];g(c,function(c){return void 0!==document[c+"hidden"]?(document.addEventListener(c+"visibilitychange",function(){document[c+"hidden"]?a._paused||(a.pause(),b=!0):b&&(b=!1,a.play())}),!1):void 0})},_initTimer:function(){function a(a){return setTimeout(a,1e3/c)}function b(a){return clearTimeout(a)}var c=this.frameRate;60===this.frameRate?(window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||a,this.setAnimationInterval=function(a){return requestAnimationFrame.call(null,a)},window.cancelAnimationFrame=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelAnimationFrame||window.mozCancelRequestAnimationFrame||b,this.clearAnimationInterval=function(a){cancelAnimationFrame(a)}):(this.setAnimationInterval=a,this.clearAnimationInterval=b)},_mainLoop:function(){var a,b=+new Date;this._prevTime?(a=b-this._prevTime,this.fps=Math.round(1e3/a)):a=Math.round(1e3/this.frameRate),this._stage.render().tick(a),this._prevTime=b},play:function(){var a=this;return this._timer=this.setAnimationInterval(function(){a._mainLoop(),a.play()}),this._paused=!1,this},pause:function(){return this.clearAnimationInterval(this._timer),this._paused=!0,this._prevTime=0,this}}),b.Vector=h.extend({__init:function(a,b){this.set(a,b),Object.defineProperty(this,"length",{set:function(){},get:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}})},set:function(a,b){return a instanceof i?this.set(a.x,a.y):(this.x=a||0,this.y=b||0),this},add:function(a){return this.x+=a.x,this.y+=a.y,this},subtract:function(a){return this.x-=a.x,this.y-=a.y,this},divide:function(a){return this.x/=a.x,this.y/=a.y,this},dotProduct:function(a){return this.x*a.x+this.y*a.y},normalize:function(){var a=this.length;return this.x=this.x/a,this.y=this.y/a,this},scale:function(a,b){return this.x*=a,this.y*=void 0===b?a:b,this},rotate:function(a){var b=this.x,c=this.y;return this.x=b*Math.cos(a)-c*Math.sin(a),this.y=b*Math.sin(a)+c*Math.cos(a),this},angle:function(){return Math.atan2(this.y,this.x)},distance:function(a){return Math.sqrt((this.x-a.x)*(this.x-a.x)+(this.y-a.y)*(this.y-a.y))},clone:function(){return new i(this)}})),j=b.Matrix=h.extend({__init:function(){this.set.apply(this,arguments)},set:function(a,b,c,d,e,f){return 6===arguments.length?(this.a=a,this.b=b,this.c=c,this.d=d,this.tx=e,this.ty=f):a instanceof j?this.set(a.a,a.b,a.c,a.d,a.tx,a.ty):this.identity(),this},identity:function(){this.set(1,0,0,1,0,0)},invert:function(){var a=this.a,b=this.b,c=this.c,d=this.d,e=this.tx,f=this.ty,g=a*d-c*b;return this.a=d/g,this.b=-b/g,this.c=-c/g,this.d=a/g,this.tx=(c*f-d*e)/g,this.ty=(b*e-a*f)/g,this},prepend:function(a,b,c,d,e,f){if(a instanceof j)return this.prepend(a.a,a.b,a.c,a.d,a.tx,a.ty);var g=this.a,h=this.b,i=this.c,k=this.d,l=this.tx,m=this.ty;return this.a=a*g+b*i,this.b=a*h+b*k,this.c=c*g+d*i,this.d=c*h+d*k,this.tx=e*g+f*i+l,this.ty=e*h+f*k+m,this},append:function(a,b,c,d,e,f){if(a instanceof j)return this.append(a.a,a.b,a.c,a.d,a.tx,a.ty);var g=this.a,h=this.b,i=this.c,k=this.d,l=this.tx,m=this.ty;return this.a=a*g+c*h,this.b=b*g+d*h,this.c=a*i+c*k,this.d=b*i+d*k,this.tx=a*l+c*m+e,this.ty=b*l+d*m+f,this},multiply:function(a){var b=this.a*a.x+this.c*a.y+this.tx,c=this.b*a.x+this.d*a.y+this.ty;return new i(b,c)},scale:function(a,b){return this.append(a,0,0,void 0===b?a:b,0,0)},rotate:function(a){var b=Math.sin(a),c=Math.cos(a);return this.append(c,b,-b,c,0,0)},skew:function(a,b){return this.append(1,Math.tan(b),Math.tan(a),1,0,0)},translate:function(a,b){return this.append(1,0,0,1,a,b)},clone:function(){return new j(this)}},{DEG_TO_RAD:Math.PI/180}),k=b.EventDispatcher=h.extend({__init:function(){this.__events={}},on:function(a,b){if(1===arguments.length){var c=arguments[0];for(a in c)this.on(a,c[a])}else a=a.toLowerCase(),this.__events[a]=this.__events[a]||[],this.__events[a].push(b);return this},off:function(a,b){if(a=a.toLowerCase(),void 0===b)return delete this.__events[a],this;for(var c=this.__events[a]||[],d=c.length-1;d>=0;--d)if(c[d]===b){c.splice(d,1);break}return this},emit:function(a,b){a=a.toLowerCase();var c=this.__events[a]||[],d=Array.prototype.slice.call(arguments,1);return g(c,function(a){return e(a)&&a.apply(this,d)===!1?(b instanceof l&&(b.preventDefault(),b.stopPropagation()),!1):void 0},this),this},dispose:function(){this.__events=null}}),l=b.Event=h.extend({__init:function(a,b){for(var c in b)this[c]=b[c];this.type=a,this._propagationStopped=!1,this._defaultPrevented=!1},stopPropagation:function(){return this._propagationStopped=!0,this},isPropagationStopped:function(){return this._propagationStopped},preventDefault:function(){return this._defaultPrevented=!0,this},isDefaultPrevented:function(){return this._defaultPrevented}}),m=l.TouchEvent=l.extend({__init:function(a,b,c,d,e,f){this._super(a,{x:b,y:c,globalX:d,globalY:e,identifier:f})}},{TOUCH_START:"touchstart",TOUCH_MOVE:"touchmove",TOUCH_END:"touchend",TOUCH_TAP:"touchtap"}),n=l.ResizeEvent=l.extend({__init:function(a,b){this._super("resize",{oldSize:a,newSize:b})}}),o=b.URLRequest=k.extend({__init:function(a,b){b=b||{},this._super(),this.url=a,this.type=b.type||"GET",this.dataType=b.dataType||"",this.contentType=b.contentType||"application/x-www-form-urlencoded",this.responseType=b.responseType||"",this.xhr=new window.XMLHttpRequest},send:function(a){var b=null,c=this,e=this.xhr,f=this.url,h=this.type,i=this.dataType;return d(a)?b=a:(b="",g(a,function(a,c){b+="&"+c+"="+a}),b=b.slice(1)),b&&"GET"===h.toUpperCase()&&(f+=(f.indexOf("?")<0?"?":"&")+b,b=null),e.responseType=this.responseType,e.open(h,f,!0),e.setRequestHeader("Content-Type",this.contentType),e.onreadystatechange=function(){if(4==e.readyState)if(200==e.status){var a;if("xml"===i){if(a=e.responseXML,null===a)return void c.emit("error",e,"parseError")}else if("json"===i)try{a=JSON.parse(e.responseText)}catch(b){return void c.emit("error",e,"parseError")}else a="text"===i?e.responseText:e.response;c.emit("success",a)}else c.emit("error",e,e.status?"error":"abort")},e.send(b),this},abort:function(){return this.xhr.abort(),this}}),p=b.ResourceLoader=k.extend({__init:function(a,b){b=b||{},this._super(),this._cache={},this._resources=a,this.total=0,this.errorCount=0,this.loadedCount=0,this.retryTimes=void 0===b.retryTimes?3:b.retryTimes},_request:function(a,b,c,d){var e,f=this;switch(e=d<this.retryTimes?function(){f._request(a,b,c,d+1)}:function(){f._onError(b)},a){case p.TYPE_IMAGE:var g=new Image;g.addEventListener("load",function(){f._onLoad()}),g.addEventListener("error",e),g.src=c,this._save(a,b,g);break;case p.TYPE_AUDIO:var h=document.createElement("audio");if(h.addEventListener("canplay",function(){f._onLoad()}),h.addEventListener("error",e),h.src=c,this._save(a,b,h),"ontouchend"in document){var i=!1,j=h.play,k=h.pause;h.play=function(){i=!0,j.call(this)},h.pause=function(){i=!1,k.call(this)},document.addEventListener("touchstart",function(){i?h.play():(h.play(),h.pause()),document.removeEventListener("touchstart",arguments.callee,!0)},!0)}break;case p.TYPE_XML:case p.TYPE_JSON:case p.TYPE_TEXT:default:var l=new o(c,{dataType:a,responseType:"binary"===a?"arraybuffer":""});l.on("success",function(c){f._save(a,b,c),f._onLoad()}),l.on("error",e),l.send()}},_save:function(a,b,c){this._cache[a]=this._cache[a]||{},this._cache[a][b]=c},_onLoad:function(){this.emit("progress",++this.loadedCount,this.total),this._checkStatus()},_onError:function(a){++this.errorCount,this.emit("error",a),this._checkStatus()},_checkStatus:function(){this.loadedCount===this.total&&this.emit("complete"),this.loadedCount+this.errorCount===this.total&&this.emit("finish")},load:function(){var a=this,b=this._resources;return g(b,function(b,c){g(b,function(b,d){++a.total,a._request(c,d,b)})}),this},get:function(a,b){return this._cache[a]?this._cache[a][b]:void 0},getXML:function(a){return this.get(p.TYPE_XML,a)},getJSON:function(a){return this.get(p.TYPE_JSON,a)},getText:function(a){return this.get(p.TYPE_TEXT,a)},getImage:function(a){return this.get(p.TYPE_IMAGE,a)},getAudio:function(a){return this.get(p.TYPE_AUDIO,a)},getBinary:function(a){return this.get(p.TYPE_BINARY,a)},destroy:function(a,b){return void 0===a?this._cache={}:void 0===b?delete this._cache[a]:this._cache[a]&&delete this._cache[a][b],this},destroyXML:function(a){return this.destroy(p.TYPE_XML,a)},destroyJSON:function(a){return this.destroy(p.TYPE_JSON,a)},destroyText:function(a){return this.destroy(p.TYPE_TEXT,a)},destroyImage:function(a){return this.destroy(p.TYPE_IMAGE,a)},destroyAudio:function(a){return this.destroy(p.TYPE_AUDIO,a)},destroyBinary:function(a){return this.destroy(p.TYPE_BINARY,a)},destroyAll:function(){return this._cache={},this},dispose:function(){this._resources=null,this._super()}},{TYPE_XML:"xml",TYPE_JSON:"json",TYPE_TEXT:"text",TYPE_IMAGE:"image",TYPE_AUDIO:"audio",TYPE_BINARY:"binary"}),q=b.Ease=h.extend({},{linear:function(a,b,c,d){return c*a/d+b},easeInQuad:function(a,b,c,d){return c*(a/=d)*a+b},easeOutQuad:function(a,b,c,d){return-c*(a/=d)*(a-2)+b},easeInOutQuad:function(a,b,c,d){return(a/=d/2)<1?c/2*a*a+b:-c/2*(--a*(a-2)-1)+b},easeInCubic:function(a,b,c,d){return c*(a/=d)*a*a+b},easeOutCubic:function(a,b,c,d){return c*((a=a/d-1)*a*a+1)+b},easeInOutCubic:function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a+b:c/2*((a-=2)*a*a+2)+b},easeInQuart:function(a,b,c,d){return c*(a/=d)*a*a*a+b},easeOutQuart:function(a,b,c,d){return-c*((a=a/d-1)*a*a*a-1)+b},easeInOutQuart:function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a*a+b:-c/2*((a-=2)*a*a*a-2)+b},easeInQuint:function(a,b,c,d){return c*(a/=d)*a*a*a*a+b},easeOutQuint:function(a,b,c,d){return c*((a=a/d-1)*a*a*a*a+1)+b},easeInOutQuint:function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a*a*a+b:c/2*((a-=2)*a*a*a*a+2)+b},easeInSine:function(a,b,c,d){return-c*Math.cos(a/d*(Math.PI/2))+c+b},easeOutSine:function(a,b,c,d){return c*Math.sin(a/d*(Math.PI/2))+b},easeInOutSine:function(a,b,c,d){return-c/2*(Math.cos(Math.PI*a/d)-1)+b},easeInExpo:function(a,b,c,d){return 0===a?b:c*Math.pow(2,10*(a/d-1))+b},easeOutExpo:function(a,b,c,d){return a===d?b+c:c*(-Math.pow(2,-10*a/d)+1)+b},easeInOutExpo:function(a,b,c,d){return 0===a?b:a===d?b+c:(a/=d/2)<1?c/2*Math.pow(2,10*(a-1))+b:c/2*(-Math.pow(2,-10*--a)+2)+b},easeInCirc:function(a,b,c,d){return-c*(Math.sqrt(1-(a/=d)*a)-1)+b},easeOutCirc:function(a,b,c,d){return c*Math.sqrt(1-(a=a/d-1)*a)+b},easeInOutCirc:function(a,b,c,d){return(a/=d/2)<1?-c/2*(Math.sqrt(1-a*a)-1)+b:c/2*(Math.sqrt(1-(a-=2)*a)+1)+b},easeInElastic:function(a,b,c,d){var e=1.70158,f=0,g=c;return 0===a?b:1===(a/=d)?b+c:(f||(f=.3*d),g<Math.abs(c)?(g=c,e=f/4):e=f/(2*Math.PI)*Math.asin(c/g),-(g*Math.pow(2,10*(a-=1))*Math.sin(2*(a*d-e)*Math.PI/f))+b)},easeOutElastic:function(a,b,c,d){var e=1.70158,f=0,g=c;return 0===a?b:1===(a/=d)?b+c:(f||(f=.3*d),g<Math.abs(c)?(g=c,e=f/4):e=f/(2*Math.PI)*Math.asin(c/g),g*Math.pow(2,-10*a)*Math.sin(2*(a*d-e)*Math.PI/f)+c+b)},easeInOutElastic:function(a,b,c,d){var e=1.70158,f=0,g=c;return 0===a?b:2===(a/=d/2)?b+c:(f||(f=.3*d*1.5),g<Math.abs(c)?(g=c,e=f/4):e=f/(2*Math.PI)*Math.asin(c/g),1>a?-.5*g*Math.pow(2,10*(a-=1))*Math.sin(2*(a*d-e)*Math.PI/f)+b:g*Math.pow(2,-10*(a-=1))*Math.sin(2*(a*d-e)*Math.PI/f)*.5+c+b)},easeInBack:function(a,b,c,d,e){return void 0===e&&(e=1.70158),c*(a/=d)*a*((e+1)*a-e)+b},easeOutBack:function(a,b,c,d,e){return void 0===e&&(e=1.70158),c*((a=a/d-1)*a*((e+1)*a+e)+1)+b},easeInOutBack:function(a,b,c,d,e){return void 0===e&&(e=1.70158),(a/=d/2)<1?c/2*a*a*(((e*=1.525)+1)*a-e)+b:c/2*((a-=2)*a*(((e*=1.525)+1)*a+e)+2)+b},easeInBounce:function(a,b,c,d){return c-jQuery.easing.easeOutBounce(d-a,0,c,d)+b},easeOutBounce:function(a,b,c,d){return(a/=d)<1/2.75?7.5625*c*a*a+b:2/2.75>a?c*(7.5625*(a-=1.5/2.75)*a+.75)+b:2.5/2.75>a?c*(7.5625*(a-=2.25/2.75)*a+.9375)+b:c*(7.5625*(a-=2.625/2.75)*a+.984375)+b},easeInOutBounce:function(a,b,c,d){return d/2>a?.5*jQuery.easing.easeInBounce(2*a,0,c,d)+b:.5*jQuery.easing.easeOutBounce(2*a-d,0,c,d)+.5*c+b}}),r=(b.Tween=h.extend({__init:function(a,b){b=b||{},this._steps=[],this._target=a,this._loops=void 0===b.loops?1:b.loops,this._paused=!1,Object.defineProperty(this,"length",{set:function(){},get:function(){return this._steps.length}}),this._initEvent(),this.play()},_initEvent:function(){var a,b=this,c=this._target,d=this._steps,e=this._loops,f=0,h={},i=0;this._onStep=function(j){if(!b._paused){var k=d[f],l=k.props,m=k.duration||0,n=k.ease,o=k.callback;o?o():(void 0===a&&(a={},g(l,function(b,d){h[d]=void 0===h[d]?c[d]:h[d],a[d]=c[d]},c)),i=Math.min(i+j,m),g(l,function(b,d){c[d]=m>0?n(i,a[d],b-a[d],m):b})),i===m&&(a=void 0,i=0,++f>=d.length&&(f=0,e>0&&0===--e?b.pause():g(h,function(a,b){c[b]=a})))}}},wait:function(a){return this._steps.push({duration:a}),this},from:function(a){return this._steps.push({props:a}),this},to:function(a,b,c){return this._steps.push({props:a,duration:b,ease:c||q.linear}),this},call:function(a){return this._steps.push({callback:a}),this},play:function(){return this._paused=!1,this._target.on("step",this._onStep),this},pause:function(){return this._paused=!0,this._target.off("step",this._onStep),this}}),b.DisplayObject=k.extend({__init:function(a){this._super(),this.canvas=a||document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.name="",this.tag="",this.stage=null,this.paused=!1,this.touchable=!0,this.touchChildren=!0,this._dirty=!0,this._touches=[],this._children=[];var b={opacity:1,background:null};g(b,function(a,c){Object.defineProperty(this,c,{set:function(a){b[c]!==a&&(b[c]=a),this.update()},get:function(){return b[c]}})},this),Object.defineProperty(this,"width",{set:function(a){this._onResize(a,this.canvas.height)},get:function(){return this.canvas.width}}),Object.defineProperty(this,"height",{set:function(a){this._onResize(this.canvas.width,a)},get:function(){return this.canvas.height}})},_onTouch:function(a){if(this.touchable){var b=a.type,c=!1;if(this.touchChildren)for(var d=this._children,e=a.identifier,f=new i(a.x,a.y),g=d.length-1;g>=0;--g){var h=d[g];if(h.visible&&h.touchable){var j=!1,k=h._touches,l=h.getTransform().invert().multiply(f),n=l.x>=0&&l.y>=0&&l.x<=h.width&&l.y<=h.height;switch(b){case"touchstart":n&&(j=!0,k[e]=!0);break;case"touchmove":k[e]&&(j=!0);break;case"touchend":k[e]&&(j=!0,k[e]=!1);break;case"touchtap":n&&void 0!==k[e]&&(j=!0),delete k[e]}if(j){var o=new m(b,l.x,l.y,a.globalX,a.globalY,e);h._onTouch(o),c=o.isPropagationStopped();break}}}c?a.stopPropagation():this.emit(b,a)}},_onAddedToStage:function(a){this.stage=a,this.emit("addedtostage",a),g(this._children,function(b){b._onAddedToStage(a)})},_onRemovedFromStage:function(a){this.stage=null,this.emit("removedfromstage",a),g(this._children,function(b){b._onRemovedFromStage(a)})},_onResize:function(a,b){var c=this.width,d=this.height;if(a!==c||b!==d){var e=new n({width:c,height:d},{width:a,height:b});this.emit("resize",e),e.isDefaultPrevented()||(this.canvas.width=a,this.canvas.height=b,this.update())}},render:function(){if(this._dirty){var a=this.context,b=this._children,c=new l("render");a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,this.width,this.height),a.beginPath(),this.background&&(a.save(),a.fillStyle=this.background,a.fillRect(0,0,this.width,this.height),a.restore()),this.emit("render",c),c.isDefaultPrevented()||g(b,function(b){if(b.visible&&b.opacity){var c=b.getTransform();b.render(),a.globalAlpha=b.opacity,1===c.a&&0===c.b&&0===c.c&&1===c.d?a.drawImage(b.canvas,c.tx,c.ty,b.width,b.height):(a.save(),a.setTransform(c.a,c.b,c.c,c.d,c.tx,c.ty),a.drawImage(b.canvas,0,0,b.width,b.height),a.restore())}}),this.emit("paint",a),this._dirty=!1}return this},update:function(){return this._dirty=!0,this.updateParent(),this},updateParent:function(){return this.parent&&this.parent.update(),this},addChild:function(a){return this.addChildAt(a),this},addChildAt:function(a,b){return a.parent&&a.parent.removeChild(a),a.parent=this,this.stage&&a._onAddedToStage(this.stage),void 0===b||0>b?this._children.push(a):this._children.splice(b,0,a),this.update(),this},getChildByName:function(a){var b;return g(this._children,function(c){return c.name===a?(b=c,!1):void 0}),b},getChildrenByTag:function(a){var b=[];return g(this._children,function(c){c.tag===a&&b.push(c)}),b},getChildAt:function(a){return this._children[a]},getChildIndex:function(a){var b=-1;return g(this._children,function(c,d){c===a&&(b=d)}),b},swapChildren:function(a,b){var c=this.getChildIndex(a),d=this.getChildIndex(b);return c>=0&&d>=0&&this.swapChildrenAt(c,d),this},swapChildrenAt:function(a,b){if(a!==b){var c=this._children[a],d=this._children[b];c&&d&&(this._children[a]=d,this._children[b]=c,this.update())}return this},sortChildren:function(a){return this._children.sort(a),this},getAllChildren:function(){return this._children},removeChild:function(a,b){for(var c=this._children,d=c.length-1;d>=0;--d)c[d]===a&&this.removeChildAt(d,b);return this},removeChildAt:function(a,b){var c=this._children.splice(a,1)[0];return c&&(b?c.dispose():(c.parent=null,c.stage&&c._onRemovedFromStage(c.stage)),this.update()),this},removeChildrenByName:function(a,b){for(var c=this._children,d=c.length-1;d>=0;--d)if(c[d].name===a){this.removeChildAt(d,b);break}return this},removeChildrenByTag:function(a,b){for(var c=this._children,d=c.length-1;d>=0;--d)c[d].tag===a&&this.removeChildAt(d,b);return this},removeAllChildren:function(a){return g(this._children,function(b){b.parent=null,b.stage&&b._onRemovedFromStage(b.stage),a&&b.dispose()}),this._children=[],this.update(),this},play:function(){return this.paused=!1,this},pause:function(){return this.paused=!0,this},tick:function(a){return this.paused||(g(this._children,function(b){b.tick(a)}),this.emit("step",a)),this},dispose:function(){this.parent&&this.parent.removeChild(this),this.removeAllChildren(!0),this._super()}})),s=b.Sprite=r.extend({__init:function(){this._super(),this.parent=null;var a={x:0,y:0,skewX:0,skewY:0,scaleX:1,scaleY:1,anchorX:0,anchorY:0,anchorOffsetX:0,anchorOffsetY:0,rotation:0,visible:!0};g(a,function(b,c){Object.defineProperty(this,c,{set:function(b){a[c]=b,this.updateParent()},get:function(){return a[c]}})},this)},getTransform:function(){var a=new j,b=this.anchorOffsetX+this.anchorX*this.width,c=this.anchorOffsetY+this.anchorY*this.height;return a.translate(-b,-c),a.rotate(this.rotation).scale(this.scaleX,this.scaleY).skew(this.skewX,this.skewY),a.translate(this.x,this.y),a},show:function(){return this.visible=!0,this},hide:function(){return this.visible=!1,this}});b.ImageView=s.extend({__init:function(a){this._super(),this._image=null,this.setImage(a),this.on("paint",this._onPaint)},_onPaint:function(a){this._image&&a.drawImage(this._image,0,0,this.width,this.height)},setImage:function(a){return this._image=a,this.update(),this}}),b.ScrollView=s.extend({__init:function(a){this._super(),this._content=null,this._scrollPos={top:0,left:0},this._initTouch(),this.setContent(a),this.on("render",this._onRender),Object.defineProperty(this,"scrollTop",{set:function(a){this._onScroll(a,this.scrollLeft)},get:function(){return this._scrollPos.top}}),Object.defineProperty(this,"scrollLeft",{set:function(a){this._onScroll(this.scrollTop,a)},get:function(){return this._scrollPos.left}})},_initTouch:function(){var a,b,c,d,e;this.on({touchstart:function(e){a={top:this.scrollTop,left:this.scrollLeft},d=+new Date,b=c=e},touchmove:function(f){var g=+new Date-d,h=this.scrollTop=a.top-f.y+b.y,i=this.scrollLeft=a.left-f.x+b.x;e={top:(f.y-c.y)/g,left:(f.x-c.x)/g},d=+new Date,c=f,(this.scrollTop!==h||this.scrollLeft!==i)&&f.stopPropagation()},touchend:function(){a=b=c=d=null},step:function(b){if(!a&&e){var c=.9,d=1,f=(this.scrollTop,this.scrollLeft,(e.top*=c)*b),g=(e.left*=c)*b;this.scrollTop-=f,this.scrollLeft-=g,Math.sqrt(f*f+g*g)<d&&(e=null)}}})},_onScroll:function(a,b){var c=this.getContent(),d=this._scrollPos;if(c){var e={top:Math.max(0,Math.min(a,c.height-this.height)),left:Math.max(0,Math.min(b,c.width-this.width))};if(e.top!==d.top||e.left!==d.left){var f=new l("scroll",d,e);this.emit("scroll",f),f.isDefaultPrevented()||(this._scrollPos=e,this.update())}}},_onRender:function(){var a=this.context,b=this._children;return this.background?(a.save(),a.fillStyle=this.background,a.fillRect(0,0,this.width,this.height),a.restore()):a.clearRect(0,0,this.width,this.height),g(b,function(b){if(b.visible){var c=b.getTransform();b.render(),a.save(),a.globalAlpha=b.opacity,a.setTransform(c.a,c.b,c.c,c.d,c.tx-this.scrollLeft,c.ty-this.scrollTop),a.drawImage(b.canvas,0,0,b.width,b.height),a.restore()}},this),!1},setContent:function(a){return this.removeContent(),a&&(this._children[0]=a),this},getContent:function(){return this._children[0]},removeContent:function(a){var b=this.getContent();return b&&(b.parent=null,a&&b.dispose(),this._children=[]),this},addChildAt:function(a){return this.setContent(a),console.error("NotSupportError: Please use `setConent` instead."),this},removeChildAt:function(a,b){return this.removeContent(b),console.error("NotSupportError: Please use `removeConent` instead."),this},removeAllChildren:function(a){return this.removeContent(a),console.error("NotSupportError: Please use `removeConent` instead."),this}}),b.TextField=s.extend({__init:function(a,b){this._super(),this.on("render",this._onRender),b=b||{};var c={bold:b.bold||!1,italic:b.italic||!1,fontSize:b.fontSize||24,color:b.color||"black",textAlign:b.textAlign||"left",lineHeight:b.lineHeight||"120%",strokeSize:b.strokeSize||0,strokeColor:b.strokeColor||null,fontFamily:b.fontFamily||"Arial",breakWord:b.breakWord||!1,autoResize:b.autoResize||!1,paddingTop:b.paddingTop||0,paddingLeft:b.paddingLeft||0,paddingRight:b.paddingRight||0,paddingBottom:b.paddingBottom||0,maxWidth:b.maxWidth||16777215,maxHeight:b.maxHeight||16777215};g(c,function(a,b){Object.defineProperty(this,b,{set:function(a){c[b]!==a&&(c[b]=a,this._updateFont(),this.update())},get:function(){return c[b]}})},this),Object.defineProperty(this,"textRange",{set:function(){},get:function(){return this._getTextRange(this._splitLines())}}),Object.defineProperty(this,"textWidth",{set:function(){},get:function(){return this.textRange.width}}),Object.defineProperty(this,"textHeight",{set:function(){},get:function(){return this.textRange.height}}),Object.defineProperty(this,"text",{set:function(b){b=void 0===b||null===b?"":""+b,a!==b&&(a=b,this.update())},get:function(){return a}}),this.text=a,this._updateFont()},_updateFont:function(){var a=this.context,b=this.italic?"italic":"normal",c=this.bold?"bold":"normal",d=this.fontSize+"px";a.font=b+" "+c+" "+d+" "+this.fontFamily,a.textAlign=this.textAlign,a.textBaseline="top"},_getLineHeight:function(){var a=this.lineHeight;return/%/.test(a)?Math.round(parseFloat(a)*this.fontSize/100):a},_splitLines:function(){var a=[],b=this.context,c=this.text.split("\n"),d=this.breakWord,e=this.autoResize?this.maxWidth:this.width;return e-=this.paddingLeft+this.paddingRight,g(c,function(c){if(b.measureText(c).width<e)a.push(c);else if(d)for(var f=0;c.length>0;)++f,(b.measureText(c.substr(0,f+1)).width>e||f===c.length)&&(a.push(c.substr(0,f)),c=c.substr(f),f=0);else{for(var g,h=[],i="",j=c.split(/\b/);j.length;)g=j.shift(),/\w+/i.test(g)?h.push(g):h=h.concat(g.split(""));for(;h.length;)g=h[0],b.measureText(i+g).width>e&&i?(a.push(i),i=""):i+=h.shift();i&&a.push(i)}},this),a},_onResize:function(a,b){this._super(a,b),this._updateFont()},_onRender:function(){var a=this._splitLines();if(this.autoResize){var b=this._getTextRange(a);this.width=Math.min(b.width,this.maxWidth)+this.paddingLeft+this.paddingRight,this.height=Math.min(b.height,this.maxHeight)+this.paddingTop+this.paddingBottom}this._drawLines(a)},_getTextRange:function(a){var b=0,c=0,d=this.context,e=this._getLineHeight();return g(a,function(a){b=Math.max(b,d.measureText(a).width),c+=e}),{width:b,height:c}},_drawLines:function(a){var b=0,c=0,d=this.paddingLeft,e=this.paddingTop,f=this._getLineHeight();b="center"===this.textAlign?d+this.width/2:"right"===this.textAlign?d+this.width:d,g(a,function(a,d){c=e+d*f,this._drawText(a,b,c)},this)},_drawText:function(a,b,c){var d=this.context;d.save(),this.color&&(d.fillStyle=this.color,d.fillText(a,b,c)),this.strokeColor&&(d.lineWidth=this.strokeSize,d.strokeStyle=this.strokeColor,d.strokeText(a,b,c)),d.restore()},setText:function(a){return this.text=a,this}}),b.Stage=r.extend({__init:function(a){"string"==typeof a&&(a=document.getElementById(a)),this._super(a),this.__dispatchEvents(),this.stage=this},__dispatchEvents:function(){function a(a,b){var c=d.getBoundingClientRect(),e=c.width/d.width,f=c.height/d.height,g=(b.pageX-c.left)/e,h=(b.pageY-c.top)/f,i=b.identifier||0;return new m(a,g,h,g,h,i)}function b(b,d){var e=d.changedTouches;e?(e=Array.prototype.slice.call(e),g(e,function(d){c._onTouch.call(c,a(b,d))})):c._onTouch.call(c,a(b,d))}var c=this,d=this.canvas;if("ontouchend"in document)d.addEventListener("touchstart",function(a){b("touchstart",a),a.preventDefault()}),d.addEventListener("touchmove",function(a){b("touchmove",a),a.preventDefault()}),d.addEventListener("touchend",function(a){b("touchend",a),b("touchtap",a),a.preventDefault()}),d.addEventListener("touchcancel",function(a){b("touchend",a),b("touchtap",a)});else{var e=!1;d.addEventListener("mousedown",function(a){e=!0,b("touchstart",a)}),d.addEventListener("mousemove",function(a){e&&b("touchmove",a)}),d.addEventListener("mouseup",function(a){e=!1,b("touchend",a),b("touchtap",a)})}}})}return b});