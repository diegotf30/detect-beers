var selections = [];

function save_selection() {
	let tag = $('#menu .tag');

	if(tag.val() !== "") {
		let selection = new Object();
		selection.top_left = { x: parseInt(x), y: parseInt(y) }
		selection.bot_right = { x: parseInt(x2), y: parseInt(y2) }
		selection.width = w;
		selection.height = h;
		selection.tag = tag.val();
		selections.push(selection);
	}

	tag.val(''); //Reset menu input-tag
	release_jcrop();
}

function menu_button_events(jcrop_api) {
	$('#menu .save').on('click', save_selection);
	$('#menu .tag').keyup(function(e) {
	    if(e.keyCode == 13) { //onEnter
	        save_selection();
	    }
	});

	$('#menu .cancel').on('click', function() {
		release_jcrop();
	});
}
