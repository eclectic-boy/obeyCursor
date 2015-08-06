#obeyCursor

*obeyCursor* is a [jQuery widget](https://learn.jquery.com/plugins/stateful-plugins-with-widget-factory/) that can make able every DOM object (*slaveObject*) to follow the cursor.


##Examples

A base example [http://codepen.io/eclectic_boy/pen/xGmBWN](http://codepen.io/eclectic_boy/pen/xGmBWN)

A more complex example [http://codepen.io/eclectic_boy/pen/Jdwzvg](http://codepen.io/eclectic_boy/pen/Jdwzvg)

Something pretty oldstyle and fancy, "Cards"! [http://codepen.io/eclectic_boy/pen/qdLvxe](http://codepen.io/eclectic_boy/pen/qdLvxe)


##Requirements

 - [jQuery](https://jquery.com/);
 - [jQuery UI](https://jqueryui.com/).

#Usage

```html    
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<script type="text/javascript" src="js/obeyCursor.js"></script>

<script type="text/javascript">
$(function() {
	$("#slave").obeyCursor(opts);
});
</script>

<div id="slave"></div>
```

#Options

An optional options object `opts` can be passed to the widget. Here follow the available options:

###`anchorX`
Horizontal position of the *slaveObject* anchor point. The value is the shifting from the left border of the *slaveObject* expressed in percentage of the width. Default to `50`. Optional.

[http://codepen.io/eclectic_boy/pen/OVrqEm](http://codepen.io/eclectic_boy/pen/OVrqEm)

###`anchorY`
Vertical position of the *slaveObject* anchor point. The value is the shifting from the top border of the *slaveObject* expressed in percentage of the height. Default to `50`. Optional.

[http://codepen.io/eclectic_boy/pen/OVrqEm](http://codepen.io/eclectic_boy/pen/OVrqEm)

###`step(me, position)`
A function which is called at every step (i.e. every time the *slaveObject* moves). Optional.

This function can change the behaviour of the widget for the current step by changing the ending coordinates hence the movement of the *slaveObject*.
It receives the following parameter:

 - `position`: it is an object like `{ top: <float>, left: <float> }`, `top` is the ending vertical top position, `left` is the ending horizontal position.

This function must return an object like the `position` parameter.
If `false` is returned the movement for the current step is prevented.

```javascript
function step(me, position) {
	//change position here
	return position;
}
```

[http://codepen.io/eclectic_boy/pen/yNGwEq](http://codepen.io/eclectic_boy/pen/yNGwEq)

#Methods

###`start()`

enables the widget.
```
$("#slave").obeyCursor("start");
```

###`stop()`

disables the widget.
```
$("#slave").obeyCursor("stop");
```

###`get_anchorX_px()`

returns the anchor point X in pixels.
```
var anchorX_px = $("#slave").obeyCursor("get_anchorX_px");
```

###`get_anchorY_px()`

returns the anchor point Y in pixels.
```
var anchorY_px = $("#slave").obeyCursor("get_anchorY_px");
```

#Changelog

###v1.1

 - Added methods `get_anchorX_px` and `get_anchorY_px`.

###v1.0
First release