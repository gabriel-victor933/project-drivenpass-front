import { FormStyled } from "../styles/FormStyle"
import { ButtonStyled } from "../styles/ButtonStyled"
import { Link } from "react-router-dom"

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
        <hr></hr>
        <Link to="/signup">
            <h2>Primeiro acesso? Crie sua conta!</h2>
        </Link>
    </>
  )
}

export default Login