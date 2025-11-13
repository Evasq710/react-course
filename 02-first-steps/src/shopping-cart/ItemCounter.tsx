import { useState } from "react";

// import './ItemCounter.css' // IMPORTACIÓN DE CSS
import styles from './ItemCounter.module.css' // IMPORTACIÓN DE CSS COMO MÓDULO

interface ItemCounterProps {
    productName: string,
    quantity: number | undefined // Para obligar que se envíe pero como undefined (quantity? vuelve a la prop opcional)
}

/**
 * - Hooks: Funciones que permiten a los componentes usar el estado y otras características de React (useState, useEffect, useContext)
 */

export const ItemCounter = ({ productName, quantity = 1 }: ItemCounterProps) => {
    /** Los Hooks deben de colocarse al inicio */

    // Deconstrucción de useState(init). Retorna: [number, React.Dispatch<React.SetStateAction<number>>]
    const [count, setCount] = useState(quantity);

    const handleClickSubtract = () => {
        if (count === 1) return; // Impidiendo que el contador baje de 1

        setCount(count - 1); // La función dispatcher hace que se vuelva a dibujar el componente
    }

    const handleClickAdd = () => {
        setCount(count + 1); // La función dispatcher hace que se vuelva a dibujar el componente
    }

    return (
        <section
            // estilos fijos, si se importa el CSS como "módulo"
            className={styles['item-row']}

        // estilos fijos, si sólo se importa el CSS
        // className="item-row" 

        // style={{
        //     display: 'flex',
        //     alignItems: 'center',
        //     gap: 10,
        //     marginTop: 10,
        // }}
        >
            <span
                // estilos fijos, si se importa el CSS como "módulo"
                // se puede usar sintaxis con punto si el nombre en CSS en un nombre válido en JS (inválido: item-text)
                className={styles.itemText}

                // estilos fijos, si sólo se importa el CSS
                // className="item-text"

                // estilos variables
                style={{
                    color: count === 1 ? 'red' : 'black',
                }}
            >
                {productName}
            </span>
            <button
                onClick={handleClickSubtract}
            >
                -1
            </button>
            <span>{count}</span>
            <button
                onClick={handleClickAdd}
            >
                +1
            </button>
        </section>
    )
}