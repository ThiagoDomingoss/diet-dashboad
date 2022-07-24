import React from "react";
import * as c from './Output.styles'
import OutputMacro from "./OutputMacro";
import OutputMeta from "./OutputMeta";
import OutputFood from "./OutputFood";


const Output = () => {
    

    return(
        <>
            <c.macroContainer>
                <OutputMacro/>
            </c.macroContainer>
            <c.metaContainer>
                <OutputMeta/>
                <OutputFood/>
            </c.metaContainer>
        
        </>

    )


}

export default Output;