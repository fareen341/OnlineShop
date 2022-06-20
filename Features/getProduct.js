import { createSlice } from "@reduxjs/toolkit";     //allows u to create ur reducer in easy way

const initialStateValue = [];

export const productSlice = createSlice({
    name: "getProduct",
    initialState: {value: initialStateValue},
    reducers: {
        setRecords:(state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setRecords } = productSlice.actions;
export default productSlice.reducer;