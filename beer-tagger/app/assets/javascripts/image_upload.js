$(document).on('input change', function() {
    var preview = $('img')[0]
    var file    = $('#imgUpload')[0].files[0];
    var reader  = new FileReader();

    reader.onloadend = function() {
       preview.src = reader.result;
    }

    if (file) {
       reader.readAsDataURL(file); //reads the data as a URL
       $(preview).addClass('pt-5')
    } 
    else {
       preview.src = "";
    }
});
