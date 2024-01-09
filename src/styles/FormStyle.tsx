import { styled } from "styled-components";

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 30px 0px;
    
    label, legend, select {
        text-align: left; 
        margin: 3px 0px;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
    }

    input {
        height: 40px;
        border-radius: 5px;
        border: solid 2px #005985;
        margin-bottom: 2px;        
    }

    .error {
        border-color: #F52424;
    }

    small {
        color: #F52424;
        min-height: 16px;
    }

    .checkbox {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 3px 0px 6px 0px;

        input[type="checkbox"] {
            height: 20px;
            width: 20px; 
            margin-right: 10px;
        }

        label {
            font-size: 14px;
        }
    }
`