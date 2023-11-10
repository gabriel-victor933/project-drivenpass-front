import {styled} from "styled-components"

export const ButtonStyled = styled.button<{$backColor?: string; $buttonWidth?: string}>`
    font-family: Recursive;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color: #000000;
    width: ${props => props.$buttonWidth || "100%" };
    height: 40px;
    margin: 15px 0px;
    border: solid 3px ${props => props.$backColor || "#9BFBB0" };
    background-color: ${props => props.$backColor || "#9BFBB0" };
    box-shadow: 0px 4px 4px 0px #00000026;

    &:hover {
        transform: scale(1.1)
    }

    &:active {
        transform: scale(0.9)
    }
`