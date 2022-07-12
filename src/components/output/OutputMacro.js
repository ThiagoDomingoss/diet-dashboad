import React from "react";
import * as c from './Output.styles'

const OutputMacro = () => {
    const macros = ['Proteinas','Carboidratos','Gorduras']

    return(
        <>
        {macros.map((macro, index)=>{
            return(
                <c.macro>
                    <c.title>{macro}</c.title>
                    <c.number>120/300</c.number>
                    <c.sub>atingido/meta</c.sub>
                </c.macro>
                )
            })}
        </>
    )
}

export default OutputMacro;