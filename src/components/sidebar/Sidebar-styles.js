import styled from "styled-components";

export const body = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #bcffc3;
`

export const container = styled.div`
    width: 1220px;
    border-radius: 20px;
    background-color: green;
    margin: 10px 0;
`
export const list = styled.ul`
    list-style: none;
    display: flex;
`
export const item = styled.li` 
    width: 40%;
    heigth: 30px;
    padding: 15px 0px;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    margin: 5px auto;
    border-radius: 10px;
    background-color: white;
`
export const info = styled.div`
    height: 100%;
    background-color: #bcffc3;
    flex: 4;
`