import styled from "styled-components";
import { FormStyled } from "./FormStyle";

const RegistrationFormStyle = styled(FormStyled)`
    width: 100%;
    padding: 0px 15px;
    margin: 0px;
    label {
        text-align: left; 
    }

    textarea {
        resize: none;
        border-radius: 5px;
        border: solid 2px #005985;
    }

`   

export default RegistrationFormStyle