

const myArray: number[] = [1, 2, 3, 4, 5];

myArray.push(6);
// myArray.push('7'); // Sí se podría si no se le declara tipo al array, ya que se declararía de tipo (string | number)[]

console.log(myArray)

for (const myNumber of myArray) {
    console.log(myNumber + 10);
}

// Ambas variables apuntarán al mismo espacio de memoria
// const myArray2 = myArray;

// SPREAD - Sólo en el nivel superior
const myArray2 = [ ...myArray ];

// DEEP CLONE
// Recomendado para arrays de objetos, por ejemplo
// const myArray2 = structuredClone(myArray);

myArray.push(7);

console.log({myArray, myArray2})