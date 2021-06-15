
// Peticion GET
// https://reqres.in/api/users

fetch( 'https://reqres.in/api/users' )
    .then(resp => resp.json())
    .then(respObj => {
        console.log(respObj);  //{page: 1, per_page: 6, total: 12, total_pages: 2, data: Array(6), …}
        console.log(respObj.page); // 1
        console.log(respObj.data); //(6) [{…}, {…}, {…}, {…}, {…}, {…}]
        console.log(respObj.support); //{url: "https://reqres.in/#support-heading", text: "To keep ReqRes free, contributions towards server costs are appreciated!"}
    });
