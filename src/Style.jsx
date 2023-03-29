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
        width: 90%;
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
        height: 2rem;
        border-radius: 0.5rem;
        width: 10%;

        &:hover { 
            background-color: #bb93e1;
        }
    }

    @media (max-width: 608px) {
        flex-direction: column;

        div { 
            align-items: center;
        }
    }
    
`

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
` 
export const Box = styled.section`
    width: 50%;
    height: 70%;
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid;
`
export const BoxFinal = styled.section`
    width: 50%;
    height: 30%;
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid;
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #2e2f44;
    color: white;
    line-height: 2.5rem;
    padding-left: 1rem;

    strong { 
        color: yellow;
    }

    button {
        cursor: pointer;
        background-color: #2e2f44;
        border: none;
        color: white;
        padding: 0.5rem 1rem;

        &:hover {
            color: black;

        }
    }

    
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5rem;
    
    input {
        width: 90%;
        border: 1px solid gray;
        border-radius: 0.3rem;
        height: 2rem;
        margin-bottom: 3rem;
    }
    select {
        width: 90%;
        border: 1px solid gray;
        border-radius: 0.3rem;
        height: 2rem;
    }

`
export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 3rem;
    gap: 3rem;
    
    button {
        cursor: pointer;
        border: 1px solid gray;
        border-radius: 0.3rem;
        line-height: 1.3rem;
        width: 90%;
        height: 2rem;

        &:hover { 
            background-color: #bb93e1;
        }
    }
`

export const Message = styled.p`
    color: red;
    margin: -3;
    height: 0.3rem;
    font-size: 1rem;
`