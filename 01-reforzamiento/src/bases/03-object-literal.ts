const ironman = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: 'ABC123',
        city: 'New York'
    }
}

// Ambas variables apuntarán al mismo espacio en memoria
// const spiderman = ironman;

// SPREAD -> Esparcir propiedades del objeto
// Sólo se rompen las referencias en el PRIMER NIVEL
// Los objetos (address en el ejemplo) se seguirán pasando por referencia
// const spiderman = { ... ironman };

// DEEP CLONE
const spiderman = structuredClone(ironman);

// Se pueden cambiar las propiedades de un objeto const, mas no a lo que apunta
spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
spiderman.address.city = 'Queens'; // Modificaría también a 'ironman' si se usa spread a primer nivel

console.log(ironman, spiderman)