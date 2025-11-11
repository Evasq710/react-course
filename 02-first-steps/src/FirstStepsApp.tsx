
import type { CSSProperties } from "react";

/** Si las variables no cambian, se aconseja que se encuentren fuera del componente de React, para que no se esté refrescando constantemente */

const firstName = 'Elías';
const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];

const booleanVar = false; // Cambiar

const address = {
    zipCode: 'ABC-132',
    country: 'Cánada'
};

// Se declara como CSSProperties para tener ayuda del IntelliSense a la hora de agregar más atributos (autocompletado)
const myStiles: CSSProperties = {
    backgroundColor: 'yellow',
    color: booleanVar ? 'green' : 'purple',
    padding: 15
};

export const FirstStepsApp = () => {
    /** Aunque se podían declarar las variables aquí, se aconseja que si son constantes, se declaren afuera del componente */

    return (
        <>
            <h1>Hola mundo :D Soy {firstName}</h1>
            <p>Mostrando un arreglo tal cual (todo pegado): {favoriteGames}</p>
            <p>Mostrando un arreglo formateado: {favoriteGames.join(', ')}</p>
            <br />

            <p>Booleano: {booleanVar}</p> {/** Sin representación */}
            <p>Ternario: {booleanVar ? 'VERDADERO' : 'FALSO'}</p>
            <br />

            {/* <p>Objeto: {address}</p> */}  {/* <---- Esto no se puede */}
            <p>Objeto: {address.toString()}</p> {/* [object Object] */}
            <p
                // style={{
                //     backgroundColor: 'yellow',
                //     color: booleanVar ? 'green' : 'purple',
                //     padding: 15
                // }}
                style={myStiles}
            >
                Objeto como cadena: {JSON.stringify(address)}
            </p> {/** {"zipCode":"ABC-132","country":"Cánada"} */}
        </>
    );
}


// SINTÁXIS QUE TAMBIÉN ES VÁLIDA

// export function FirstStepsApp() {
//     return (
//         // <> --> fragmento
//         <> 
//             <h1>Hola mundo :D</h1>
//             <p>Esto es un párrafo</p>
//             <button>Click me</button>

//             <div>
//             <h2>Hola dentro de un div</h2>
//             </div>
//         </>
//     )
// }