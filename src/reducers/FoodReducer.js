import { createSlice } from "@reduxjs/toolkit";


export const foodSlice = createSlice({
    name:'food', 
    initialState: {value: JSON.parse(localStorage.getItem('lista'))?? []},
    reducers: {
        addFood: (state, action) => {
            state.value.push(action.payload);
            localStorage.setItem('lista', JSON.stringify(state.value))
        },
        removeFood: (state, action) => {
            state.value = state.value.filter((food) => food.id !== action.payload)
            localStorage.setItem('lista', JSON.stringify(state.value))
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
            localStorage.setItem('lista', JSON.stringify(state.value))
        }
    }
})

export const {addFood, removeFood, updateFood} = foodSlice.actions;
export default foodSlice.reducer;