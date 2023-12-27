import {styled} from "styled-components"
import React from 'react'
import { ButtonStyled } from "../styles/ButtonStyled"

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    
    z-index: 1;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .block {
        background-color: #DBDBDB;
        width: 300px;
        height: 300px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        

        h2 {
            text-align: center;
        }
    }
`

type ModalProps = {
    title: string,
    description?: string,
    buttonMessage: string,
    buttonfn: () => void;
    color?: string
    exitFn: () => void;
}

const  Modal: React.FC<ModalProps> = ({title, description, buttonMessage, buttonfn, color, exitFn }) =>  {

  return (
    <Container onClick={exitFn}>
        <div className="block" onClick={(e)=>e.stopPropagation()}>
            <h2 style={{fontWeight: "bold"}}>{title}</h2>
            {description ? <h2 style={{fontStyle: "oblique"}}>{description}</h2> : <></>}
            <ButtonStyled $buttonWidth={"90%"} $backColor={color} onClick={buttonfn}>{buttonMessage}</ButtonStyled>
        </div>
    </Container>
  )
}

export default Modal