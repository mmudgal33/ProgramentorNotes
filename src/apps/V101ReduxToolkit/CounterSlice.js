import { createSlice } from "@reduxjs/toolkit";

// name of action
// initial state
// reducers

const initialState = {
    count : 0
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increase: (state) => {
            state.count +=1 ;
        },
        decrease: (state) => {
            state.count -=1 ;
        }
    }
});

export default counterSlice.reducer;
export const {increase, decrease} = counterSlice.actions;

