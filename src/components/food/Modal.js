import React, { useEffect } from "react";
import * as c from './Modal.styles'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFood } from "../../reducers/FoodReducer";


const Modal = (props) => {

    const {id, setShow} = props
    
    const dispatch = useDispatch()
    const foods = useSelector((state) => state.foods.value)

    const [meal, setMeal] = useState()
    const [prot, setProt] = useState()
    const [carb, setCarb] = useState()
    const [gord, setGord] = useState()
    const [kcal, setKcal] = useState()

    const upFood = (food) => {
        setMeal(food.meal)
        setProt(food.prot)
        setGord(food.gord)
        setCarb(food.carb)
        setKcal(food.kcal)
    }

    useEffect(() => {
        const food = foods.filter((food) => 
            food.id === id
        )
        upFood(food[0])

    }, [])

    return(
        <c.foodForm>
                <c.formMeal>
                    <c.label>ingredientes</c.label>
                    <c.inputFood value={meal} onChange={(e) => {
                        setMeal(e.target.value)
                    }}></c.inputFood>
                </c.formMeal>

                <c.formArea>
                    <c.label>proteinas</c.label>
                    <c.inputMacro value={prot} type="number" onChange={(e) => {
                        setProt(e.target.value)
                    }}></c.inputMacro>
                </c.formArea>

                <c.formArea>
                    <c.label>carboidratos</c.label>
                    <c.inputMacro value={carb} type="number" onChange={(e) => {
                        setCarb(e.target.value)
                    }}></c.inputMacro>
                </c.formArea>

                <c.formArea>
                    <c.label>gorduras</c.label>
                    <c.inputMacro value={gord} type="number" onChange={(e) => {
                        setGord(e.target.value)
                    }}></c.inputMacro>
                </c.formArea>

                <c.formArea>
                    <c.label>Kcal</c.label>
                    <c.inputMacro type="number" onChange={(e) => {
                        setKcal(e.target.value)
                    }} value={kcal}></c.inputMacro>
                </c.formArea>

                <c.button onClick={() => {
                    dispatch(updateFood({id: id, meal: meal, prot: prot, carb: carb, gord: gord, kcal: kcal}))
                    }}>Adicionar</c.button>

                <c.button onClick={() => {setShow(false)}}>Cancelar</c.button>
            </c.foodForm>
    )
}

export default Modal;