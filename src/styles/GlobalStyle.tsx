import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
        background-color: #DBDBDB;
        font-family: "Recursive","Inter", sans-serif;
    }

    body::-webkit-scrollbar {
    display: none;
    }

    body {
    -ms-overflow-style: none;
    scrollbar-width: none;
    }

    #root {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1, h2, h3, h4, h5, p {
        margin: 0px;
        padding: 0px;
    }

    h2 {
        font-family: Recursive;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        margin: 10px;
        color: #000000;
    }

    h1 {
        font-family: Recursive;
        font-size: 20px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        margin: 10px;
        color: #000000;
    }

    hr {
        width: 70%;
        size: 1px;
        color: #DBDBDB;
    }

    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

`

export default GlobalStyle

