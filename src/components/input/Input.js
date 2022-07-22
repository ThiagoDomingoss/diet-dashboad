import React, { useEffect, useState } from "react";
import * as c from "./Input.styles";
import { useDispatch } from "react-redux";
import { inputGoals } from "../../reducers/DashboardReducer";


const Input = () => {

    const dispatch = useDispatch()

    const [peso, setPeso] = useState()
    const [protein, setProtein] = useState()
    const [carbo, setCarbo] = useState()
    const [gord, setGord] = useState()

    const dailyProt = protein * peso
    const dailyCarb = carbo * peso
    const dailyGord = gord * peso
    const dailykcal = (dailyProt * 4) + (dailyCarb * 4) + (dailyGord * 9)
    

    const onHandlePeso = (e) => {
        const peso = e.target.value;
        localStorage.setItem('peso', JSON.stringify(peso));
        setPeso(peso)
    }

    const onHandleProtein = (e) => {
        const protein = e.target.value;
        localStorage.setItem('protein', JSON.stringify(protein));
        setProtein(protein)
    }

    const onHandleCarbo = (e) => {
        const carbo = e.target.value;
        localStorage.setItem('carbo', JSON.stringify(carbo));
        setCarbo(carbo)
    }

    const onHandleGord = (e) => {
        const gord = e.target.value;
        localStorage.setItem('gord', JSON.stringify(gord));
        setGord(gord)
    }


    useEffect(() => {
        setPeso(JSON.parse(localStorage.getItem('peso'))??'')
        setProtein(JSON.parse(localStorage.getItem('protein'))??'')
        setCarbo(JSON.parse(localStorage.getItem('carbo'))??'')
        setGord(JSON.parse(localStorage.getItem('gord'))??'')
    }, [])
    
    

    return(
        <c.form>
            <c.formarea>
                <c.label>Peso</c.label>
                <c.input required type="number" onChange={(e) => {onHandlePeso(e)}} value={peso}></c.input>
                <c.label>Kg</c.label>
            </c.formarea>
            
            <c.formarea>
                <c.label>Proteina</c.label>
                <c.input required type="number" onChange={(e) => {onHandleProtein(e)}} value={protein}></c.input>
                <c.label>g/Kg</c.label>
            </c.formarea>

            <c.formarea>
                <c.label>Carboidrato</c.label>
                <c.input required type="number" onChange={(e) => {onHandleCarbo(e)}} value={carbo}></c.input>
                <c.label>g/Kg</c.label>
            </c.formarea>

            <c.formarea>
                <c.label>Gordura</c.label>
                <c.input required type="number" onChange={(e) => {onHandleGord(e)}} value={gord}></c.input>
                <c.label>g/Kg</c.label>
            </c.formarea>

            
            
            <c.button onClick={() => {
                dispatch(inputGoals({prot: dailyProt, carb: dailyCarb, gord: dailyGord, kcal: dailykcal}))
            }}>Calcular</c.button>
            
                

            <c.textarea>
                <c.texttitle>IMPORTANTE!</c.texttitle>
                <c.paragrafo>Sempre consulte um nutricionista antes de começar uma dieta.</c.paragrafo>
            </c.textarea>
                
        </c.form>
        
    )
}

export default Input;