// Función que será ṕasada como callback
function sum(num1, num2)
{
    return num1 + num2;
}

function calc(num1, num2, callback)
{
    // Devolver el resultado de la función pasada como callback
    return callback(num1, num2);
}

console.log(calc(2, 2, sum));



function date(callback)
{
    console.log(new Date);
    // Después de 3 segundos ejecutamos la función pasada como callback
    setTimeout(() => {
        let date = new Date;
        callback(date);
    }, 3000);
}

// Función que será pasada como callback
function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);