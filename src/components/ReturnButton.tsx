import { useNavigate } from "react-router-dom"
import {styled} from "styled-components"

const StyledButton = styled.button`
    background-color: transparent;
    text-decoration: underline;
    border: none;
    font-size: 18px;
    position: fixed;
    font-family: "Recursive";
    left: 20px;
    bottom: 30px;
`

function ReturnButton() {
    const navigate = useNavigate()

  return (
    <StyledButton onClick={()=>navigate(-1)}>
        &lt; Voltar
    </StyledButton>
  )
}

export default ReturnButton