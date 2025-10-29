
export interface Hero {
    id: number;
    name: string;
    owner: Owner; // custom type
}

// TYPE
// Se puede usar para definir una serie de posibles valores
// No tiene una contraparte en JS
export type Owner = 'DC' | 'Marvel' | 'Other';

// WARNING: enum's son marcados como error cuando la flag `erasableSyntaxOnly` se encuentra activa
// enum Owner {
//     DC, //0
//     Marvel //1
// }

/**
 * Al tener esta exportación independiente, la importación puede hacerse como sigue, en donde el nombre sí importa:
 * import { heroes } from "../data/heroes.data"
 */
export const heroes: Hero[] = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC',
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel',
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC',
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC',
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel',
    },
    // {
    //     id: 6,
    //     name: 'Bestia',
    //     owner: 'Marvel Comics', // daría error
    // },
]


/**
 * Al tener esta exportación por defecto, la importación puede hacerse como sigue:
 * import nombreIrrelevante from "../data/heroes.data"
 */
// export default heroes;