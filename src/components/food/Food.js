import React from "react";
import * as c from './Food.styles'

const Food = () => {

    const foods = [
        {
            meal:'4 ovos, 100g tapioca, 100g queijo branco, sal a gosto',
            prot: 41,
            carb: 62,
            gord: 37,
            kcal: 745
        },
        {
            meal:'300g peito de frango, 300g arroz, 12ml azeite',
            prot: 62,
            carb: 72,
            gord: 23,
            kcal: 760
        },
        {
            meal:'200g salmão, 400g macarrão, 10g azeite',
            prot: 40,
            carb: 136,
            gord: 15,
            kcal: 839
        },
        {
            meal:'6 ovos inteiros, 500ml suco de uva integral',
            prot: 36,
            carb: 82,
            gord: 30,
            kcal: 742
        },
        {
            meal:'400ml leite desnatado, 300g banana, 50g pasta de amendoim',
            prot: 26,
            carb: 100,
            gord: 25,
            kcal: 729
        },
        {
            meal:'300g iogurte saborizado, 3 ovos, 50g aveia',
            prot: 35,
            carb: 80,
            gord: 28,
            kcal: 712
        }
    ]

    return(
        <c.container>
            <c.foodContainer>
                {foods.map((food, index)=>{
                    return(
                    <c.item>
                    <c.index>{index+1}</c.index>
                    <c.content>
                        <h3>{food.meal}</h3>
                        <p>prot: {food.prot} | carb: {food.carb} | gord: {food.gord} | kcal: {food.kcal}</p>
                    </c.content>
                    <c.btn>edit</c.btn>
                    <c.btn>del</c.btn>
                </c.item>
                    )
                })}
                
            </c.foodContainer>
            <c.foodForm>
                <c.formMeal>
                    <c.label>ingredientes</c.label>
                    <c.inputFood></c.inputFood>
                </c.formMeal>

                <c.formArea>
                    <c.label>proteinas</c.label>
                    <c.inputMacro type="number"></c.inputMacro>
                </c.formArea>

                <c.formArea>
                    <c.label>carboidratos</c.label>
                    <c.inputMacro type="number"></c.inputMacro>
                </c.formArea>

                <c.formArea>
                    <c.label>gorduras</c.label>
                    <c.inputMacro type="number"></c.inputMacro>
                </c.formArea>

                <c.formArea>
                    <c.label>Kcal</c.label>
                    <c.inputMacro type="number"></c.inputMacro>
                </c.formArea>
            </c.foodForm>
        </c.container>
    )
}

export default Food;