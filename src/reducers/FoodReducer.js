import { createSlice } from "@reduxjs/toolkit";
import { foods } from "../components/food/FoodsData";

export const foodSlice = createSlice({
    name:'food', 
    initialState: {value: foods},
    reducers: {
        addFood: (state, action) => {
            state.value.push(action.payload);
        },
        removeFood: (state, action) => {
            state.value = state.value.filter((food) => food.id !== action.payload)
        },
        updateFood: (state, action) => {
            state.value.map((food) => {
                if(food.id === action.payload.id){
                    food.meal = action.payload.meal;
                    food.prot = action.payload.prot;
                    food.carb = action.payload.carb;
                    food.gord = action.payload.gord;
                    food.kcal = action.payload.kcal;
                }
            })
        }
    }
})

export const {addFood, removeFood, updateFood} = foodSlice.actions;
export default foodSlice.reducer;