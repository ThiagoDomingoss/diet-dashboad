import { createSlice } from "@reduxjs/toolkit";
import { macros } from "../components/output/OutputData";

export const macroSlice = createSlice({
    name:'macro', 
    initialState: {value: macros},
    reducers: {
        inputGoals: (state, action) => {
            state.value[0].goal = action.payload.prot
            state.value[1].goal = action.payload.carb
            state.value[2].goal = action.payload.gord
            state.value[3].goal = action.payload.kcal
        },
        inputDone: (state, action) => {

        }
    }
})

export const {inputGoals, inputDone} = macroSlice.actions;
export default macroSlice.reducer;