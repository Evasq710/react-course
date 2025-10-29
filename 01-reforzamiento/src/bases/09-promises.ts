

// Promise<number>: Asegurando que la promesa resuelve en número
const myPromise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        console.log('Entering into the promise')
        // resolve(100);
        reject('The money is lost')
    }, 3000); // 3 segundos
})

myPromise
    .then((myMoney) => { // se sabe que myMoney:number gracias a la definición Promise<number>
        console.log(`Después de un tiempo, tengo mi dinero: ${myMoney}`)
    })
    .catch((reason) => {
        console.warn(reason);
    })
    .finally(() => {
        console.log('Let\'s continue with our life')
    })

// 2° PRINT
setTimeout(() => {
    console.log('This is on the main thread, after 1 second')
}, 1000)

// 1° PRINT
console.log('Print outside (asynchronous)')