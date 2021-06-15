
// Peticion POST
// https://reqres.in/api/users


let usuario = {
    nombre: 'Matias',
    edad: 23
};
fetch('https://reqres.in/api/users', {
    method: 'POST',
    //No podemos mandar el usuario directamente tiene 
    //que ser un JSON en forma de String por eso utilizo el stringify()
    body: JSON.stringify(usuario), //Data a enviar
    headers: {
        'Content-Type': 'application/json'
    }
})
.then( resp => resp.json())
.then(console.log)
//Si algo falla se ejecuta el catch()
.catch(error =>{
    console.log('Error en la peticion');
    console.log(error);
});


