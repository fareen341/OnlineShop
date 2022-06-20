import { createSlice } from "@reduxjs/toolkit";     //allows u to create ur reducer in easy way

const initialStateValue = [];

export const singleproductSlice = createSlice({
    name: "getSingleProduct",
    initialState: {value: initialStateValue},
    reducers: {
        setProduct:(state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setProduct } = singleproductSlice.actions;
export default singleproductSlice.reducer;