
interface ItemCounterProps {
    productName: string,
    quantity: number | undefined // Para obligar que se envíe pero como undefined (quantity? vuelve a la prop opcional)
}

export const ItemCounter = ({ productName, quantity }: ItemCounterProps) => {
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
            <button>-1</button>
            <span>{quantity}</span>
            <button>+1</button>
        </section>
    )
}