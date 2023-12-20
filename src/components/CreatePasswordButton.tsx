import { useNavigate } from "react-router-dom"
import { RoundedStyledButton } from "../styles/RoundedButtonStyled"

const CreatePasswordButton: React.FC<{url:string}> = ({url}) => {
    const navigate = useNavigate()
  return (
    <RoundedStyledButton onClick={()=> navigate(url)}>
        +
    </RoundedStyledButton>
  )
}

export default CreatePasswordButton