video = document.getElementById("video")
file = document.getElementById('file');

// compatibilidad navegador
if (window.File && window.FileReader && window.FileList) {
    console.log('Todas las APIs soportadas');
    } else {
    alert('La API de FILE no es soportada en este navegador.');
    }

// manejar archivo de video local

function startvideo(){
    video = document.getElementById('video');
    file = document.getElementById('file');
    addEventListener('change', showvideo, false);
}

function showvideo(e){
    var videofile = e.target.files[0];
    var reader = new FileReader(); 
    reader.onprogress=(alert('Tu video esta cargando'));
    reader.onloadend = function(e){
    document.getElementById('video').src = e.target.result;
    };
    reader.readAsDataURL(videofile)
}