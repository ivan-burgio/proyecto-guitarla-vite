import { Dispatch } from "react";
import type { CartItem } from "../types";
import type { CartActions } from "../reducers/cart-reducer";

type GuitarProps = {
    guitar: CartItem;
    dispatch: Dispatch<CartActions>;
};

export default function GuitarCarrito({ guitar, dispatch }: GuitarProps) {
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
                        onClick={() =>
                            dispatch({
                                type: "decrease-quantity",
                                payload: { id: guitar.id },
                            })
                        }
                    >
                        -
                    </button>
                    {quantity}
                    <button
                        type="button"
                        className="btn btn-dark"
                        onClick={() =>
                            dispatch({
                                type: "increase-quantity",
                                payload: { id: guitar.id },
                            })
                        }
                    >
                        +
                    </button>
                </td>
                <td>
                    <button
                        className="btn btn-danger"
                        type="button"
                        onClick={() =>
                            dispatch({
                                type: "remove-from-cart",
                                payload: { id: guitar.id },
                            })
                        }
                    >
                        X
                    </button>
                </td>
            </tr>
        </>
    );
}
