import styled from "styled-components";

export const container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;
`
export const output = styled.div`
    background-color: #7CB9E8;
    min-height: 80%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;

    @media (max-width: 800px) {
        height: 800px;
    }
    @media (max-width: 660px) {
        height: 1200px;
    }
    @media (max-width: 400px) {
        height: 1500px;
    }
`
export const input = styled.div`
    width: 300px;
    min-height: 80%;
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    border-radius: 20px;
`