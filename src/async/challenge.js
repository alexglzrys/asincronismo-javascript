const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

// Envolver await en funcion asincrona
const anotherFunction = async() => {
    try {
        // Consultar diferentes endpoints de mi API
        const data = await fetchData(API);
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (error) {
        // Atrapar posibles errores de llamadas asincronas
        console.error(error);
    }
}

console.log('Before - API');
anotherFunction();
console.log('After - API');