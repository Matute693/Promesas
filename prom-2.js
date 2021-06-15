


function sumarUno(numero) {

    var promesa = new Promise( function(resolve, reject){

        console.log(numero)

            if(numero >= 7){
                reject('El numero es alto');
            }
       
        setTimeout(function(){
            resolve(  numero + 1);
            
        },800);
    });

return promesa;
}
sumarUno( 5 )
    .then(sumarUno) //6
    .then(sumarUno) //7
    .then( NuevoNumero => {
    console.log(NuevoNumero);
    })
    .catch( error => {
        console.log('ERROR, fatal recarga');
        console.log(error);
    });

