import {styled} from "styled-components"

export const RoundedStyledButton = styled.button<{$backColor?: string}>`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: ${props => props.$backColor || "#005985" };
    border: none;
    font-size: 45px;
    color: white;
    position: fixed;
    bottom: 30px;
    right: 30px;
`