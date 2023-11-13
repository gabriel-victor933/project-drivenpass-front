import { FormStyled } from "../styles/FormStyle"
import { ButtonStyled } from "../styles/ButtonStyled"
import { Link, useNavigate } from "react-router-dom"
import  {useMutation} from "@tanstack/react-query"
import axios from "axios"
import Modal from "../components/Modal"
import Loading from "../components/Loading"
import {useForm} from "react-hook-form"

type SignUpInput = {
  email: string,
  password: string
}

function Signup() {
  const navigate = useNavigate()

  const { register, handleSubmit, formState: {errors} } = useForm<SignUpInput>()

  const mutation = useMutation({
    mutationFn: (newUser: SignUpInput) => {
      return axios.post(`${import.meta.env.VITE_API_URL}/users/sign-up`,newUser)
    }
  })

  async function postSignup(data: SignUpInput){
      mutation.mutate(data)
  }

  if(mutation.isPending) return (<Loading />)

  return (
    <>
    <FormStyled onSubmit={handleSubmit(postSignup)}>
        <label htmlFor="">Usuário (e-mail)</label>
        <input type="text" {...register("email",{required: "insira um Email"})} className={errors.email ?"error": ""}/>
        {errors.email && <small>{errors.email.message}</small>}
        <label htmlFor="">Senha</label>
        <input type="text" {...register("password",{required: "Insira uma senha"})} className={errors.password ?"error": ""}/>
        {errors.password && <small>{errors.password.message}</small>}
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