import React, { useEffect, useState } from "react";
import * as c from "./Input.styles";


const Input = () => {

    const [mac, setMac] = useState([])
    const [peso, setPeso] = useState()
    const [protein, setProtein] = useState()
    const [carbo, setCarbo] = useState()
    const [gord, setGord] = useState()

    const periodos = ['Bulking','Cutting'];
    const comandos = ['Reset', 'Calcular']

    const onHandlerPeriod = (e, name) => {
      e.preventDefault()
        if(name === 'Bulking'){
            setProtein('2')
            setCarbo('5')
            setGord('1')
            setMac(['2','5','1'])
            localStorage.setItem('protein', JSON.stringify('2'));
            localStorage.setItem('carbo', JSON.stringify('5'));
            localStorage.setItem('gord', JSON.stringify('1'));
            localStorage.setItem('mac', JSON.stringify(['2','5','1']))
        }else{
            setProtein('2')
            setCarbo('2')
            setGord('1')
            setMac(['2','2','1'])
            localStorage.setItem('protein', JSON.stringify('2'));
            localStorage.setItem('carbo', JSON.stringify('2'));
            localStorage.setItem('gord', JSON.stringify('1'));
            localStorage.setItem('mac', JSON.stringify(['2','2','1']))
        }
    }
    

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

    const onHandleComando = (e, name) => {
        e.preventDefault()
        if(name === 'Reset'){
            setProtein('')
            setCarbo('')
            setGord('')
            setPeso('')
        }else{
            console.log(mac.map((it) => it * peso));
        }
    }

    useEffect(() => {
        setPeso(JSON.parse(localStorage.getItem('peso'))??'')
        setProtein(JSON.parse(localStorage.getItem('protein'))??'')
        setCarbo(JSON.parse(localStorage.getItem('carbo'))??'')
        setGord(JSON.parse(localStorage.getItem('gord'))??'')
        setMac(JSON.parse(localStorage.getItem('mac'))??[])
    }, [])
    
    useEffect(() => {
        setMac([protein, carbo, gord])
        localStorage.setItem('mac', JSON.stringify([protein, carbo, gord]))
    },[protein, carbo, gord])
    

    return(
        <c.form>
            <c.formarea>
                <c.label>Peso</c.label>
                <c.input type="number" onChange={(e) => {onHandlePeso(e)}} value={peso}></c.input>
                <c.label>Kg</c.label>
            </c.formarea>

            {periodos.map((periodo, index) => {
                return(
                <c.button onClick={(e) => onHandlerPeriod(e,periodo)} key={index}>{periodo}</c.button>
                )
                })}
            
            <c.formarea>
                <c.label>Proteina</c.label>
                <c.input type="number" onChange={(e) => {onHandleProtein(e)}} value={protein}></c.input>
                <c.label>g/Kg</c.label>
            </c.formarea>

            <c.formarea>
                <c.label>Carboidrato</c.label>
                <c.input type="number" onChange={(e) => {onHandleCarbo(e)}} value={carbo}></c.input>
                <c.label>g/Kg</c.label>
            </c.formarea>

            <c.formarea>
                <c.label>Gordura</c.label>
                <c.input type="number" onChange={(e) => {onHandleGord(e)}} value={gord}></c.input>
                <c.label>g/Kg</c.label>
            </c.formarea>

            {comandos.map((comando, index) => {
                return(
                <c.button onClick={(e) => {onHandleComando(e, comando)}}  key={index}>{comando}</c.button>
                )
                })}

            <c.textarea>
                <c.texttitle>IMPORTANTE!</c.texttitle>
                <c.paragrafo>Sempre consulte um nutricionista antes de começar uma dieta.</c.paragrafo>
                <c.paragrafo>Obs: Os valores sugeridos no 'Bulking' e no 'Cutting' são baseados nos conhecimentos compartilhados pelo Leando Twin no seu canal do Youtube.</c.paragrafo>
            </c.textarea>
                
        </c.form>
    )
}

export default Input;