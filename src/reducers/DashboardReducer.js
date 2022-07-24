import { createSlice } from "@reduxjs/toolkit";
import { macros } from "../components/dashboard/output/OutputData";

export const macroSlice = createSlice({
    name:'macro', 
    initialState: {value: macros},
    reducers: {
        inputGoals: (state, action) => {
            for (let i = 0; i < 4; ++i){
                state.value[i].goal = action.payload[i]
            }
            localStorage.setItem('dailymacros', JSON.stringify(action.payload))
        },
        inputDone: (state, action) => {
            for (let i = 0; i < 4; ++i){
                state.value[i].done = action.payload[i]
            }
            
        }
    }
})

export const {inputGoals, inputDone} = macroSlice.actions;
export default macroSlice.reducer;