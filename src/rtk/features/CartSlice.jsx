import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "casesCart",
    initialState: JSON.parse(localStorage.getItem("casesCart")) || [],
    reducers: {
        addToCart: (state, action) => {

            const { id } = action.payload
            let newState;
            console.log(state)

            const existingCase = state.find(item => item.id === +id);
            if (existingCase) {
                newState = state
            } else {
                newState = [...state, action.payload];
            }

            localStorage.setItem("casesCart", JSON.stringify(newState));
            return newState;
        },
        removeFromCart: (state, action) => {

            const { id } = action.payload
            const newState = state.filter(item => item.id !== id);
            localStorage.setItem("casesCart", JSON.stringify(newState));
            return newState;
        }
    }
})

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer