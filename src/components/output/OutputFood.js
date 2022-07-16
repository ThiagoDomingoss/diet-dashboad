import React, { useEffect, useState } from "react";
import * as c from './Output.styles'
import { useSelector , useDispatch } from "react-redux";
import Modal from "./Modal";
import { removeMeals } from "../../reducers/MealReducer";
import{ inputDone} from '../../reducers/DashboardReducer'

const OutputFood = () => {
    
    const [dayProt, setDayProt] = useState()
    const [dayCarb, setDayCarb] = useState()
    const [dayGord, setDayGord] = useState()
    const [dayKcal, setDayKcal] = useState()
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const meal = useSelector((state) => state.meal.value)

    const date = new Date()
    const formatedDate = Intl.DateTimeFormat('pt-BR',{
        dateStyle: 'short'
    })
    const dailyData = formatedDate.format(date)
    const filteredMeals = meal.filter((meal) => 
        meal.data === dailyData
    )

    useEffect(() =>{
        setDayProt(filteredMeals.reduce((acc, {prot})=>acc + prot,0))
        setDayCarb(filteredMeals.reduce((acc, {carb})=>acc + carb,0))
        setDayGord(filteredMeals.reduce((acc, {gord})=>acc + gord,0))
        setDayKcal(filteredMeals.reduce((acc, {kcal})=>acc + kcal,0))
    }, [filteredMeals])

    useEffect(()=>{
        dispatch(inputDone({prot: dayProt, carb: dayCarb, gord: dayGord, kcal: dayKcal}))
    }, [dayProt, dayCarb, dayGord, dayKcal])

    return(
        <>
        <c.food>
            <c.titleFood>Refeições</c.titleFood>
            <c.button onClick={() => {setShow(true)}}>Adicionar</c.button>
            <c.table>
                <c.tbody>
                  {filteredMeals.map((meal, index) => {
                    return(
                        <c.tr key={index}>
                            <c.td>{index + 1}</c.td>
                            <c.td>{meal.meal}</c.td>
                            <c.td>
                                <c.button onClick={() => {
                        dispatch(removeMeals(meal.id))
                    }}>X</c.button>
                            </c.td>
                        </c.tr>
                    )
                  })}  
                </c.tbody>
            </c.table>

            
        </c.food>
        {show ? <Modal setShow={setShow}/> : <></>}
        </>
    )
}

export default OutputFood;