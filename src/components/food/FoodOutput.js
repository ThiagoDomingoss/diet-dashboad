import React, { useState } from "react";
import * as c from './Food.styles'
import { useSelector, useDispatch } from "react-redux";
import { removeFood } from "../../reducers/FoodReducer";
import Modal from "./Modal";

const FoodOutput = () => {

    const dispatch = useDispatch()
    const foods = useSelector((state) => state.foods.value)

    const[show, setShow] = useState(false)
    const[id, setId] = useState()

    const Edit = (id) => {
        setShow(true)
        setId(id)

    }

    return(
        <c.foodContainer>
                {foods.map((food, index)=>{
                    return(
                    <c.item key={index}>
                    <c.index>{index+1}</c.index>
                    <c.content>
                        <h3>{food.meal}</h3>
                        <p>prot: {food.prot} | carb: {food.carb} | gord: {food.gord} | kcal: {food.kcal}</p>
                    </c.content>
                    <c.btn onClick={() => {Edit(food.id)}}>edit</c.btn>
                    <c.btn onClick={() => {
                        dispatch(removeFood(food.id))
                    }}>del</c.btn>
                </c.item>
                    )
                })}
                
                {show ? <Modal setShow={setShow} id={id}/> : <></>}
                
            </c.foodContainer>
    )
}

export default FoodOutput;