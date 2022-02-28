// Este paquete funciona con callbacks dentro del mundo de nodejs
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

/**
 * No se hace uso del fetch API disponible en ES6
 * Ya que este trabaja con promesas de forma nativa
 */

const fetchData = (url_api) => {
    // Retornar una promesa
    return new Promise((resolve, reject) => {
        // generar objeto XMLHttpRequest
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = event => {
            // Verificar que el estado de la peticion se ha completado
            if (xhttp.readyState === 4) 
            {
                // Si el estado es 200 la petición se resolvió de forma correcta, por tanto resolvemos o rechazamos la promesa
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error ' + url_api))
            }
        }
        // Enviar la petición
        xhttp.send();
    });
}

module.exports = fetchData;