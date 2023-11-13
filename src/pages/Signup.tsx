import { FormStyled } from "../styles/FormStyle"
import { ButtonStyled } from "../styles/ButtonStyled"
import { Link, useNavigate } from "react-router-dom"
import  {useMutation} from "@tanstack/react-query"
import axios from "axios"
import Modal from "../components/Modal"
import Loading from "../components/Loading"

type SignUp = {
  email: string,
  password: string
}

function Signup() {
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: (newUser: SignUp) => {
      return axios.post(`${import.meta.env.VITE_API_URL}/users/sign-up`,newUser)
    }
  })

  async function postSignup(e: React.FormEvent){
      e.preventDefault()
      e.stopPropagation();
      mutation.mutate({
        email: "gaaa11bsaasrssiasasel12313129sssas098",
        password: "jashkAAHSH788+-"
      })
  }

  if(mutation.isPending) return (<Loading />)

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
    {mutation.isError && <Modal 
        title={"Não foi possivel cadastrar o usuario"} 
        description={`"${mutation.error.response?.data.message || mutation.error.message}"`}
        buttonMessage={"voltar"} 
        buttonfn={() =>mutation.reset()}
        color="#FB9B9B"
        />}
        
    {mutation.isSuccess && <Modal title={"Usuario Cadastrado com sucesso"} buttonMessage={"Logar"} buttonfn={() => navigate("/")}/>}

</>
  )
}

export default Signup