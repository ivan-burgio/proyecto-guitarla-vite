import GuitarCarrito from "./GuitarCarrito";

import type { Guitar, CartItem } from "../types";

type HeaderProps = {
    cart : CartItem[]
    removeFromCart : (id: Guitar["id"]) => void
    increaseQuantity : (id: Guitar["id"]) => void
    decreaseQuantity : (id: Guitar["id"]) => void
    clearCart : () => void
    isEmpty : boolean
    cartTotal : number
}

export default function Header({
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    isEmpty,
    cartTotal,
} : HeaderProps ) {
    return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            <img
                                className="img-fluid"
                                src="/img/logo.svg"
                                alt="imagen logo"
                            />
                        </a>
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <div className="carrito">
                            <img
                                className="img-fluid"
                                src="/img/carrito.png"
                                alt="imagen carrito"
                            />

                            <div id="carrito" className="bg-white p-3">
                                {isEmpty ? (
                                    <p className="text-center">El carrito esta vacio</p>
                                ) : (
                                    <>
                                        <table className="w-100 table">
                                            <thead>
                                                <tr>
                                                    <th>Imagen</th>
                                                    <th>Nombre</th>
                                                    <th>Precio</th>
                                                    <th>Cantidad</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.map((guitar) => (
                                                    <GuitarCarrito
                                                        key={guitar.id}
                                                        guitar={guitar}
                                                        removeFromCart={removeFromCart}
                                                        increaseQuantity={increaseQuantity}
                                                        decreaseQuantity={decreaseQuantity}
                                                    />
                                                ))}
                                            </tbody>
                                        </table>

                                        <p className="text-end">
                                            Total pagar:{" "}
                                            <span className="fw-bold">${cartTotal}</span>
                                        </p>

                                        <button
                                            className="btn btn-dark w-100 mt-3 p-2"
                                            onClick={clearCart}
                                        >
                                            Vaciar Carrito
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
