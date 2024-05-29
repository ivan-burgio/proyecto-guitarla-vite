import { db } from "../data/db";
import { CartItem, Guitar } from "../types";

export type CartActions =
    | { type: "add-to-cart"; payload: { item: Guitar } }
    | { type: "remove-from-cart"; payload: { id: Guitar["id"] } }
    | { type: "decrease-quantity"; payload: { id: Guitar["id"] } }
    | { type: "increase-quantity"; payload: { id: Guitar["id"] } }
    | { type: "clear-cart" };

export type CartState = {
    data: Guitar[];
    cart: CartItem[];
};

export const initialState: CartState = {
    data: db,
    cart: [],
};

const MAX_ITEMS = 5;
const MIN_ITEMS = 1;

export const cartReducer = (
    state: CartState = initialState,
    action: CartActions
) => {
    if (action.type === "add-to-cart") {
        const itemExist = state.cart.findIndex(
            (guitar) => guitar.id === action.payload.item.id
        );

        let updateCart: CartItem[] = [];

        if (itemExist !== -1) {
            if (state.cart[itemExist].quantity >= MAX_ITEMS) return;
            updateCart = [...state.cart];
            updateCart[itemExist].quantity++;
        } else {
            const newItem: CartItem = { ...action.payload.item, quantity: 1 };
            updateCart = [...state.cart, newItem];
        }

        return {
            ...state,
            cart: updateCart,
        };
    }

    if (action.type === "remove-from-cart") {
        return {
            ...state,
        };
    }

    if (action.type === "decrease-quantity") {
        return {
            ...state,
        };
    }

    if (action.type === "increase-quantity") {
        return {
            ...state,
        };
    }

    if (action.type === "clear-cart") {
        return {
            ...state,
        };
    }
};
