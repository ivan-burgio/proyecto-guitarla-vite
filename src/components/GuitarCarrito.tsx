import React from "react";

export default function GuitarCarrito({guitar, removeFromCart, increaseQuantity, decreaseQuantity}) {
    const { name, image, price, quantity } = guitar;

    return (
        <>
            <tr>
                <td>
                    <img
                        className="img-fluid"
                        src={`/img/${image}.jpg`}
                        alt="imagen guitarra"
                    />
                </td>
                <td>{name}</td>
                <td className="fw-bold">${price}</td>
                <td className="flex align-items-start gap-4">
                    <button
                        type="button"
                        className="btn btn-dark"
                        onClick={() => decreaseQuantity(guitar.id)}
                    >
                        -
                    </button>
                    {quantity}
                    <button
                        type="button"
                        className="btn btn-dark"
                        onClick={() => increaseQuantity(guitar.id)}
                    >
                        +
                    </button>
                </td>
                <td>
                    <button
                        className="btn btn-danger"
                        type="button"
                        onClick={() => removeFromCart(guitar.id)}
                    >
                        X
                    </button>
                </td>
            </tr>
        </>
    );
}
