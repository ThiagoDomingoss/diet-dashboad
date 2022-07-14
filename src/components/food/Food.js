import React from "react";
import * as c from './Food.styles'
import FoodOutput from "./FoodOutput";
import FoodInput from "./FoodInput";


const Food = () => {

    return(
        <c.container>
            <FoodOutput/>
            <FoodInput/>
        </c.container>
    )
}

export default Food;