import { createSlice } from "@reduxjs/toolkit";


export const mealSlice = createSlice({
    name:'meal', 
    initialState: {value: JSON.parse(localStorage.getItem('refeicoes'))?? []},
    reducers: {
        inputMeals: (state, action) => {
            state.value.push(action.payload);
            localStorage.setItem('refeicoes', JSON.stringify(state.value))
        },
        removeMeals: (state, action) => {
            state.value = state.value.filter((meal) => meal.id !== action.payload)
            localStorage.setItem('refeicoes', JSON.stringify(state.value))
        },
    }
})

export const {inputMeals, removeMeals} = mealSlice.actions;
export default mealSlice.reducer;