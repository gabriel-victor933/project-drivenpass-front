import { RoundedStyledButton } from "../styles/RoundedButtonStyled"

const CreatePasswordButton: React.FC<{fn: ()=>void,backColor: string | undefined,children: string | JSX.Element}> = ({fn,backColor,children}) => {
    
  return (
    <RoundedStyledButton onClick={fn} $backColor={backColor}>
        {children}
    </RoundedStyledButton>
  )
}

export default CreatePasswordButton