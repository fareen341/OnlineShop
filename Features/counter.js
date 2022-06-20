import { createSlice } from "@reduxjs/toolkit";     //allows u to create ur reducer in easy way

const initialStateValue = 0;
// const initialStateValue = [];

export const counterSlice = createSlice({
    name: "counter",
    initialState: {value: initialStateValue},
    reducers: {
        changeCounter:(state, action) => {
            state.value = action.payload;
        },
    },
});

export const { changeCounter } = counterSlice.actions;
export default counterSlice.reducer;