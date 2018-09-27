var file_path;

function preview_image() {
    var preview = $('img')[0]
    var file    = $('#imgUpload')[0].files[0];
    file_path   = file.mozFullPath;
    var reader  = new FileReader();
    const isImage = (file) => file['type'].includes('image');

    reader.onloadend = function() {
       preview.src = reader.result;
    }

    if(!isImage(file)) {
      alert('Solo se permiten imagenes');
    }
    else if (file) {
       reader.readAsDataURL(file); //previews image
       setTimeout(setup_jcrop, 35);
    }
    else {
       preview.src = "";
    }
}
