#obeyCursor

*obeyCursor* is a [jQuery widget](https://learn.jquery.com/plugins/stateful-plugins-with-widget-factory/) that can make able every DOM object (*slaveObject*) to follow the cursor.


##Examples

A base example [http://jsfiddle.net/eclectic_boy/4Lw2semj/](http://jsfiddle.net/eclectic_boy/4Lw2semj/)

A more complex example [http://jsfiddle.net/eclectic_boy/u2x524a3/](http://jsfiddle.net/eclectic_boy/u2x524a3/)

Something pretty fancy [http://jsfiddle.net/eclectic_boy/fp00556w/](http://jsfiddle.net/eclectic_boy/fp00556w/)


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

[http://jsfiddle.net/eclectic_boy/au2344xh/](http://jsfiddle.net/eclectic_boy/au2344xh/)

###`anchorY`
Vertical position of the *slaveObject* anchor point. The value is the shifting from the top border of the *slaveObject* expressed in percentage of the height. Default to `50`. Optional.

[http://jsfiddle.net/eclectic_boy/au2344xh/](http://jsfiddle.net/eclectic_boy/au2344xh/)

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

[http://jsfiddle.net/eclectic_boy/d0uc84sn/](http://jsfiddle.net/eclectic_boy/d0uc84sn/)

#Methods

###`start`

enables the widget.
```
$("#slave").obeyCursor("start");
```

###`stop`

disable the widget.
```
$("#slave").obeyCursor("stop");
```