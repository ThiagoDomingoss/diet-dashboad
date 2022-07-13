import styled from "styled-components";

export const container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

`
export const foodContainer = styled.div`
    background-color: green;
    height: 80%;
    width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
`
export const item = styled.div`
    width: 90%;
    min-height: 60px;
    background-color: white;
    margin-top: 10px;
    border-radius: 10px;
    display: flex;
`
export const index = styled.div`
    width: 5%;
    margin: 5px;
    background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const content = styled.div`
    width: 70%;
    margin: 5px;
    background-color: green;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
`
export const btn = styled.button`
    width: 10%;
    margin: 5px;
    background-color: green;
`


export const foodForm = styled.div`
    width: 300px;
    height: 80%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
`
export const formArea = styled.div`
    margin: 5px;
    padding: 15px 0px;
`
export const formMeal = styled.div`
    margin: 5px;
    display: flex;
    flex-direction: column;
    padding: 20px 0px;
`
export const label = styled.label`
    text-align: left;
    padding: 5px;
    font-size: 18px;
    font-weight: 600;
`
export const inputFood = styled.textarea` 
    width: 100%;
    height: 100px;
    font-size: 18px;
    resize: none;
`
export const inputMacro = styled.input` 
    width: 35px;
    padding: 5px;
    border-radius: 7px;
`