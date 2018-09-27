function draw_selection(tag) {
	let boxId = selections.length;
	// Draw selection
    $('#imageContainer').append($.parseHTML(`<div class="box box${boxId}" style="width: ${w}px; height: ${h}px; border:3px solid ${tags[tag]}; z-index: ${99 + boxId};"></div>`));

	let box = $(`.box${boxId}`);
    // Draw selection corners
    let left = true;
    for(let i = 0; i < 2; i++) {
    	$(box).append($.parseHTML(`<div class="corner" style="background-color:${tags[tag]}; top: -5px; ${left ? 'left' : 'right'}: -5px; z-index: ${100 + boxId}"></div>`));
    	$(box).append($.parseHTML(`<div class="corner" style="background-color:${tags[tag]}; bottom: -5px; ${left ? 'left' : 'right'}: -5px; z-index: ${100 + boxId}"></div>`));	
    	left = false;
    }
    //Move selection to coordinates
    $(box).css({'left': `${x}px`});
    $(box).css({'top': `${y}px`});
}

function save_selection() {
	let tag = $('#menu .tag').val();
	if(tag === "") return;

	let selection = new Object();
	selection.top_left = { x: parseInt(x), y: parseInt(y) }
	selection.bot_right = { x: parseInt(x2), y: parseInt(y2) }
	selection.width = w;
	selection.height = h;
	selection.tag = tag;
	selections.push(selection);

	// Assign random color to tag class
	if(!(tag in tags)) {
		tags[tag] = '#' + Math.floor(Math.random()*16777215).toString(16);
	}
	draw_selection(tag);

	// Empty tag name (since menu is hidden, not destroyed)
	$('#menu .tag').val('');
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
