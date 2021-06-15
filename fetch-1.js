
var request = new XMLHttpRequest();

// Peticion GET de la URL le defino un true porque quiero realizar una peticion asincrona
request.open('GET', 'https://reqres.in/api/users', true);
request.send(null);

request.onreadystatechange = function( state ){

    if(request.readyState === 4) {
        var resp = request.response;

        //Transformo un  JSON que viene en forma String y lo convierto en un objeto de Javascript
        var respObj = JSON.parse( resp );

        console.log(respObj.data);
    }

};