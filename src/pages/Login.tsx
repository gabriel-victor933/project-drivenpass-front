import { FormStyled } from "../styles/FormStyle"
import { ButtonStyled } from "../styles/ButtonStyled"
import { Link, useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import Loading from "../components/Loading"
import Modal from "../components/Modal"
import {useForm} from "react-hook-form"

type SignUpInput = {
  email: string,
  password: string
}


function Login() {
  const navigate = useNavigate()

  const { register, handleSubmit, formState: {errors} } = useForm<SignUpInput>()

  const mutation = useMutation({
    mutationFn: (userInfos: SignUpInput) => {
      return axios.post(`${import.meta.env.VITE_API_URL}/users/sign-in`, userInfos)
    },
    onSuccess: (data: unknown) => {
      localStorage.setItem("token",data?.data?.token)
        navigate("/home")
    }
  })

  function postLogin(data: SignUpInput){
    mutation.mutate(data)
  }

  if(mutation.isPending) return (<Loading />)


  return (
    <>
        <FormStyled onSubmit={handleSubmit(postLogin)}>
            <label htmlFor="email">Usuário (e-mail)</label>
            <input type="text" autoComplete="email" {...register("email",{required: "insira um Email"})} className={errors.email ?"error": ""}/>
            {errors.email && <small>{errors.email.message}</small>}
            <label htmlFor="password">Senha</label>
            <input type="password" autoComplete="password" {...register("password",{required: "Insira uma senha"})} className={errors.password ?"error": ""}/>
            {errors.password && <small>{errors.password.message}</small>}
            <ButtonStyled>Acessar</ButtonStyled>
        </FormStyled>
        <hr></hr>
        <Link to="/signup">
            <h2>Primeiro acesso? Crie sua conta!</h2>
        </Link>
        {mutation.isError && <Modal 
        title={"Não foi possivel logar, verifique o email e a senha"} 
        description={`"${mutation.error?.response?.data.message || mutation.error.message}"`}
        buttonMessage={"voltar"} 
        buttonfn={() =>mutation.reset()}
        color="#FB9B9B"
        />}
        
    </>
  )
}

export default Login
