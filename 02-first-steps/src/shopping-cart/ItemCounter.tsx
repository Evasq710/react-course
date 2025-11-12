
interface ItemCounterProps {
    productName: string,
    quantity: number | undefined // Para obligar que se envíe pero como undefined (quantity? vuelve a la prop opcional)
}

export const ItemCounter = ({ productName, quantity }: ItemCounterProps) => {

    const handleClick = () => {
        console.log(`Click on: ${productName}`);
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
            }}>
                {productName}
            </span>
            <button
                onClick={handleClick}
            >
                -1
            </button>
            <span>{quantity}</span>
            <button
                onClick={() => { }}
            >
                +1
            </button>
        </section>
    )
}