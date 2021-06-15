

fetch('https://reqres.in/api/users/2')
    .then(resp => {
        
        //El clone crea un clone de la respuesta y con esto podemos leer 2 veces el body
        resp.clone().json()
        .then(usuario => {
            console.log(usuario.data);
        });
        resp.clone().json().then(usuario => {
            console.log(usuario.data);
        });
        resp.json().then(usuario => {
            console.log(usuario.data);
        });
    
    
    })