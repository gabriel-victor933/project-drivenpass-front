import { useMutation } from '@tanstack/react-query'
import { ButtonStyled } from '../styles/ButtonStyled'
import RegistrationFormStyle from "../styles/RegistrationFormStyle"
import {useForm} from "react-hook-form"
import axios from 'axios'
type CredentialInput = {
    title: string,
    url: string,
    username: string,
    password: string

}

function CredentialsRegistration() {

    const { register, handleSubmit, formState: {errors} } = useForm<CredentialInput>()

    const post = useMutation({
        mutationFn: (data: CredentialInput) => {
            console.log(data)
            const token = localStorage.getItem("token");
            return axios.post(`${import.meta.env.VITE_API_URL}/credentials`,data,{headers: {'authorization': `bearer ${token}`}})
                    .then((res)=>console.log(res))
                    .catch((err) => console.log(err))
        },
    })

    function submit(data: CredentialInput){
        post.mutate(data)
    }
    
    //Tratar todos os cenarios
    // Sucesso
    // erro no back
    // exceção do app
  return (
      <RegistrationFormStyle onSubmit={handleSubmit(submit)} >
          <label>Titulo</label>
          <input
              type='text'
              className={errors.title ? "error" : ""}
              disabled={post.isPending}
              {...register("title", { required: "Insira um Titulo!" })}
          />
          <small>{errors?.title?.message || ""}</small>

          <label>URL</label>
          <input 
            type='text' {...register("url", { required: "Insira uma URL!" })} 
            className={errors.url ? "error" : ""} 
            disabled={post.isPending}
            />
          <small>{errors?.url?.message || ""}</small>

          <label>Usuário</label>
          <input 
                type='text' {...register("username", { required: "Insira um Usuário!" })} 
                className={errors.username ? "error" : ""} 
                disabled={post.isPending}
            />
          <small>{errors?.username?.message || ""}</small>

          <label>Senha</label>
          <input 
            disabled={post.isPending}
            type='password' 
            {...register("password", { required: "Insira uma Senha!" })} 
            className={errors.password ? "error" : ""} />
          <small>{errors?.password?.message || ""}</small>
          <ButtonStyled>Criar</ButtonStyled>
    </RegistrationFormStyle>
  )
}

export default CredentialsRegistration