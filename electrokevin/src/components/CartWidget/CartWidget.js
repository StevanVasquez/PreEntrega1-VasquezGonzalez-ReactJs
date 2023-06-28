import cart from './assets/CarritoCompras.svg'

export const Cartwidget = () => {
    return (
        <div className="carrito-compra">
            <img src={cart} alt="Carrito de compras"/>
            0
        </div>
    )
}

