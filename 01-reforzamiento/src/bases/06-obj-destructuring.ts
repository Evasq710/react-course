
interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string; // Opcional. Si no viene > undefined
    // rank: string | undefined; // También se puede definir así
}

const person: Hero = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
};

// NO RECOMENDADO
// const name = person.name;
// const age = person.age;
// const key = person.key;

// Dentro de los objetos, el orden de la desestructuración no es importante
// Dentro de los arreglos, el orden la desestructuración sí es importante
// name y age se están renombrando
const { key, name:nameIronman, age:ageIronman } = person;

console.log({ nameIronman, ageIronman, key })


// Se puede realizar la desestructuración directo en los parámetros de una función
const useContext = ({ key, name, age, rank }: Hero) => {
    return {
        keyName: key,
        user: {
            // name: name,
            // age: age
            // También se puede de la siguiente manera
            // Como lo que ocurriría con console.log({var}) > {var: <var_value>}
            name,
            age,
        },
        rank: rank
    }
}

// Enviando un objeto como parámetro que fue desestructurado directo en la recepción de estos
const context = useContext(person);
console.log(context)

// Desestructuración anidada (objeto user dentro del objeto persona)
const { keyName, rank, user: { name, age } } = context;
console.log({keyName, rank, name, age});