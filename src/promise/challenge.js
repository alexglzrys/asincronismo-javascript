const fetchData = require('../utils/fetchData');
let API = 'https://rickandmortyapi.com/api/character/';

// Primera llamada
fetchData(API)
    .then(data => {
        console.log(data.info.count);
        // Segunda llamada
        // ! se debe retornan el resultado de la promesa para encadenarla con otro THEN
        return fetchData(`${API}${data.results[0].id}`)
    })
    .then(data => {
        console.log(data.name);
        // Tercer llamada
        return fetchData(`${data.origin.url}`);
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(err => console.error(err))
