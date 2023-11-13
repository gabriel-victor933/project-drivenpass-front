import { styled } from "styled-components";

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 30px 0px;
    
    label {
        text-align: center; 
        margin: 3px 0px;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
    }

    input {
        height: 40px;
        border-radius: 5px;
        border: solid 3px #005985;
        margin-bottom: 8px;        
    }

    .error {
        border-color: #F52424;
    }

    small {
        color: #F52424
    }
`