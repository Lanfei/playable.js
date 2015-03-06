<a name="go2d"></a>
#go2d
Go2d 命名空间

**Properties**

- version `string` - Go2d 版本号  

**Members**

* [go2d](#go2d)
  * [go2d.isObject(obj)](#go2d.isObject)
  * [go2d.isNumber(obj)](#go2d.isNumber)
  * [go2d.isString(obj)](#go2d.isString)
  * [go2d.isFunction(obj)](#go2d.isFunction)
  * [go2d.isArray(obj)](#go2d.isArray)
  * [go2d.forEach(obj, iterator, [thisArg])](#go2d.forEach)
  * [class: go2d.Class](#go2d.Class)
    * [new go2d.Class()](#new_go2d.Class)
    * [Class.extend(props, [statics])](#go2d.Class.extend)
  * [class: go2d.Director](#go2d.Director)
    * [new go2d.Director(stage, [options])](#new_go2d.Director)
    * [director.fps](#go2d.Director#fps)
    * [director.frameRate](#go2d.Director#frameRate)
    * [director._paused](#go2d.Director#_paused)
    * [director._mainLoop()](#go2d.Director#_mainLoop)
    * [director.play()](#go2d.Director#play)
    * [director.pause()](#go2d.Director#pause)
  * [class: go2d.ObjectPool](#go2d.ObjectPool)
    * [new go2d.ObjectPool(factory, size)](#new_go2d.ObjectPool)
    * [objectPool._pool](#go2d.ObjectPool#_pool)
    * [objectPool._factory](#go2d.ObjectPool#_factory)
    * [objectPool.size](#go2d.ObjectPool#size)
    * [objectPool.length](#go2d.ObjectPool#length)
    * [objectPool._create()](#go2d.ObjectPool#_create)
    * [objectPool.get()](#go2d.ObjectPool#get)
    * [objectPool.recycle(对象示例)](#go2d.ObjectPool#recycle)
    * [objectPool.clear()](#go2d.ObjectPool#clear)
    * [objectPool.dispose()](#go2d.ObjectPool#dispose)
  * [class: go2d.DisplayObject](#go2d.DisplayObject)
    * [new go2d.DisplayObject(canvas)](#new_go2d.DisplayObject)
    * [displayObject._stage](#go2d.DisplayObject#_stage)
    * [displayObject._timer](#go2d.DisplayObject#_timer)
    * [displayObject._prevTime](#go2d.DisplayObject#_prevTime)
    * [displayObject.canvas](#go2d.DisplayObject#canvas)
    * [displayObject.context](#go2d.DisplayObject#context)
    * [displayObject.name](#go2d.DisplayObject#name)
    * [displayObject.tag](#go2d.DisplayObject#tag)
    * [displayObject.stage](#go2d.DisplayObject#stage)
    * [displayObject.paused](#go2d.DisplayObject#paused)
    * [displayObject.touchable](#go2d.DisplayObject#touchable)
    * [displayObject.touchChildren](#go2d.DisplayObject#touchChildren)
    * [displayObject._dirty](#go2d.DisplayObject#_dirty)
    * [displayObject._touches](#go2d.DisplayObject#_touches)
    * [displayObject._children](#go2d.DisplayObject#_children)
    * [displayObject.opacity](#go2d.DisplayObject#opacity)
    * [displayObject.background](#go2d.DisplayObject#background)
    * [displayObject.width](#go2d.DisplayObject#width)
    * [displayObject.height](#go2d.DisplayObject#height)
    * [displayObject.parent](#go2d.DisplayObject#parent)
    * [displayObject.x](#go2d.DisplayObject#x)
    * [displayObject.y](#go2d.DisplayObject#y)
    * [displayObject.skewX](#go2d.DisplayObject#skewX)
    * [displayObject.skewY](#go2d.DisplayObject#skewY)
    * [displayObject.scaleX](#go2d.DisplayObject#scaleX)
    * [displayObject.scaleY](#go2d.DisplayObject#scaleY)
    * [displayObject.anchorX](#go2d.DisplayObject#anchorX)
    * [displayObject.anchorY](#go2d.DisplayObject#anchorY)
    * [displayObject.anchorOffsetX](#go2d.DisplayObject#anchorOffsetX)
    * [displayObject.anchorOffsetY](#go2d.DisplayObject#anchorOffsetY)
    * [displayObject.rotation](#go2d.DisplayObject#rotation)
    * [displayObject.visible](#go2d.DisplayObject#visible)
    * [displayObject.render()](#go2d.DisplayObject#render)
    * [displayObject.update()](#go2d.DisplayObject#update)
    * [displayObject.addChild(child)](#go2d.DisplayObject#addChild)
    * [displayObject.addChildAt(child, index)](#go2d.DisplayObject#addChildAt)
    * [displayObject.getChildByName(name)](#go2d.DisplayObject#getChildByName)
    * [displayObject.getChildrenByTag(tag)](#go2d.DisplayObject#getChildrenByTag)
    * [displayObject.getChildAt(index)](#go2d.DisplayObject#getChildAt)
    * [displayObject.getChildIndex(child)](#go2d.DisplayObject#getChildIndex)
    * [displayObject.swapChildren(child1, child2)](#go2d.DisplayObject#swapChildren)
    * [displayObject.swapChildrenAt(index1, index2)](#go2d.DisplayObject#swapChildrenAt)
    * [displayObject.sortChildren(compare)](#go2d.DisplayObject#sortChildren)
    * [displayObject.getAllChildren()](#go2d.DisplayObject#getAllChildren)
    * [displayObject.removeChild(child, cleanup)](#go2d.DisplayObject#removeChild)
    * [displayObject.removeChildAt(index, cleanup)](#go2d.DisplayObject#removeChildAt)
    * [displayObject.removeChildrenByName(name, cleanup)](#go2d.DisplayObject#removeChildrenByName)
    * [displayObject.removeChildrenByTag(tag, cleanup)](#go2d.DisplayObject#removeChildrenByTag)
    * [displayObject.removeAllChildren(cleanup)](#go2d.DisplayObject#removeAllChildren)
    * [displayObject.play()](#go2d.DisplayObject#play)
    * [displayObject.pause()](#go2d.DisplayObject#pause)
    * [displayObject.tick()](#go2d.DisplayObject#tick)
    * [displayObject.dispose()](#go2d.DisplayObject#dispose)
    * [displayObject.setText()](#go2d.DisplayObject#setText)
    * [displayObject.on(name, callback)](#go2d.DisplayObject#on)
    * [displayObject.emit(name, [event])](#go2d.DisplayObject#emit)
    * [displayObject.on(listeners)](#go2d.DisplayObject#on)
    * [displayObject.off(name, [callback])](#go2d.DisplayObject#off)
    * [displayObject.emit(name, [...params])](#go2d.DisplayObject#emit)
    * [event: "touchstart"](#go2d.DisplayObject#event_touchstart)
    * [event: "touchmove"](#go2d.DisplayObject#event_touchmove)
    * [event: "touchend"](#go2d.DisplayObject#event_touchend)
    * [event: "touchtap"](#go2d.DisplayObject#event_touchtap)
    * [event: "addedtostage"](#go2d.DisplayObject#event_addedtostage)
    * [event: "removedfromstage"](#go2d.DisplayObject#event_removedfromstage)
    * [event: "resize"](#go2d.DisplayObject#event_resize)
    * [event: "render"](#go2d.DisplayObject#event_render)
    * [event: "paint"](#go2d.DisplayObject#event_paint)
    * [event: "step"](#go2d.DisplayObject#event_step)
  * [class: go2d.ImageView](#go2d.ImageView)
    * [new go2d.ImageView(image)](#new_go2d.ImageView)
    * [imageView._image](#go2d.ImageView#_image)
    * [imageView._stage](#go2d.ImageView#_stage)
    * [imageView._timer](#go2d.ImageView#_timer)
    * [imageView._prevTime](#go2d.ImageView#_prevTime)
    * [imageView.canvas](#go2d.ImageView#canvas)
    * [imageView.context](#go2d.ImageView#context)
    * [imageView.name](#go2d.ImageView#name)
    * [imageView.tag](#go2d.ImageView#tag)
    * [imageView.stage](#go2d.ImageView#stage)
    * [imageView.paused](#go2d.ImageView#paused)
    * [imageView.touchable](#go2d.ImageView#touchable)
    * [imageView.touchChildren](#go2d.ImageView#touchChildren)
    * [imageView._dirty](#go2d.ImageView#_dirty)
    * [imageView._touches](#go2d.ImageView#_touches)
    * [imageView._children](#go2d.ImageView#_children)
    * [imageView.opacity](#go2d.ImageView#opacity)
    * [imageView.background](#go2d.ImageView#background)
    * [imageView.width](#go2d.ImageView#width)
    * [imageView.height](#go2d.ImageView#height)
    * [imageView.parent](#go2d.ImageView#parent)
    * [imageView.x](#go2d.ImageView#x)
    * [imageView.y](#go2d.ImageView#y)
    * [imageView.skewX](#go2d.ImageView#skewX)
    * [imageView.skewY](#go2d.ImageView#skewY)
    * [imageView.scaleX](#go2d.ImageView#scaleX)
    * [imageView.scaleY](#go2d.ImageView#scaleY)
    * [imageView.anchorX](#go2d.ImageView#anchorX)
    * [imageView.anchorY](#go2d.ImageView#anchorY)
    * [imageView.anchorOffsetX](#go2d.ImageView#anchorOffsetX)
    * [imageView.anchorOffsetY](#go2d.ImageView#anchorOffsetY)
    * [imageView.rotation](#go2d.ImageView#rotation)
    * [imageView.visible](#go2d.ImageView#visible)
    * [imageView.setImage(image)](#go2d.ImageView#setImage)
    * [imageView.getTransform()](#go2d.ImageView#getTransform)
    * [imageView.show()](#go2d.ImageView#show)
    * [imageView.hide()](#go2d.ImageView#hide)
    * [imageView.render()](#go2d.ImageView#render)
    * [imageView.update()](#go2d.ImageView#update)
    * [imageView.addChild(child)](#go2d.ImageView#addChild)
    * [imageView.addChildAt(child, index)](#go2d.ImageView#addChildAt)
    * [imageView.getChildByName(name)](#go2d.ImageView#getChildByName)
    * [imageView.getChildrenByTag(tag)](#go2d.ImageView#getChildrenByTag)
    * [imageView.getChildAt(index)](#go2d.ImageView#getChildAt)
    * [imageView.getChildIndex(child)](#go2d.ImageView#getChildIndex)
    * [imageView.swapChildren(child1, child2)](#go2d.ImageView#swapChildren)
    * [imageView.swapChildrenAt(index1, index2)](#go2d.ImageView#swapChildrenAt)
    * [imageView.sortChildren(compare)](#go2d.ImageView#sortChildren)
    * [imageView.getAllChildren()](#go2d.ImageView#getAllChildren)
    * [imageView.removeChild(child, cleanup)](#go2d.ImageView#removeChild)
    * [imageView.removeChildAt(index, cleanup)](#go2d.ImageView#removeChildAt)
    * [imageView.removeChildrenByName(name, cleanup)](#go2d.ImageView#removeChildrenByName)
    * [imageView.removeChildrenByTag(tag, cleanup)](#go2d.ImageView#removeChildrenByTag)
    * [imageView.removeAllChildren(cleanup)](#go2d.ImageView#removeAllChildren)
    * [imageView.play()](#go2d.ImageView#play)
    * [imageView.pause()](#go2d.ImageView#pause)
    * [imageView.tick()](#go2d.ImageView#tick)
    * [imageView.dispose()](#go2d.ImageView#dispose)
    * [imageView.setText()](#go2d.ImageView#setText)
    * [imageView.on(name, callback)](#go2d.ImageView#on)
    * [imageView.emit(name, [event])](#go2d.ImageView#emit)
    * [imageView.on(listeners)](#go2d.ImageView#on)
    * [imageView.off(name, [callback])](#go2d.ImageView#off)
    * [imageView.emit(name, [...params])](#go2d.ImageView#emit)
    * [event: "touchstart"](#go2d.ImageView#event_touchstart)
    * [event: "touchmove"](#go2d.ImageView#event_touchmove)
    * [event: "touchend"](#go2d.ImageView#event_touchend)
    * [event: "touchtap"](#go2d.ImageView#event_touchtap)
    * [event: "addedtostage"](#go2d.ImageView#event_addedtostage)
    * [event: "removedfromstage"](#go2d.ImageView#event_removedfromstage)
    * [event: "resize"](#go2d.ImageView#event_resize)
    * [event: "render"](#go2d.ImageView#event_render)
    * [event: "paint"](#go2d.ImageView#event_paint)
    * [event: "step"](#go2d.ImageView#event_step)
  * [class: go2d.ScrollView](#go2d.ScrollView)
    * [new go2d.ScrollView(content)](#new_go2d.ScrollView)
    * [scrollView.scrollTop](#go2d.ScrollView#scrollTop)
    * [scrollView.scrollLeft](#go2d.ScrollView#scrollLeft)
    * [scrollView._stage](#go2d.ScrollView#_stage)
    * [scrollView._timer](#go2d.ScrollView#_timer)
    * [scrollView._prevTime](#go2d.ScrollView#_prevTime)
    * [scrollView.canvas](#go2d.ScrollView#canvas)
    * [scrollView.context](#go2d.ScrollView#context)
    * [scrollView.name](#go2d.ScrollView#name)
    * [scrollView.tag](#go2d.ScrollView#tag)
    * [scrollView.stage](#go2d.ScrollView#stage)
    * [scrollView.paused](#go2d.ScrollView#paused)
    * [scrollView.touchable](#go2d.ScrollView#touchable)
    * [scrollView.touchChildren](#go2d.ScrollView#touchChildren)
    * [scrollView._dirty](#go2d.ScrollView#_dirty)
    * [scrollView._touches](#go2d.ScrollView#_touches)
    * [scrollView._children](#go2d.ScrollView#_children)
    * [scrollView.opacity](#go2d.ScrollView#opacity)
    * [scrollView.background](#go2d.ScrollView#background)
    * [scrollView.width](#go2d.ScrollView#width)
    * [scrollView.height](#go2d.ScrollView#height)
    * [scrollView.parent](#go2d.ScrollView#parent)
    * [scrollView.x](#go2d.ScrollView#x)
    * [scrollView.y](#go2d.ScrollView#y)
    * [scrollView.skewX](#go2d.ScrollView#skewX)
    * [scrollView.skewY](#go2d.ScrollView#skewY)
    * [scrollView.scaleX](#go2d.ScrollView#scaleX)
    * [scrollView.scaleY](#go2d.ScrollView#scaleY)
    * [scrollView.anchorX](#go2d.ScrollView#anchorX)
    * [scrollView.anchorY](#go2d.ScrollView#anchorY)
    * [scrollView.anchorOffsetX](#go2d.ScrollView#anchorOffsetX)
    * [scrollView.anchorOffsetY](#go2d.ScrollView#anchorOffsetY)
    * [scrollView.rotation](#go2d.ScrollView#rotation)
    * [scrollView.visible](#go2d.ScrollView#visible)
    * [scrollView.setContent(content)](#go2d.ScrollView#setContent)
    * [scrollView.getContent()](#go2d.ScrollView#getContent)
    * [scrollView.removeContent(cleanup)](#go2d.ScrollView#removeContent)
    * [scrollView.getTransform()](#go2d.ScrollView#getTransform)
    * [scrollView.show()](#go2d.ScrollView#show)
    * [scrollView.hide()](#go2d.ScrollView#hide)
    * [scrollView.render()](#go2d.ScrollView#render)
    * [scrollView.update()](#go2d.ScrollView#update)
    * [scrollView.addChild(child)](#go2d.ScrollView#addChild)
    * [scrollView.addChildAt(child, index)](#go2d.ScrollView#addChildAt)
    * [scrollView.getChildByName(name)](#go2d.ScrollView#getChildByName)
    * [scrollView.getChildrenByTag(tag)](#go2d.ScrollView#getChildrenByTag)
    * [scrollView.getChildAt(index)](#go2d.ScrollView#getChildAt)
    * [scrollView.getChildIndex(child)](#go2d.ScrollView#getChildIndex)
    * [scrollView.swapChildren(child1, child2)](#go2d.ScrollView#swapChildren)
    * [scrollView.swapChildrenAt(index1, index2)](#go2d.ScrollView#swapChildrenAt)
    * [scrollView.sortChildren(compare)](#go2d.ScrollView#sortChildren)
    * [scrollView.getAllChildren()](#go2d.ScrollView#getAllChildren)
    * [scrollView.removeChild(child, cleanup)](#go2d.ScrollView#removeChild)
    * [scrollView.removeChildAt(index, cleanup)](#go2d.ScrollView#removeChildAt)
    * [scrollView.removeChildrenByName(name, cleanup)](#go2d.ScrollView#removeChildrenByName)
    * [scrollView.removeChildrenByTag(tag, cleanup)](#go2d.ScrollView#removeChildrenByTag)
    * [scrollView.removeAllChildren(cleanup)](#go2d.ScrollView#removeAllChildren)
    * [scrollView.play()](#go2d.ScrollView#play)
    * [scrollView.pause()](#go2d.ScrollView#pause)
    * [scrollView.tick()](#go2d.ScrollView#tick)
    * [scrollView.dispose()](#go2d.ScrollView#dispose)
    * [scrollView.setText()](#go2d.ScrollView#setText)
    * [scrollView.on(name, callback)](#go2d.ScrollView#on)
    * [scrollView.emit(name, [event])](#go2d.ScrollView#emit)
    * [scrollView.on(listeners)](#go2d.ScrollView#on)
    * [scrollView.off(name, [callback])](#go2d.ScrollView#off)
    * [scrollView.emit(name, [...params])](#go2d.ScrollView#emit)
    * [event: "scroll"](#go2d.ScrollView#event_scroll)
    * [event: "touchstart"](#go2d.ScrollView#event_touchstart)
    * [event: "touchmove"](#go2d.ScrollView#event_touchmove)
    * [event: "touchend"](#go2d.ScrollView#event_touchend)
    * [event: "touchtap"](#go2d.ScrollView#event_touchtap)
    * [event: "addedtostage"](#go2d.ScrollView#event_addedtostage)
    * [event: "removedfromstage"](#go2d.ScrollView#event_removedfromstage)
    * [event: "resize"](#go2d.ScrollView#event_resize)
    * [event: "render"](#go2d.ScrollView#event_render)
    * [event: "paint"](#go2d.ScrollView#event_paint)
    * [event: "step"](#go2d.ScrollView#event_step)
  * [class: go2d.Sprite](#go2d.Sprite)
    * [new go2d.Sprite()](#new_go2d.Sprite)
    * [sprite._stage](#go2d.Sprite#_stage)
    * [sprite._timer](#go2d.Sprite#_timer)
    * [sprite._prevTime](#go2d.Sprite#_prevTime)
    * [sprite.canvas](#go2d.Sprite#canvas)
    * [sprite.context](#go2d.Sprite#context)
    * [sprite.name](#go2d.Sprite#name)
    * [sprite.tag](#go2d.Sprite#tag)
    * [sprite.stage](#go2d.Sprite#stage)
    * [sprite.paused](#go2d.Sprite#paused)
    * [sprite.touchable](#go2d.Sprite#touchable)
    * [sprite.touchChildren](#go2d.Sprite#touchChildren)
    * [sprite._dirty](#go2d.Sprite#_dirty)
    * [sprite._touches](#go2d.Sprite#_touches)
    * [sprite._children](#go2d.Sprite#_children)
    * [sprite.opacity](#go2d.Sprite#opacity)
    * [sprite.background](#go2d.Sprite#background)
    * [sprite.width](#go2d.Sprite#width)
    * [sprite.height](#go2d.Sprite#height)
    * [sprite.parent](#go2d.Sprite#parent)
    * [sprite.x](#go2d.Sprite#x)
    * [sprite.y](#go2d.Sprite#y)
    * [sprite.skewX](#go2d.Sprite#skewX)
    * [sprite.skewY](#go2d.Sprite#skewY)
    * [sprite.scaleX](#go2d.Sprite#scaleX)
    * [sprite.scaleY](#go2d.Sprite#scaleY)
    * [sprite.anchorX](#go2d.Sprite#anchorX)
    * [sprite.anchorY](#go2d.Sprite#anchorY)
    * [sprite.anchorOffsetX](#go2d.Sprite#anchorOffsetX)
    * [sprite.anchorOffsetY](#go2d.Sprite#anchorOffsetY)
    * [sprite.rotation](#go2d.Sprite#rotation)
    * [sprite.visible](#go2d.Sprite#visible)
    * [sprite.getTransform()](#go2d.Sprite#getTransform)
    * [sprite.show()](#go2d.Sprite#show)
    * [sprite.hide()](#go2d.Sprite#hide)
    * [sprite.render()](#go2d.Sprite#render)
    * [sprite.update()](#go2d.Sprite#update)
    * [sprite.addChild(child)](#go2d.Sprite#addChild)
    * [sprite.addChildAt(child, index)](#go2d.Sprite#addChildAt)
    * [sprite.getChildByName(name)](#go2d.Sprite#getChildByName)
    * [sprite.getChildrenByTag(tag)](#go2d.Sprite#getChildrenByTag)
    * [sprite.getChildAt(index)](#go2d.Sprite#getChildAt)
    * [sprite.getChildIndex(child)](#go2d.Sprite#getChildIndex)
    * [sprite.swapChildren(child1, child2)](#go2d.Sprite#swapChildren)
    * [sprite.swapChildrenAt(index1, index2)](#go2d.Sprite#swapChildrenAt)
    * [sprite.sortChildren(compare)](#go2d.Sprite#sortChildren)
    * [sprite.getAllChildren()](#go2d.Sprite#getAllChildren)
    * [sprite.removeChild(child, cleanup)](#go2d.Sprite#removeChild)
    * [sprite.removeChildAt(index, cleanup)](#go2d.Sprite#removeChildAt)
    * [sprite.removeChildrenByName(name, cleanup)](#go2d.Sprite#removeChildrenByName)
    * [sprite.removeChildrenByTag(tag, cleanup)](#go2d.Sprite#removeChildrenByTag)
    * [sprite.removeAllChildren(cleanup)](#go2d.Sprite#removeAllChildren)
    * [sprite.play()](#go2d.Sprite#play)
    * [sprite.pause()](#go2d.Sprite#pause)
    * [sprite.tick()](#go2d.Sprite#tick)
    * [sprite.dispose()](#go2d.Sprite#dispose)
    * [sprite.setText()](#go2d.Sprite#setText)
    * [sprite.on(name, callback)](#go2d.Sprite#on)
    * [sprite.emit(name, [event])](#go2d.Sprite#emit)
    * [sprite.on(listeners)](#go2d.Sprite#on)
    * [sprite.off(name, [callback])](#go2d.Sprite#off)
    * [sprite.emit(name, [...params])](#go2d.Sprite#emit)
    * [event: "touchstart"](#go2d.Sprite#event_touchstart)
    * [event: "touchmove"](#go2d.Sprite#event_touchmove)
    * [event: "touchend"](#go2d.Sprite#event_touchend)
    * [event: "touchtap"](#go2d.Sprite#event_touchtap)
    * [event: "addedtostage"](#go2d.Sprite#event_addedtostage)
    * [event: "removedfromstage"](#go2d.Sprite#event_removedfromstage)
    * [event: "resize"](#go2d.Sprite#event_resize)
    * [event: "render"](#go2d.Sprite#event_render)
    * [event: "paint"](#go2d.Sprite#event_paint)
    * [event: "step"](#go2d.Sprite#event_step)
  * [class: go2d.Stage](#go2d.Stage)
    * [new go2d.Stage(canvas)](#new_go2d.Stage)
    * [stage._stage](#go2d.Stage#_stage)
    * [stage._timer](#go2d.Stage#_timer)
    * [stage._prevTime](#go2d.Stage#_prevTime)
    * [stage.canvas](#go2d.Stage#canvas)
    * [stage.context](#go2d.Stage#context)
    * [stage.name](#go2d.Stage#name)
    * [stage.tag](#go2d.Stage#tag)
    * [stage.stage](#go2d.Stage#stage)
    * [stage.paused](#go2d.Stage#paused)
    * [stage.touchable](#go2d.Stage#touchable)
    * [stage.touchChildren](#go2d.Stage#touchChildren)
    * [stage._dirty](#go2d.Stage#_dirty)
    * [stage._touches](#go2d.Stage#_touches)
    * [stage._children](#go2d.Stage#_children)
    * [stage.opacity](#go2d.Stage#opacity)
    * [stage.background](#go2d.Stage#background)
    * [stage.width](#go2d.Stage#width)
    * [stage.height](#go2d.Stage#height)
    * [stage.parent](#go2d.Stage#parent)
    * [stage.x](#go2d.Stage#x)
    * [stage.y](#go2d.Stage#y)
    * [stage.skewX](#go2d.Stage#skewX)
    * [stage.skewY](#go2d.Stage#skewY)
    * [stage.scaleX](#go2d.Stage#scaleX)
    * [stage.scaleY](#go2d.Stage#scaleY)
    * [stage.anchorX](#go2d.Stage#anchorX)
    * [stage.anchorY](#go2d.Stage#anchorY)
    * [stage.anchorOffsetX](#go2d.Stage#anchorOffsetX)
    * [stage.anchorOffsetY](#go2d.Stage#anchorOffsetY)
    * [stage.rotation](#go2d.Stage#rotation)
    * [stage.visible](#go2d.Stage#visible)
    * [stage.render()](#go2d.Stage#render)
    * [stage.update()](#go2d.Stage#update)
    * [stage.addChild(child)](#go2d.Stage#addChild)
    * [stage.addChildAt(child, index)](#go2d.Stage#addChildAt)
    * [stage.getChildByName(name)](#go2d.Stage#getChildByName)
    * [stage.getChildrenByTag(tag)](#go2d.Stage#getChildrenByTag)
    * [stage.getChildAt(index)](#go2d.Stage#getChildAt)
    * [stage.getChildIndex(child)](#go2d.Stage#getChildIndex)
    * [stage.swapChildren(child1, child2)](#go2d.Stage#swapChildren)
    * [stage.swapChildrenAt(index1, index2)](#go2d.Stage#swapChildrenAt)
    * [stage.sortChildren(compare)](#go2d.Stage#sortChildren)
    * [stage.getAllChildren()](#go2d.Stage#getAllChildren)
    * [stage.removeChild(child, cleanup)](#go2d.Stage#removeChild)
    * [stage.removeChildAt(index, cleanup)](#go2d.Stage#removeChildAt)
    * [stage.removeChildrenByName(name, cleanup)](#go2d.Stage#removeChildrenByName)
    * [stage.removeChildrenByTag(tag, cleanup)](#go2d.Stage#removeChildrenByTag)
    * [stage.removeAllChildren(cleanup)](#go2d.Stage#removeAllChildren)
    * [stage.play()](#go2d.Stage#play)
    * [stage.pause()](#go2d.Stage#pause)
    * [stage.tick()](#go2d.Stage#tick)
    * [stage.dispose()](#go2d.Stage#dispose)
    * [stage.setText()](#go2d.Stage#setText)
    * [stage.on(name, callback)](#go2d.Stage#on)
    * [stage.emit(name, [event])](#go2d.Stage#emit)
    * [stage.on(listeners)](#go2d.Stage#on)
    * [stage.off(name, [callback])](#go2d.Stage#off)
    * [stage.emit(name, [...params])](#go2d.Stage#emit)
    * [event: "touchstart"](#go2d.Stage#event_touchstart)
    * [event: "touchmove"](#go2d.Stage#event_touchmove)
    * [event: "touchend"](#go2d.Stage#event_touchend)
    * [event: "touchtap"](#go2d.Stage#event_touchtap)
    * [event: "addedtostage"](#go2d.Stage#event_addedtostage)
    * [event: "removedfromstage"](#go2d.Stage#event_removedfromstage)
    * [event: "resize"](#go2d.Stage#event_resize)
    * [event: "render"](#go2d.Stage#event_render)
    * [event: "paint"](#go2d.Stage#event_paint)
    * [event: "step"](#go2d.Stage#event_step)
  * [class: go2d.TextField](#go2d.TextField)
    * [new go2d.TextField([text])](#new_go2d.TextField)
    * [textField.bold](#go2d.TextField#bold)
    * [textField.italic](#go2d.TextField#italic)
    * [textField.fontSize](#go2d.TextField#fontSize)
    * [textField.color](#go2d.TextField#color)
    * [textField.textAlign](#go2d.TextField#textAlign)
    * [textField.lineHeight](#go2d.TextField#lineHeight)
    * [textField.strokeSize](#go2d.TextField#strokeSize)
    * [textField.strokeColor](#go2d.TextField#strokeColor)
    * [textField.fontFamily](#go2d.TextField#fontFamily)
    * [textField.breakWord](#go2d.TextField#breakWord)
    * [textField.autoResize](#go2d.TextField#autoResize)
    * [textField.paddingTop](#go2d.TextField#paddingTop)
    * [textField.paddingLeft](#go2d.TextField#paddingLeft)
    * [textField.paddingRight](#go2d.TextField#paddingRight)
    * [textField.paddingBottom](#go2d.TextField#paddingBottom)
    * [textField.maxWidth](#go2d.TextField#maxWidth)
    * [textField.maxHeight](#go2d.TextField#maxHeight)
    * [textField.textRange](#go2d.TextField#textRange)
    * [textField.textWidth](#go2d.TextField#textWidth)
    * [textField.textHeight](#go2d.TextField#textHeight)
    * [textField.text](#go2d.TextField#text)
    * [textField._stage](#go2d.TextField#_stage)
    * [textField._timer](#go2d.TextField#_timer)
    * [textField._prevTime](#go2d.TextField#_prevTime)
    * [textField.canvas](#go2d.TextField#canvas)
    * [textField.context](#go2d.TextField#context)
    * [textField.name](#go2d.TextField#name)
    * [textField.tag](#go2d.TextField#tag)
    * [textField.stage](#go2d.TextField#stage)
    * [textField.paused](#go2d.TextField#paused)
    * [textField.touchable](#go2d.TextField#touchable)
    * [textField.touchChildren](#go2d.TextField#touchChildren)
    * [textField._dirty](#go2d.TextField#_dirty)
    * [textField._touches](#go2d.TextField#_touches)
    * [textField._children](#go2d.TextField#_children)
    * [textField.opacity](#go2d.TextField#opacity)
    * [textField.background](#go2d.TextField#background)
    * [textField.width](#go2d.TextField#width)
    * [textField.height](#go2d.TextField#height)
    * [textField.parent](#go2d.TextField#parent)
    * [textField.x](#go2d.TextField#x)
    * [textField.y](#go2d.TextField#y)
    * [textField.skewX](#go2d.TextField#skewX)
    * [textField.skewY](#go2d.TextField#skewY)
    * [textField.scaleX](#go2d.TextField#scaleX)
    * [textField.scaleY](#go2d.TextField#scaleY)
    * [textField.anchorX](#go2d.TextField#anchorX)
    * [textField.anchorY](#go2d.TextField#anchorY)
    * [textField.anchorOffsetX](#go2d.TextField#anchorOffsetX)
    * [textField.anchorOffsetY](#go2d.TextField#anchorOffsetY)
    * [textField.rotation](#go2d.TextField#rotation)
    * [textField.visible](#go2d.TextField#visible)
    * [textField.getTransform()](#go2d.TextField#getTransform)
    * [textField.show()](#go2d.TextField#show)
    * [textField.hide()](#go2d.TextField#hide)
    * [textField.render()](#go2d.TextField#render)
    * [textField.update()](#go2d.TextField#update)
    * [textField.addChild(child)](#go2d.TextField#addChild)
    * [textField.addChildAt(child, index)](#go2d.TextField#addChildAt)
    * [textField.getChildByName(name)](#go2d.TextField#getChildByName)
    * [textField.getChildrenByTag(tag)](#go2d.TextField#getChildrenByTag)
    * [textField.getChildAt(index)](#go2d.TextField#getChildAt)
    * [textField.getChildIndex(child)](#go2d.TextField#getChildIndex)
    * [textField.swapChildren(child1, child2)](#go2d.TextField#swapChildren)
    * [textField.swapChildrenAt(index1, index2)](#go2d.TextField#swapChildrenAt)
    * [textField.sortChildren(compare)](#go2d.TextField#sortChildren)
    * [textField.getAllChildren()](#go2d.TextField#getAllChildren)
    * [textField.removeChild(child, cleanup)](#go2d.TextField#removeChild)
    * [textField.removeChildAt(index, cleanup)](#go2d.TextField#removeChildAt)
    * [textField.removeChildrenByName(name, cleanup)](#go2d.TextField#removeChildrenByName)
    * [textField.removeChildrenByTag(tag, cleanup)](#go2d.TextField#removeChildrenByTag)
    * [textField.removeAllChildren(cleanup)](#go2d.TextField#removeAllChildren)
    * [textField.play()](#go2d.TextField#play)
    * [textField.pause()](#go2d.TextField#pause)
    * [textField.tick()](#go2d.TextField#tick)
    * [textField.dispose()](#go2d.TextField#dispose)
    * [textField.setText()](#go2d.TextField#setText)
    * [textField.on(name, callback)](#go2d.TextField#on)
    * [textField.emit(name, [event])](#go2d.TextField#emit)
    * [textField.on(listeners)](#go2d.TextField#on)
    * [textField.off(name, [callback])](#go2d.TextField#off)
    * [textField.emit(name, [...params])](#go2d.TextField#emit)
    * [event: "touchstart"](#go2d.TextField#event_touchstart)
    * [event: "touchmove"](#go2d.TextField#event_touchmove)
    * [event: "touchend"](#go2d.TextField#event_touchend)
    * [event: "touchtap"](#go2d.TextField#event_touchtap)
    * [event: "addedtostage"](#go2d.TextField#event_addedtostage)
    * [event: "removedfromstage"](#go2d.TextField#event_removedfromstage)
    * [event: "resize"](#go2d.TextField#event_resize)
    * [event: "render"](#go2d.TextField#event_render)
    * [event: "paint"](#go2d.TextField#event_paint)
    * [event: "step"](#go2d.TextField#event_step)
  * [class: go2d.Event](#go2d.Event)
    * [new go2d.Event(type, [data])](#new_go2d.Event)
    * [event.type](#go2d.Event#type)
    * [event._propagationStopped](#go2d.Event#_propagationStopped)
    * [event._defaultPrevented](#go2d.Event#_defaultPrevented)
    * [event.stopPropagation()](#go2d.Event#stopPropagation)
    * [event.isPropagationStopped()](#go2d.Event#isPropagationStopped)
    * [event.preventDefault()](#go2d.Event#preventDefault)
    * [event.isDefaultPrevented()](#go2d.Event#isDefaultPrevented)
  * [class: go2d.EventDispatcher](#go2d.EventDispatcher)
    * [new go2d.EventDispatcher(type, [data])](#new_go2d.EventDispatcher)
    * [eventDispatcher.on(name, callback)](#go2d.EventDispatcher#on)
    * [eventDispatcher.emit(name, [event])](#go2d.EventDispatcher#emit)
    * [eventDispatcher.on(listeners)](#go2d.EventDispatcher#on)
    * [eventDispatcher.off(name, [callback])](#go2d.EventDispatcher#off)
    * [eventDispatcher.emit(name, [...params])](#go2d.EventDispatcher#emit)
    * [eventDispatcher.dispose()](#go2d.EventDispatcher#dispose)
  * [class: go2d.ResizeEvent](#go2d.ResizeEvent)
    * [new go2d.ResizeEvent(oldSize, newSize)](#new_go2d.ResizeEvent)
    * [resizeEvent.oldSize](#go2d.ResizeEvent#oldSize)
    * [resizeEvent.newSize](#go2d.ResizeEvent#newSize)
    * [resizeEvent.type](#go2d.ResizeEvent#type)
    * [resizeEvent._propagationStopped](#go2d.ResizeEvent#_propagationStopped)
    * [resizeEvent._defaultPrevented](#go2d.ResizeEvent#_defaultPrevented)
    * [resizeEvent.stopPropagation()](#go2d.ResizeEvent#stopPropagation)
    * [resizeEvent.isPropagationStopped()](#go2d.ResizeEvent#isPropagationStopped)
    * [resizeEvent.preventDefault()](#go2d.ResizeEvent#preventDefault)
    * [resizeEvent.isDefaultPrevented()](#go2d.ResizeEvent#isDefaultPrevented)
  * [class: go2d.TouchEvent](#go2d.TouchEvent)
    * [new go2d.TouchEvent(type, x, y, globalX, globalY, identifier)](#new_go2d.TouchEvent)
    * [touchEvent.x](#go2d.TouchEvent#x)
    * [touchEvent.y](#go2d.TouchEvent#y)
    * [touchEvent.globalX](#go2d.TouchEvent#globalX)
    * [touchEvent.globalY](#go2d.TouchEvent#globalY)
    * [touchEvent.identifier](#go2d.TouchEvent#identifier)
    * [touchEvent.type](#go2d.TouchEvent#type)
    * [touchEvent._propagationStopped](#go2d.TouchEvent#_propagationStopped)
    * [touchEvent._defaultPrevented](#go2d.TouchEvent#_defaultPrevented)
    * [touchEvent.stopPropagation()](#go2d.TouchEvent#stopPropagation)
    * [touchEvent.isPropagationStopped()](#go2d.TouchEvent#isPropagationStopped)
    * [touchEvent.preventDefault()](#go2d.TouchEvent#preventDefault)
    * [touchEvent.isDefaultPrevented()](#go2d.TouchEvent#isDefaultPrevented)
    * [const: TouchEvent.TOUCH_START](#go2d.TouchEvent.TOUCH_START)
    * [const: TouchEvent.TOUCH_MOVE](#go2d.TouchEvent.TOUCH_MOVE)
    * [const: TouchEvent.TOUCH_END](#go2d.TouchEvent.TOUCH_END)
    * [const: TouchEvent.TOUCH_TAP](#go2d.TouchEvent.TOUCH_TAP)
  * [class: go2d.Matrix](#go2d.Matrix)
    * [new go2d.Matrix(a, b, c, d, tx, ty)](#new_go2d.Matrix)
    * [matrix.a](#go2d.Matrix#a)
    * [matrix.b](#go2d.Matrix#b)
    * [matrix.c](#go2d.Matrix#c)
    * [matrix.d](#go2d.Matrix#d)
    * [matrix.tx](#go2d.Matrix#tx)
    * [matrix.ty](#go2d.Matrix#ty)
    * [Matrix.DEG_TO_RAD](#go2d.Matrix.DEG_TO_RAD)
    * [matrix.set()](#go2d.Matrix#set)
    * [matrix.identity()](#go2d.Matrix#identity)
    * [matrix.invert()](#go2d.Matrix#invert)
    * [matrix.prepend(matrix)](#go2d.Matrix#prepend)
    * [matrix.append(matrix)](#go2d.Matrix#append)
    * [matrix.multiply(vector)](#go2d.Matrix#multiply)
    * [matrix.scale(x, y)](#go2d.Matrix#scale)
    * [matrix.rotate(angle)](#go2d.Matrix#rotate)
    * [matrix.skew(x, y)](#go2d.Matrix#skew)
    * [matrix.translate(x, y)](#go2d.Matrix#translate)
    * [matrix.clone()](#go2d.Matrix#clone)
  * [class: go2d.Vector](#go2d.Vector)
    * [new go2d.Vector(x, y)](#new_go2d.Vector)
    * [vector.length](#go2d.Vector#length)
    * [vector.x](#go2d.Vector#x)
    * [vector.y](#go2d.Vector#y)
    * [vector.set()](#go2d.Vector#set)
    * [vector.add(vector)](#go2d.Vector#add)
    * [vector.subtract(vector)](#go2d.Vector#subtract)
    * [vector.divide(vector)](#go2d.Vector#divide)
    * [vector.dotProduct(vector)](#go2d.Vector#dotProduct)
    * [vector.normalize()](#go2d.Vector#normalize)
    * [vector.scale(x, y)](#go2d.Vector#scale)
    * [vector.rotate(angle)](#go2d.Vector#rotate)
    * [vector.angle()](#go2d.Vector#angle)
    * [vector.distance(vector)](#go2d.Vector#distance)
    * [vector.clone()](#go2d.Vector#clone)
  * [class: go2d.ResourceLoader](#go2d.ResourceLoader)
    * [new go2d.ResourceLoader(resources, [options])](#new_go2d.ResourceLoader)
    * [resourceLoader.total](#go2d.ResourceLoader#total)
    * [resourceLoader.errorCount](#go2d.ResourceLoader#errorCount)
    * [resourceLoader.loadedCount](#go2d.ResourceLoader#loadedCount)
    * [resourceLoader.retryTimes](#go2d.ResourceLoader#retryTimes)
    * [resourceLoader.load()](#go2d.ResourceLoader#load)
    * [resourceLoader.get(type, name)](#go2d.ResourceLoader#get)
    * [resourceLoader.getXML(name)](#go2d.ResourceLoader#getXML)
    * [resourceLoader.getJSON(name)](#go2d.ResourceLoader#getJSON)
    * [resourceLoader.getText(name)](#go2d.ResourceLoader#getText)
    * [resourceLoader.getImage(name)](#go2d.ResourceLoader#getImage)
    * [resourceLoader.getAudio(name)](#go2d.ResourceLoader#getAudio)
    * [resourceLoader.getBinary(name)](#go2d.ResourceLoader#getBinary)
    * [resourceLoader.destroy([type], [name])](#go2d.ResourceLoader#destroy)
    * [resourceLoader.destroyXML(name)](#go2d.ResourceLoader#destroyXML)
    * [resourceLoader.destroyJSON(name)](#go2d.ResourceLoader#destroyJSON)
    * [resourceLoader.destroyText(name)](#go2d.ResourceLoader#destroyText)
    * [resourceLoader.destroyImage(name)](#go2d.ResourceLoader#destroyImage)
    * [resourceLoader.destroyAudio(name)](#go2d.ResourceLoader#destroyAudio)
    * [resourceLoader.destroyBinary(name)](#go2d.ResourceLoader#destroyBinary)
    * [resourceLoader.destroyAll()](#go2d.ResourceLoader#destroyAll)
    * [resourceLoader.dispose()](#go2d.ResourceLoader#dispose)
    * [resourceLoader.on(name, callback)](#go2d.ResourceLoader#on)
    * [resourceLoader.emit(name, [event])](#go2d.ResourceLoader#emit)
    * [resourceLoader.on(listeners)](#go2d.ResourceLoader#on)
    * [resourceLoader.off(name, [callback])](#go2d.ResourceLoader#off)
    * [resourceLoader.emit(name, [...params])](#go2d.ResourceLoader#emit)
    * [const: ResourceLoader.TYPE_XML](#go2d.ResourceLoader.TYPE_XML)
    * [const: ResourceLoader.TYPE_JSON](#go2d.ResourceLoader.TYPE_JSON)
    * [const: ResourceLoader.TYPE_TEXT](#go2d.ResourceLoader.TYPE_TEXT)
    * [const: ResourceLoader.TYPE_IMAGE](#go2d.ResourceLoader.TYPE_IMAGE)
    * [const: ResourceLoader.TYPE_AUDIO](#go2d.ResourceLoader.TYPE_AUDIO)
    * [const: ResourceLoader.TYPE_BINARY](#go2d.ResourceLoader.TYPE_BINARY)
    * [event: "progress"](#go2d.ResourceLoader#event_progress)
    * [event: "error"](#go2d.ResourceLoader#event_error)
    * [event: "complete"](#go2d.ResourceLoader#event_complete)
    * [event: "finish"](#go2d.ResourceLoader#event_finish)
  * [class: go2d.URLRequest](#go2d.URLRequest)
    * [new go2d.URLRequest(url, [options])](#new_go2d.URLRequest)
    * [urlRequest.url](#go2d.URLRequest#url)
    * [urlRequest.type](#go2d.URLRequest#type)
    * [urlRequest.dataType](#go2d.URLRequest#dataType)
    * [urlRequest.contentType](#go2d.URLRequest#contentType)
    * [urlRequest.responseType](#go2d.URLRequest#responseType)
    * [urlRequest.xhr](#go2d.URLRequest#xhr)
    * [urlRequest.send(data)](#go2d.URLRequest#send)
    * [urlRequest.abort()](#go2d.URLRequest#abort)
    * [urlRequest.on(name, callback)](#go2d.URLRequest#on)
    * [urlRequest.emit(name, [event])](#go2d.URLRequest#emit)
    * [urlRequest.on(listeners)](#go2d.URLRequest#on)
    * [urlRequest.off(name, [callback])](#go2d.URLRequest#off)
    * [urlRequest.emit(name, [...params])](#go2d.URLRequest#emit)
    * [urlRequest.dispose()](#go2d.URLRequest#dispose)
    * [event: "success"](#go2d.URLRequest#event_success)
    * [event: "error"](#go2d.URLRequest#event_error)
  * [class: go2d.Ease](#go2d.Ease)
    * [new go2d.Ease()](#new_go2d.Ease)
    * [Ease.linear(t, b, c, d)](#go2d.Ease.linear)
    * [Ease.easeInQuad()](#go2d.Ease.easeInQuad)
    * [Ease.easeOutQuad()](#go2d.Ease.easeOutQuad)
    * [Ease.easeInOutQuad()](#go2d.Ease.easeInOutQuad)
    * [Ease.easeInCubic()](#go2d.Ease.easeInCubic)
    * [Ease.easeOutCubic()](#go2d.Ease.easeOutCubic)
    * [Ease.easeInOutCubic()](#go2d.Ease.easeInOutCubic)
    * [Ease.easeInQuart()](#go2d.Ease.easeInQuart)
    * [Ease.easeOutQuart()](#go2d.Ease.easeOutQuart)
    * [Ease.easeInOutQuart()](#go2d.Ease.easeInOutQuart)
    * [Ease.easeInQuint()](#go2d.Ease.easeInQuint)
    * [Ease.easeOutQuint()](#go2d.Ease.easeOutQuint)
    * [Ease.easeInOutQuint()](#go2d.Ease.easeInOutQuint)
    * [Ease.easeInSine()](#go2d.Ease.easeInSine)
    * [Ease.easeOutSine()](#go2d.Ease.easeOutSine)
    * [Ease.easeInOutSine()](#go2d.Ease.easeInOutSine)
    * [Ease.easeInExpo()](#go2d.Ease.easeInExpo)
    * [Ease.easeOutExpo()](#go2d.Ease.easeOutExpo)
    * [Ease.easeInOutExpo()](#go2d.Ease.easeInOutExpo)
    * [Ease.easeInCirc()](#go2d.Ease.easeInCirc)
    * [Ease.easeOutCirc()](#go2d.Ease.easeOutCirc)
    * [Ease.easeInOutCirc()](#go2d.Ease.easeInOutCirc)
    * [Ease.easeInElastic()](#go2d.Ease.easeInElastic)
    * [Ease.easeOutElastic()](#go2d.Ease.easeOutElastic)
    * [Ease.easeInOutElastic()](#go2d.Ease.easeInOutElastic)
    * [Ease.easeInBack()](#go2d.Ease.easeInBack)
    * [Ease.easeOutBack()](#go2d.Ease.easeOutBack)
    * [Ease.easeInOutBack()](#go2d.Ease.easeInOutBack)
    * [Ease.easeInBounce()](#go2d.Ease.easeInBounce)
    * [Ease.easeOutBounce()](#go2d.Ease.easeOutBounce)
    * [Ease.easeInOutBounce()](#go2d.Ease.easeInOutBounce)
  * [class: go2d.Tween](#go2d.Tween)
    * [new go2d.Tween(target, [options])](#new_go2d.Tween)
    * [tween.length](#go2d.Tween#length)
    * [tween.wait(duration)](#go2d.Tween#wait)
    * [tween.from(props)](#go2d.Tween#from)
    * [tween.to(props, duration, [ease])](#go2d.Tween#to)
    * [tween.call(callback)](#go2d.Tween#call)

<a name="go2d.isObject"></a>
##go2d.isObject(obj)
判断是否对象类型

**Params**

- obj `mixed` - 要判断的对象  

**Returns**: `Boolean` - 是否对象类型  
<a name="go2d.isNumber"></a>
##go2d.isNumber(obj)
判断是否数值类型

**Params**

- obj `mixed` - 要判断的对象  

**Returns**: `Boolean` - 是否数值类型  
<a name="go2d.isString"></a>
##go2d.isString(obj)
判断是否字符串类型

**Params**

- obj `mixed` - 要判断的对象  

**Returns**: `Boolean` - 是否字符串类型  
<a name="go2d.isFunction"></a>
##go2d.isFunction(obj)
判断是否函数类型

**Params**

- obj `mixed` - 要判断的对象  

**Returns**: `Boolean` - 是否函数类型  
<a name="go2d.isArray"></a>
##go2d.isArray(obj)
判断是否数组类型

**Params**

- obj `mixed` - 要判断的对象  

**Returns**: `Boolean` - 是否数组类型  
<a name="go2d.forEach"></a>
##go2d.forEach(obj, iterator, [thisArg])
遍历对象或数组

**Params**

- obj `Object` | `Array` - 要遍历的对象或数组  
- iterator `function` - 遍历函数，共有三个参数：元素值、元素索引、被遍历的对象或数组  
- \[thisArg=obj\] `mixed` - 遍历时 this 关键字所引用的对象  

<a name="go2d.Class"></a>
##class: go2d.Class
**Members**

* [class: go2d.Class](#go2d.Class)
  * [new go2d.Class()](#new_go2d.Class)
  * [Class.extend(props, [statics])](#go2d.Class.extend)

<a name="new_go2d.Class"></a>
###new go2d.Class()
Go2d 的基础类，Go2d 的所有类都继承于该类。

**Author**: Lanfei  
<a name="go2d.Class.extend"></a>
###Class.extend(props, [statics])
创建一个继承于该类的新类

**Params**

- props `object` - 新类的属性或方法  
- \[statics\] `object` - 新类的静态属性或方法  

**Returns**: `function` - 新类的构造函数  
<a name="go2d.Director"></a>
##class: go2d.Director
**Extends**: `go2d.Class`  
**Members**

* [class: go2d.Director](#go2d.Director)
  * [new go2d.Director(stage, [options])](#new_go2d.Director)
  * [director.fps](#go2d.Director#fps)
  * [director.frameRate](#go2d.Director#frameRate)
  * [director._paused](#go2d.Director#_paused)
  * [director._mainLoop()](#go2d.Director#_mainLoop)
  * [director.play()](#go2d.Director#play)
  * [director.pause()](#go2d.Director#pause)

<a name="new_go2d.Director"></a>
###new go2d.Director(stage, [options])
导演类，负责游戏逻辑流程的管理。

**Params**

- stage <code>[Stage](#go2d.Stage)</code>  
- \[options\] `Object` - 配置参数  
  - \[frameRate\] `Object` - 默认帧频  

**Extends**: `go2d.Class`  
**Author**: Lanfei  
<a name="go2d.Director#fps"></a>
###director.fps
当前帧频

**Type**: `number`  
**Read only**: true  
<a name="go2d.Director#frameRate"></a>
###director.frameRate
默认帧频

**Type**: `number`  
**Default**: `60`  
<a name="go2d.Director#_paused"></a>
###director._paused
是否已暂停

**Type**: `Boolean`  
**Default**: `true`  
**Access**: protected  
<a name="go2d.Director#_mainLoop"></a>
###director._mainLoop()
游戏主循环

**Access**: protected  
<a name="go2d.Director#play"></a>
###director.play()
开始游戏主循环

**Returns**: `this`  
<a name="go2d.Director#pause"></a>
###director.pause()
暂停游戏主循环

**Returns**: `this`  
<a name="go2d.ObjectPool"></a>
##class: go2d.ObjectPool
**Extends**: `go2d.Class`  
**Members**

* [class: go2d.ObjectPool](#go2d.ObjectPool)
  * [new go2d.ObjectPool(factory, size)](#new_go2d.ObjectPool)
  * [objectPool._pool](#go2d.ObjectPool#_pool)
  * [objectPool._factory](#go2d.ObjectPool#_factory)
  * [objectPool.size](#go2d.ObjectPool#size)
  * [objectPool.length](#go2d.ObjectPool#length)
  * [objectPool._create()](#go2d.ObjectPool#_create)
  * [objectPool.get()](#go2d.ObjectPool#get)
  * [objectPool.recycle(对象示例)](#go2d.ObjectPool#recycle)
  * [objectPool.clear()](#go2d.ObjectPool#clear)
  * [objectPool.dispose()](#go2d.ObjectPool#dispose)

<a name="new_go2d.ObjectPool"></a>
###new go2d.ObjectPool(factory, size)
对象池类，一个简单的对象池实现，适用于构造函数无参数的对象。

**Params**

- factory `function` - 要进行缓存的类  
- size `number` - 对象池的最大容量  

**Extends**: `go2d.Class`  
**Author**: Lanfei  
<a name="go2d.ObjectPool#_pool"></a>
###objectPool._pool
已缓存的对象数组

**Type**: `Array`  
**Access**: protected  
<a name="go2d.ObjectPool#_factory"></a>
###objectPool._factory
要进行缓存的类

**Type**: `function`  
**Access**: protected  
<a name="go2d.ObjectPool#size"></a>
###objectPool.size
对象池的最大容量

**Type**: `number`  
**Default**: `30`  
<a name="go2d.ObjectPool#length"></a>
###objectPool.length
已缓存的对象数量

**Type**: `number`  
**Read only**: true  
<a name="go2d.ObjectPool#_create"></a>
###objectPool._create()
创建一个新的对象，可以重载该方法，以实现适用于类构造函数有参数的对象池

**Returns**: `mixed` - 新的对象示例  
**Access**: protected  
<a name="go2d.ObjectPool#get"></a>
###objectPool.get()
获取一个对象

**Returns**: `mixed` - 对象示例  
<a name="go2d.ObjectPool#recycle"></a>
###objectPool.recycle(对象示例)
回收一个对象

**Params**

- 对象示例 `mixed`  

**Returns**: `this`  
<a name="go2d.ObjectPool#clear"></a>
###objectPool.clear()
清空对象池

**Returns**: `this`  
<a name="go2d.ObjectPool#dispose"></a>
###objectPool.dispose()
释放对象池内存

<a name="go2d.DisplayObject"></a>
##class: go2d.DisplayObject
**Extends**: `go2d.EventDispatcher`  
**Members**

* [class: go2d.DisplayObject](#go2d.DisplayObject)
  * [new go2d.DisplayObject(canvas)](#new_go2d.DisplayObject)
  * [displayObject._stage](#go2d.DisplayObject#_stage)
  * [displayObject._timer](#go2d.DisplayObject#_timer)
  * [displayObject._prevTime](#go2d.DisplayObject#_prevTime)
  * [displayObject.canvas](#go2d.DisplayObject#canvas)
  * [displayObject.context](#go2d.DisplayObject#context)
  * [displayObject.name](#go2d.DisplayObject#name)
  * [displayObject.tag](#go2d.DisplayObject#tag)
  * [displayObject.stage](#go2d.DisplayObject#stage)
  * [displayObject.paused](#go2d.DisplayObject#paused)
  * [displayObject.touchable](#go2d.DisplayObject#touchable)
  * [displayObject.touchChildren](#go2d.DisplayObject#touchChildren)
  * [displayObject._dirty](#go2d.DisplayObject#_dirty)
  * [displayObject._touches](#go2d.DisplayObject#_touches)
  * [displayObject._children](#go2d.DisplayObject#_children)
  * [displayObject.opacity](#go2d.DisplayObject#opacity)
  * [displayObject.background](#go2d.DisplayObject#background)
  * [displayObject.width](#go2d.DisplayObject#width)
  * [displayObject.height](#go2d.DisplayObject#height)
  * [displayObject.parent](#go2d.DisplayObject#parent)
  * [displayObject.x](#go2d.DisplayObject#x)
  * [displayObject.y](#go2d.DisplayObject#y)
  * [displayObject.skewX](#go2d.DisplayObject#skewX)
  * [displayObject.skewY](#go2d.DisplayObject#skewY)
  * [displayObject.scaleX](#go2d.DisplayObject#scaleX)
  * [displayObject.scaleY](#go2d.DisplayObject#scaleY)
  * [displayObject.anchorX](#go2d.DisplayObject#anchorX)
  * [displayObject.anchorY](#go2d.DisplayObject#anchorY)
  * [displayObject.anchorOffsetX](#go2d.DisplayObject#anchorOffsetX)
  * [displayObject.anchorOffsetY](#go2d.DisplayObject#anchorOffsetY)
  * [displayObject.rotation](#go2d.DisplayObject#rotation)
  * [displayObject.visible](#go2d.DisplayObject#visible)
  * [displayObject.render()](#go2d.DisplayObject#render)
  * [displayObject.update()](#go2d.DisplayObject#update)
  * [displayObject.addChild(child)](#go2d.DisplayObject#addChild)
  * [displayObject.addChildAt(child, index)](#go2d.DisplayObject#addChildAt)
  * [displayObject.getChildByName(name)](#go2d.DisplayObject#getChildByName)
  * [displayObject.getChildrenByTag(tag)](#go2d.DisplayObject#getChildrenByTag)
  * [displayObject.getChildAt(index)](#go2d.DisplayObject#getChildAt)
  * [displayObject.getChildIndex(child)](#go2d.DisplayObject#getChildIndex)
  * [displayObject.swapChildren(child1, child2)](#go2d.DisplayObject#swapChildren)
  * [displayObject.swapChildrenAt(index1, index2)](#go2d.DisplayObject#swapChildrenAt)
  * [displayObject.sortChildren(compare)](#go2d.DisplayObject#sortChildren)
  * [displayObject.getAllChildren()](#go2d.DisplayObject#getAllChildren)
  * [displayObject.removeChild(child, cleanup)](#go2d.DisplayObject#removeChild)
  * [displayObject.removeChildAt(index, cleanup)](#go2d.DisplayObject#removeChildAt)
  * [displayObject.removeChildrenByName(name, cleanup)](#go2d.DisplayObject#removeChildrenByName)
  * [displayObject.removeChildrenByTag(tag, cleanup)](#go2d.DisplayObject#removeChildrenByTag)
  * [displayObject.removeAllChildren(cleanup)](#go2d.DisplayObject#removeAllChildren)
  * [displayObject.play()](#go2d.DisplayObject#play)
  * [displayObject.pause()](#go2d.DisplayObject#pause)
  * [displayObject.tick()](#go2d.DisplayObject#tick)
  * [displayObject.dispose()](#go2d.DisplayObject#dispose)
  * [displayObject.setText()](#go2d.DisplayObject#setText)
  * [displayObject.on(name, callback)](#go2d.DisplayObject#on)
  * [displayObject.emit(name, [event])](#go2d.DisplayObject#emit)
  * [displayObject.on(listeners)](#go2d.DisplayObject#on)
  * [displayObject.off(name, [callback])](#go2d.DisplayObject#off)
  * [displayObject.emit(name, [...params])](#go2d.DisplayObject#emit)
  * [event: "touchstart"](#go2d.DisplayObject#event_touchstart)
  * [event: "touchmove"](#go2d.DisplayObject#event_touchmove)
  * [event: "touchend"](#go2d.DisplayObject#event_touchend)
  * [event: "touchtap"](#go2d.DisplayObject#event_touchtap)
  * [event: "addedtostage"](#go2d.DisplayObject#event_addedtostage)
  * [event: "removedfromstage"](#go2d.DisplayObject#event_removedfromstage)
  * [event: "resize"](#go2d.DisplayObject#event_resize)
  * [event: "render"](#go2d.DisplayObject#event_render)
  * [event: "paint"](#go2d.DisplayObject#event_paint)
  * [event: "step"](#go2d.DisplayObject#event_step)

<a name="new_go2d.DisplayObject"></a>
###new go2d.DisplayObject(canvas)
显示对象基类，实现了显示对象的基本渲染和事件逻辑，显示对象元素类和舞台类都基于此类。

**Params**

- canvas `object` - 用于渲染的画布对象  

**Extends**: `go2d.EventDispatcher`  
**Author**: Lanfei  
<a name="go2d.DisplayObject#_stage"></a>
###displayObject._stage
舞台对象

**Type**: [Stage](#go2d.Stage)  
**Access**: protected  
<a name="go2d.DisplayObject#_timer"></a>
###displayObject._timer
主循环定时器

**Type**: `Object`  
**Access**: protected  
<a name="go2d.DisplayObject#_prevTime"></a>
###displayObject._prevTime
上一帧时间戳，用于计算帧频

**Type**: `number`  
**Access**: protected  
<a name="go2d.DisplayObject#canvas"></a>
###displayObject.canvas
用于渲染的画布对象

**Type**: `object`  
**Read only**: true  
<a name="go2d.DisplayObject#context"></a>
###displayObject.context
画布的上下文对象

**Type**: `object`  
**Read only**: true  
<a name="go2d.DisplayObject#name"></a>
###displayObject.name
用于标识该对象的名字，该属性在兄弟对象中应该唯一

**Type**: `string`  
<a name="go2d.DisplayObject#tag"></a>
###displayObject.tag
用于标识该对象的标签

**Type**: `string`  
<a name="go2d.DisplayObject#stage"></a>
###displayObject.stage
该对象所属的舞台对象

**Type**: [Stage](#go2d.Stage)  
**Read only**: true  
<a name="go2d.DisplayObject#paused"></a>
###displayObject.paused
是否已暂停

**Type**: `Boolean`  
**Default**: `false`  
<a name="go2d.DisplayObject#touchable"></a>
###displayObject.touchable
是否可点击

**Type**: `Boolean`  
**Default**: `true`  
<a name="go2d.DisplayObject#touchChildren"></a>
###displayObject.touchChildren
子节点是否可点击

**Type**: `Boolean`  
**Default**: `true`  
<a name="go2d.DisplayObject#_dirty"></a>
###displayObject._dirty
是否需要重新渲染

**Type**: `Boolean`  
**Default**: `true`  
**Access**: protected  
<a name="go2d.DisplayObject#_touches"></a>
###displayObject._touches
触摸标识数组

**Type**: `Array`  
**Access**: protected  
<a name="go2d.DisplayObject#_children"></a>
###displayObject._children
子对象数组

**Type**: `Array`  
**Access**: protected  
<a name="go2d.DisplayObject#opacity"></a>
###displayObject.opacity
不透明度

**Type**: `number`  
**Default**: `1`  
<a name="go2d.DisplayObject#background"></a>
###displayObject.background
背景颜色或样式

**Type**: `null` | `string` | `Object`  
**Default**: `null`  
<a name="go2d.DisplayObject#width"></a>
###displayObject.width
宽度

**Type**: `number`  
<a name="go2d.DisplayObject#height"></a>
###displayObject.height
高度

**Type**: `number`  
<a name="go2d.DisplayObject#parent"></a>
###displayObject.parent
父对象

**Type**: [DisplayObject](#go2d.DisplayObject)  
<a name="go2d.DisplayObject#x"></a>
###displayObject.x
水平坐标

**Type**: `number`  
**Default**: `0`  
<a name="go2d.DisplayObject#y"></a>
###displayObject.y
垂直坐标

**Type**: `number`  
**Default**: `0`  
<a name="go2d.DisplayObject#skewX"></a>
###displayObject.skewX
水平方向斜切

**Type**: `number`  
**Default**: `0`  
<a name="go2d.DisplayObject#skewY"></a>
###displayObject.skewY
垂直方向斜切

**Type**: `number`  
**Default**: `0`  
<a name="go2d.DisplayObject#scaleX"></a>
###displayObject.scaleX
水平方向缩放

**Type**: `number`  
**Default**: `1`  
<a name="go2d.DisplayObject#scaleY"></a>
###displayObject.scaleY
垂直方向缩放

**Type**: `number`  
**Default**: `1`  
<a name="go2d.DisplayObject#anchorX"></a>
###displayObject.anchorX
水平方向锚点偏移比例

**Type**: `number`  
**Default**: `0`  
<a name="go2d.DisplayObject#anchorY"></a>
###displayObject.anchorY
垂直方向锚点偏移比例

**Type**: `number`  
**Default**: `0`  
<a name="go2d.DisplayObject#anchorOffsetX"></a>
###displayObject.anchorOffsetX
水平方向锚点偏移像素

**Type**: `number`  
**Default**: `0`  
<a name="go2d.DisplayObject#anchorOffsetY"></a>
###displayObject.anchorOffsetY
垂直方向锚点偏移像素

**Type**: `number`  
**Default**: `0`  
<a name="go2d.DisplayObject#rotation"></a>
###displayObject.rotation
旋转角度

**Type**: `number`  
**Default**: `0`  
<a name="go2d.DisplayObject#visible"></a>
###displayObject.visible
是否可见

**Type**: `Boolean`  
**Default**: `true`  
<a name="go2d.DisplayObject#render"></a>
###displayObject.render()
渲染该对象

**Returns**: `this`  
<a name="go2d.DisplayObject#update"></a>
###displayObject.update()
更新对象渲染状态，当该对象需要重新渲染时调用

**Returns**: `this`  
<a name="go2d.DisplayObject#addChild"></a>
###displayObject.addChild(child)
添加子对象

**Params**

- child <code>[DisplayObject](#go2d.DisplayObject)</code> - 要添加的子对象  

**Returns**: `this`  
<a name="go2d.DisplayObject#addChildAt"></a>
###displayObject.addChildAt(child, index)
在指定深度添加子对象

**Params**

- child <code>[DisplayObject](#go2d.DisplayObject)</code> - 要添加的子对象  
- index `number` - 深度，数值越小层级越低  

**Returns**: `this`  
<a name="go2d.DisplayObject#getChildByName"></a>
###displayObject.getChildByName(name)
获取指定名字的子对象

**Params**

- name `string` - 子对象名字  

**Returns**: [DisplayObject](#go2d.DisplayObject) - 对应的子对象  
<a name="go2d.DisplayObject#getChildrenByTag"></a>
###displayObject.getChildrenByTag(tag)
获取指定标签的子对象

**Params**

- tag `string` - 子对象标签  

**Returns**: `Array` - 对应的子对象数组  
<a name="go2d.DisplayObject#getChildAt"></a>
###displayObject.getChildAt(index)
获取指定深度的子对象

**Params**

- index `number` - 子对象深度  

**Returns**: [DisplayObject](#go2d.DisplayObject) - 对应的子对象  
<a name="go2d.DisplayObject#getChildIndex"></a>
###displayObject.getChildIndex(child)
获取指定子对象的深度

**Params**

- child <code>[DisplayObject](#go2d.DisplayObject)</code> - 对应的子对象  

**Returns**: `number` - 子对象深度  
<a name="go2d.DisplayObject#swapChildren"></a>
###displayObject.swapChildren(child1, child2)
交换两个子对象的深度

**Params**

- child1 <code>[DisplayObject](#go2d.DisplayObject)</code> - 要交换的子对象一  
- child2 <code>[DisplayObject](#go2d.DisplayObject)</code> - 要交换的子对象二  

**Returns**: `this`  
<a name="go2d.DisplayObject#swapChildrenAt"></a>
###displayObject.swapChildrenAt(index1, index2)
交换两个子对象的深度

**Params**

- index1 `number` - 要交换的子对象深度一  
- index2 `number` - 要交换的子对象深度二  

**Returns**: `this`  
<a name="go2d.DisplayObject#sortChildren"></a>
###displayObject.sortChildren(compare)
排列子对象

**Params**

- compare `function` - 用于比较的函数  

**Returns**: `this`  
<a name="go2d.DisplayObject#getAllChildren"></a>
###displayObject.getAllChildren()
获取所有子对象

**Returns**: `Array` - 所有子对象数组  
<a name="go2d.DisplayObject#removeChild"></a>
###displayObject.removeChild(child, cleanup)
移除指定的子对象

**Params**

- child <code>[DisplayObject](#go2d.DisplayObject)</code> - 对应的子对象  
- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.DisplayObject#removeChildAt"></a>
###displayObject.removeChildAt(index, cleanup)
移除指定深度的子对象

**Params**

- index `number` - 子对象的深度  
- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.DisplayObject#removeChildrenByName"></a>
###displayObject.removeChildrenByName(name, cleanup)
移除指定名字的子对象

**Params**

- name `string` - 子对象的名字  
- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.DisplayObject#removeChildrenByTag"></a>
###displayObject.removeChildrenByTag(tag, cleanup)
移除指定标签的子对象

**Params**

- tag `string` - 子对象的标签  
- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.DisplayObject#removeAllChildren"></a>
###displayObject.removeAllChildren(cleanup)
移除所有子对象

**Params**

- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.DisplayObject#play"></a>
###displayObject.play()
开始该对象的帧播放

**Returns**: `this`  
<a name="go2d.DisplayObject#pause"></a>
###displayObject.pause()
暂停该对象的帧播放

**Returns**: `this`  
<a name="go2d.DisplayObject#tick"></a>
###displayObject.tick()
进入下一帧，该方法应只由引擎本身调用

**Returns**: `this`  
<a name="go2d.DisplayObject#dispose"></a>
###displayObject.dispose()
释放对象内存

<a name="go2d.DisplayObject#setText"></a>
###displayObject.setText()
设置要显示的文字

**Returns**: `this`  
<a name="go2d.DisplayObject#on"></a>
###displayObject.on(name, callback)
添加事件侦听器

**Params**

- name `string` - 事件名称  
- callback `function` - 回调函数  

**Returns**: `this`  
<a name="go2d.DisplayObject#emit"></a>
###displayObject.emit(name, [event])
通过事件对象派发事件

**Params**

- name `string` - 事件名称  
- \[event\] <code>[Event](#go2d.Event)</code> - 事件对象  

**Returns**: `this`  
<a name="go2d.DisplayObject#on"></a>
###displayObject.on(listeners)
批量添加事件侦听器

**Params**

- listeners `Object` - 以事件名称为键名，回调函数为键值的哈希表  

**Returns**: `this`  
<a name="go2d.DisplayObject#off"></a>
###displayObject.off(name, [callback])
移除事件侦听器

**Params**

- name `string` - 事件名称  
- \[callback\] `function` - 回调函数，当该参数为空时将移除该事件的所有回调  

**Returns**: `this`  
<a name="go2d.DisplayObject#emit"></a>
###displayObject.emit(name, [...params])
通过任意事件参数派发事件

**Params**

- name `string` - 事件名称  
- \[...params\] `*` - 事件参数  

**Returns**: `this`  
<a name="go2d.DisplayObject#event_touchstart"></a>
###event: "touchstart"
触摸开始事件

**Params**

- event <code>[TouchEvent](#go2d.TouchEvent)</code> - 触摸事件对象  

<a name="go2d.DisplayObject#event_touchmove"></a>
###event: "touchmove"
触摸移动事件

**Params**

- event <code>[TouchEvent](#go2d.TouchEvent)</code> - 触摸事件对象  

<a name="go2d.DisplayObject#event_touchend"></a>
###event: "touchend"
触摸结束事件

**Params**

- event <code>[TouchEvent](#go2d.TouchEvent)</code> - 触摸事件对象  

<a name="go2d.DisplayObject#event_touchtap"></a>
###event: "touchtap"
触摸点击事件

**Params**

- event <code>[TouchEvent](#go2d.TouchEvent)</code> - 触摸事件对象  

<a name="go2d.DisplayObject#event_addedtostage"></a>
###event: "addedtostage"
添加到舞台事件

**Params**

- stage <code>[Stage](#go2d.Stage)</code> - 舞台对象  

<a name="go2d.DisplayObject#event_removedfromstage"></a>
###event: "removedfromstage"
移除出舞台事件

**Params**

- stage <code>[Stage](#go2d.Stage)</code> - 舞台对象  

<a name="go2d.DisplayObject#event_resize"></a>
###event: "resize"
宽高变化事件

**Params**

- event <code>[ResizeEvent](#go2d.ResizeEvent)</code> - 宽高变化事件对象  

<a name="go2d.DisplayObject#event_render"></a>
###event: "render"
开始渲染事件

**Params**

- event <code>[Event](#go2d.Event)</code> - 事件对象  

<a name="go2d.DisplayObject#event_paint"></a>
###event: "paint"
绘制完毕事件

**Params**

- context `object` - 绘制上下文对象  

<a name="go2d.DisplayObject#event_step"></a>
###event: "step"
步进（进入下一帧）事件

**Params**

- deltaTime `number` - 两帧时间差  

<a name="go2d.ImageView"></a>
##class: go2d.ImageView
**Extends**: `go2d.Sprite`  
**Members**

* [class: go2d.ImageView](#go2d.ImageView)
  * [new go2d.ImageView(image)](#new_go2d.ImageView)
  * [imageView._image](#go2d.ImageView#_image)
  * [imageView._stage](#go2d.ImageView#_stage)
  * [imageView._timer](#go2d.ImageView#_timer)
  * [imageView._prevTime](#go2d.ImageView#_prevTime)
  * [imageView.canvas](#go2d.ImageView#canvas)
  * [imageView.context](#go2d.ImageView#context)
  * [imageView.name](#go2d.ImageView#name)
  * [imageView.tag](#go2d.ImageView#tag)
  * [imageView.stage](#go2d.ImageView#stage)
  * [imageView.paused](#go2d.ImageView#paused)
  * [imageView.touchable](#go2d.ImageView#touchable)
  * [imageView.touchChildren](#go2d.ImageView#touchChildren)
  * [imageView._dirty](#go2d.ImageView#_dirty)
  * [imageView._touches](#go2d.ImageView#_touches)
  * [imageView._children](#go2d.ImageView#_children)
  * [imageView.opacity](#go2d.ImageView#opacity)
  * [imageView.background](#go2d.ImageView#background)
  * [imageView.width](#go2d.ImageView#width)
  * [imageView.height](#go2d.ImageView#height)
  * [imageView.parent](#go2d.ImageView#parent)
  * [imageView.x](#go2d.ImageView#x)
  * [imageView.y](#go2d.ImageView#y)
  * [imageView.skewX](#go2d.ImageView#skewX)
  * [imageView.skewY](#go2d.ImageView#skewY)
  * [imageView.scaleX](#go2d.ImageView#scaleX)
  * [imageView.scaleY](#go2d.ImageView#scaleY)
  * [imageView.anchorX](#go2d.ImageView#anchorX)
  * [imageView.anchorY](#go2d.ImageView#anchorY)
  * [imageView.anchorOffsetX](#go2d.ImageView#anchorOffsetX)
  * [imageView.anchorOffsetY](#go2d.ImageView#anchorOffsetY)
  * [imageView.rotation](#go2d.ImageView#rotation)
  * [imageView.visible](#go2d.ImageView#visible)
  * [imageView.setImage(image)](#go2d.ImageView#setImage)
  * [imageView.getTransform()](#go2d.ImageView#getTransform)
  * [imageView.show()](#go2d.ImageView#show)
  * [imageView.hide()](#go2d.ImageView#hide)
  * [imageView.render()](#go2d.ImageView#render)
  * [imageView.update()](#go2d.ImageView#update)
  * [imageView.addChild(child)](#go2d.ImageView#addChild)
  * [imageView.addChildAt(child, index)](#go2d.ImageView#addChildAt)
  * [imageView.getChildByName(name)](#go2d.ImageView#getChildByName)
  * [imageView.getChildrenByTag(tag)](#go2d.ImageView#getChildrenByTag)
  * [imageView.getChildAt(index)](#go2d.ImageView#getChildAt)
  * [imageView.getChildIndex(child)](#go2d.ImageView#getChildIndex)
  * [imageView.swapChildren(child1, child2)](#go2d.ImageView#swapChildren)
  * [imageView.swapChildrenAt(index1, index2)](#go2d.ImageView#swapChildrenAt)
  * [imageView.sortChildren(compare)](#go2d.ImageView#sortChildren)
  * [imageView.getAllChildren()](#go2d.ImageView#getAllChildren)
  * [imageView.removeChild(child, cleanup)](#go2d.ImageView#removeChild)
  * [imageView.removeChildAt(index, cleanup)](#go2d.ImageView#removeChildAt)
  * [imageView.removeChildrenByName(name, cleanup)](#go2d.ImageView#removeChildrenByName)
  * [imageView.removeChildrenByTag(tag, cleanup)](#go2d.ImageView#removeChildrenByTag)
  * [imageView.removeAllChildren(cleanup)](#go2d.ImageView#removeAllChildren)
  * [imageView.play()](#go2d.ImageView#play)
  * [imageView.pause()](#go2d.ImageView#pause)
  * [imageView.tick()](#go2d.ImageView#tick)
  * [imageView.dispose()](#go2d.ImageView#dispose)
  * [imageView.setText()](#go2d.ImageView#setText)
  * [imageView.on(name, callback)](#go2d.ImageView#on)
  * [imageView.emit(name, [event])](#go2d.ImageView#emit)
  * [imageView.on(listeners)](#go2d.ImageView#on)
  * [imageView.off(name, [callback])](#go2d.ImageView#off)
  * [imageView.emit(name, [...params])](#go2d.ImageView#emit)
  * [event: "touchstart"](#go2d.ImageView#event_touchstart)
  * [event: "touchmove"](#go2d.ImageView#event_touchmove)
  * [event: "touchend"](#go2d.ImageView#event_touchend)
  * [event: "touchtap"](#go2d.ImageView#event_touchtap)
  * [event: "addedtostage"](#go2d.ImageView#event_addedtostage)
  * [event: "removedfromstage"](#go2d.ImageView#event_removedfromstage)
  * [event: "resize"](#go2d.ImageView#event_resize)
  * [event: "render"](#go2d.ImageView#event_render)
  * [event: "paint"](#go2d.ImageView#event_paint)
  * [event: "step"](#go2d.ImageView#event_step)

<a name="new_go2d.ImageView"></a>
###new go2d.ImageView(image)
图像显示类，用于显示一张图像。

**Params**

- image `object` - 要绘制的图像或画布元素  

**Extends**: `go2d.Sprite`  
**Author**: Lanfei  
<a name="go2d.ImageView#_image"></a>
###imageView._image
要绘制的图像或画布元素

**Type**: `object`  
**Access**: protected  
<a name="go2d.ImageView#_stage"></a>
###imageView._stage
舞台对象

**Type**: [Stage](#go2d.Stage)  
**Access**: protected  
<a name="go2d.ImageView#_timer"></a>
###imageView._timer
主循环定时器

**Type**: `Object`  
**Access**: protected  
<a name="go2d.ImageView#_prevTime"></a>
###imageView._prevTime
上一帧时间戳，用于计算帧频

**Type**: `number`  
**Access**: protected  
<a name="go2d.ImageView#canvas"></a>
###imageView.canvas
用于渲染的画布对象

**Type**: `object`  
**Read only**: true  
<a name="go2d.ImageView#context"></a>
###imageView.context
画布的上下文对象

**Type**: `object`  
**Read only**: true  
<a name="go2d.ImageView#name"></a>
###imageView.name
用于标识该对象的名字，该属性在兄弟对象中应该唯一

**Type**: `string`  
<a name="go2d.ImageView#tag"></a>
###imageView.tag
用于标识该对象的标签

**Type**: `string`  
<a name="go2d.ImageView#stage"></a>
###imageView.stage
该对象所属的舞台对象

**Type**: [Stage](#go2d.Stage)  
**Read only**: true  
<a name="go2d.ImageView#paused"></a>
###imageView.paused
是否已暂停

**Type**: `Boolean`  
**Default**: `false`  
<a name="go2d.ImageView#touchable"></a>
###imageView.touchable
是否可点击

**Type**: `Boolean`  
**Default**: `true`  
<a name="go2d.ImageView#touchChildren"></a>
###imageView.touchChildren
子节点是否可点击

**Type**: `Boolean`  
**Default**: `true`  
<a name="go2d.ImageView#_dirty"></a>
###imageView._dirty
是否需要重新渲染

**Type**: `Boolean`  
**Default**: `true`  
**Access**: protected  
<a name="go2d.ImageView#_touches"></a>
###imageView._touches
触摸标识数组

**Type**: `Array`  
**Access**: protected  
<a name="go2d.ImageView#_children"></a>
###imageView._children
子对象数组

**Type**: `Array`  
**Access**: protected  
<a name="go2d.ImageView#opacity"></a>
###imageView.opacity
不透明度

**Type**: `number`  
**Default**: `1`  
<a name="go2d.ImageView#background"></a>
###imageView.background
背景颜色或样式

**Type**: `null` | `string` | `Object`  
**Default**: `null`  
<a name="go2d.ImageView#width"></a>
###imageView.width
宽度

**Type**: `number`  
<a name="go2d.ImageView#height"></a>
###imageView.height
高度

**Type**: `number`  
<a name="go2d.ImageView#parent"></a>
###imageView.parent
父对象

**Type**: [DisplayObject](#go2d.DisplayObject)  
<a name="go2d.ImageView#x"></a>
###imageView.x
水平坐标

**Type**: `number`  
**Default**: `0`  
<a name="go2d.ImageView#y"></a>
###imageView.y
垂直坐标

**Type**: `number`  
**Default**: `0`  
<a name="go2d.ImageView#skewX"></a>
###imageView.skewX
水平方向斜切

**Type**: `number`  
**Default**: `0`  
<a name="go2d.ImageView#skewY"></a>
###imageView.skewY
垂直方向斜切

**Type**: `number`  
**Default**: `0`  
<a name="go2d.ImageView#scaleX"></a>
###imageView.scaleX
水平方向缩放

**Type**: `number`  
**Default**: `1`  
<a name="go2d.ImageView#scaleY"></a>
###imageView.scaleY
垂直方向缩放

**Type**: `number`  
**Default**: `1`  
<a name="go2d.ImageView#anchorX"></a>
###imageView.anchorX
水平方向锚点偏移比例

**Type**: `number`  
**Default**: `0`  
<a name="go2d.ImageView#anchorY"></a>
###imageView.anchorY
垂直方向锚点偏移比例

**Type**: `number`  
**Default**: `0`  
<a name="go2d.ImageView#anchorOffsetX"></a>
###imageView.anchorOffsetX
水平方向锚点偏移像素

**Type**: `number`  
**Default**: `0`  
<a name="go2d.ImageView#anchorOffsetY"></a>
###imageView.anchorOffsetY
垂直方向锚点偏移像素

**Type**: `number`  
**Default**: `0`  
<a name="go2d.ImageView#rotation"></a>
###imageView.rotation
旋转角度

**Type**: `number`  
**Default**: `0`  
<a name="go2d.ImageView#visible"></a>
###imageView.visible
是否可见

**Type**: `Boolean`  
**Default**: `true`  
<a name="go2d.ImageView#setImage"></a>
###imageView.setImage(image)
设置要绘制的图像或画布元素

**Params**

- image `object` - 要绘制的图像或画布元素  

**Returns**: `this`  
<a name="go2d.ImageView#getTransform"></a>
###imageView.getTransform()
获取变化矩阵

**Returns**: [Matrix](#go2d.Matrix)  
<a name="go2d.ImageView#show"></a>
###imageView.show()
显示该对象

**Returns**: `this`  
<a name="go2d.ImageView#hide"></a>
###imageView.hide()
隐藏该对象

**Returns**: `this`  
<a name="go2d.ImageView#render"></a>
###imageView.render()
渲染该对象

**Returns**: `this`  
<a name="go2d.ImageView#update"></a>
###imageView.update()
更新对象渲染状态，当该对象需要重新渲染时调用

**Returns**: `this`  
<a name="go2d.ImageView#addChild"></a>
###imageView.addChild(child)
添加子对象

**Params**

- child <code>[DisplayObject](#go2d.DisplayObject)</code> - 要添加的子对象  

**Returns**: `this`  
<a name="go2d.ImageView#addChildAt"></a>
###imageView.addChildAt(child, index)
在指定深度添加子对象

**Params**

- child <code>[DisplayObject](#go2d.DisplayObject)</code> - 要添加的子对象  
- index `number` - 深度，数值越小层级越低  

**Returns**: `this`  
<a name="go2d.ImageView#getChildByName"></a>
###imageView.getChildByName(name)
获取指定名字的子对象

**Params**

- name `string` - 子对象名字  

**Returns**: [DisplayObject](#go2d.DisplayObject) - 对应的子对象  
<a name="go2d.ImageView#getChildrenByTag"></a>
###imageView.getChildrenByTag(tag)
获取指定标签的子对象

**Params**

- tag `string` - 子对象标签  

**Returns**: `Array` - 对应的子对象数组  
<a name="go2d.ImageView#getChildAt"></a>
###imageView.getChildAt(index)
获取指定深度的子对象

**Params**

- index `number` - 子对象深度  

**Returns**: [DisplayObject](#go2d.DisplayObject) - 对应的子对象  
<a name="go2d.ImageView#getChildIndex"></a>
###imageView.getChildIndex(child)
获取指定子对象的深度

**Params**

- child <code>[DisplayObject](#go2d.DisplayObject)</code> - 对应的子对象  

**Returns**: `number` - 子对象深度  
<a name="go2d.ImageView#swapChildren"></a>
###imageView.swapChildren(child1, child2)
交换两个子对象的深度

**Params**

- child1 <code>[DisplayObject](#go2d.DisplayObject)</code> - 要交换的子对象一  
- child2 <code>[DisplayObject](#go2d.DisplayObject)</code> - 要交换的子对象二  

**Returns**: `this`  
<a name="go2d.ImageView#swapChildrenAt"></a>
###imageView.swapChildrenAt(index1, index2)
交换两个子对象的深度

**Params**

- index1 `number` - 要交换的子对象深度一  
- index2 `number` - 要交换的子对象深度二  

**Returns**: `this`  
<a name="go2d.ImageView#sortChildren"></a>
###imageView.sortChildren(compare)
排列子对象

**Params**

- compare `function` - 用于比较的函数  

**Returns**: `this`  
<a name="go2d.ImageView#getAllChildren"></a>
###imageView.getAllChildren()
获取所有子对象

**Returns**: `Array` - 所有子对象数组  
<a name="go2d.ImageView#removeChild"></a>
###imageView.removeChild(child, cleanup)
移除指定的子对象

**Params**

- child <code>[DisplayObject](#go2d.DisplayObject)</code> - 对应的子对象  
- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.ImageView#removeChildAt"></a>
###imageView.removeChildAt(index, cleanup)
移除指定深度的子对象

**Params**

- index `number` - 子对象的深度  
- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.ImageView#removeChildrenByName"></a>
###imageView.removeChildrenByName(name, cleanup)
移除指定名字的子对象

**Params**

- name `string` - 子对象的名字  
- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.ImageView#removeChildrenByTag"></a>
###imageView.removeChildrenByTag(tag, cleanup)
移除指定标签的子对象

**Params**

- tag `string` - 子对象的标签  
- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.ImageView#removeAllChildren"></a>
###imageView.removeAllChildren(cleanup)
移除所有子对象

**Params**

- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.ImageView#play"></a>
###imageView.play()
开始该对象的帧播放

**Returns**: `this`  
<a name="go2d.ImageView#pause"></a>
###imageView.pause()
暂停该对象的帧播放

**Returns**: `this`  
<a name="go2d.ImageView#tick"></a>
###imageView.tick()
进入下一帧，该方法应只由引擎本身调用

**Returns**: `this`  
<a name="go2d.ImageView#dispose"></a>
###imageView.dispose()
释放对象内存

<a name="go2d.ImageView#setText"></a>
###imageView.setText()
设置要显示的文字

**Returns**: `this`  
<a name="go2d.ImageView#on"></a>
###imageView.on(name, callback)
添加事件侦听器

**Params**

- name `string` - 事件名称  
- callback `function` - 回调函数  

**Returns**: `this`  
<a name="go2d.ImageView#emit"></a>
###imageView.emit(name, [event])
通过事件对象派发事件

**Params**

- name `string` - 事件名称  
- \[event\] <code>[Event](#go2d.Event)</code> - 事件对象  

**Returns**: `this`  
<a name="go2d.ImageView#on"></a>
###imageView.on(listeners)
批量添加事件侦听器

**Params**

- listeners `Object` - 以事件名称为键名，回调函数为键值的哈希表  

**Returns**: `this`  
<a name="go2d.ImageView#off"></a>
###imageView.off(name, [callback])
移除事件侦听器

**Params**

- name `string` - 事件名称  
- \[callback\] `function` - 回调函数，当该参数为空时将移除该事件的所有回调  

**Returns**: `this`  
<a name="go2d.ImageView#emit"></a>
###imageView.emit(name, [...params])
通过任意事件参数派发事件

**Params**

- name `string` - 事件名称  
- \[...params\] `*` - 事件参数  

**Returns**: `this`  
<a name="go2d.ImageView#event_touchstart"></a>
###event: "touchstart"
触摸开始事件

**Params**

- event <code>[TouchEvent](#go2d.TouchEvent)</code> - 触摸事件对象  

<a name="go2d.ImageView#event_touchmove"></a>
###event: "touchmove"
触摸移动事件

**Params**

- event <code>[TouchEvent](#go2d.TouchEvent)</code> - 触摸事件对象  

<a name="go2d.ImageView#event_touchend"></a>
###event: "touchend"
触摸结束事件

**Params**

- event <code>[TouchEvent](#go2d.TouchEvent)</code> - 触摸事件对象  

<a name="go2d.ImageView#event_touchtap"></a>
###event: "touchtap"
触摸点击事件

**Params**

- event <code>[TouchEvent](#go2d.TouchEvent)</code> - 触摸事件对象  

<a name="go2d.ImageView#event_addedtostage"></a>
###event: "addedtostage"
添加到舞台事件

**Params**

- stage <code>[Stage](#go2d.Stage)</code> - 舞台对象  

<a name="go2d.ImageView#event_removedfromstage"></a>
###event: "removedfromstage"
移除出舞台事件

**Params**

- stage <code>[Stage](#go2d.Stage)</code> - 舞台对象  

<a name="go2d.ImageView#event_resize"></a>
###event: "resize"
宽高变化事件

**Params**

- event <code>[ResizeEvent](#go2d.ResizeEvent)</code> - 宽高变化事件对象  

<a name="go2d.ImageView#event_render"></a>
###event: "render"
开始渲染事件

**Params**

- event <code>[Event](#go2d.Event)</code> - 事件对象  

<a name="go2d.ImageView#event_paint"></a>
###event: "paint"
绘制完毕事件

**Params**

- context `object` - 绘制上下文对象  

<a name="go2d.ImageView#event_step"></a>
###event: "step"
步进（进入下一帧）事件

**Params**

- deltaTime `number` - 两帧时间差  

<a name="go2d.ScrollView"></a>
##class: go2d.ScrollView
**Extends**: `go2d.Sprite`  
**Members**

* [class: go2d.ScrollView](#go2d.ScrollView)
  * [new go2d.ScrollView(content)](#new_go2d.ScrollView)
  * [scrollView.scrollTop](#go2d.ScrollView#scrollTop)
  * [scrollView.scrollLeft](#go2d.ScrollView#scrollLeft)
  * [scrollView._stage](#go2d.ScrollView#_stage)
  * [scrollView._timer](#go2d.ScrollView#_timer)
  * [scrollView._prevTime](#go2d.ScrollView#_prevTime)
  * [scrollView.canvas](#go2d.ScrollView#canvas)
  * [scrollView.context](#go2d.ScrollView#context)
  * [scrollView.name](#go2d.ScrollView#name)
  * [scrollView.tag](#go2d.ScrollView#tag)
  * [scrollView.stage](#go2d.ScrollView#stage)
  * [scrollView.paused](#go2d.ScrollView#paused)
  * [scrollView.touchable](#go2d.ScrollView#touchable)
  * [scrollView.touchChildren](#go2d.ScrollView#touchChildren)
  * [scrollView._dirty](#go2d.ScrollView#_dirty)
  * [scrollView._touches](#go2d.ScrollView#_touches)
  * [scrollView._children](#go2d.ScrollView#_children)
  * [scrollView.opacity](#go2d.ScrollView#opacity)
  * [scrollView.background](#go2d.ScrollView#background)
  * [scrollView.width](#go2d.ScrollView#width)
  * [scrollView.height](#go2d.ScrollView#height)
  * [scrollView.parent](#go2d.ScrollView#parent)
  * [scrollView.x](#go2d.ScrollView#x)
  * [scrollView.y](#go2d.ScrollView#y)
  * [scrollView.skewX](#go2d.ScrollView#skewX)
  * [scrollView.skewY](#go2d.ScrollView#skewY)
  * [scrollView.scaleX](#go2d.ScrollView#scaleX)
  * [scrollView.scaleY](#go2d.ScrollView#scaleY)
  * [scrollView.anchorX](#go2d.ScrollView#anchorX)
  * [scrollView.anchorY](#go2d.ScrollView#anchorY)
  * [scrollView.anchorOffsetX](#go2d.ScrollView#anchorOffsetX)
  * [scrollView.anchorOffsetY](#go2d.ScrollView#anchorOffsetY)
  * [scrollView.rotation](#go2d.ScrollView#rotation)
  * [scrollView.visible](#go2d.ScrollView#visible)
  * [scrollView.setContent(content)](#go2d.ScrollView#setContent)
  * [scrollView.getContent()](#go2d.ScrollView#getContent)
  * [scrollView.removeContent(cleanup)](#go2d.ScrollView#removeContent)
  * [scrollView.getTransform()](#go2d.ScrollView#getTransform)
  * [scrollView.show()](#go2d.ScrollView#show)
  * [scrollView.hide()](#go2d.ScrollView#hide)
  * [scrollView.render()](#go2d.ScrollView#render)
  * [scrollView.update()](#go2d.ScrollView#update)
  * [scrollView.addChild(child)](#go2d.ScrollView#addChild)
  * [scrollView.addChildAt(child, index)](#go2d.ScrollView#addChildAt)
  * [scrollView.getChildByName(name)](#go2d.ScrollView#getChildByName)
  * [scrollView.getChildrenByTag(tag)](#go2d.ScrollView#getChildrenByTag)
  * [scrollView.getChildAt(index)](#go2d.ScrollView#getChildAt)
  * [scrollView.getChildIndex(child)](#go2d.ScrollView#getChildIndex)
  * [scrollView.swapChildren(child1, child2)](#go2d.ScrollView#swapChildren)
  * [scrollView.swapChildrenAt(index1, index2)](#go2d.ScrollView#swapChildrenAt)
  * [scrollView.sortChildren(compare)](#go2d.ScrollView#sortChildren)
  * [scrollView.getAllChildren()](#go2d.ScrollView#getAllChildren)
  * [scrollView.removeChild(child, cleanup)](#go2d.ScrollView#removeChild)
  * [scrollView.removeChildAt(index, cleanup)](#go2d.ScrollView#removeChildAt)
  * [scrollView.removeChildrenByName(name, cleanup)](#go2d.ScrollView#removeChildrenByName)
  * [scrollView.removeChildrenByTag(tag, cleanup)](#go2d.ScrollView#removeChildrenByTag)
  * [scrollView.removeAllChildren(cleanup)](#go2d.ScrollView#removeAllChildren)
  * [scrollView.play()](#go2d.ScrollView#play)
  * [scrollView.pause()](#go2d.ScrollView#pause)
  * [scrollView.tick()](#go2d.ScrollView#tick)
  * [scrollView.dispose()](#go2d.ScrollView#dispose)
  * [scrollView.setText()](#go2d.ScrollView#setText)
  * [scrollView.on(name, callback)](#go2d.ScrollView#on)
  * [scrollView.emit(name, [event])](#go2d.ScrollView#emit)
  * [scrollView.on(listeners)](#go2d.ScrollView#on)
  * [scrollView.off(name, [callback])](#go2d.ScrollView#off)
  * [scrollView.emit(name, [...params])](#go2d.ScrollView#emit)
  * [event: "scroll"](#go2d.ScrollView#event_scroll)
  * [event: "touchstart"](#go2d.ScrollView#event_touchstart)
  * [event: "touchmove"](#go2d.ScrollView#event_touchmove)
  * [event: "touchend"](#go2d.ScrollView#event_touchend)
  * [event: "touchtap"](#go2d.ScrollView#event_touchtap)
  * [event: "addedtostage"](#go2d.ScrollView#event_addedtostage)
  * [event: "removedfromstage"](#go2d.ScrollView#event_removedfromstage)
  * [event: "resize"](#go2d.ScrollView#event_resize)
  * [event: "render"](#go2d.ScrollView#event_render)
  * [event: "paint"](#go2d.ScrollView#event_paint)
  * [event: "step"](#go2d.ScrollView#event_step)

<a name="new_go2d.ScrollView"></a>
###new go2d.ScrollView(content)
滑动视图类，可以在该视图中显示超过视图大小的显示对象，并可以通过滑动来显示内容视图的不同部分。

**Params**

- content `Sprite` - 滚动视图的内容对象  

**Extends**: `go2d.Sprite`  
**Author**: Lanfei  
<a name="go2d.ScrollView#scrollTop"></a>
###scrollView.scrollTop
纵向滑动距离

**Type**: `number`  
**Default**: `0`  
<a name="go2d.ScrollView#scrollLeft"></a>
###scrollView.scrollLeft
横向滑动距离

**Type**: `number`  
**Default**: `0`  
<a name="go2d.ScrollView#_stage"></a>
###scrollView._stage
舞台对象

**Type**: [Stage](#go2d.Stage)  
**Access**: protected  
<a name="go2d.ScrollView#_timer"></a>
###scrollView._timer
主循环定时器

**Type**: `Object`  
**Access**: protected  
<a name="go2d.ScrollView#_prevTime"></a>
###scrollView._prevTime
上一帧时间戳，用于计算帧频

**Type**: `number`  
**Access**: protected  
<a name="go2d.ScrollView#canvas"></a>
###scrollView.canvas
用于渲染的画布对象

**Type**: `object`  
**Read only**: true  
<a name="go2d.ScrollView#context"></a>
###scrollView.context
画布的上下文对象

**Type**: `object`  
**Read only**: true  
<a name="go2d.ScrollView#name"></a>
###scrollView.name
用于标识该对象的名字，该属性在兄弟对象中应该唯一

**Type**: `string`  
<a name="go2d.ScrollView#tag"></a>
###scrollView.tag
用于标识该对象的标签

**Type**: `string`  
<a name="go2d.ScrollView#stage"></a>
###scrollView.stage
该对象所属的舞台对象

**Type**: [Stage](#go2d.Stage)  
**Read only**: true  
<a name="go2d.ScrollView#paused"></a>
###scrollView.paused
是否已暂停

**Type**: `Boolean`  
**Default**: `false`  
<a name="go2d.ScrollView#touchable"></a>
###scrollView.touchable
是否可点击

**Type**: `Boolean`  
**Default**: `true`  
<a name="go2d.ScrollView#touchChildren"></a>
###scrollView.touchChildren
子节点是否可点击

**Type**: `Boolean`  
**Default**: `true`  
<a name="go2d.ScrollView#_dirty"></a>
###scrollView._dirty
是否需要重新渲染

**Type**: `Boolean`  
**Default**: `true`  
**Access**: protected  
<a name="go2d.ScrollView#_touches"></a>
###scrollView._touches
触摸标识数组

**Type**: `Array`  
**Access**: protected  
<a name="go2d.ScrollView#_children"></a>
###scrollView._children
子对象数组

**Type**: `Array`  
**Access**: protected  
<a name="go2d.ScrollView#opacity"></a>
###scrollView.opacity
不透明度

**Type**: `number`  
**Default**: `1`  
<a name="go2d.ScrollView#background"></a>
###scrollView.background
背景颜色或样式

**Type**: `null` | `string` | `Object`  
**Default**: `null`  
<a name="go2d.ScrollView#width"></a>
###scrollView.width
宽度

**Type**: `number`  
<a name="go2d.ScrollView#height"></a>
###scrollView.height
高度

**Type**: `number`  
<a name="go2d.ScrollView#parent"></a>
###scrollView.parent
父对象

**Type**: [DisplayObject](#go2d.DisplayObject)  
<a name="go2d.ScrollView#x"></a>
###scrollView.x
水平坐标

**Type**: `number`  
**Default**: `0`  
<a name="go2d.ScrollView#y"></a>
###scrollView.y
垂直坐标

**Type**: `number`  
**Default**: `0`  
<a name="go2d.ScrollView#skewX"></a>
###scrollView.skewX
水平方向斜切

**Type**: `number`  
**Default**: `0`  
<a name="go2d.ScrollView#skewY"></a>
###scrollView.skewY
垂直方向斜切

**Type**: `number`  
**Default**: `0`  
<a name="go2d.ScrollView#scaleX"></a>
###scrollView.scaleX
水平方向缩放

**Type**: `number`  
**Default**: `1`  
<a name="go2d.ScrollView#scaleY"></a>
###scrollView.scaleY
垂直方向缩放

**Type**: `number`  
**Default**: `1`  
<a name="go2d.ScrollView#anchorX"></a>
###scrollView.anchorX
水平方向锚点偏移比例

**Type**: `number`  
**Default**: `0`  
<a name="go2d.ScrollView#anchorY"></a>
###scrollView.anchorY
垂直方向锚点偏移比例

**Type**: `number`  
**Default**: `0`  
<a name="go2d.ScrollView#anchorOffsetX"></a>
###scrollView.anchorOffsetX
水平方向锚点偏移像素

**Type**: `number`  
**Default**: `0`  
<a name="go2d.ScrollView#anchorOffsetY"></a>
###scrollView.anchorOffsetY
垂直方向锚点偏移像素

**Type**: `number`  
**Default**: `0`  
<a name="go2d.ScrollView#rotation"></a>
###scrollView.rotation
旋转角度

**Type**: `number`  
**Default**: `0`  
<a name="go2d.ScrollView#visible"></a>
###scrollView.visible
是否可见

**Type**: `Boolean`  
**Default**: `true`  
<a name="go2d.ScrollView#setContent"></a>
###scrollView.setContent(content)
设置滚动视图的内容对象

**Params**

- content `Sprite` - 滚动视图的内容对象  

**Returns**: `this`  
<a name="go2d.ScrollView#getContent"></a>
###scrollView.getContent()
获取滚动视图的内容对象

**Returns**: `Sprite` - content 滚动视图的内容对象  
<a name="go2d.ScrollView#removeContent"></a>
###scrollView.removeContent(cleanup)
移除滚动视图的内容对象

**Params**

- cleanup `Boolean` - 是否销毁内容对象  

**Returns**: `this`  
<a name="go2d.ScrollView#getTransform"></a>
###scrollView.getTransform()
获取变化矩阵

**Returns**: [Matrix](#go2d.Matrix)  
<a name="go2d.ScrollView#show"></a>
###scrollView.show()
显示该对象

**Returns**: `this`  
<a name="go2d.ScrollView#hide"></a>
###scrollView.hide()
隐藏该对象

**Returns**: `this`  
<a name="go2d.ScrollView#render"></a>
###scrollView.render()
渲染该对象

**Returns**: `this`  
<a name="go2d.ScrollView#update"></a>
###scrollView.update()
更新对象渲染状态，当该对象需要重新渲染时调用

**Returns**: `this`  
<a name="go2d.ScrollView#addChild"></a>
###scrollView.addChild(child)
添加子对象

**Params**

- child <code>[DisplayObject](#go2d.DisplayObject)</code> - 要添加的子对象  

**Returns**: `this`  
<a name="go2d.ScrollView#addChildAt"></a>
###scrollView.addChildAt(child, index)
在指定深度添加子对象

**Params**

- child <code>[DisplayObject](#go2d.DisplayObject)</code> - 要添加的子对象  
- index `number` - 深度，数值越小层级越低  

**Returns**: `this`  
<a name="go2d.ScrollView#getChildByName"></a>
###scrollView.getChildByName(name)
获取指定名字的子对象

**Params**

- name `string` - 子对象名字  

**Returns**: [DisplayObject](#go2d.DisplayObject) - 对应的子对象  
<a name="go2d.ScrollView#getChildrenByTag"></a>
###scrollView.getChildrenByTag(tag)
获取指定标签的子对象

**Params**

- tag `string` - 子对象标签  

**Returns**: `Array` - 对应的子对象数组  
<a name="go2d.ScrollView#getChildAt"></a>
###scrollView.getChildAt(index)
获取指定深度的子对象

**Params**

- index `number` - 子对象深度  

**Returns**: [DisplayObject](#go2d.DisplayObject) - 对应的子对象  
<a name="go2d.ScrollView#getChildIndex"></a>
###scrollView.getChildIndex(child)
获取指定子对象的深度

**Params**

- child <code>[DisplayObject](#go2d.DisplayObject)</code> - 对应的子对象  

**Returns**: `number` - 子对象深度  
<a name="go2d.ScrollView#swapChildren"></a>
###scrollView.swapChildren(child1, child2)
交换两个子对象的深度

**Params**

- child1 <code>[DisplayObject](#go2d.DisplayObject)</code> - 要交换的子对象一  
- child2 <code>[DisplayObject](#go2d.DisplayObject)</code> - 要交换的子对象二  

**Returns**: `this`  
<a name="go2d.ScrollView#swapChildrenAt"></a>
###scrollView.swapChildrenAt(index1, index2)
交换两个子对象的深度

**Params**

- index1 `number` - 要交换的子对象深度一  
- index2 `number` - 要交换的子对象深度二  

**Returns**: `this`  
<a name="go2d.ScrollView#sortChildren"></a>
###scrollView.sortChildren(compare)
排列子对象

**Params**

- compare `function` - 用于比较的函数  

**Returns**: `this`  
<a name="go2d.ScrollView#getAllChildren"></a>
###scrollView.getAllChildren()
获取所有子对象

**Returns**: `Array` - 所有子对象数组  
<a name="go2d.ScrollView#removeChild"></a>
###scrollView.removeChild(child, cleanup)
移除指定的子对象

**Params**

- child <code>[DisplayObject](#go2d.DisplayObject)</code> - 对应的子对象  
- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.ScrollView#removeChildAt"></a>
###scrollView.removeChildAt(index, cleanup)
移除指定深度的子对象

**Params**

- index `number` - 子对象的深度  
- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.ScrollView#removeChildrenByName"></a>
###scrollView.removeChildrenByName(name, cleanup)
移除指定名字的子对象

**Params**

- name `string` - 子对象的名字  
- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.ScrollView#removeChildrenByTag"></a>
###scrollView.removeChildrenByTag(tag, cleanup)
移除指定标签的子对象

**Params**

- tag `string` - 子对象的标签  
- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.ScrollView#removeAllChildren"></a>
###scrollView.removeAllChildren(cleanup)
移除所有子对象

**Params**

- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.ScrollView#play"></a>
###scrollView.play()
开始该对象的帧播放

**Returns**: `this`  
<a name="go2d.ScrollView#pause"></a>
###scrollView.pause()
暂停该对象的帧播放

**Returns**: `this`  
<a name="go2d.ScrollView#tick"></a>
###scrollView.tick()
进入下一帧，该方法应只由引擎本身调用

**Returns**: `this`  
<a name="go2d.ScrollView#dispose"></a>
###scrollView.dispose()
释放对象内存

<a name="go2d.ScrollView#setText"></a>
###scrollView.setText()
设置要显示的文字

**Returns**: `this`  
<a name="go2d.ScrollView#on"></a>
###scrollView.on(name, callback)
添加事件侦听器

**Params**

- name `string` - 事件名称  
- callback `function` - 回调函数  

**Returns**: `this`  
<a name="go2d.ScrollView#emit"></a>
###scrollView.emit(name, [event])
通过事件对象派发事件

**Params**

- name `string` - 事件名称  
- \[event\] <code>[Event](#go2d.Event)</code> - 事件对象  

**Returns**: `this`  
<a name="go2d.ScrollView#on"></a>
###scrollView.on(listeners)
批量添加事件侦听器

**Params**

- listeners `Object` - 以事件名称为键名，回调函数为键值的哈希表  

**Returns**: `this`  
<a name="go2d.ScrollView#off"></a>
###scrollView.off(name, [callback])
移除事件侦听器

**Params**

- name `string` - 事件名称  
- \[callback\] `function` - 回调函数，当该参数为空时将移除该事件的所有回调  

**Returns**: `this`  
<a name="go2d.ScrollView#emit"></a>
###scrollView.emit(name, [...params])
通过任意事件参数派发事件

**Params**

- name `string` - 事件名称  
- \[...params\] `*` - 事件参数  

**Returns**: `this`  
<a name="go2d.ScrollView#event_scroll"></a>
###event: "scroll"
触摸移动事件

<a name="go2d.ScrollView#event_touchstart"></a>
###event: "touchstart"
触摸开始事件

**Params**

- event <code>[TouchEvent](#go2d.TouchEvent)</code> - 触摸事件对象  

<a name="go2d.ScrollView#event_touchmove"></a>
###event: "touchmove"
触摸移动事件

**Params**

- event <code>[TouchEvent](#go2d.TouchEvent)</code> - 触摸事件对象  

<a name="go2d.ScrollView#event_touchend"></a>
###event: "touchend"
触摸结束事件

**Params**

- event <code>[TouchEvent](#go2d.TouchEvent)</code> - 触摸事件对象  

<a name="go2d.ScrollView#event_touchtap"></a>
###event: "touchtap"
触摸点击事件

**Params**

- event <code>[TouchEvent](#go2d.TouchEvent)</code> - 触摸事件对象  

<a name="go2d.ScrollView#event_addedtostage"></a>
###event: "addedtostage"
添加到舞台事件

**Params**

- stage <code>[Stage](#go2d.Stage)</code> - 舞台对象  

<a name="go2d.ScrollView#event_removedfromstage"></a>
###event: "removedfromstage"
移除出舞台事件

**Params**

- stage <code>[Stage](#go2d.Stage)</code> - 舞台对象  

<a name="go2d.ScrollView#event_resize"></a>
###event: "resize"
宽高变化事件

**Params**

- event <code>[ResizeEvent](#go2d.ResizeEvent)</code> - 宽高变化事件对象  

<a name="go2d.ScrollView#event_render"></a>
###event: "render"
开始渲染事件

**Params**

- event <code>[Event](#go2d.Event)</code> - 事件对象  

<a name="go2d.ScrollView#event_paint"></a>
###event: "paint"
绘制完毕事件

**Params**

- context `object` - 绘制上下文对象  

<a name="go2d.ScrollView#event_step"></a>
###event: "step"
步进（进入下一帧）事件

**Params**

- deltaTime `number` - 两帧时间差  

<a name="go2d.Sprite"></a>
##class: go2d.Sprite
**Extends**: `go2d.DisplayObject`  
**Members**

* [class: go2d.Sprite](#go2d.Sprite)
  * [new go2d.Sprite()](#new_go2d.Sprite)
  * [sprite._stage](#go2d.Sprite#_stage)
  * [sprite._timer](#go2d.Sprite#_timer)
  * [sprite._prevTime](#go2d.Sprite#_prevTime)
  * [sprite.canvas](#go2d.Sprite#canvas)
  * [sprite.context](#go2d.Sprite#context)
  * [sprite.name](#go2d.Sprite#name)
  * [sprite.tag](#go2d.Sprite#tag)
  * [sprite.stage](#go2d.Sprite#stage)
  * [sprite.paused](#go2d.Sprite#paused)
  * [sprite.touchable](#go2d.Sprite#touchable)
  * [sprite.touchChildren](#go2d.Sprite#touchChildren)
  * [sprite._dirty](#go2d.Sprite#_dirty)
  * [sprite._touches](#go2d.Sprite#_touches)
  * [sprite._children](#go2d.Sprite#_children)
  * [sprite.opacity](#go2d.Sprite#opacity)
  * [sprite.background](#go2d.Sprite#background)
  * [sprite.width](#go2d.Sprite#width)
  * [sprite.height](#go2d.Sprite#height)
  * [sprite.parent](#go2d.Sprite#parent)
  * [sprite.x](#go2d.Sprite#x)
  * [sprite.y](#go2d.Sprite#y)
  * [sprite.skewX](#go2d.Sprite#skewX)
  * [sprite.skewY](#go2d.Sprite#skewY)
  * [sprite.scaleX](#go2d.Sprite#scaleX)
  * [sprite.scaleY](#go2d.Sprite#scaleY)
  * [sprite.anchorX](#go2d.Sprite#anchorX)
  * [sprite.anchorY](#go2d.Sprite#anchorY)
  * [sprite.anchorOffsetX](#go2d.Sprite#anchorOffsetX)
  * [sprite.anchorOffsetY](#go2d.Sprite#anchorOffsetY)
  * [sprite.rotation](#go2d.Sprite#rotation)
  * [sprite.visible](#go2d.Sprite#visible)
  * [sprite.getTransform()](#go2d.Sprite#getTransform)
  * [sprite.show()](#go2d.Sprite#show)
  * [sprite.hide()](#go2d.Sprite#hide)
  * [sprite.render()](#go2d.Sprite#render)
  * [sprite.update()](#go2d.Sprite#update)
  * [sprite.addChild(child)](#go2d.Sprite#addChild)
  * [sprite.addChildAt(child, index)](#go2d.Sprite#addChildAt)
  * [sprite.getChildByName(name)](#go2d.Sprite#getChildByName)
  * [sprite.getChildrenByTag(tag)](#go2d.Sprite#getChildrenByTag)
  * [sprite.getChildAt(index)](#go2d.Sprite#getChildAt)
  * [sprite.getChildIndex(child)](#go2d.Sprite#getChildIndex)
  * [sprite.swapChildren(child1, child2)](#go2d.Sprite#swapChildren)
  * [sprite.swapChildrenAt(index1, index2)](#go2d.Sprite#swapChildrenAt)
  * [sprite.sortChildren(compare)](#go2d.Sprite#sortChildren)
  * [sprite.getAllChildren()](#go2d.Sprite#getAllChildren)
  * [sprite.removeChild(child, cleanup)](#go2d.Sprite#removeChild)
  * [sprite.removeChildAt(index, cleanup)](#go2d.Sprite#removeChildAt)
  * [sprite.removeChildrenByName(name, cleanup)](#go2d.Sprite#removeChildrenByName)
  * [sprite.removeChildrenByTag(tag, cleanup)](#go2d.Sprite#removeChildrenByTag)
  * [sprite.removeAllChildren(cleanup)](#go2d.Sprite#removeAllChildren)
  * [sprite.play()](#go2d.Sprite#play)
  * [sprite.pause()](#go2d.Sprite#pause)
  * [sprite.tick()](#go2d.Sprite#tick)
  * [sprite.dispose()](#go2d.Sprite#dispose)
  * [sprite.setText()](#go2d.Sprite#setText)
  * [sprite.on(name, callback)](#go2d.Sprite#on)
  * [sprite.emit(name, [event])](#go2d.Sprite#emit)
  * [sprite.on(listeners)](#go2d.Sprite#on)
  * [sprite.off(name, [callback])](#go2d.Sprite#off)
  * [sprite.emit(name, [...params])](#go2d.Sprite#emit)
  * [event: "touchstart"](#go2d.Sprite#event_touchstart)
  * [event: "touchmove"](#go2d.Sprite#event_touchmove)
  * [event: "touchend"](#go2d.Sprite#event_touchend)
  * [event: "touchtap"](#go2d.Sprite#event_touchtap)
  * [event: "addedtostage"](#go2d.Sprite#event_addedtostage)
  * [event: "removedfromstage"](#go2d.Sprite#event_removedfromstage)
  * [event: "resize"](#go2d.Sprite#event_resize)
  * [event: "render"](#go2d.Sprite#event_render)
  * [event: "paint"](#go2d.Sprite#event_paint)
  * [event: "step"](#go2d.Sprite#event_step)

<a name="new_go2d.Sprite"></a>
###new go2d.Sprite()
显示对象元素类，所有舞台上的显示对象都基于此类。

**Extends**: `go2d.DisplayObject`  
**Author**: Lanfei  
<a name="go2d.Sprite#_stage"></a>
###sprite._stage
舞台对象

**Type**: [Stage](#go2d.Stage)  
**Access**: protected  
<a name="go2d.Sprite#_timer"></a>
###sprite._timer
主循环定时器

**Type**: `Object`  
**Access**: protected  
<a name="go2d.Sprite#_prevTime"></a>
###sprite._prevTime
上一帧时间戳，用于计算帧频

**Type**: `number`  
**Access**: protected  
<a name="go2d.Sprite#canvas"></a>
###sprite.canvas
用于渲染的画布对象

**Type**: `object`  
**Read only**: true  
<a name="go2d.Sprite#context"></a>
###sprite.context
画布的上下文对象

**Type**: `object`  
**Read only**: true  
<a name="go2d.Sprite#name"></a>
###sprite.name
用于标识该对象的名字，该属性在兄弟对象中应该唯一

**Type**: `string`  
<a name="go2d.Sprite#tag"></a>
###sprite.tag
用于标识该对象的标签

**Type**: `string`  
<a name="go2d.Sprite#stage"></a>
###sprite.stage
该对象所属的舞台对象

**Type**: [Stage](#go2d.Stage)  
**Read only**: true  
<a name="go2d.Sprite#paused"></a>
###sprite.paused
是否已暂停

**Type**: `Boolean`  
**Default**: `false`  
<a name="go2d.Sprite#touchable"></a>
###sprite.touchable
是否可点击

**Type**: `Boolean`  
**Default**: `true`  
<a name="go2d.Sprite#touchChildren"></a>
###sprite.touchChildren
子节点是否可点击

**Type**: `Boolean`  
**Default**: `true`  
<a name="go2d.Sprite#_dirty"></a>
###sprite._dirty
是否需要重新渲染

**Type**: `Boolean`  
**Default**: `true`  
**Access**: protected  
<a name="go2d.Sprite#_touches"></a>
###sprite._touches
触摸标识数组

**Type**: `Array`  
**Access**: protected  
<a name="go2d.Sprite#_children"></a>
###sprite._children
子对象数组

**Type**: `Array`  
**Access**: protected  
<a name="go2d.Sprite#opacity"></a>
###sprite.opacity
不透明度

**Type**: `number`  
**Default**: `1`  
<a name="go2d.Sprite#background"></a>
###sprite.background
背景颜色或样式

**Type**: `null` | `string` | `Object`  
**Default**: `null`  
<a name="go2d.Sprite#width"></a>
###sprite.width
宽度

**Type**: `number`  
<a name="go2d.Sprite#height"></a>
###sprite.height
高度

**Type**: `number`  
<a name="go2d.Sprite#parent"></a>
###sprite.parent
父对象

**Type**: [DisplayObject](#go2d.DisplayObject)  
<a name="go2d.Sprite#x"></a>
###sprite.x
水平坐标

**Type**: `number`  
**Default**: `0`  
<a name="go2d.Sprite#y"></a>
###sprite.y
垂直坐标

**Type**: `number`  
**Default**: `0`  
<a name="go2d.Sprite#skewX"></a>
###sprite.skewX
水平方向斜切

**Type**: `number`  
**Default**: `0`  
<a name="go2d.Sprite#skewY"></a>
###sprite.skewY
垂直方向斜切

**Type**: `number`  
**Default**: `0`  
<a name="go2d.Sprite#scaleX"></a>
###sprite.scaleX
水平方向缩放

**Type**: `number`  
**Default**: `1`  
<a name="go2d.Sprite#scaleY"></a>
###sprite.scaleY
垂直方向缩放

**Type**: `number`  
**Default**: `1`  
<a name="go2d.Sprite#anchorX"></a>
###sprite.anchorX
水平方向锚点偏移比例

**Type**: `number`  
**Default**: `0`  
<a name="go2d.Sprite#anchorY"></a>
###sprite.anchorY
垂直方向锚点偏移比例

**Type**: `number`  
**Default**: `0`  
<a name="go2d.Sprite#anchorOffsetX"></a>
###sprite.anchorOffsetX
水平方向锚点偏移像素

**Type**: `number`  
**Default**: `0`  
<a name="go2d.Sprite#anchorOffsetY"></a>
###sprite.anchorOffsetY
垂直方向锚点偏移像素

**Type**: `number`  
**Default**: `0`  
<a name="go2d.Sprite#rotation"></a>
###sprite.rotation
旋转角度

**Type**: `number`  
**Default**: `0`  
<a name="go2d.Sprite#visible"></a>
###sprite.visible
是否可见

**Type**: `Boolean`  
**Default**: `true`  
<a name="go2d.Sprite#getTransform"></a>
###sprite.getTransform()
获取变化矩阵

**Returns**: [Matrix](#go2d.Matrix)  
<a name="go2d.Sprite#show"></a>
###sprite.show()
显示该对象

**Returns**: `this`  
<a name="go2d.Sprite#hide"></a>
###sprite.hide()
隐藏该对象

**Returns**: `this`  
<a name="go2d.Sprite#render"></a>
###sprite.render()
渲染该对象

**Returns**: `this`  
<a name="go2d.Sprite#update"></a>
###sprite.update()
更新对象渲染状态，当该对象需要重新渲染时调用

**Returns**: `this`  
<a name="go2d.Sprite#addChild"></a>
###sprite.addChild(child)
添加子对象

**Params**

- child <code>[DisplayObject](#go2d.DisplayObject)</code> - 要添加的子对象  

**Returns**: `this`  
<a name="go2d.Sprite#addChildAt"></a>
###sprite.addChildAt(child, index)
在指定深度添加子对象

**Params**

- child <code>[DisplayObject](#go2d.DisplayObject)</code> - 要添加的子对象  
- index `number` - 深度，数值越小层级越低  

**Returns**: `this`  
<a name="go2d.Sprite#getChildByName"></a>
###sprite.getChildByName(name)
获取指定名字的子对象

**Params**

- name `string` - 子对象名字  

**Returns**: [DisplayObject](#go2d.DisplayObject) - 对应的子对象  
<a name="go2d.Sprite#getChildrenByTag"></a>
###sprite.getChildrenByTag(tag)
获取指定标签的子对象

**Params**

- tag `string` - 子对象标签  

**Returns**: `Array` - 对应的子对象数组  
<a name="go2d.Sprite#getChildAt"></a>
###sprite.getChildAt(index)
获取指定深度的子对象

**Params**

- index `number` - 子对象深度  

**Returns**: [DisplayObject](#go2d.DisplayObject) - 对应的子对象  
<a name="go2d.Sprite#getChildIndex"></a>
###sprite.getChildIndex(child)
获取指定子对象的深度

**Params**

- child <code>[DisplayObject](#go2d.DisplayObject)</code> - 对应的子对象  

**Returns**: `number` - 子对象深度  
<a name="go2d.Sprite#swapChildren"></a>
###sprite.swapChildren(child1, child2)
交换两个子对象的深度

**Params**

- child1 <code>[DisplayObject](#go2d.DisplayObject)</code> - 要交换的子对象一  
- child2 <code>[DisplayObject](#go2d.DisplayObject)</code> - 要交换的子对象二  

**Returns**: `this`  
<a name="go2d.Sprite#swapChildrenAt"></a>
###sprite.swapChildrenAt(index1, index2)
交换两个子对象的深度

**Params**

- index1 `number` - 要交换的子对象深度一  
- index2 `number` - 要交换的子对象深度二  

**Returns**: `this`  
<a name="go2d.Sprite#sortChildren"></a>
###sprite.sortChildren(compare)
排列子对象

**Params**

- compare `function` - 用于比较的函数  

**Returns**: `this`  
<a name="go2d.Sprite#getAllChildren"></a>
###sprite.getAllChildren()
获取所有子对象

**Returns**: `Array` - 所有子对象数组  
<a name="go2d.Sprite#removeChild"></a>
###sprite.removeChild(child, cleanup)
移除指定的子对象

**Params**

- child <code>[DisplayObject](#go2d.DisplayObject)</code> - 对应的子对象  
- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.Sprite#removeChildAt"></a>
###sprite.removeChildAt(index, cleanup)
移除指定深度的子对象

**Params**

- index `number` - 子对象的深度  
- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.Sprite#removeChildrenByName"></a>
###sprite.removeChildrenByName(name, cleanup)
移除指定名字的子对象

**Params**

- name `string` - 子对象的名字  
- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.Sprite#removeChildrenByTag"></a>
###sprite.removeChildrenByTag(tag, cleanup)
移除指定标签的子对象

**Params**

- tag `string` - 子对象的标签  
- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.Sprite#removeAllChildren"></a>
###sprite.removeAllChildren(cleanup)
移除所有子对象

**Params**

- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.Sprite#play"></a>
###sprite.play()
开始该对象的帧播放

**Returns**: `this`  
<a name="go2d.Sprite#pause"></a>
###sprite.pause()
暂停该对象的帧播放

**Returns**: `this`  
<a name="go2d.Sprite#tick"></a>
###sprite.tick()
进入下一帧，该方法应只由引擎本身调用

**Returns**: `this`  
<a name="go2d.Sprite#dispose"></a>
###sprite.dispose()
释放对象内存

<a name="go2d.Sprite#setText"></a>
###sprite.setText()
设置要显示的文字

**Returns**: `this`  
<a name="go2d.Sprite#on"></a>
###sprite.on(name, callback)
添加事件侦听器

**Params**

- name `string` - 事件名称  
- callback `function` - 回调函数  

**Returns**: `this`  
<a name="go2d.Sprite#emit"></a>
###sprite.emit(name, [event])
通过事件对象派发事件

**Params**

- name `string` - 事件名称  
- \[event\] <code>[Event](#go2d.Event)</code> - 事件对象  

**Returns**: `this`  
<a name="go2d.Sprite#on"></a>
###sprite.on(listeners)
批量添加事件侦听器

**Params**

- listeners `Object` - 以事件名称为键名，回调函数为键值的哈希表  

**Returns**: `this`  
<a name="go2d.Sprite#off"></a>
###sprite.off(name, [callback])
移除事件侦听器

**Params**

- name `string` - 事件名称  
- \[callback\] `function` - 回调函数，当该参数为空时将移除该事件的所有回调  

**Returns**: `this`  
<a name="go2d.Sprite#emit"></a>
###sprite.emit(name, [...params])
通过任意事件参数派发事件

**Params**

- name `string` - 事件名称  
- \[...params\] `*` - 事件参数  

**Returns**: `this`  
<a name="go2d.Sprite#event_touchstart"></a>
###event: "touchstart"
触摸开始事件

**Params**

- event <code>[TouchEvent](#go2d.TouchEvent)</code> - 触摸事件对象  

<a name="go2d.Sprite#event_touchmove"></a>
###event: "touchmove"
触摸移动事件

**Params**

- event <code>[TouchEvent](#go2d.TouchEvent)</code> - 触摸事件对象  

<a name="go2d.Sprite#event_touchend"></a>
###event: "touchend"
触摸结束事件

**Params**

- event <code>[TouchEvent](#go2d.TouchEvent)</code> - 触摸事件对象  

<a name="go2d.Sprite#event_touchtap"></a>
###event: "touchtap"
触摸点击事件

**Params**

- event <code>[TouchEvent](#go2d.TouchEvent)</code> - 触摸事件对象  

<a name="go2d.Sprite#event_addedtostage"></a>
###event: "addedtostage"
添加到舞台事件

**Params**

- stage <code>[Stage](#go2d.Stage)</code> - 舞台对象  

<a name="go2d.Sprite#event_removedfromstage"></a>
###event: "removedfromstage"
移除出舞台事件

**Params**

- stage <code>[Stage](#go2d.Stage)</code> - 舞台对象  

<a name="go2d.Sprite#event_resize"></a>
###event: "resize"
宽高变化事件

**Params**

- event <code>[ResizeEvent](#go2d.ResizeEvent)</code> - 宽高变化事件对象  

<a name="go2d.Sprite#event_render"></a>
###event: "render"
开始渲染事件

**Params**

- event <code>[Event](#go2d.Event)</code> - 事件对象  

<a name="go2d.Sprite#event_paint"></a>
###event: "paint"
绘制完毕事件

**Params**

- context `object` - 绘制上下文对象  

<a name="go2d.Sprite#event_step"></a>
###event: "step"
步进（进入下一帧）事件

**Params**

- deltaTime `number` - 两帧时间差  

<a name="go2d.Stage"></a>
##class: go2d.Stage
**Extends**: `go2d.DisplayObject`  
**Members**

* [class: go2d.Stage](#go2d.Stage)
  * [new go2d.Stage(canvas)](#new_go2d.Stage)
  * [stage._stage](#go2d.Stage#_stage)
  * [stage._timer](#go2d.Stage#_timer)
  * [stage._prevTime](#go2d.Stage#_prevTime)
  * [stage.canvas](#go2d.Stage#canvas)
  * [stage.context](#go2d.Stage#context)
  * [stage.name](#go2d.Stage#name)
  * [stage.tag](#go2d.Stage#tag)
  * [stage.stage](#go2d.Stage#stage)
  * [stage.paused](#go2d.Stage#paused)
  * [stage.touchable](#go2d.Stage#touchable)
  * [stage.touchChildren](#go2d.Stage#touchChildren)
  * [stage._dirty](#go2d.Stage#_dirty)
  * [stage._touches](#go2d.Stage#_touches)
  * [stage._children](#go2d.Stage#_children)
  * [stage.opacity](#go2d.Stage#opacity)
  * [stage.background](#go2d.Stage#background)
  * [stage.width](#go2d.Stage#width)
  * [stage.height](#go2d.Stage#height)
  * [stage.parent](#go2d.Stage#parent)
  * [stage.x](#go2d.Stage#x)
  * [stage.y](#go2d.Stage#y)
  * [stage.skewX](#go2d.Stage#skewX)
  * [stage.skewY](#go2d.Stage#skewY)
  * [stage.scaleX](#go2d.Stage#scaleX)
  * [stage.scaleY](#go2d.Stage#scaleY)
  * [stage.anchorX](#go2d.Stage#anchorX)
  * [stage.anchorY](#go2d.Stage#anchorY)
  * [stage.anchorOffsetX](#go2d.Stage#anchorOffsetX)
  * [stage.anchorOffsetY](#go2d.Stage#anchorOffsetY)
  * [stage.rotation](#go2d.Stage#rotation)
  * [stage.visible](#go2d.Stage#visible)
  * [stage.render()](#go2d.Stage#render)
  * [stage.update()](#go2d.Stage#update)
  * [stage.addChild(child)](#go2d.Stage#addChild)
  * [stage.addChildAt(child, index)](#go2d.Stage#addChildAt)
  * [stage.getChildByName(name)](#go2d.Stage#getChildByName)
  * [stage.getChildrenByTag(tag)](#go2d.Stage#getChildrenByTag)
  * [stage.getChildAt(index)](#go2d.Stage#getChildAt)
  * [stage.getChildIndex(child)](#go2d.Stage#getChildIndex)
  * [stage.swapChildren(child1, child2)](#go2d.Stage#swapChildren)
  * [stage.swapChildrenAt(index1, index2)](#go2d.Stage#swapChildrenAt)
  * [stage.sortChildren(compare)](#go2d.Stage#sortChildren)
  * [stage.getAllChildren()](#go2d.Stage#getAllChildren)
  * [stage.removeChild(child, cleanup)](#go2d.Stage#removeChild)
  * [stage.removeChildAt(index, cleanup)](#go2d.Stage#removeChildAt)
  * [stage.removeChildrenByName(name, cleanup)](#go2d.Stage#removeChildrenByName)
  * [stage.removeChildrenByTag(tag, cleanup)](#go2d.Stage#removeChildrenByTag)
  * [stage.removeAllChildren(cleanup)](#go2d.Stage#removeAllChildren)
  * [stage.play()](#go2d.Stage#play)
  * [stage.pause()](#go2d.Stage#pause)
  * [stage.tick()](#go2d.Stage#tick)
  * [stage.dispose()](#go2d.Stage#dispose)
  * [stage.setText()](#go2d.Stage#setText)
  * [stage.on(name, callback)](#go2d.Stage#on)
  * [stage.emit(name, [event])](#go2d.Stage#emit)
  * [stage.on(listeners)](#go2d.Stage#on)
  * [stage.off(name, [callback])](#go2d.Stage#off)
  * [stage.emit(name, [...params])](#go2d.Stage#emit)
  * [event: "touchstart"](#go2d.Stage#event_touchstart)
  * [event: "touchmove"](#go2d.Stage#event_touchmove)
  * [event: "touchend"](#go2d.Stage#event_touchend)
  * [event: "touchtap"](#go2d.Stage#event_touchtap)
  * [event: "addedtostage"](#go2d.Stage#event_addedtostage)
  * [event: "removedfromstage"](#go2d.Stage#event_removedfromstage)
  * [event: "resize"](#go2d.Stage#event_resize)
  * [event: "render"](#go2d.Stage#event_render)
  * [event: "paint"](#go2d.Stage#event_paint)
  * [event: "step"](#go2d.Stage#event_step)

<a name="new_go2d.Stage"></a>
###new go2d.Stage(canvas)
舞台类，最顶层的显示对象，游戏内容的主绘图区。

**Params**

- canvas `object` - 用于渲染的画布对象  

**Extends**: `go2d.DisplayObject`  
**Author**: Lanfei  
<a name="go2d.Stage#_stage"></a>
###stage._stage
舞台对象

**Type**: [Stage](#go2d.Stage)  
**Access**: protected  
<a name="go2d.Stage#_timer"></a>
###stage._timer
主循环定时器

**Type**: `Object`  
**Access**: protected  
<a name="go2d.Stage#_prevTime"></a>
###stage._prevTime
上一帧时间戳，用于计算帧频

**Type**: `number`  
**Access**: protected  
<a name="go2d.Stage#canvas"></a>
###stage.canvas
用于渲染的画布对象

**Type**: `object`  
**Read only**: true  
<a name="go2d.Stage#context"></a>
###stage.context
画布的上下文对象

**Type**: `object`  
**Read only**: true  
<a name="go2d.Stage#name"></a>
###stage.name
用于标识该对象的名字，该属性在兄弟对象中应该唯一

**Type**: `string`  
<a name="go2d.Stage#tag"></a>
###stage.tag
用于标识该对象的标签

**Type**: `string`  
<a name="go2d.Stage#stage"></a>
###stage.stage
该对象所属的舞台对象

**Type**: [Stage](#go2d.Stage)  
**Read only**: true  
<a name="go2d.Stage#paused"></a>
###stage.paused
是否已暂停

**Type**: `Boolean`  
**Default**: `false`  
<a name="go2d.Stage#touchable"></a>
###stage.touchable
是否可点击

**Type**: `Boolean`  
**Default**: `true`  
<a name="go2d.Stage#touchChildren"></a>
###stage.touchChildren
子节点是否可点击

**Type**: `Boolean`  
**Default**: `true`  
<a name="go2d.Stage#_dirty"></a>
###stage._dirty
是否需要重新渲染

**Type**: `Boolean`  
**Default**: `true`  
**Access**: protected  
<a name="go2d.Stage#_touches"></a>
###stage._touches
触摸标识数组

**Type**: `Array`  
**Access**: protected  
<a name="go2d.Stage#_children"></a>
###stage._children
子对象数组

**Type**: `Array`  
**Access**: protected  
<a name="go2d.Stage#opacity"></a>
###stage.opacity
不透明度

**Type**: `number`  
**Default**: `1`  
<a name="go2d.Stage#background"></a>
###stage.background
背景颜色或样式

**Type**: `null` | `string` | `Object`  
**Default**: `null`  
<a name="go2d.Stage#width"></a>
###stage.width
宽度

**Type**: `number`  
<a name="go2d.Stage#height"></a>
###stage.height
高度

**Type**: `number`  
<a name="go2d.Stage#parent"></a>
###stage.parent
父对象

**Type**: [DisplayObject](#go2d.DisplayObject)  
<a name="go2d.Stage#x"></a>
###stage.x
水平坐标

**Type**: `number`  
**Default**: `0`  
<a name="go2d.Stage#y"></a>
###stage.y
垂直坐标

**Type**: `number`  
**Default**: `0`  
<a name="go2d.Stage#skewX"></a>
###stage.skewX
水平方向斜切

**Type**: `number`  
**Default**: `0`  
<a name="go2d.Stage#skewY"></a>
###stage.skewY
垂直方向斜切

**Type**: `number`  
**Default**: `0`  
<a name="go2d.Stage#scaleX"></a>
###stage.scaleX
水平方向缩放

**Type**: `number`  
**Default**: `1`  
<a name="go2d.Stage#scaleY"></a>
###stage.scaleY
垂直方向缩放

**Type**: `number`  
**Default**: `1`  
<a name="go2d.Stage#anchorX"></a>
###stage.anchorX
水平方向锚点偏移比例

**Type**: `number`  
**Default**: `0`  
<a name="go2d.Stage#anchorY"></a>
###stage.anchorY
垂直方向锚点偏移比例

**Type**: `number`  
**Default**: `0`  
<a name="go2d.Stage#anchorOffsetX"></a>
###stage.anchorOffsetX
水平方向锚点偏移像素

**Type**: `number`  
**Default**: `0`  
<a name="go2d.Stage#anchorOffsetY"></a>
###stage.anchorOffsetY
垂直方向锚点偏移像素

**Type**: `number`  
**Default**: `0`  
<a name="go2d.Stage#rotation"></a>
###stage.rotation
旋转角度

**Type**: `number`  
**Default**: `0`  
<a name="go2d.Stage#visible"></a>
###stage.visible
是否可见

**Type**: `Boolean`  
**Default**: `true`  
<a name="go2d.Stage#render"></a>
###stage.render()
渲染该对象

**Returns**: `this`  
<a name="go2d.Stage#update"></a>
###stage.update()
更新对象渲染状态，当该对象需要重新渲染时调用

**Returns**: `this`  
<a name="go2d.Stage#addChild"></a>
###stage.addChild(child)
添加子对象

**Params**

- child <code>[DisplayObject](#go2d.DisplayObject)</code> - 要添加的子对象  

**Returns**: `this`  
<a name="go2d.Stage#addChildAt"></a>
###stage.addChildAt(child, index)
在指定深度添加子对象

**Params**

- child <code>[DisplayObject](#go2d.DisplayObject)</code> - 要添加的子对象  
- index `number` - 深度，数值越小层级越低  

**Returns**: `this`  
<a name="go2d.Stage#getChildByName"></a>
###stage.getChildByName(name)
获取指定名字的子对象

**Params**

- name `string` - 子对象名字  

**Returns**: [DisplayObject](#go2d.DisplayObject) - 对应的子对象  
<a name="go2d.Stage#getChildrenByTag"></a>
###stage.getChildrenByTag(tag)
获取指定标签的子对象

**Params**

- tag `string` - 子对象标签  

**Returns**: `Array` - 对应的子对象数组  
<a name="go2d.Stage#getChildAt"></a>
###stage.getChildAt(index)
获取指定深度的子对象

**Params**

- index `number` - 子对象深度  

**Returns**: [DisplayObject](#go2d.DisplayObject) - 对应的子对象  
<a name="go2d.Stage#getChildIndex"></a>
###stage.getChildIndex(child)
获取指定子对象的深度

**Params**

- child <code>[DisplayObject](#go2d.DisplayObject)</code> - 对应的子对象  

**Returns**: `number` - 子对象深度  
<a name="go2d.Stage#swapChildren"></a>
###stage.swapChildren(child1, child2)
交换两个子对象的深度

**Params**

- child1 <code>[DisplayObject](#go2d.DisplayObject)</code> - 要交换的子对象一  
- child2 <code>[DisplayObject](#go2d.DisplayObject)</code> - 要交换的子对象二  

**Returns**: `this`  
<a name="go2d.Stage#swapChildrenAt"></a>
###stage.swapChildrenAt(index1, index2)
交换两个子对象的深度

**Params**

- index1 `number` - 要交换的子对象深度一  
- index2 `number` - 要交换的子对象深度二  

**Returns**: `this`  
<a name="go2d.Stage#sortChildren"></a>
###stage.sortChildren(compare)
排列子对象

**Params**

- compare `function` - 用于比较的函数  

**Returns**: `this`  
<a name="go2d.Stage#getAllChildren"></a>
###stage.getAllChildren()
获取所有子对象

**Returns**: `Array` - 所有子对象数组  
<a name="go2d.Stage#removeChild"></a>
###stage.removeChild(child, cleanup)
移除指定的子对象

**Params**

- child <code>[DisplayObject](#go2d.DisplayObject)</code> - 对应的子对象  
- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.Stage#removeChildAt"></a>
###stage.removeChildAt(index, cleanup)
移除指定深度的子对象

**Params**

- index `number` - 子对象的深度  
- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.Stage#removeChildrenByName"></a>
###stage.removeChildrenByName(name, cleanup)
移除指定名字的子对象

**Params**

- name `string` - 子对象的名字  
- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.Stage#removeChildrenByTag"></a>
###stage.removeChildrenByTag(tag, cleanup)
移除指定标签的子对象

**Params**

- tag `string` - 子对象的标签  
- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.Stage#removeAllChildren"></a>
###stage.removeAllChildren(cleanup)
移除所有子对象

**Params**

- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.Stage#play"></a>
###stage.play()
开始该对象的帧播放

**Returns**: `this`  
<a name="go2d.Stage#pause"></a>
###stage.pause()
暂停该对象的帧播放

**Returns**: `this`  
<a name="go2d.Stage#tick"></a>
###stage.tick()
进入下一帧，该方法应只由引擎本身调用

**Returns**: `this`  
<a name="go2d.Stage#dispose"></a>
###stage.dispose()
释放对象内存

<a name="go2d.Stage#setText"></a>
###stage.setText()
设置要显示的文字

**Returns**: `this`  
<a name="go2d.Stage#on"></a>
###stage.on(name, callback)
添加事件侦听器

**Params**

- name `string` - 事件名称  
- callback `function` - 回调函数  

**Returns**: `this`  
<a name="go2d.Stage#emit"></a>
###stage.emit(name, [event])
通过事件对象派发事件

**Params**

- name `string` - 事件名称  
- \[event\] <code>[Event](#go2d.Event)</code> - 事件对象  

**Returns**: `this`  
<a name="go2d.Stage#on"></a>
###stage.on(listeners)
批量添加事件侦听器

**Params**

- listeners `Object` - 以事件名称为键名，回调函数为键值的哈希表  

**Returns**: `this`  
<a name="go2d.Stage#off"></a>
###stage.off(name, [callback])
移除事件侦听器

**Params**

- name `string` - 事件名称  
- \[callback\] `function` - 回调函数，当该参数为空时将移除该事件的所有回调  

**Returns**: `this`  
<a name="go2d.Stage#emit"></a>
###stage.emit(name, [...params])
通过任意事件参数派发事件

**Params**

- name `string` - 事件名称  
- \[...params\] `*` - 事件参数  

**Returns**: `this`  
<a name="go2d.Stage#event_touchstart"></a>
###event: "touchstart"
触摸开始事件

**Params**

- event <code>[TouchEvent](#go2d.TouchEvent)</code> - 触摸事件对象  

<a name="go2d.Stage#event_touchmove"></a>
###event: "touchmove"
触摸移动事件

**Params**

- event <code>[TouchEvent](#go2d.TouchEvent)</code> - 触摸事件对象  

<a name="go2d.Stage#event_touchend"></a>
###event: "touchend"
触摸结束事件

**Params**

- event <code>[TouchEvent](#go2d.TouchEvent)</code> - 触摸事件对象  

<a name="go2d.Stage#event_touchtap"></a>
###event: "touchtap"
触摸点击事件

**Params**

- event <code>[TouchEvent](#go2d.TouchEvent)</code> - 触摸事件对象  

<a name="go2d.Stage#event_addedtostage"></a>
###event: "addedtostage"
添加到舞台事件

**Params**

- stage <code>[Stage](#go2d.Stage)</code> - 舞台对象  

<a name="go2d.Stage#event_removedfromstage"></a>
###event: "removedfromstage"
移除出舞台事件

**Params**

- stage <code>[Stage](#go2d.Stage)</code> - 舞台对象  

<a name="go2d.Stage#event_resize"></a>
###event: "resize"
宽高变化事件

**Params**

- event <code>[ResizeEvent](#go2d.ResizeEvent)</code> - 宽高变化事件对象  

<a name="go2d.Stage#event_render"></a>
###event: "render"
开始渲染事件

**Params**

- event <code>[Event](#go2d.Event)</code> - 事件对象  

<a name="go2d.Stage#event_paint"></a>
###event: "paint"
绘制完毕事件

**Params**

- context `object` - 绘制上下文对象  

<a name="go2d.Stage#event_step"></a>
###event: "step"
步进（进入下一帧）事件

**Params**

- deltaTime `number` - 两帧时间差  

<a name="go2d.TextField"></a>
##class: go2d.TextField
**Extends**: `go2d.Sprite`  
**Members**

* [class: go2d.TextField](#go2d.TextField)
  * [new go2d.TextField([text])](#new_go2d.TextField)
  * [textField.bold](#go2d.TextField#bold)
  * [textField.italic](#go2d.TextField#italic)
  * [textField.fontSize](#go2d.TextField#fontSize)
  * [textField.color](#go2d.TextField#color)
  * [textField.textAlign](#go2d.TextField#textAlign)
  * [textField.lineHeight](#go2d.TextField#lineHeight)
  * [textField.strokeSize](#go2d.TextField#strokeSize)
  * [textField.strokeColor](#go2d.TextField#strokeColor)
  * [textField.fontFamily](#go2d.TextField#fontFamily)
  * [textField.breakWord](#go2d.TextField#breakWord)
  * [textField.autoResize](#go2d.TextField#autoResize)
  * [textField.paddingTop](#go2d.TextField#paddingTop)
  * [textField.paddingLeft](#go2d.TextField#paddingLeft)
  * [textField.paddingRight](#go2d.TextField#paddingRight)
  * [textField.paddingBottom](#go2d.TextField#paddingBottom)
  * [textField.maxWidth](#go2d.TextField#maxWidth)
  * [textField.maxHeight](#go2d.TextField#maxHeight)
  * [textField.textRange](#go2d.TextField#textRange)
  * [textField.textWidth](#go2d.TextField#textWidth)
  * [textField.textHeight](#go2d.TextField#textHeight)
  * [textField.text](#go2d.TextField#text)
  * [textField._stage](#go2d.TextField#_stage)
  * [textField._timer](#go2d.TextField#_timer)
  * [textField._prevTime](#go2d.TextField#_prevTime)
  * [textField.canvas](#go2d.TextField#canvas)
  * [textField.context](#go2d.TextField#context)
  * [textField.name](#go2d.TextField#name)
  * [textField.tag](#go2d.TextField#tag)
  * [textField.stage](#go2d.TextField#stage)
  * [textField.paused](#go2d.TextField#paused)
  * [textField.touchable](#go2d.TextField#touchable)
  * [textField.touchChildren](#go2d.TextField#touchChildren)
  * [textField._dirty](#go2d.TextField#_dirty)
  * [textField._touches](#go2d.TextField#_touches)
  * [textField._children](#go2d.TextField#_children)
  * [textField.opacity](#go2d.TextField#opacity)
  * [textField.background](#go2d.TextField#background)
  * [textField.width](#go2d.TextField#width)
  * [textField.height](#go2d.TextField#height)
  * [textField.parent](#go2d.TextField#parent)
  * [textField.x](#go2d.TextField#x)
  * [textField.y](#go2d.TextField#y)
  * [textField.skewX](#go2d.TextField#skewX)
  * [textField.skewY](#go2d.TextField#skewY)
  * [textField.scaleX](#go2d.TextField#scaleX)
  * [textField.scaleY](#go2d.TextField#scaleY)
  * [textField.anchorX](#go2d.TextField#anchorX)
  * [textField.anchorY](#go2d.TextField#anchorY)
  * [textField.anchorOffsetX](#go2d.TextField#anchorOffsetX)
  * [textField.anchorOffsetY](#go2d.TextField#anchorOffsetY)
  * [textField.rotation](#go2d.TextField#rotation)
  * [textField.visible](#go2d.TextField#visible)
  * [textField.getTransform()](#go2d.TextField#getTransform)
  * [textField.show()](#go2d.TextField#show)
  * [textField.hide()](#go2d.TextField#hide)
  * [textField.render()](#go2d.TextField#render)
  * [textField.update()](#go2d.TextField#update)
  * [textField.addChild(child)](#go2d.TextField#addChild)
  * [textField.addChildAt(child, index)](#go2d.TextField#addChildAt)
  * [textField.getChildByName(name)](#go2d.TextField#getChildByName)
  * [textField.getChildrenByTag(tag)](#go2d.TextField#getChildrenByTag)
  * [textField.getChildAt(index)](#go2d.TextField#getChildAt)
  * [textField.getChildIndex(child)](#go2d.TextField#getChildIndex)
  * [textField.swapChildren(child1, child2)](#go2d.TextField#swapChildren)
  * [textField.swapChildrenAt(index1, index2)](#go2d.TextField#swapChildrenAt)
  * [textField.sortChildren(compare)](#go2d.TextField#sortChildren)
  * [textField.getAllChildren()](#go2d.TextField#getAllChildren)
  * [textField.removeChild(child, cleanup)](#go2d.TextField#removeChild)
  * [textField.removeChildAt(index, cleanup)](#go2d.TextField#removeChildAt)
  * [textField.removeChildrenByName(name, cleanup)](#go2d.TextField#removeChildrenByName)
  * [textField.removeChildrenByTag(tag, cleanup)](#go2d.TextField#removeChildrenByTag)
  * [textField.removeAllChildren(cleanup)](#go2d.TextField#removeAllChildren)
  * [textField.play()](#go2d.TextField#play)
  * [textField.pause()](#go2d.TextField#pause)
  * [textField.tick()](#go2d.TextField#tick)
  * [textField.dispose()](#go2d.TextField#dispose)
  * [textField.setText()](#go2d.TextField#setText)
  * [textField.on(name, callback)](#go2d.TextField#on)
  * [textField.emit(name, [event])](#go2d.TextField#emit)
  * [textField.on(listeners)](#go2d.TextField#on)
  * [textField.off(name, [callback])](#go2d.TextField#off)
  * [textField.emit(name, [...params])](#go2d.TextField#emit)
  * [event: "touchstart"](#go2d.TextField#event_touchstart)
  * [event: "touchmove"](#go2d.TextField#event_touchmove)
  * [event: "touchend"](#go2d.TextField#event_touchend)
  * [event: "touchtap"](#go2d.TextField#event_touchtap)
  * [event: "addedtostage"](#go2d.TextField#event_addedtostage)
  * [event: "removedfromstage"](#go2d.TextField#event_removedfromstage)
  * [event: "resize"](#go2d.TextField#event_resize)
  * [event: "render"](#go2d.TextField#event_render)
  * [event: "paint"](#go2d.TextField#event_paint)
  * [event: "step"](#go2d.TextField#event_step)

<a name="new_go2d.TextField"></a>
###new go2d.TextField([text])
文本显示类，用于文本排列和显示。

**Params**

- \[text\] `string` - 要显示的文本  

**Extends**: `go2d.Sprite`  
**Author**: Lanfei  
<a name="go2d.TextField#bold"></a>
###textField.bold
是否粗体

**Type**: `Boolean`  
**Default**: `false`  
<a name="go2d.TextField#italic"></a>
###textField.italic
是否斜体

**Type**: `Boolean`  
**Default**: `false`  
<a name="go2d.TextField#fontSize"></a>
###textField.fontSize
字体大小

**Type**: `number`  
**Default**: `24`  
<a name="go2d.TextField#color"></a>
###textField.color
字体颜色或样式

**Type**: `string`  
**Default**: `black |Object`  
<a name="go2d.TextField#textAlign"></a>
###textField.textAlign
对齐方式

**Type**: `string`  
**Default**: `left`  
<a name="go2d.TextField#lineHeight"></a>
###textField.lineHeight
行高，可为百分比

**Type**: `number`  
**Default**: `120% |string`  
<a name="go2d.TextField#strokeSize"></a>
###textField.strokeSize
描边大小

**Type**: `number`  
**Default**: `0`  
<a name="go2d.TextField#strokeColor"></a>
###textField.strokeColor
描边颜色或样式

**Type**: `string`  
**Default**: `null |Object`  
<a name="go2d.TextField#fontFamily"></a>
###textField.fontFamily
文本字体

**Type**: `string`  
**Default**: `Arial`  
<a name="go2d.TextField#breakWord"></a>
###textField.breakWord
是否允许在单词内部换行

**Type**: `Boolean`  
**Default**: `false`  
<a name="go2d.TextField#autoResize"></a>
###textField.autoResize
是否自动调整宽高

**Type**: `Boolean`  
**Default**: `false`  
<a name="go2d.TextField#paddingTop"></a>
###textField.paddingTop
顶部内边距

**Type**: `number`  
**Default**: `0`  
<a name="go2d.TextField#paddingLeft"></a>
###textField.paddingLeft
左部内边距

**Type**: `number`  
**Default**: `0`  
<a name="go2d.TextField#paddingRight"></a>
###textField.paddingRight
右部内边距

**Type**: `number`  
**Default**: `0`  
<a name="go2d.TextField#paddingBottom"></a>
###textField.paddingBottom
底部内边距

**Type**: `number`  
**Default**: `0`  
<a name="go2d.TextField#maxWidth"></a>
###textField.maxWidth
自动调整宽高时的最大宽度

**Type**: `number`  
**Default**: `0xffffff`  
<a name="go2d.TextField#maxHeight"></a>
###textField.maxHeight
自动调整宽高时的最大高度

**Type**: `number`  
**Default**: `0xffffff`  
<a name="go2d.TextField#textRange"></a>
###textField.textRange
文字渲染的宽高

**Type**: `number`  
<a name="go2d.TextField#textWidth"></a>
###textField.textWidth
文字渲染的宽度

**Type**: `number`  
<a name="go2d.TextField#textHeight"></a>
###textField.textHeight
文字渲染的高度

**Type**: `number`  
<a name="go2d.TextField#text"></a>
###textField.text
要显示的文字

**Type**: `string`  
<a name="go2d.TextField#_stage"></a>
###textField._stage
舞台对象

**Type**: [Stage](#go2d.Stage)  
**Access**: protected  
<a name="go2d.TextField#_timer"></a>
###textField._timer
主循环定时器

**Type**: `Object`  
**Access**: protected  
<a name="go2d.TextField#_prevTime"></a>
###textField._prevTime
上一帧时间戳，用于计算帧频

**Type**: `number`  
**Access**: protected  
<a name="go2d.TextField#canvas"></a>
###textField.canvas
用于渲染的画布对象

**Type**: `object`  
**Read only**: true  
<a name="go2d.TextField#context"></a>
###textField.context
画布的上下文对象

**Type**: `object`  
**Read only**: true  
<a name="go2d.TextField#name"></a>
###textField.name
用于标识该对象的名字，该属性在兄弟对象中应该唯一

**Type**: `string`  
<a name="go2d.TextField#tag"></a>
###textField.tag
用于标识该对象的标签

**Type**: `string`  
<a name="go2d.TextField#stage"></a>
###textField.stage
该对象所属的舞台对象

**Type**: [Stage](#go2d.Stage)  
**Read only**: true  
<a name="go2d.TextField#paused"></a>
###textField.paused
是否已暂停

**Type**: `Boolean`  
**Default**: `false`  
<a name="go2d.TextField#touchable"></a>
###textField.touchable
是否可点击

**Type**: `Boolean`  
**Default**: `true`  
<a name="go2d.TextField#touchChildren"></a>
###textField.touchChildren
子节点是否可点击

**Type**: `Boolean`  
**Default**: `true`  
<a name="go2d.TextField#_dirty"></a>
###textField._dirty
是否需要重新渲染

**Type**: `Boolean`  
**Default**: `true`  
**Access**: protected  
<a name="go2d.TextField#_touches"></a>
###textField._touches
触摸标识数组

**Type**: `Array`  
**Access**: protected  
<a name="go2d.TextField#_children"></a>
###textField._children
子对象数组

**Type**: `Array`  
**Access**: protected  
<a name="go2d.TextField#opacity"></a>
###textField.opacity
不透明度

**Type**: `number`  
**Default**: `1`  
<a name="go2d.TextField#background"></a>
###textField.background
背景颜色或样式

**Type**: `null` | `string` | `Object`  
**Default**: `null`  
<a name="go2d.TextField#width"></a>
###textField.width
宽度

**Type**: `number`  
<a name="go2d.TextField#height"></a>
###textField.height
高度

**Type**: `number`  
<a name="go2d.TextField#parent"></a>
###textField.parent
父对象

**Type**: [DisplayObject](#go2d.DisplayObject)  
<a name="go2d.TextField#x"></a>
###textField.x
水平坐标

**Type**: `number`  
**Default**: `0`  
<a name="go2d.TextField#y"></a>
###textField.y
垂直坐标

**Type**: `number`  
**Default**: `0`  
<a name="go2d.TextField#skewX"></a>
###textField.skewX
水平方向斜切

**Type**: `number`  
**Default**: `0`  
<a name="go2d.TextField#skewY"></a>
###textField.skewY
垂直方向斜切

**Type**: `number`  
**Default**: `0`  
<a name="go2d.TextField#scaleX"></a>
###textField.scaleX
水平方向缩放

**Type**: `number`  
**Default**: `1`  
<a name="go2d.TextField#scaleY"></a>
###textField.scaleY
垂直方向缩放

**Type**: `number`  
**Default**: `1`  
<a name="go2d.TextField#anchorX"></a>
###textField.anchorX
水平方向锚点偏移比例

**Type**: `number`  
**Default**: `0`  
<a name="go2d.TextField#anchorY"></a>
###textField.anchorY
垂直方向锚点偏移比例

**Type**: `number`  
**Default**: `0`  
<a name="go2d.TextField#anchorOffsetX"></a>
###textField.anchorOffsetX
水平方向锚点偏移像素

**Type**: `number`  
**Default**: `0`  
<a name="go2d.TextField#anchorOffsetY"></a>
###textField.anchorOffsetY
垂直方向锚点偏移像素

**Type**: `number`  
**Default**: `0`  
<a name="go2d.TextField#rotation"></a>
###textField.rotation
旋转角度

**Type**: `number`  
**Default**: `0`  
<a name="go2d.TextField#visible"></a>
###textField.visible
是否可见

**Type**: `Boolean`  
**Default**: `true`  
<a name="go2d.TextField#getTransform"></a>
###textField.getTransform()
获取变化矩阵

**Returns**: [Matrix](#go2d.Matrix)  
<a name="go2d.TextField#show"></a>
###textField.show()
显示该对象

**Returns**: `this`  
<a name="go2d.TextField#hide"></a>
###textField.hide()
隐藏该对象

**Returns**: `this`  
<a name="go2d.TextField#render"></a>
###textField.render()
渲染该对象

**Returns**: `this`  
<a name="go2d.TextField#update"></a>
###textField.update()
更新对象渲染状态，当该对象需要重新渲染时调用

**Returns**: `this`  
<a name="go2d.TextField#addChild"></a>
###textField.addChild(child)
添加子对象

**Params**

- child <code>[DisplayObject](#go2d.DisplayObject)</code> - 要添加的子对象  

**Returns**: `this`  
<a name="go2d.TextField#addChildAt"></a>
###textField.addChildAt(child, index)
在指定深度添加子对象

**Params**

- child <code>[DisplayObject](#go2d.DisplayObject)</code> - 要添加的子对象  
- index `number` - 深度，数值越小层级越低  

**Returns**: `this`  
<a name="go2d.TextField#getChildByName"></a>
###textField.getChildByName(name)
获取指定名字的子对象

**Params**

- name `string` - 子对象名字  

**Returns**: [DisplayObject](#go2d.DisplayObject) - 对应的子对象  
<a name="go2d.TextField#getChildrenByTag"></a>
###textField.getChildrenByTag(tag)
获取指定标签的子对象

**Params**

- tag `string` - 子对象标签  

**Returns**: `Array` - 对应的子对象数组  
<a name="go2d.TextField#getChildAt"></a>
###textField.getChildAt(index)
获取指定深度的子对象

**Params**

- index `number` - 子对象深度  

**Returns**: [DisplayObject](#go2d.DisplayObject) - 对应的子对象  
<a name="go2d.TextField#getChildIndex"></a>
###textField.getChildIndex(child)
获取指定子对象的深度

**Params**

- child <code>[DisplayObject](#go2d.DisplayObject)</code> - 对应的子对象  

**Returns**: `number` - 子对象深度  
<a name="go2d.TextField#swapChildren"></a>
###textField.swapChildren(child1, child2)
交换两个子对象的深度

**Params**

- child1 <code>[DisplayObject](#go2d.DisplayObject)</code> - 要交换的子对象一  
- child2 <code>[DisplayObject](#go2d.DisplayObject)</code> - 要交换的子对象二  

**Returns**: `this`  
<a name="go2d.TextField#swapChildrenAt"></a>
###textField.swapChildrenAt(index1, index2)
交换两个子对象的深度

**Params**

- index1 `number` - 要交换的子对象深度一  
- index2 `number` - 要交换的子对象深度二  

**Returns**: `this`  
<a name="go2d.TextField#sortChildren"></a>
###textField.sortChildren(compare)
排列子对象

**Params**

- compare `function` - 用于比较的函数  

**Returns**: `this`  
<a name="go2d.TextField#getAllChildren"></a>
###textField.getAllChildren()
获取所有子对象

**Returns**: `Array` - 所有子对象数组  
<a name="go2d.TextField#removeChild"></a>
###textField.removeChild(child, cleanup)
移除指定的子对象

**Params**

- child <code>[DisplayObject](#go2d.DisplayObject)</code> - 对应的子对象  
- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.TextField#removeChildAt"></a>
###textField.removeChildAt(index, cleanup)
移除指定深度的子对象

**Params**

- index `number` - 子对象的深度  
- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.TextField#removeChildrenByName"></a>
###textField.removeChildrenByName(name, cleanup)
移除指定名字的子对象

**Params**

- name `string` - 子对象的名字  
- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.TextField#removeChildrenByTag"></a>
###textField.removeChildrenByTag(tag, cleanup)
移除指定标签的子对象

**Params**

- tag `string` - 子对象的标签  
- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.TextField#removeAllChildren"></a>
###textField.removeAllChildren(cleanup)
移除所有子对象

**Params**

- cleanup `Boolean` - 是否销毁子对象  

**Returns**: `this`  
<a name="go2d.TextField#play"></a>
###textField.play()
开始该对象的帧播放

**Returns**: `this`  
<a name="go2d.TextField#pause"></a>
###textField.pause()
暂停该对象的帧播放

**Returns**: `this`  
<a name="go2d.TextField#tick"></a>
###textField.tick()
进入下一帧，该方法应只由引擎本身调用

**Returns**: `this`  
<a name="go2d.TextField#dispose"></a>
###textField.dispose()
释放对象内存

<a name="go2d.TextField#setText"></a>
###textField.setText()
设置要显示的文字

**Returns**: `this`  
<a name="go2d.TextField#on"></a>
###textField.on(name, callback)
添加事件侦听器

**Params**

- name `string` - 事件名称  
- callback `function` - 回调函数  

**Returns**: `this`  
<a name="go2d.TextField#emit"></a>
###textField.emit(name, [event])
通过事件对象派发事件

**Params**

- name `string` - 事件名称  
- \[event\] <code>[Event](#go2d.Event)</code> - 事件对象  

**Returns**: `this`  
<a name="go2d.TextField#on"></a>
###textField.on(listeners)
批量添加事件侦听器

**Params**

- listeners `Object` - 以事件名称为键名，回调函数为键值的哈希表  

**Returns**: `this`  
<a name="go2d.TextField#off"></a>
###textField.off(name, [callback])
移除事件侦听器

**Params**

- name `string` - 事件名称  
- \[callback\] `function` - 回调函数，当该参数为空时将移除该事件的所有回调  

**Returns**: `this`  
<a name="go2d.TextField#emit"></a>
###textField.emit(name, [...params])
通过任意事件参数派发事件

**Params**

- name `string` - 事件名称  
- \[...params\] `*` - 事件参数  

**Returns**: `this`  
<a name="go2d.TextField#event_touchstart"></a>
###event: "touchstart"
触摸开始事件

**Params**

- event <code>[TouchEvent](#go2d.TouchEvent)</code> - 触摸事件对象  

<a name="go2d.TextField#event_touchmove"></a>
###event: "touchmove"
触摸移动事件

**Params**

- event <code>[TouchEvent](#go2d.TouchEvent)</code> - 触摸事件对象  

<a name="go2d.TextField#event_touchend"></a>
###event: "touchend"
触摸结束事件

**Params**

- event <code>[TouchEvent](#go2d.TouchEvent)</code> - 触摸事件对象  

<a name="go2d.TextField#event_touchtap"></a>
###event: "touchtap"
触摸点击事件

**Params**

- event <code>[TouchEvent](#go2d.TouchEvent)</code> - 触摸事件对象  

<a name="go2d.TextField#event_addedtostage"></a>
###event: "addedtostage"
添加到舞台事件

**Params**

- stage <code>[Stage](#go2d.Stage)</code> - 舞台对象  

<a name="go2d.TextField#event_removedfromstage"></a>
###event: "removedfromstage"
移除出舞台事件

**Params**

- stage <code>[Stage](#go2d.Stage)</code> - 舞台对象  

<a name="go2d.TextField#event_resize"></a>
###event: "resize"
宽高变化事件

**Params**

- event <code>[ResizeEvent](#go2d.ResizeEvent)</code> - 宽高变化事件对象  

<a name="go2d.TextField#event_render"></a>
###event: "render"
开始渲染事件

**Params**

- event <code>[Event](#go2d.Event)</code> - 事件对象  

<a name="go2d.TextField#event_paint"></a>
###event: "paint"
绘制完毕事件

**Params**

- context `object` - 绘制上下文对象  

<a name="go2d.TextField#event_step"></a>
###event: "step"
步进（进入下一帧）事件

**Params**

- deltaTime `number` - 两帧时间差  

<a name="go2d.Event"></a>
##class: go2d.Event
**Extends**: `go2d.Class`  
**Members**

* [class: go2d.Event](#go2d.Event)
  * [new go2d.Event(type, [data])](#new_go2d.Event)
  * [event.type](#go2d.Event#type)
  * [event._propagationStopped](#go2d.Event#_propagationStopped)
  * [event._defaultPrevented](#go2d.Event#_defaultPrevented)
  * [event.stopPropagation()](#go2d.Event#stopPropagation)
  * [event.isPropagationStopped()](#go2d.Event#isPropagationStopped)
  * [event.preventDefault()](#go2d.Event#preventDefault)
  * [event.isDefaultPrevented()](#go2d.Event#isDefaultPrevented)

<a name="new_go2d.Event"></a>
###new go2d.Event(type, [data])
事件类，所有事件对象的基类。

**Params**

- type `string` - 事件类型  
- \[data\] `Object` - 事件参数  

**Extends**: `go2d.Class`  
**Author**: Lanfei  
<a name="go2d.Event#type"></a>
###event.type
事件类型

**Type**: `string`  
<a name="go2d.Event#_propagationStopped"></a>
###event._propagationStopped
是否已停止冒泡

**Type**: `Boolean`  
**Access**: protected  
<a name="go2d.Event#_defaultPrevented"></a>
###event._defaultPrevented
是否已阻止默认事件

**Type**: `Boolean`  
**Access**: protected  
<a name="go2d.Event#stopPropagation"></a>
###event.stopPropagation()
停止冒泡

**Returns**: `this`  
<a name="go2d.Event#isPropagationStopped"></a>
###event.isPropagationStopped()
获取是否已停止冒泡

**Returns**: `Boolean`  
<a name="go2d.Event#preventDefault"></a>
###event.preventDefault()
阻止默认事件

**Returns**: `this`  
<a name="go2d.Event#isDefaultPrevented"></a>
###event.isDefaultPrevented()
获取是否已阻止默认事件

**Returns**: `Boolean`  
<a name="go2d.EventDispatcher"></a>
##class: go2d.EventDispatcher
**Extends**: `go2d.Class`  
**Members**

* [class: go2d.EventDispatcher](#go2d.EventDispatcher)
  * [new go2d.EventDispatcher(type, [data])](#new_go2d.EventDispatcher)
  * [eventDispatcher.on(name, callback)](#go2d.EventDispatcher#on)
  * [eventDispatcher.emit(name, [event])](#go2d.EventDispatcher#emit)
  * [eventDispatcher.on(listeners)](#go2d.EventDispatcher#on)
  * [eventDispatcher.off(name, [callback])](#go2d.EventDispatcher#off)
  * [eventDispatcher.emit(name, [...params])](#go2d.EventDispatcher#emit)
  * [eventDispatcher.dispose()](#go2d.EventDispatcher#dispose)

<a name="new_go2d.EventDispatcher"></a>
###new go2d.EventDispatcher(type, [data])
事件派发器类，负责事件的派发和侦听。

**Params**

- type `string` - 事件类型  
- \[data\] `Object` - 事件参数  

**Extends**: `go2d.Class`  
**Author**: Lanfei  
<a name="go2d.EventDispatcher#on"></a>
###eventDispatcher.on(name, callback)
添加事件侦听器

**Params**

- name `string` - 事件名称  
- callback `function` - 回调函数  

**Returns**: `this`  
<a name="go2d.EventDispatcher#emit"></a>
###eventDispatcher.emit(name, [event])
通过事件对象派发事件

**Params**

- name `string` - 事件名称  
- \[event\] <code>[Event](#go2d.Event)</code> - 事件对象  

**Returns**: `this`  
<a name="go2d.EventDispatcher#on"></a>
###eventDispatcher.on(listeners)
批量添加事件侦听器

**Params**

- listeners `Object` - 以事件名称为键名，回调函数为键值的哈希表  

**Returns**: `this`  
<a name="go2d.EventDispatcher#off"></a>
###eventDispatcher.off(name, [callback])
移除事件侦听器

**Params**

- name `string` - 事件名称  
- \[callback\] `function` - 回调函数，当该参数为空时将移除该事件的所有回调  

**Returns**: `this`  
<a name="go2d.EventDispatcher#emit"></a>
###eventDispatcher.emit(name, [...params])
通过任意事件参数派发事件

**Params**

- name `string` - 事件名称  
- \[...params\] `*` - 事件参数  

**Returns**: `this`  
<a name="go2d.EventDispatcher#dispose"></a>
###eventDispatcher.dispose()
释放事件派发器内存

<a name="go2d.ResizeEvent"></a>
##class: go2d.ResizeEvent
**Extends**: `go2d.Event`  
**Members**

* [class: go2d.ResizeEvent](#go2d.ResizeEvent)
  * [new go2d.ResizeEvent(oldSize, newSize)](#new_go2d.ResizeEvent)
  * [resizeEvent.oldSize](#go2d.ResizeEvent#oldSize)
  * [resizeEvent.newSize](#go2d.ResizeEvent#newSize)
  * [resizeEvent.type](#go2d.ResizeEvent#type)
  * [resizeEvent._propagationStopped](#go2d.ResizeEvent#_propagationStopped)
  * [resizeEvent._defaultPrevented](#go2d.ResizeEvent#_defaultPrevented)
  * [resizeEvent.stopPropagation()](#go2d.ResizeEvent#stopPropagation)
  * [resizeEvent.isPropagationStopped()](#go2d.ResizeEvent#isPropagationStopped)
  * [resizeEvent.preventDefault()](#go2d.ResizeEvent#preventDefault)
  * [resizeEvent.isDefaultPrevented()](#go2d.ResizeEvent#isDefaultPrevented)

<a name="new_go2d.ResizeEvent"></a>
###new go2d.ResizeEvent(oldSize, newSize)
事件类，所有事件对象的基类。

**Params**

- oldSize `Object` - 对象原宽高  
  - width `number` - 对象原宽度  
  - height `number` - 对象原高度  
- newSize `Object` - 对象新宽高  
  - width `number` - 对象新宽度  
  - height `number` - 对象新高度  

**Extends**: `go2d.Event`  
**Author**: Lanfei  
<a name="go2d.ResizeEvent#oldSize"></a>
###resizeEvent.oldSize
对象原宽高

**Properties**

- width `number` - 对象原宽度  
- height `number` - 对象原高度  

**Type**: `Object`  
<a name="go2d.ResizeEvent#newSize"></a>
###resizeEvent.newSize
对象新宽高

**Properties**

- width `number` - 对象新宽度  
- height `number` - 对象新高度  

**Type**: `Object`  
<a name="go2d.ResizeEvent#type"></a>
###resizeEvent.type
事件类型

**Type**: `string`  
<a name="go2d.ResizeEvent#_propagationStopped"></a>
###resizeEvent._propagationStopped
是否已停止冒泡

**Type**: `Boolean`  
**Access**: protected  
<a name="go2d.ResizeEvent#_defaultPrevented"></a>
###resizeEvent._defaultPrevented
是否已阻止默认事件

**Type**: `Boolean`  
**Access**: protected  
<a name="go2d.ResizeEvent#stopPropagation"></a>
###resizeEvent.stopPropagation()
停止冒泡

**Returns**: `this`  
<a name="go2d.ResizeEvent#isPropagationStopped"></a>
###resizeEvent.isPropagationStopped()
获取是否已停止冒泡

**Returns**: `Boolean`  
<a name="go2d.ResizeEvent#preventDefault"></a>
###resizeEvent.preventDefault()
阻止默认事件

**Returns**: `this`  
<a name="go2d.ResizeEvent#isDefaultPrevented"></a>
###resizeEvent.isDefaultPrevented()
获取是否已阻止默认事件

**Returns**: `Boolean`  
<a name="go2d.TouchEvent"></a>
##class: go2d.TouchEvent
**Extends**: `go2d.Event`  
**Members**

* [class: go2d.TouchEvent](#go2d.TouchEvent)
  * [new go2d.TouchEvent(type, x, y, globalX, globalY, identifier)](#new_go2d.TouchEvent)
  * [touchEvent.x](#go2d.TouchEvent#x)
  * [touchEvent.y](#go2d.TouchEvent#y)
  * [touchEvent.globalX](#go2d.TouchEvent#globalX)
  * [touchEvent.globalY](#go2d.TouchEvent#globalY)
  * [touchEvent.identifier](#go2d.TouchEvent#identifier)
  * [touchEvent.type](#go2d.TouchEvent#type)
  * [touchEvent._propagationStopped](#go2d.TouchEvent#_propagationStopped)
  * [touchEvent._defaultPrevented](#go2d.TouchEvent#_defaultPrevented)
  * [touchEvent.stopPropagation()](#go2d.TouchEvent#stopPropagation)
  * [touchEvent.isPropagationStopped()](#go2d.TouchEvent#isPropagationStopped)
  * [touchEvent.preventDefault()](#go2d.TouchEvent#preventDefault)
  * [touchEvent.isDefaultPrevented()](#go2d.TouchEvent#isDefaultPrevented)
  * [const: TouchEvent.TOUCH_START](#go2d.TouchEvent.TOUCH_START)
  * [const: TouchEvent.TOUCH_MOVE](#go2d.TouchEvent.TOUCH_MOVE)
  * [const: TouchEvent.TOUCH_END](#go2d.TouchEvent.TOUCH_END)
  * [const: TouchEvent.TOUCH_TAP](#go2d.TouchEvent.TOUCH_TAP)

<a name="new_go2d.TouchEvent"></a>
###new go2d.TouchEvent(type, x, y, globalX, globalY, identifier)
触摸事件类

**Params**

- type `string` - 事件类型  
- x `number` - 事件水平坐标  
- y `number` - 事件垂直坐标  
- globalX `number` - 全局水平坐标  
- globalY `number` - 全局垂直坐标  
- identifier `number` - 触摸对象唯一标识，用于多点触摸识别  

**Extends**: `go2d.Event`  
**Author**: Lanfei  
<a name="go2d.TouchEvent#x"></a>
###touchEvent.x
事件水平坐标

**Type**: `number`  
<a name="go2d.TouchEvent#y"></a>
###touchEvent.y
事件垂直坐标

**Type**: `number`  
<a name="go2d.TouchEvent#globalX"></a>
###touchEvent.globalX
全局水平坐标

**Type**: `number`  
<a name="go2d.TouchEvent#globalY"></a>
###touchEvent.globalY
全局垂直坐标

**Type**: `number`  
<a name="go2d.TouchEvent#identifier"></a>
###touchEvent.identifier
触摸对象唯一标识，用于多点触摸识别

**Type**: `number`  
<a name="go2d.TouchEvent#type"></a>
###touchEvent.type
事件类型

**Type**: `string`  
<a name="go2d.TouchEvent#_propagationStopped"></a>
###touchEvent._propagationStopped
是否已停止冒泡

**Type**: `Boolean`  
**Access**: protected  
<a name="go2d.TouchEvent#_defaultPrevented"></a>
###touchEvent._defaultPrevented
是否已阻止默认事件

**Type**: `Boolean`  
**Access**: protected  
<a name="go2d.TouchEvent#stopPropagation"></a>
###touchEvent.stopPropagation()
停止冒泡

**Returns**: `this`  
<a name="go2d.TouchEvent#isPropagationStopped"></a>
###touchEvent.isPropagationStopped()
获取是否已停止冒泡

**Returns**: `Boolean`  
<a name="go2d.TouchEvent#preventDefault"></a>
###touchEvent.preventDefault()
阻止默认事件

**Returns**: `this`  
<a name="go2d.TouchEvent#isDefaultPrevented"></a>
###touchEvent.isDefaultPrevented()
获取是否已阻止默认事件

**Returns**: `Boolean`  
<a name="go2d.TouchEvent.TOUCH_START"></a>
###const: TouchEvent.TOUCH_START
触摸开始事件

**Type**: `string`  
**Default**: `touchstart`  
<a name="go2d.TouchEvent.TOUCH_MOVE"></a>
###const: TouchEvent.TOUCH_MOVE
触摸移动事件

**Type**: `string`  
**Default**: `touchmove`  
<a name="go2d.TouchEvent.TOUCH_END"></a>
###const: TouchEvent.TOUCH_END
触摸结束事件

**Type**: `string`  
**Default**: `touchend`  
<a name="go2d.TouchEvent.TOUCH_TAP"></a>
###const: TouchEvent.TOUCH_TAP
触摸点击事件

**Type**: `string`  
**Default**: `touchtap`  
<a name="go2d.Matrix"></a>
##class: go2d.Matrix
**Extends**: `go2d.Class`  
**Members**

* [class: go2d.Matrix](#go2d.Matrix)
  * [new go2d.Matrix(a, b, c, d, tx, ty)](#new_go2d.Matrix)
  * [matrix.a](#go2d.Matrix#a)
  * [matrix.b](#go2d.Matrix#b)
  * [matrix.c](#go2d.Matrix#c)
  * [matrix.d](#go2d.Matrix#d)
  * [matrix.tx](#go2d.Matrix#tx)
  * [matrix.ty](#go2d.Matrix#ty)
  * [Matrix.DEG_TO_RAD](#go2d.Matrix.DEG_TO_RAD)
  * [matrix.set()](#go2d.Matrix#set)
  * [matrix.identity()](#go2d.Matrix#identity)
  * [matrix.invert()](#go2d.Matrix#invert)
  * [matrix.prepend(matrix)](#go2d.Matrix#prepend)
  * [matrix.append(matrix)](#go2d.Matrix#append)
  * [matrix.multiply(vector)](#go2d.Matrix#multiply)
  * [matrix.scale(x, y)](#go2d.Matrix#scale)
  * [matrix.rotate(angle)](#go2d.Matrix#rotate)
  * [matrix.skew(x, y)](#go2d.Matrix#skew)
  * [matrix.translate(x, y)](#go2d.Matrix#translate)
  * [matrix.clone()](#go2d.Matrix#clone)

<a name="new_go2d.Matrix"></a>
###new go2d.Matrix(a, b, c, d, tx, ty)
变化矩阵类，实现矩阵基本运算，可表达两个二维向量空间之间的仿射变换。
<pre><code>
            |a  b  0|
(x, y, 1) * |c  d  0| = (ax + cy + tx, bx + dy + ty, 1)
            |tx ty 1|
</code></pre>

**Params**

- a `number` - 缩放或旋转时水平方向的参数  
- b `number` - 旋转或倾斜时垂直方向的参数  
- c `number` - 旋转或倾斜时水平方向的参数  
- d `number` - 缩放或旋转时垂直方向的参数  
- tx `number` - 水平方向的平移距离  
- ty `number` - 垂直方向的平移距离  

**Extends**: `go2d.Class`  
**Author**: Lanfei  
<a name="go2d.Matrix#a"></a>
###matrix.a
缩放或旋转时水平方向的参数

**Type**: `number`  
<a name="go2d.Matrix#b"></a>
###matrix.b
旋转或倾斜时垂直方向的参数

**Type**: `number`  
<a name="go2d.Matrix#c"></a>
###matrix.c
旋转或倾斜时水平方向的参数

**Type**: `number`  
<a name="go2d.Matrix#d"></a>
###matrix.d
缩放或旋转时垂直方向的参数

**Type**: `number`  
<a name="go2d.Matrix#tx"></a>
###matrix.tx
水平方向的平移距离

**Type**: `number`  
<a name="go2d.Matrix#ty"></a>
###matrix.ty
垂直方向的平移距离

**Type**: `number`  
<a name="go2d.Matrix.DEG_TO_RAD"></a>
###Matrix.DEG_TO_RAD
角度制、弧度制换算比例

**Type**: `number`  
<a name="go2d.Matrix#set"></a>
###matrix.set()
设置矩阵属性值，参数同构造函数

**Returns**: `this`  
<a name="go2d.Matrix#identity"></a>
###matrix.identity()
设置当前矩阵为单位矩阵

**Returns**: `this`  
<a name="go2d.Matrix#invert"></a>
###matrix.invert()
执行当前矩阵的逆转换

**Returns**: `this`  
<a name="go2d.Matrix#prepend"></a>
###matrix.prepend(matrix)
前置相乘

**Params**

- matrix <code>[Matrix](#go2d.Matrix)</code> - 前置矩阵  

**Returns**: `this`  
<a name="go2d.Matrix#append"></a>
###matrix.append(matrix)
后置相乘

**Params**

- matrix <code>[Matrix](#go2d.Matrix)</code> - 后置矩阵  

**Returns**: `this`  
<a name="go2d.Matrix#multiply"></a>
###matrix.multiply(vector)
将变换矩阵乘以向量

**Params**

- vector <code>[Vector](#go2d.Vector)</code> - 变换前的向量  

**Returns**: [Vector](#go2d.Vector) - 变换后的向量  
<a name="go2d.Matrix#scale"></a>
###matrix.scale(x, y)
缩放

**Params**

- x `number` - 水平方向的缩放比例  
- y `number` - 垂直方向的缩放比例  

**Returns**: `this`  
<a name="go2d.Matrix#rotate"></a>
###matrix.rotate(angle)
旋转

**Params**

- angle `number` - 旋转的角度（弧度制）  

**Returns**: `this`  
<a name="go2d.Matrix#skew"></a>
###matrix.skew(x, y)
斜切

**Params**

- x `number` - 水平方向的斜切角度（弧度制）  
- y `number` - 垂直方向的斜切角度（弧度制）  

**Returns**: `this`  
<a name="go2d.Matrix#translate"></a>
###matrix.translate(x, y)
平移

**Params**

- x `number` - 水平方向的平移像素  
- y `number` - 垂直方向的平移像素  

**Returns**: `this`  
<a name="go2d.Matrix#clone"></a>
###matrix.clone()
创建当前矩阵的克隆对象

**Returns**: [Matrix](#go2d.Matrix) - 当前矩阵的克隆对象  
<a name="go2d.Vector"></a>
##class: go2d.Vector
**Extends**: `go2d.Class`  
**Members**

* [class: go2d.Vector](#go2d.Vector)
  * [new go2d.Vector(x, y)](#new_go2d.Vector)
  * [vector.length](#go2d.Vector#length)
  * [vector.x](#go2d.Vector#x)
  * [vector.y](#go2d.Vector#y)
  * [vector.set()](#go2d.Vector#set)
  * [vector.add(vector)](#go2d.Vector#add)
  * [vector.subtract(vector)](#go2d.Vector#subtract)
  * [vector.divide(vector)](#go2d.Vector#divide)
  * [vector.dotProduct(vector)](#go2d.Vector#dotProduct)
  * [vector.normalize()](#go2d.Vector#normalize)
  * [vector.scale(x, y)](#go2d.Vector#scale)
  * [vector.rotate(angle)](#go2d.Vector#rotate)
  * [vector.angle()](#go2d.Vector#angle)
  * [vector.distance(vector)](#go2d.Vector#distance)
  * [vector.clone()](#go2d.Vector#clone)

<a name="new_go2d.Vector"></a>
###new go2d.Vector(x, y)
向量类，实现向量基本运算，可表达一个二维坐标。

**Params**

- x `number` - 向量水平坐标  
- y `number` - 向量垂直坐标  

**Extends**: `go2d.Class`  
**Author**: Lanfei  
<a name="go2d.Vector#length"></a>
###vector.length
向量长度

**Type**: `number`  
**Read only**: true  
<a name="go2d.Vector#x"></a>
###vector.x
向量水平坐标

**Type**: `number`  
<a name="go2d.Vector#y"></a>
###vector.y
向量垂直坐标

**Type**: `number`  
<a name="go2d.Vector#set"></a>
###vector.set()
设置向量属性值，参数同构造函数

**Returns**: `this`  
<a name="go2d.Vector#add"></a>
###vector.add(vector)
向量加法

**Params**

- vector <code>[Vector](#go2d.Vector)</code> - 要相加的向量  

**Returns**: `this`  
<a name="go2d.Vector#subtract"></a>
###vector.subtract(vector)
向量减法

**Params**

- vector <code>[Vector](#go2d.Vector)</code> - 要相减的向量  

**Returns**: `this`  
<a name="go2d.Vector#divide"></a>
###vector.divide(vector)
向量除法

**Params**

- vector <code>[Vector](#go2d.Vector)</code> - 要除以的向量  

**Returns**: `this`  
<a name="go2d.Vector#dotProduct"></a>
###vector.dotProduct(vector)
向量点乘

**Params**

- vector <code>[Vector](#go2d.Vector)</code> - 要点乘的向量  

**Returns**: `this`  
<a name="go2d.Vector#normalize"></a>
###vector.normalize()
求单位向量

**Returns**: `this`  
<a name="go2d.Vector#scale"></a>
###vector.scale(x, y)
向量缩放

**Params**

- x `number` - 水平方向缩放比例  
- y `number` - 垂直方向缩放比例  

**Returns**: `this`  
<a name="go2d.Vector#rotate"></a>
###vector.rotate(angle)
向量缩放

**Params**

- angle `number` - 旋转的角度（弧度制）  

**Returns**: `this`  
<a name="go2d.Vector#angle"></a>
###vector.angle()
求向量与水平方向的夹角

**Returns**: `number` - 向量与水平方向的夹角（弧度制）  
<a name="go2d.Vector#distance"></a>
###vector.distance(vector)
求与另一个向量之间的距离

**Params**

- vector <code>[Vector](#go2d.Vector)</code> - 要求距离的向量  

**Returns**: `number` - 两向量之间的距离  
<a name="go2d.Vector#clone"></a>
###vector.clone()
创建当前向量的克隆对象

**Returns**: [Vector](#go2d.Vector) - 当前向量的克隆对象  
<a name="go2d.ResourceLoader"></a>
##class: go2d.ResourceLoader
**Extends**: `go2d.EventDispatcher`  
**Members**

* [class: go2d.ResourceLoader](#go2d.ResourceLoader)
  * [new go2d.ResourceLoader(resources, [options])](#new_go2d.ResourceLoader)
  * [resourceLoader.total](#go2d.ResourceLoader#total)
  * [resourceLoader.errorCount](#go2d.ResourceLoader#errorCount)
  * [resourceLoader.loadedCount](#go2d.ResourceLoader#loadedCount)
  * [resourceLoader.retryTimes](#go2d.ResourceLoader#retryTimes)
  * [resourceLoader.load()](#go2d.ResourceLoader#load)
  * [resourceLoader.get(type, name)](#go2d.ResourceLoader#get)
  * [resourceLoader.getXML(name)](#go2d.ResourceLoader#getXML)
  * [resourceLoader.getJSON(name)](#go2d.ResourceLoader#getJSON)
  * [resourceLoader.getText(name)](#go2d.ResourceLoader#getText)
  * [resourceLoader.getImage(name)](#go2d.ResourceLoader#getImage)
  * [resourceLoader.getAudio(name)](#go2d.ResourceLoader#getAudio)
  * [resourceLoader.getBinary(name)](#go2d.ResourceLoader#getBinary)
  * [resourceLoader.destroy([type], [name])](#go2d.ResourceLoader#destroy)
  * [resourceLoader.destroyXML(name)](#go2d.ResourceLoader#destroyXML)
  * [resourceLoader.destroyJSON(name)](#go2d.ResourceLoader#destroyJSON)
  * [resourceLoader.destroyText(name)](#go2d.ResourceLoader#destroyText)
  * [resourceLoader.destroyImage(name)](#go2d.ResourceLoader#destroyImage)
  * [resourceLoader.destroyAudio(name)](#go2d.ResourceLoader#destroyAudio)
  * [resourceLoader.destroyBinary(name)](#go2d.ResourceLoader#destroyBinary)
  * [resourceLoader.destroyAll()](#go2d.ResourceLoader#destroyAll)
  * [resourceLoader.dispose()](#go2d.ResourceLoader#dispose)
  * [resourceLoader.on(name, callback)](#go2d.ResourceLoader#on)
  * [resourceLoader.emit(name, [event])](#go2d.ResourceLoader#emit)
  * [resourceLoader.on(listeners)](#go2d.ResourceLoader#on)
  * [resourceLoader.off(name, [callback])](#go2d.ResourceLoader#off)
  * [resourceLoader.emit(name, [...params])](#go2d.ResourceLoader#emit)
  * [const: ResourceLoader.TYPE_XML](#go2d.ResourceLoader.TYPE_XML)
  * [const: ResourceLoader.TYPE_JSON](#go2d.ResourceLoader.TYPE_JSON)
  * [const: ResourceLoader.TYPE_TEXT](#go2d.ResourceLoader.TYPE_TEXT)
  * [const: ResourceLoader.TYPE_IMAGE](#go2d.ResourceLoader.TYPE_IMAGE)
  * [const: ResourceLoader.TYPE_AUDIO](#go2d.ResourceLoader.TYPE_AUDIO)
  * [const: ResourceLoader.TYPE_BINARY](#go2d.ResourceLoader.TYPE_BINARY)
  * [event: "progress"](#go2d.ResourceLoader#event_progress)
  * [event: "error"](#go2d.ResourceLoader#event_error)
  * [event: "complete"](#go2d.ResourceLoader#event_complete)
  * [event: "finish"](#go2d.ResourceLoader#event_finish)

<a name="new_go2d.ResourceLoader"></a>
###new go2d.ResourceLoader(resources, [options])
资源加载器类，可用于加载和管理游戏资源。

**Params**

- resources `Object` - 资源路径数据对象，格式如下：
<pre><code>
{
    text: {
        name1: url1,
        name2: url2
        // ...
    },
    image: {
        name1: url1,
        name2: url2
        // ...
    }
    // ...
}  
- \[options\] `Object` - 配置参数  
  - \[retryTimes=3\] `Object` - 失败重试次数
</code></pre>  

**Extends**: `go2d.EventDispatcher`  
**Author**: Lanfei  
<a name="go2d.ResourceLoader#total"></a>
###resourceLoader.total
资源总数

**Type**: `number`  
**Read only**: true  
<a name="go2d.ResourceLoader#errorCount"></a>
###resourceLoader.errorCount
加载失败资源数量

**Type**: `number`  
**Read only**: true  
<a name="go2d.ResourceLoader#loadedCount"></a>
###resourceLoader.loadedCount
加载完成资源数量

**Type**: `number`  
**Read only**: true  
<a name="go2d.ResourceLoader#retryTimes"></a>
###resourceLoader.retryTimes
失败重试次数

**Type**: `number`  
**Default**: `3`  
<a name="go2d.ResourceLoader#load"></a>
###resourceLoader.load()
开始加载资源

**Returns**: `this`  
<a name="go2d.ResourceLoader#get"></a>
###resourceLoader.get(type, name)
获取资源对象

**Params**

- type `string` - 资源类型  
- name `string` - 资源名称  

**Returns**: `Object` - 对应的资源对象  
<a name="go2d.ResourceLoader#getXML"></a>
###resourceLoader.getXML(name)
获取 XML 资源

**Params**

- name `string` - 资源名称  

**Returns**: `Object` - 对应的资源对象  
<a name="go2d.ResourceLoader#getJSON"></a>
###resourceLoader.getJSON(name)
获取 JSON 资源

**Params**

- name `string` - 资源名称  

**Returns**: `Object` - 对应的资源对象  
<a name="go2d.ResourceLoader#getText"></a>
###resourceLoader.getText(name)
获取文本资源

**Params**

- name `string` - 资源名称  

**Returns**: `Object` - 对应的资源对象  
<a name="go2d.ResourceLoader#getImage"></a>
###resourceLoader.getImage(name)
获取图像资源

**Params**

- name `string` - 资源名称  

**Returns**: `Object` - 对应的资源对象  
<a name="go2d.ResourceLoader#getAudio"></a>
###resourceLoader.getAudio(name)
获取音频资源

**Params**

- name `string` - 资源名称  

**Returns**: `Object` - 对应的资源对象  
<a name="go2d.ResourceLoader#getBinary"></a>
###resourceLoader.getBinary(name)
获取二进制资源

**Params**

- name `string` - 资源名称  

**Returns**: `Object` - 对应的资源对象  
<a name="go2d.ResourceLoader#destroy"></a>
###resourceLoader.destroy([type], [name])
移除资源

**Params**

- \[type\] `string` - 资源类型，为空时移除所有资源  
- \[name\] `string` - 资源名称，为空时移除所有指定类型资源  

**Returns**: `this`  
<a name="go2d.ResourceLoader#destroyXML"></a>
###resourceLoader.destroyXML(name)
移除 XML 资源

**Params**

- name `string` - 资源名称  

**Returns**: `this`  
<a name="go2d.ResourceLoader#destroyJSON"></a>
###resourceLoader.destroyJSON(name)
移除 JSON 资源

**Params**

- name `string` - 资源名称  

**Returns**: `this`  
<a name="go2d.ResourceLoader#destroyText"></a>
###resourceLoader.destroyText(name)
移除文本资源

**Params**

- name `string` - 资源名称  

**Returns**: `this`  
<a name="go2d.ResourceLoader#destroyImage"></a>
###resourceLoader.destroyImage(name)
移除图像资源

**Params**

- name `string` - 资源名称  

**Returns**: `this`  
<a name="go2d.ResourceLoader#destroyAudio"></a>
###resourceLoader.destroyAudio(name)
移除音频资源

**Params**

- name `string` - 资源名称  

**Returns**: `this`  
<a name="go2d.ResourceLoader#destroyBinary"></a>
###resourceLoader.destroyBinary(name)
移除二进制资源

**Params**

- name `string` - 资源名称  

**Returns**: `this`  
<a name="go2d.ResourceLoader#destroyAll"></a>
###resourceLoader.destroyAll()
移除所有资源

**Returns**: `this`  
<a name="go2d.ResourceLoader#dispose"></a>
###resourceLoader.dispose()
释放加载器内存

<a name="go2d.ResourceLoader#on"></a>
###resourceLoader.on(name, callback)
添加事件侦听器

**Params**

- name `string` - 事件名称  
- callback `function` - 回调函数  

**Returns**: `this`  
<a name="go2d.ResourceLoader#emit"></a>
###resourceLoader.emit(name, [event])
通过事件对象派发事件

**Params**

- name `string` - 事件名称  
- \[event\] <code>[Event](#go2d.Event)</code> - 事件对象  

**Returns**: `this`  
<a name="go2d.ResourceLoader#on"></a>
###resourceLoader.on(listeners)
批量添加事件侦听器

**Params**

- listeners `Object` - 以事件名称为键名，回调函数为键值的哈希表  

**Returns**: `this`  
<a name="go2d.ResourceLoader#off"></a>
###resourceLoader.off(name, [callback])
移除事件侦听器

**Params**

- name `string` - 事件名称  
- \[callback\] `function` - 回调函数，当该参数为空时将移除该事件的所有回调  

**Returns**: `this`  
<a name="go2d.ResourceLoader#emit"></a>
###resourceLoader.emit(name, [...params])
通过任意事件参数派发事件

**Params**

- name `string` - 事件名称  
- \[...params\] `*` - 事件参数  

**Returns**: `this`  
<a name="go2d.ResourceLoader.TYPE_XML"></a>
###const: ResourceLoader.TYPE_XML
XML 数据

**Type**: `string`  
**Default**: `xml`  
<a name="go2d.ResourceLoader.TYPE_JSON"></a>
###const: ResourceLoader.TYPE_JSON
JSON 数据

**Type**: `string`  
**Default**: `json`  
<a name="go2d.ResourceLoader.TYPE_TEXT"></a>
###const: ResourceLoader.TYPE_TEXT
文本数据

**Type**: `string`  
**Default**: `text`  
<a name="go2d.ResourceLoader.TYPE_IMAGE"></a>
###const: ResourceLoader.TYPE_IMAGE
图像

**Type**: `string`  
**Default**: `image`  
<a name="go2d.ResourceLoader.TYPE_AUDIO"></a>
###const: ResourceLoader.TYPE_AUDIO
音频

**Type**: `string`  
**Default**: `audio`  
<a name="go2d.ResourceLoader.TYPE_BINARY"></a>
###const: ResourceLoader.TYPE_BINARY
二进制数据

**Type**: `string`  
**Default**: `binary`  
<a name="go2d.ResourceLoader#event_progress"></a>
###event: "progress"
加载进度事件

**Params**

- loadedCount `number` - 已加载数量  
- total `number` - 总数量  

<a name="go2d.ResourceLoader#event_error"></a>
###event: "error"
加载错误事件

**Params**

- name `string` - 加载出错资源名称  

<a name="go2d.ResourceLoader#event_complete"></a>
###event: "complete"
加载完全事件

<a name="go2d.ResourceLoader#event_finish"></a>
###event: "finish"
加载完毕事件

<a name="go2d.URLRequest"></a>
##class: go2d.URLRequest
**Extends**: `go2d.EventDispatcher`  
**Members**

* [class: go2d.URLRequest](#go2d.URLRequest)
  * [new go2d.URLRequest(url, [options])](#new_go2d.URLRequest)
  * [urlRequest.url](#go2d.URLRequest#url)
  * [urlRequest.type](#go2d.URLRequest#type)
  * [urlRequest.dataType](#go2d.URLRequest#dataType)
  * [urlRequest.contentType](#go2d.URLRequest#contentType)
  * [urlRequest.responseType](#go2d.URLRequest#responseType)
  * [urlRequest.xhr](#go2d.URLRequest#xhr)
  * [urlRequest.send(data)](#go2d.URLRequest#send)
  * [urlRequest.abort()](#go2d.URLRequest#abort)
  * [urlRequest.on(name, callback)](#go2d.URLRequest#on)
  * [urlRequest.emit(name, [event])](#go2d.URLRequest#emit)
  * [urlRequest.on(listeners)](#go2d.URLRequest#on)
  * [urlRequest.off(name, [callback])](#go2d.URLRequest#off)
  * [urlRequest.emit(name, [...params])](#go2d.URLRequest#emit)
  * [urlRequest.dispose()](#go2d.URLRequest#dispose)
  * [event: "success"](#go2d.URLRequest#event_success)
  * [event: "error"](#go2d.URLRequest#event_error)

<a name="new_go2d.URLRequest"></a>
###new go2d.URLRequest(url, [options])
URL 请求类，用于发起 AJAX 请求，并获取返回数据。

**Params**

- url `number` - 请求地址  
- \[options\] `Object` - 配置参数  
  - \[type=GET\] `string` - 请求类型  
  - \[dataType\] `string` - 返回数据格式  
  - \[contentType=application/x-www-form-urlencoded\] `string` - 发送数据类型  
  - \[responseType\] `string` - 返回数据类型  

**Extends**: `go2d.EventDispatcher`  
**Author**: Lanfei  
<a name="go2d.URLRequest#url"></a>
###urlRequest.url
请求地址

**Type**: `string`  
<a name="go2d.URLRequest#type"></a>
###urlRequest.type
请求类型

**Type**: `string`  
**Default**: `GET`  
<a name="go2d.URLRequest#dataType"></a>
###urlRequest.dataType
返回数据格式

**Type**: `string`  
<a name="go2d.URLRequest#contentType"></a>
###urlRequest.contentType
发送数据类型

**Type**: `string`  
**Default**: `application/x-www-form-urlencoded`  
<a name="go2d.URLRequest#responseType"></a>
###urlRequest.responseType
返回数据类型

**Type**: `string`  
<a name="go2d.URLRequest#xhr"></a>
###urlRequest.xhr
XMLHttpRequest 对象

**Type**: `Object`  
**Read only**: true  
<a name="go2d.URLRequest#send"></a>
###urlRequest.send(data)
发送请求

**Params**

- data `string` | `Object` - 请求数据  

**Returns**: `this`  
<a name="go2d.URLRequest#abort"></a>
###urlRequest.abort()
中断请求

**Returns**: `this`  
<a name="go2d.URLRequest#on"></a>
###urlRequest.on(name, callback)
添加事件侦听器

**Params**

- name `string` - 事件名称  
- callback `function` - 回调函数  

**Returns**: `this`  
<a name="go2d.URLRequest#emit"></a>
###urlRequest.emit(name, [event])
通过事件对象派发事件

**Params**

- name `string` - 事件名称  
- \[event\] <code>[Event](#go2d.Event)</code> - 事件对象  

**Returns**: `this`  
<a name="go2d.URLRequest#on"></a>
###urlRequest.on(listeners)
批量添加事件侦听器

**Params**

- listeners `Object` - 以事件名称为键名，回调函数为键值的哈希表  

**Returns**: `this`  
<a name="go2d.URLRequest#off"></a>
###urlRequest.off(name, [callback])
移除事件侦听器

**Params**

- name `string` - 事件名称  
- \[callback\] `function` - 回调函数，当该参数为空时将移除该事件的所有回调  

**Returns**: `this`  
<a name="go2d.URLRequest#emit"></a>
###urlRequest.emit(name, [...params])
通过任意事件参数派发事件

**Params**

- name `string` - 事件名称  
- \[...params\] `*` - 事件参数  

**Returns**: `this`  
<a name="go2d.URLRequest#dispose"></a>
###urlRequest.dispose()
释放事件派发器内存

<a name="go2d.URLRequest#event_success"></a>
###event: "success"
请求成功事件

**Params**

- response `mixed` - 返回数据  

<a name="go2d.URLRequest#event_error"></a>
###event: "error"
请求失败事件

**Params**

- xhr `Object` - XMLHttpRequest 对象  
- textStatus `string` - 失败状态  

<a name="go2d.Ease"></a>
##class: go2d.Ease
**Extends**: `go2d.Class`  
**Members**

* [class: go2d.Ease](#go2d.Ease)
  * [new go2d.Ease()](#new_go2d.Ease)
  * [Ease.linear(t, b, c, d)](#go2d.Ease.linear)
  * [Ease.easeInQuad()](#go2d.Ease.easeInQuad)
  * [Ease.easeOutQuad()](#go2d.Ease.easeOutQuad)
  * [Ease.easeInOutQuad()](#go2d.Ease.easeInOutQuad)
  * [Ease.easeInCubic()](#go2d.Ease.easeInCubic)
  * [Ease.easeOutCubic()](#go2d.Ease.easeOutCubic)
  * [Ease.easeInOutCubic()](#go2d.Ease.easeInOutCubic)
  * [Ease.easeInQuart()](#go2d.Ease.easeInQuart)
  * [Ease.easeOutQuart()](#go2d.Ease.easeOutQuart)
  * [Ease.easeInOutQuart()](#go2d.Ease.easeInOutQuart)
  * [Ease.easeInQuint()](#go2d.Ease.easeInQuint)
  * [Ease.easeOutQuint()](#go2d.Ease.easeOutQuint)
  * [Ease.easeInOutQuint()](#go2d.Ease.easeInOutQuint)
  * [Ease.easeInSine()](#go2d.Ease.easeInSine)
  * [Ease.easeOutSine()](#go2d.Ease.easeOutSine)
  * [Ease.easeInOutSine()](#go2d.Ease.easeInOutSine)
  * [Ease.easeInExpo()](#go2d.Ease.easeInExpo)
  * [Ease.easeOutExpo()](#go2d.Ease.easeOutExpo)
  * [Ease.easeInOutExpo()](#go2d.Ease.easeInOutExpo)
  * [Ease.easeInCirc()](#go2d.Ease.easeInCirc)
  * [Ease.easeOutCirc()](#go2d.Ease.easeOutCirc)
  * [Ease.easeInOutCirc()](#go2d.Ease.easeInOutCirc)
  * [Ease.easeInElastic()](#go2d.Ease.easeInElastic)
  * [Ease.easeOutElastic()](#go2d.Ease.easeOutElastic)
  * [Ease.easeInOutElastic()](#go2d.Ease.easeInOutElastic)
  * [Ease.easeInBack()](#go2d.Ease.easeInBack)
  * [Ease.easeOutBack()](#go2d.Ease.easeOutBack)
  * [Ease.easeInOutBack()](#go2d.Ease.easeInOutBack)
  * [Ease.easeInBounce()](#go2d.Ease.easeInBounce)
  * [Ease.easeOutBounce()](#go2d.Ease.easeOutBounce)
  * [Ease.easeInOutBounce()](#go2d.Ease.easeInOutBounce)

<a name="new_go2d.Ease"></a>
###new go2d.Ease()
缓动函数集合，用于实现不同变化速度类型的动画。

**Extends**: `go2d.Class`  
**Author**: Lanfei  
<a name="go2d.Ease.linear"></a>
###Ease.linear(t, b, c, d)
匀速缓动函数

**Params**

- t `number` - 当前时间  
- b `number` - 初始值  
- c `number` - 变化量  
- d `number` - 持续时间  

**Returns**: `number` - 当前值  
<a name="go2d.Ease.easeInQuad"></a>
###Ease.easeInQuad()
加速的二次方缓动函数

<a name="go2d.Ease.easeOutQuad"></a>
###Ease.easeOutQuad()
减速的二次方缓动函数

<a name="go2d.Ease.easeInOutQuad"></a>
###Ease.easeInOutQuad()
先加速后减速的二次方缓动函数

<a name="go2d.Ease.easeInCubic"></a>
###Ease.easeInCubic()
加速的三次方缓动函数

<a name="go2d.Ease.easeOutCubic"></a>
###Ease.easeOutCubic()
减速的三次方缓动函数

<a name="go2d.Ease.easeInOutCubic"></a>
###Ease.easeInOutCubic()
先加速后减速的三次方缓动函数

<a name="go2d.Ease.easeInQuart"></a>
###Ease.easeInQuart()
加速的四次方缓动函数

<a name="go2d.Ease.easeOutQuart"></a>
###Ease.easeOutQuart()
减速的四次方缓动函数

<a name="go2d.Ease.easeInOutQuart"></a>
###Ease.easeInOutQuart()
先加速后减速的四次方缓动函数

<a name="go2d.Ease.easeInQuint"></a>
###Ease.easeInQuint()
加速的五次方缓动函数

<a name="go2d.Ease.easeOutQuint"></a>
###Ease.easeOutQuint()
减速的五次方缓动函数

<a name="go2d.Ease.easeInOutQuint"></a>
###Ease.easeInOutQuint()
先加速后减速的五次方缓动函数

<a name="go2d.Ease.easeInSine"></a>
###Ease.easeInSine()
加速的正弦曲线缓动函数

<a name="go2d.Ease.easeOutSine"></a>
###Ease.easeOutSine()
减速的正弦曲线缓动函数

<a name="go2d.Ease.easeInOutSine"></a>
###Ease.easeInOutSine()
先加速后减速的正弦曲线缓动函数

<a name="go2d.Ease.easeInExpo"></a>
###Ease.easeInExpo()
加速的指数曲线缓动函数

<a name="go2d.Ease.easeOutExpo"></a>
###Ease.easeOutExpo()
减速的指数曲线缓动函数

<a name="go2d.Ease.easeInOutExpo"></a>
###Ease.easeInOutExpo()
先加速后减速的指数曲线缓动函数

<a name="go2d.Ease.easeInCirc"></a>
###Ease.easeInCirc()
加速的圆形曲线缓动函数

<a name="go2d.Ease.easeOutCirc"></a>
###Ease.easeOutCirc()
减速的圆形曲线缓动函数

<a name="go2d.Ease.easeInOutCirc"></a>
###Ease.easeInOutCirc()
先加速后减速的圆形曲线缓动函数

<a name="go2d.Ease.easeInElastic"></a>
###Ease.easeInElastic()
加速的指数衰减正弦曲线缓动

<a name="go2d.Ease.easeOutElastic"></a>
###Ease.easeOutElastic()
减速的指数衰减正弦曲线缓动

<a name="go2d.Ease.easeInOutElastic"></a>
###Ease.easeInOutElastic()
先加速后减速的指数衰减正弦曲线缓动

<a name="go2d.Ease.easeInBack"></a>
###Ease.easeInBack()
加速的超范围三次方缓动

<a name="go2d.Ease.easeOutBack"></a>
###Ease.easeOutBack()
减速的超范围三次方缓动

<a name="go2d.Ease.easeInOutBack"></a>
###Ease.easeInOutBack()
先加速后减速的超范围三次方缓动

<a name="go2d.Ease.easeInBounce"></a>
###Ease.easeInBounce()
加速的指数衰减反弹缓动

<a name="go2d.Ease.easeOutBounce"></a>
###Ease.easeOutBounce()
减速的指数衰减反弹缓动

<a name="go2d.Ease.easeInOutBounce"></a>
###Ease.easeInOutBounce()
先加速后减速的指数衰减反弹缓动

<a name="go2d.Tween"></a>
##class: go2d.Tween
**Extends**: `go2d.Class`  
**Members**

* [class: go2d.Tween](#go2d.Tween)
  * [new go2d.Tween(target, [options])](#new_go2d.Tween)
  * [tween.length](#go2d.Tween#length)
  * [tween.wait(duration)](#go2d.Tween#wait)
  * [tween.from(props)](#go2d.Tween#from)
  * [tween.to(props, duration, [ease])](#go2d.Tween#to)
  * [tween.call(callback)](#go2d.Tween#call)

<a name="new_go2d.Tween"></a>
###new go2d.Tween(target, [options])
缓动动画控制类，负责处理显示对象的缓动动画。

**Params**

- target <code>[Sprite](#go2d.Sprite)</code> - 动画应用对象  
- \[options\] `Object` - 配置参数  
  - \[loops=1\] `Object` - 循环次数，为 0 时无限循环  

**Extends**: `go2d.Class`  
**Author**: Lanfei  
<a name="go2d.Tween#length"></a>
###tween.length
动画步骤数量

**Type**: `number`  
**Read only**: true  
<a name="go2d.Tween#wait"></a>
###tween.wait(duration)
等待指定时间后进行下一个动画

**Params**

- duration `number` - 毫秒数  

**Returns**: `this`  
<a name="go2d.Tween#from"></a>
###tween.from(props)
更新属性值后进行下一个动画

**Params**

- props `Object` - 要更新的属性集合  

**Returns**: `this`  
<a name="go2d.Tween#to"></a>
###tween.to(props, duration, [ease])
为指定属性集合设置动画

**Params**

- props `Object` - 要动画的属性集合  
- duration `number` - 持续毫秒数  
- \[ease=[linear](#go2d.Ease.linear)\] `function` - 缓动函数  

**Returns**: `this`  
<a name="go2d.Tween#call"></a>
###tween.call(callback)
执行回调后进行下一个动画

**Params**

- callback `function` - 回调函数  

**Returns**: `this`  
