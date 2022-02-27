// Este paquete funciona con callbacks dentro del mundo de nodejs
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

/**
 * No se hace uso del fetch API disponible en ES6
 * Ya que este trabaja con promesas de forma nativa
 */

function fetchData(url_api, callback)
{
    // generar objeto XMLHttpRequest
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function(event) {
        // Verificar que el estado de la peticion se ha completado
        if (xhttp.readyState === 4) 
        {
            // Si el estado es 200 la petición se resolvió de forma correcta
            if (xhttp.status === 200)
            {
                // El estandar en callbacks indica que el primer parametro es el error, y el segundo es la respuesta
                // Esta librería recupera la respuesta en cadena de texto, en este sentido tenemos que parsear ese JSON
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null);
            }
        }
    }
    // Enviar la petición
    xhttp.send();
}


// Primera llamada: https://rickandmortyapi.com/api/character/
fetchData(API, function(err1, res1) {
    if (err1) return console.error(err1);
    // Segunda llamada: https://rickandmortyapi.com/api/character/1
    fetchData(API + res1.results[0].id, function(err2, res2) {
        if (err2) return console.error(err2);
        // Tercera llamada: https://rickandmortyapi.com/api/location/1
        fetchData(res2.origin.url, function(err3, res3) {
            if (err3) return console.error(err3);

            // ! Tenemos un claro problema de callbacks anidados. Callback Hell
            // Tomamos las 3 respuestas e imprimimos los datos que necesitamos
            console.log(res1.info.count)
            console.log(res2.name);
            console.log(res3.dimension);
        })
    })
});