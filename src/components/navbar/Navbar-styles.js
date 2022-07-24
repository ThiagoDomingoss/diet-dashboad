import styled from "styled-components";

export const body = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #7CB9E8;
`

export const container = styled.div`
    width: 80%;
    border-radius: 20px;
    margin: 10px 0;
    display: flex;
    justify-content: space-evenly;
`
export const list = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0px 150px;
`
export const item = styled.li` 
    width: 300px;
    heigth: 30px;
    padding: 15px 0px;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    margin: 5px auto;
    border-radius: 10px;
    background-color: aliceblue;
`
export const info = styled.div`
    height: 100%;
    background-color: #7CB9E8;
    flex: 4;
`