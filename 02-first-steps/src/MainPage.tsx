import { ItemCounter } from './shopping-cart/ItemCounter';

// Esta interfaz debería de estar en su componente
interface ItemInCart {
    itemName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    { itemName: 'Nintentdo Switch 2', quantity: 10 },
    { itemName: 'PlayStation 5', quantity: 4 },
    { itemName: 'Xbox One', quantity: 2 },
]

export const MainPage = () => {
    return (
        <>
            <h1>Carrito de Compras</h1>

            {
                /**
                 * 1. ({ itemName, quantity }) -> Desestructurando cada objeto ItemInCart
                 * 2. Retornando ItemCounter's
                 * 3. key necesario para React para identificar cada elemento. Se aconseja asignar valores únicos
                 */
                itemsInCart.map(({ itemName, quantity }) => (
                    <ItemCounter key={itemName} productName={itemName} quantity={quantity} />
                ))
            }

            {/* Declarando manualmente los componentes */}
            {/* <ItemCounter productName="Nintendo Switch 2" quantity={2} />
            <ItemCounter productName="PlayStation 5" quantity={5} />
            <ItemCounter productName="Xbox One" quantity={9} /> */}
        </>
    )
}