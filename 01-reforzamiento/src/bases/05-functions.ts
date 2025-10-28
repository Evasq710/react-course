
function greet( name: string ): string {
    return `Hola ${name}`
}

const greet2 = ( name: string ): string => {
    return `Hola ${name} :D`;
}

// Si una función de flecha tiene como única instrucción un return, se puede simplificar así:
const greet3 = ( name: string ): string => `Hola ${name} :l`;

const message = greet('Goku');
const message2 = greet2('Elías');
const message3 = greet3('Abraham');
console.log(message, message2, message3);



interface User {
    uid: string;
    username: string;
}

const getUser = ():User => {
    return {
        uid: 'ABC-123',
        username: 'El_papi_123'
    };
}

// Función de flecha simplificada cuando el retorno es un objeto
// Se agregan paréntesis para indicar que se retornará un objeto
const getUser2 = (): User => ({
        uid: 'DEF-456',
        username: 'La_mami_123'
});

const user = getUser();
const user2 = getUser2();
console.log(user, user2);



const myNumbers: number[] = [10, 20, 30, 40, 50];

// AMBAS FUNCIONES DE FLECHA RETORNAN LO MISMO
console.log('First way...')
myNumbers.forEach((value, index, array) => {
    console.log(value, index, array);
})
// Si los argumentos sólo sirven para ser enviados a otra función (console.log en este caso), se puede pasar únicamente la referencia de la función, y todos los parámetros serán enviados a ella
console.log('Second way...')
myNumbers.forEach(console.log);