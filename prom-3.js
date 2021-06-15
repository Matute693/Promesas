function retornaTrue() {
    return true;
}


//Funcion tradicional
function sumarLento( numero) {

    return new Promise( function(resolve, reject){
        setTimeout(function(){

            resolve(numero + 1);
            // reject('Sumar lento fallo');

        }, 800);
    });

}
//Funcion de flecha
let sumarRapido = (numero) => {

    return new Promise( (resolve, reject) => {

        setTimeout( ()=> resolve (numero + 1), 300);

    });

}

let cosas = [ sumarLento(5), sumarRapido(10), true, '¡Hola Mundo!', retornaTrue() ];

Promise.all(cosas)
    .then(respuesta => {
        console.log(respuesta);
    })
    .catch(console.log);


// sumarLento(5).then(console.log);
// sumarRapido(10).then(console.log);






