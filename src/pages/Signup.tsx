import { FormStyled } from "../styles/FormStyle"
import { ButtonStyled } from "../styles/ButtonStyled"
import { Link } from "react-router-dom"

function Signup() {

  async function postSignup(e: React.FormEvent){
      e.preventDefault()
      e.stopPropagation();
  }

  return (
    <>
    <FormStyled onSubmit={postSignup}>
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