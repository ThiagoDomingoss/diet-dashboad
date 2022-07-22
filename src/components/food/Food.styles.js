import styled from "styled-components";

export const container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
`
export const foodContainer = styled.div`
    background-color: #7CB9E8;
    height: 650px;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    overflow: auto;
    padding: 10px 0;

    @media (max-width: 800px) {
        width: 100%;
        border-radius: 0;
    }
`
export const item = styled.div`
    width: 90%;
    min-height: 80px;
    background-color: white;
    margin-top: 10px;
    border-radius: 10px;
    display: flex;

    @media (max-width: 600px) {
        min-height: 120px;
    }
`
export const index = styled.div`
    width: 5%;
    margin: 5px;
    background-color: #7CB9E8;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    @media (max-width: 600px) {
        display: none;
    }
`
export const content = styled.div`
    width: 70%;
    margin: 5px;
    background-color: #7CB9E8;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    border-radius: 5px;

    @media (max-width: 600px) {
        width: 75%;
        justify-content: space-evenly;
    }
`
export const btn = styled.button`
    width: 48%;
    background-color: #7CB9E8;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    :hover{
        background-color: #00308F;
        color: aliceblue;
    }

    @media (max-width: 600px) {
        height: 48%;
        width: 100%;
    }
`
export const btns = styled.div`
    display: flex;
    justify-content: space-between;
    width: 20%;
    margin: 5px;
    background-color: white;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`






export const foodForm = styled.div`
    width: 300px;
    height: 600px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
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
    width: 35px;
    padding: 5px;
    border-radius: 7px;
`
export const button = styled.button`
    padding: 10px;
    margin: 0px 30px;
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