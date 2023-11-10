import { FormStyled } from "../styles/FormStyle"
import { ButtonStyled } from "../styles/ButtonStyled"

function Login() {
  return (
    <>
        <FormStyled>
            <label htmlFor="">Usuário (e-mail)</label>
            <input type="text" name="user"/>
            <label htmlFor="">Senha</label>
            <input type="text" name="password"/>
            <ButtonStyled>Acessar</ButtonStyled>
        </FormStyled>
    </>
  )
}

export default Login