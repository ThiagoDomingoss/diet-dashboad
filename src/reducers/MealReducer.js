import { createSlice } from "@reduxjs/toolkit";
import { meal } from "../components/output/MealData";


export const mealSlice = createSlice({
    name:'meal', 
    initialState: {value: meal},
    reducers: {
        inputMeals: (state, action) => {
            state.value.push(action.payload);
        },
        removeMeals: (state, action) => {
            state.value = state.value.filter((meal) => meal.id !== action.payload)
        },
    }
})

export const {inputMeals, removeMeals} = mealSlice.actions;
export default mealSlice.reducer;