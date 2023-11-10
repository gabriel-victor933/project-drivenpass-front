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
    }
`

export default GlobalStyle

