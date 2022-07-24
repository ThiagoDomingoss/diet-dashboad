import React from 'react'
import * as c from './Output.styles'
import { useSelector, useDispatch } from 'react-redux'
import {inputMeals } from '../../../reducers/MealReducer'


const Modal = (props) => {

    const dispatch = useDispatch()

    const {setShow} = props
    const foods = useSelector((state) => state.foods.value)
    const meal = useSelector((state) => state.meal.value)

    const date = new Date()
    const formatedDate = Intl.DateTimeFormat('pt-BR',{
        dateStyle: 'short'
    })
    const dailyData = formatedDate.format(date)

    return(
        <c.foodContainer>
            <c.btn onClick={()=>{setShow(false)}}>Fechar</c.btn>
                
            {foods.map((food, index)=>{
                    return(
                    <c.item key={index}>
                    <c.content>
                        <h3>{food.meal}</h3>
                        <p>prot: {food.prot} | carb: {food.carb} | gord: {food.gord} | kcal: {food.kcal}</p>
                    </c.content>
                    <c.btn onClick={() => {
                    dispatch(inputMeals({id:meal.length === 0 ?  0 : meal[meal.length - 1].id + 1  ,meal: food.meal, prot: food.prot, carb: food.carb, gord: food.gord, kcal: food.kcal, data: dailyData}))
                    }}>Add</c.btn>
                </c.item>
                    )
                })}
        </c.foodContainer>
    )
}

export default Modal;