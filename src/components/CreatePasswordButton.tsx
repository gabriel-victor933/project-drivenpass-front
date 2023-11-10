import { useNavigate } from "react-router-dom"
import { RoundedStyledButton } from "../styles/RoundedButtonStyled"

function CreatePasswordButton() {
    const navigate = useNavigate()
  return (
    <RoundedStyledButton onClick={()=> navigate("/home/register-type")}>
        +
    </RoundedStyledButton>
  )
}

export default CreatePasswordButton