import React from "react";
import * as c from './Output.styles'
import { useSelector } from "react-redux";

const OutputMeta = () => {

    const macros = useSelector((state) => state.macros.value)
    const total = macros[3]
    const done = total.done * 100
    const goal = total.goal
    const percent = (Math.floor(done / goal) ? Math.floor(done / goal) : 0)

    return(
        <c.total>
            <c.titleMeta>Total</c.titleMeta>
            <c.numberMeta>{percent}%</c.numberMeta>
            <c.subMeta>atingidos hoje</c.subMeta>
        </c.total>
    )

}

export default OutputMeta;