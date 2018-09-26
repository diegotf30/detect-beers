function preview_image() {
    var preview = $('img')[0]
    var file    = $('#imgUpload')[0].files[0];
    var reader  = new FileReader();
    const isImage = (file) => file['type'].includes('image');

    reader.onloadend = function() {
       preview.src = reader.result;
    }

    if(!isImage(file)) {
      alert('Solo se permiten imagenes');
    }
    else if (file) {
       reader.readAsDataURL(file); //reads the data as a URL
       setTimeout(setup_jcrop, 35);
    }
    else {
       preview.src = "";
    }
}
