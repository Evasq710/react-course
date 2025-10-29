import { heroes, type Hero, type Owner } from "../data/heroes.data"

const getHeroById = (id: number): Hero|undefined => {
    const foundedHero = heroes.find(
        (hero) => hero.id === id
    );
    // Para aplicar el throw, faltan temas de promesas por cubrir
    // if(!foundedHero){
    //     throw new Error(`No existe un héroe con el id ${id}`)
    // }
    return foundedHero;
}

console.log(getHeroById(5));
console.log(getHeroById(6));


const getHeroesByOwner = (owner: Owner): Hero[] => {
    const heroesByOwner = heroes.filter(
        (hero) => hero.owner === owner
    );

    return heroesByOwner;
}

console.log(getHeroesByOwner('DC'));
console.log(getHeroesByOwner('Marvel'));
console.log(getHeroesByOwner('Other')); // empty
// console.log(getHeroesByOwner('DC Comics')); // Daría error, ya que 'DC Comics' no es de tipo Owner