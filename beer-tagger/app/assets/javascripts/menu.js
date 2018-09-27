var selections = [];

function menu_button_events(jcrop_api) {
	$('#menu .save').on('click', function() {
		let tag = $('.tag');

		if(tag !== "") {
			let selection = new Object();
			selection.top_left = { x: parseInt(x), y: parseInt(y) }
			selection.bot_right = { x: parseInt(x2), y: parseInt(y2) }
			selection.tag = tag.val();
			selections.push(selection);
		}

		tag.val(''); //Reset menu input-tag
		release_jcrop();
	});

	$('#menu .cancel').on('click', function() {
		release_jcrop();
	});
}