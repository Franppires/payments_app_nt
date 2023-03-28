import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2rem;
    max-width: 100%;
    background-color: #2e2f44;
    color: #fff;
    margin-bottom: 0.2rem;

    img { 
        border-radius: 50%
    }

    div {
        width: 80%;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        align-items: flex-start;
    }

    p {
        font-size: 1.2rem;
        margin-block-start: 0em;
        margin-block-end: 0em;
    }

    button { 
        cursor: pointer;
        
    }
`