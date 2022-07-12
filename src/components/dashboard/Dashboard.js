import React from "react";
import * as c from './Dashboard.styles'
import Input from "../input/Input";
import Output from "../output/Output";

const Dashboard = () => {
    return(
        <c.container>
            <c.output>
                <Output/>
            </c.output>
            <c.input>
                <Input/>
            </c.input>
        </c.container>
    )
}

export default Dashboard;