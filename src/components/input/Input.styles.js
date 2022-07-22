import styled from "styled-components";

export const form = styled.div`
    width: 300px;
    height: 80%;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    padding: 30px 0;
`
export const formarea = styled.div`
    margin: 5px;
    display: flex;
    padding: 20px 10px;
`
export const label = styled.label`
    flex: 20%;
    text-align: left;
    padding: 5px;
    font-size: 18px;
    font-weight: 600;
`
export const input = styled.input`
    width: 35px;
    padding: 5px;
    border-radius: 7px;
`
export const button = styled.button`
    padding: 10px;
    margin: 10px;
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
export const textarea = styled.div`
    margin: 15px 5px;
    padding: 10px;
    background-color: #ff7700;
    border-radius: 10px;
    text-align: center;
`
export const texttitle = styled.span`
    font-size: 1.5rem;
    font-weight: 600;
    color: red;
`
export const paragrafo = styled.p`
    margin-top: 10px;
`