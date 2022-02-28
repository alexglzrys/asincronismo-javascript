const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!')
        } else {
            reject('Whoooops!');
        }
    });
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 2000);
        } else {
            const error = new Error('Whooop!');
            reject(error);
        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));


// ? Ejecutar promeses de forma simultanea, se recomienda cuando el resultado de una no dependa de la otra
// ! Si una promesa falla, falla todo
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => console.log('Array de resultados', response))
    .catch(err => console.error(err));