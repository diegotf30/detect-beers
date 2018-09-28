function remove_selection(id) {
	$(`.box${id}`).remove();
	$(`.selec${id}`).remove();
	selections.splice(id - 1, 1);
	if(selections.length == 0) {
		$('.selections ul').append(`<li class="list-group-item empty-selec">No hay ninguna selección</li>`);
	}
}

function open_edit(id) {
	let tag_div = $(`.selec${id} .float-left`);
	let input = $('<input style="width: 100px;">').val(tag_div.text());
	tag_div.text('');
	tag_div.append(input);
	$(input).focus();

	// Change icon to cancel
	$(`.selec${id} .edit`).children().first().hide();
	$(`.selec${id} .edit`).children().last().show();

	//Listener for enter
	$(tag_div).children('input').keyup(function(e) {
		if(e.keyCode == 13) {
			let new_tag = close_edit(id);

			// Change box color if new tag
			if(!(new_tag in tags)) {
				tags[new_tag] = random_color();
			}

			$(`.box${id}`).css({'border': `3px solid ${tags[new_tag]}`});
			$(`.box${id}`).children().each(function() {
				$(this).css({'background-color': tags[new_tag]});
			});

			selections[id - 1].tag = new_tag;
		}
	});
}

function close_edit(id) {
	$(`.selec${id} .edit`).children().first().show();
	$(`.selec${id} .edit`).children().last().hide();
	return save_edit($(`.selec${id}`));
}

function save_edit(row) {
	let edit_div = $(row).children('.float-left');
	let text = $(edit_div).children('input').val();
	$(edit_div).children('input').remove();
	$(edit_div).text(text);

	return text;
}

function selection_events(id) {
	var bool = true;

	$(`.selec${id} .delete`).on('click',  function() {
		remove_selection(id);
	});
	$(`.selec${id} .edit`).on('click', function() {
		if(bool) {
			//Make sure only one edit at a time
			$('.selec').each(function() {
				if($(this).has('input')) {
					save_edit(this);
				}
			});
			open_edit(id);
		}
		else {
			close_edit(id);
		}

		bool = !bool;
	});
}
