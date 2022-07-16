import React from "react";
import * as c from './Food.styles'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFood } from "../../reducers/FoodReducer";

const FoodInput = () => {

    const dispatch = useDispatch()
    const foods = useSelector((state) => state.foods.value)

    const [meal, setMeal] = useState()
    const [prot, setProt] = useState()
    const [carb, setCarb] = useState()
    const [gord, setGord] = useState()
    const [kcal, setKcal] = useState()

    return(
        <c.foodForm>
                <c.formMeal>
                    <c.label>ingredientes</c.label>
                    <c.inputFood onChange={(e) => {
                        setMeal(e.target.value)
                    }}></c.inputFood>
                </c.formMeal>

                <c.formArea>
                    <c.label>proteinas</c.label>
                    <c.inputMacro type="number" onChange={(e) => {
                        setProt(e.target.valueAsNumber)
                    }}></c.inputMacro>
                </c.formArea>

                <c.formArea>
                    <c.label>carboidratos</c.label>
                    <c.inputMacro type="number" onChange={(e) => {
                        setCarb(e.target.valueAsNumber)
                    }}></c.inputMacro>
                </c.formArea>

                <c.formArea>
                    <c.label>gorduras</c.label>
                    <c.inputMacro type="number" onChange={(e) => {
                        setGord(e.target.valueAsNumber)
                    }}></c.inputMacro>
                </c.formArea>

                <c.formArea>
                    <c.label>Kcal</c.label>
                    <c.inputMacro type="number" onChange={(e) => {
                        setKcal(e.target.valueAsNumber)
                    }}></c.inputMacro>
                </c.formArea>

                <c.button onClick={() => {
                    dispatch(addFood({id: foods[foods.length - 1].id + 1 ,meal, prot, carb, gord, kcal}))
                    }}>Adicionar</c.button>
            </c.foodForm>
    )
}

export default FoodInput;