function confirmSelection(c) {
	$('#menu').show();
    $('#menu').css({'top': c.y2, 'left': c.x2});
}

function setup_jcrop() {
	$('img').Jcrop({
		onChange: confirmSelection,
		onSelect: confirmSelection,
		bgOpacity: 0.35,
      	bgColor: 'black'
	});
	$('.jcrop-holder').css({'margin': '3rem auto'});
}
