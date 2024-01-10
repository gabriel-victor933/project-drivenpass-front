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
      return axios.post(`${import.meta.env.VITE_API_URL}/register/sign-up`,newUser)
    }
  })

  async function postSignup(data: SignUpInput){
      mutation.mutate(data)
  }

  if(mutation.isPending) return (<Loading />)

  return (
    <>
    <FormStyled onSubmit={handleSubmit(postSignup)}>
        <label htmlFor="email">Usuário (e-mail)</label>
        <input type="text" autoComplete="email" {...register("email",{required: "insira um Email"})} className={errors.email ?"error": ""}/>
        <small>{errors.email?.message || ""}</small>
        <label htmlFor="">Senha</label>
        <input type="password" autoComplete="password" {...register("password",{required: "Insira uma senha"})} className={errors.password ?"error": ""}/>
        <small>{errors.password?.message || ""}</small>
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
        exitFn={() => mutation.reset()}
        />}
        
    {mutation.isSuccess && <Modal 
    title={"Usuario Cadastrado com sucesso"} 
    buttonMessage={"Logar"} 
    buttonfn={() => navigate("/")}
    exitFn={()=> mutation.reset()}
    />}

</>
  )
}

export default Signup