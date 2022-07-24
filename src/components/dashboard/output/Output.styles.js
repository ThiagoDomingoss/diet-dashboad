import styled from "styled-components";

export const outputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const macroContainer = styled.div`
    width: 100%;
    height: 150px;
    margin: 10px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

`
export const macro = styled.div`
    width: 150px;
    height: 100px;
    display: flex;
    flex-direction: column;
    background-color: aliceblue;
    margin: 10px;
    padding: 10px 15px;
    border-radius: 10px;

    @media (max-width: 400px) {
        width: 300px;
    }
`
export const title = styled.h3`

`
export const number = styled.div`
    font-size: 2rem;
    font-weight: bold;
    color: #7CB9E8;
`
export const sub = styled.p`
    color: grey;
`


export const metaContainer = styled.div`
    width: 100%;
    height: 450px;
    margin: 10px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    @media (max-width: 660px) {
        height: 900px;
        justify-content: center;
        gap: 20px;
    }

`
export const total = styled.div`
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    background-color: aliceblue;
    gap: 10px;
    padding: 10px 15px;
    border-radius: 10px;
`
export const titleMeta = styled.h1`
    font-size: 3rem;
`
export const numberMeta = styled.div`
    font-size: 6rem;
    font-weight: bold;
    margin: 20px 0;
    color: #7CB9E8;
`
export const subMeta = styled.p`
    color: grey;
    font-size: 2rem;
`

export const food = styled.div`
    width: 400px;
    height: 400px;
    display: flex;
    position: relative;
    flex-direction: column;
    background-color: aliceblue;
    gap: 10px;
    padding: 10px 15px;
    border-radius: 10px;
    overflow: auto;

    ::-webkit-scrollbar {
        width: 0px;
    }

    @media (max-width: 800px) {
        width: 300px;
    }
    @media (max-width: 400px) {
        width: 300px;
    }
`
export const titleFood = styled.h1`
    font-size: 3rem;
`
export const table = styled.table`

`
export const tbody = styled.tbody`

`
export const tr = styled.tr`
    padding: 10px;
    background-color: #7CB9E8;
`
export const td = styled.td`
    padding: 10px;
    font-size: 18px;
`
export const button = styled.button`
    padding: 10px;
    margin: 5px;
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




export const foodContainer = styled.div`
    background-color: aliceblue;
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    position: absolute;
    margin-right: -24%;
    overflow: auto;
    padding: 10px 15px;

    ::-webkit-scrollbar {
        width: 0px;
    }

    @media (max-width: 1290px) {
        margin-right: -28%;
    }
    @media (max-width: 1103px) {
        margin-right: -33%;
    }
    @media (max-width: 937px) {
        margin-right: -38%;
    }
    @media (max-width: 660px) {
        margin-top: 460px;
        margin-right: 0;
        width: 300px;
    }
`
export const item = styled.div`
    width: 95%;
    min-height: 100px;
    background-color: white;
    margin-top: 10px;
    border-radius: 10px;
    display: flex;
    
    @media (max-width: 900px){
        min-height: 120px;
    }
`
// export const index = styled.div`
//     width: 5%;
//     margin: 5px;
//     background-color: #7CB9E8;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 5px;

//     @media (max-width: 1400px){
//         display: none;
//     }
// `
export const content = styled.div`
    width: 80%;
    margin: 5px;
    background-color: #7CB9E8;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    border-radius: 5px;

    @media (max-width: 1400x){
        width: 85%;
    }

`
export const btn = styled.button`
    width: 80px;
    margin: 5px;
    background-color: #7CB9E8;
    padding: 10px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    :hover{
        background-color: #00308F;
        color: aliceblue;
    }
`