const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do Something Async'), 300)
            : reject(new Error('Test error'))
    });
}

// Await solo puede ejecutarse dentro de una función que sea Asincrona
const doSomething = async() => {
    // ! async/await hace que nuestro código se lea de forma secuencial
    const something = await doSomethingAsync();
    console.log(something);
}

// Ejecutar
console.log('Before')
doSomething();
console.log('After')


// Cuando se trabaja con async/await se recomienda hacerlo con bloques try/catch para atrapar los errores
const anotherFunction = async() => {
    try {
        const response = await doSomethingAsync();
        console.log('2', response);
    } catch (err) {
        console.error(err);
    }
}

// Ejecutar
console.log('Before -- 2')
anotherFunction();
console.log('After -- 2')
