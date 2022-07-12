import React from "react";
import * as c from './Output.styles'

const OutputFood = () => {

    const foodlist = [
       'ovos com aveia',
       'arroz com frango',
       'shake proteico',
       'batata doce e patinho',
       'whey com aveia'
    ]

    return(
        <c.food>
            <c.titleFood>Refeições</c.titleFood>
            <c.table>
                <c.tbody>
                  {foodlist.map((item, index) => {
                    return(
                        <c.tr>
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