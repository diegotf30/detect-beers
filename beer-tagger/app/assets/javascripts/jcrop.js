var x, x2, y, y2;
var w, h;
var jcrop_api;
var selections = [];
var tags = [];

function moveMenu(c) {
	if(c.w === 0 && c.h === 0) {
		$('#menu').hide();
		x = y = x2 = y2 = 0;
	}
	else {
		$('#menu').show();
		$('#menu').css({'top': c.y, 'left': c.x2 + 10});
		let offset = $('.jcrop-holder').offset();
		x = c.x + offset.left;
		y = c.y + offset.top;
		x2 = c.x2 + offset.left;
		y2 = c.y2 + offset.top;
		w = c.w;
		h = c.h;
	}
}

function disable_crop() {
	$('.tag').focus();

	$(document).mousemove(function(e) {
		let menu = $('#menu');
		//Check if mouse over menu
		if(e.clientX >= x2 && e.clientX <= x2 + menu.outerWidth() + 10 &&
			e.clientY >= y && e.clientY <= y + menu.outerHeight() ) {
			$('.jcrop-tracker').css({'pointer-events' : 'none'});
		}
		else {
			$('.jcrop-tracker').css({'pointer-events' : 'auto'});
		}
	});
}

function release_jcrop() {
	jcrop_api.release();
	$('#menu').hide();
	x = y = x2 = y2 = 0;
}

function setup_jcrop() {
	if(jcrop_api) {
		jcrop_api.destroy();
		selections = tags = [];
		$('.box').remove();
	}

	$('img').Jcrop({
		onChange: moveMenu,
		onSelect: disable_crop,
		bgOpacity: 0.35,
      	bgColor: 'black'
	}, function() {
		jcrop_api = this;
	});

	$('.jcrop-holder').css({'margin': '3rem auto'});

	let menu_instance = $('.menu').clone();
	$(menu_instance).appendTo('.jcrop-holder').attr('id', 'menu');
	menu_button_events(jcrop_api);
}
