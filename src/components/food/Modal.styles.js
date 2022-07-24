import styled from "styled-components";

export const foodForm = styled.div`
    width: 500px;
    height: 95%;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    position: absolute;

    @media(max-width: 800px){
        width: 100%;
    }
`
export const formArea = styled.div`
    margin: 5px;
    padding: 15px 40px;
    display: flex;
`
export const formMeal = styled.div`
    margin: 5px;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
export const label = styled.label`
    text-align: left;
    padding: 5px;
    font-size: 18px;
    font-weight: 600;
    flex: 20%;
`
export const inputFood = styled.textarea` 
    width: 100%;
    height: 100px;
    font-size: 18px;
    resize: none;
`
export const inputMacro = styled.input` 
    width: 40px;
    padding: 5px;
    border-radius: 7px;
`
export const button = styled.button`
    padding: 10px;
    margin: 10px 30px;
    font-size: 16px;
    font-weight: 600;
    background-color: #7CB9E8;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    :hover{
        background-color: #00308F;
        color: aliceblue;
    }
`