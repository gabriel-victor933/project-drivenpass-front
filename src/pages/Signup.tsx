import { FormStyled } from "../styles/FormStyle"
import { ButtonStyled } from "../styles/ButtonStyled"
import { Link } from "react-router-dom"

function Signup() {
  return (
    <>
    <FormStyled>
        <label htmlFor="">Usuário (e-mail)</label>
        <input type="text" name="user"/>
        <label htmlFor="">Senha</label>
        <input type="text" name="password"/>
        <ButtonStyled>Criar</ButtonStyled>
        <Link to="/">
            <ButtonStyled $backColor="#FB9B9B">&lt; Voltar </ButtonStyled>
        </Link>
        
    </FormStyled>

</>
  )
}

export default Signup