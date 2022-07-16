import React from "react";
import * as c from './Output.styles'
import { useSelector } from "react-redux";

const OutputMacro = () => {

    const macros = useSelector((state) => state.macros.value)

    return(
        <>
        {macros.map((macro, index)=>{
            return(
                <c.macro key={index}>
                    <c.title>{macro.name}</c.title>
                    <c.number>{macro.done}/{macro.goal}</c.number>
                    <c.sub>atingido/meta</c.sub>
                </c.macro>
                )
            })}
        </>
    )
}

export default OutputMacro;