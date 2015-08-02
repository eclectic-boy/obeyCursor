(function ($) {

	$.widget( "main.obeyCursor", {
	 
		options: {
			isActive: true,
			anchorX: 50,//%
			anchorY: 50,//%
			anchorX_px: null,
			anchorY_px: null,
			step: function(me, position) {
				/*
				me = widget
				position = {
					"left": <float>,//left position of the object centre in px
					"top": <float>,//top position of the object centre in px
				}
				return false to prevent movement
				*/
				return position;
			},
		},

		_create: function() {
			var me = this;

			me.element
				.detach()
				.appendTo("body")
				.css({
					"display": "block",
					"position": "absolute",
					"top": "0",
					"left": "0",
				});

			//converts transform origin from % to px
			var width = me.element.width();
			var height = me.element.height();
			me.options.anchorX_px = width * me.options.anchorX / 100;
			me.options.anchorY_px = height * me.options.anchorY / 100;

			$(document).on("mousemove", function(event) {
				if(me.options.isActive) {

					var left = event.pageX - me.options.anchorX_px;
					var top = event.pageY - me.options.anchorY_px;

					
					if(me.options.step) {
						var position = me.options.step(me, {
							"left": left,
							"top": top,
						});

						if(position == false) {
							return false;
						}

						left = position.left;
						top = position.top;
					}
					
					me.element.css({
						"left": left,
						"top": top,
					});

				}
			});

			this._update();
		},
	 
		_setOption: function(key, value) {
			this.options[key] = value;
			this._update();
		},
	 
		_update: function() {},
	 
		_destroy: function() {},

		start: function() {
			this.options.isActive = true;
		},

		stop: function() {
			this.options.isActive = false;
		},
	 
	});

})(jQuery);
