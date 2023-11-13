import { FormStyled } from "../styles/FormStyle"
import { ButtonStyled } from "../styles/ButtonStyled"
import { Link } from "react-router-dom"
import  {useMutation} from "@tanstack/react-query"
import axios from "axios"

type SignUp = {
  email: string,
  password: string
}

function Signup() {

  const mutation = useMutation({
    mutationFn: (newUser: SignUp) => {
      return axios.post(`${import.meta.env.VITE_API_URL}/users/sign-up`,newUser)
    }
  })

  async function postSignup(e: React.FormEvent){
      e.preventDefault()
      e.stopPropagation();
      mutation.mutate({
        email: "ga11briel12313129sas098@gmail.com",
        password: "jashkAAHSH788+-"
      })
  }

  if(mutation.isPending) return (<div>Loading!!</div>)

  if(mutation.isError) return (<div>Error</div>)

  if(mutation.isSuccess) return (<div>Usuario cadastrado com sucesso!!</div>)

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