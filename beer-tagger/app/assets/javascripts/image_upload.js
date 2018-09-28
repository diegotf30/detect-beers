var file_path;
var file;

function preview_image() {
    var preview = $('img')[0]
    file        = $('#imgUpload')[0].files[0];
    file_path   = $('#imgUpload').val();
    var reader  = new FileReader();
    const isImage = (file) => file['type'].includes('image');

    reader.onloadend = function() {
      preview.src = reader.result;
    }

    if(!isImage(file)) {
      alert('Solo se permiten imagenes');
    }
    else if(file) {
      //Add card info
      $('.selections ul').empty().append(`<li class="list-group-item empty-selec">No hay ninguna selección</li>`);      
      $('.empty-paths').remove();
      $('.paths ul').append(`<li class="list-group-item">${file.name}</li>`);

      reader.readAsDataURL(file); //previews image
      setTimeout(setup_jcrop, 35);
    }
    else {
      preview.src = "";
    }
}
