
let img = document.querySelector('img');
//Utilizo el fetch Blob para leer una imagen
fetch('superman.png')
    .then(resp => resp.blob())
    .then( imagen => {

        // console.log(imagen);
        var imgPath = URL.createObjectURL( imagen );
        img.src = imgPath;

    });