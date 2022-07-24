import React, { useState } from "react";
import * as c from './Navbar-styles';
import Food from "../food/Food";
import Dashboard from "../dashboard/Dashboard";


const Navbar = () => {
    const listMenu = [
        {
            name:'Dashboard',
            link:'Dashboard'
        },
        {
            name:'Food List',
            link:'Food'
        },
    ];
        
    const [main, setMain] = useState('')


    return(
        <c.body>
        <c.container>
            <c.list>
                {listMenu.map((item, index) => 
                <c.item onClick={() => setMain(item.link)} key={index}>{item.name}</c.item>
                )}
            </c.list>
        </c.container>
        <c.info>
                   {main === 'Food'? <Food/>: <Dashboard/>}
        </c.info>

        </c.body>
    )
}

export default Navbar;