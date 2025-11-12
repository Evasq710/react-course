import { useState } from "react";

interface ItemCounterProps {
    productName: string,
    quantity: number | undefined // Para obligar que se envíe pero como undefined (quantity? vuelve a la prop opcional)
}

/**
 * - Hooks: Funciones que permiten a los componentes usar el estado y otras características de React (useState, useEffect, useContext)
 */

export const ItemCounter = ({ productName, quantity = 1 }: ItemCounterProps) => {
    /** Los Hooks deben de colocarse al inicio */

    const [count, setCount] = useState(quantity); // useState(init) retorna: [number, React.Dispatch<React.SetStateAction<number>>]

    const handleClickSubtract = () => {
        if (count === 1) return; // Impidiendo que el contador baje de 1

        setCount(count - 1); // La función dispatcher hace que se vuelva a dibujar el componente
    }

    const handleClickAdd = () => {
        setCount(count + 1); // La función dispatcher hace que se vuelva a dibujar el componente
    }

    return (
        <section style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginTop: 10,
        }}>
            <span style={{
                width: 150,
                color: count === 1 ? 'red' : 'black',
            }}>
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