import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Room{
    id: number;
    image: string;
    title: string;
    adults: number;
    size: number;
    subTitle: number;
    price: number;
}

interface CartItem{
    checkin: string;
    checkout: string;
    adults: number;
    children: number;
    quantity: number;
    rooms: Array<Room>;
}

const cartSlice=createSlice({
    name: 'cart',
    initialState: [] as CartItem[],
    reducers: {
        setCart: (state, action:PayloadAction<CartItem[]>)=>{
            return action.payload;
        },
        removeFromCart: (state, action:PayloadAction<number>)=>{
            return state.filter((cartItem)=> cartItem.rooms[0].id!==action.payload)
        }
    }
})


export const {setCart, removeFromCart}=cartSlice.actions;
export default cartSlice.reducer;
