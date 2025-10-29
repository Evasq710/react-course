const characterNames = ['Goku', 'Vegeta', 'Trunks'];

// Dentro de los objetos, el orden de la desestructuración no es importante
// Dentro de los arreglos, el orden la desestructuración sí es importante
const [ p1, p2, p3, p4 ] = characterNames;
console.log({p1, p2, p3, p4}); // Goku, Vegeta, Trunks, undefined

// Extrayendo un ítem en particular
const [ ,c2 ] = characterNames;
console.log(c2); // Vegeta


// Al no saber TS si el elemento es string o number, podemos tener errores posteriores (como la suma de 10) al tener comportamientos distintos
// const returnsArrayFn = (): (string|number)[] => [ 'ABC', 123 ];

/*
'as const' > se asegura que los valores no cambiarán (como tupla),
sabiendo exactamente el tipo para cada variable al realizar la desestructuración
*/
const returnsArrayFn = () => [ 'ABC', 123 ] as const;

const [ letras, numeros ] = returnsArrayFn();

console.log(letras + 10);
console.log(numeros + 10);