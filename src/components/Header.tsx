import { useMemo, Dispatch } from "react";
import GuitarCarrito from "./GuitarCarrito";
import type { CartItem } from "../types";
import type { CartActions } from "../reducers/cart-reducer";

type HeaderProps = {
    cart: CartItem[];
    dispatch: Dispatch<CartActions>;
};

export default function Header({ cart, dispatch }: HeaderProps) {
    // State Derivado
    const isEmpty = useMemo(() => cart.length === 0, [cart]);
    const cartTotal = useMemo(
        () =>
            cart.reduce((total, item) => total + item.quantity * item.price, 0),
        [cart]
    );

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
                                    <p className="text-center">
                                        El carrito esta vacio
                                    </p>
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
                                                        dispatch={dispatch}
                                                    />
                                                ))}
                                            </tbody>
                                        </table>

                                        <p className="text-end">
                                            Total pagar:{" "}
                                            <span className="fw-bold">
                                                ${cartTotal}
                                            </span>
                                        </p>

                                        <button
                                            className="btn btn-dark w-100 mt-3 p-2"
                                            onClick={() =>
                                                dispatch({ type: "clear-cart" })
                                            }
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
