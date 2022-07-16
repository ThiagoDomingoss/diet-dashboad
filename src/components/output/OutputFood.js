import React from "react";
import * as c from './Output.styles'

const OutputFood = () => {

    const foodlist = [
       'ovos com aveia',
       'arroz com frango',
       'shake proteico',
       'batata doce e patinho',
       'whey com aveia',
       '4 ovos, 100g tapioca, 100g queijo branco, sal a gosto'
    ]

    return(
        <c.food>
            <c.titleFood>Refeições</c.titleFood>
            <c.table>
                <c.tbody>
                  {foodlist.map((item, index) => {
                    return(
                        <c.tr key={index}>
                            <c.td>{index + 1}</c.td>
                            <c.td>{item}</c.td>
                        </c.tr>
                    )
                  })}  
                </c.tbody>
            </c.table>
        </c.food>
    )
}

export default OutputFood;