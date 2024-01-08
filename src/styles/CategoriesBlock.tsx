import {styled} from "styled-components"

export const CategoriesBlock = styled.ul`
    width: 100%;
    display: flex;
    padding: 0px 10px;
    margin: 15px 0px;

    a {
        flex-grow: 1;
        padding-left: 10px;
        text-decoration: none;
    }

    p {
        align-self: center;
        width:  35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: #005985;
        color: #ffffff;
    }

`