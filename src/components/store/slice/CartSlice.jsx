import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        make(state , action){
            state.push(action.payload)
        },
        move(state , action){
            return state.filter((item)=> item.id !==  action.payload )
        }
    }
})

export const {make , move} = cartSlice.actions;
export default cartSlice.reducer;