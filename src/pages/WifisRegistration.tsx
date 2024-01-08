import { useMutation } from '@tanstack/react-query'
import { ButtonStyled } from '../styles/ButtonStyled'
import RegistrationFormStyle from "../styles/RegistrationFormStyle"
import {useForm} from "react-hook-form"
import Modal from '../components/Modal'
import { useNavigate } from 'react-router-dom'
import usePostData from '../hooks/usePostData'

type WifisInput = {
    title: string,
    network: string
    password: string

}

function WifisRegistration() {
    const { register, handleSubmit, formState: {errors} } = useForm<WifisInput>()
    const nav = useNavigate()

    const post = useMutation({
        mutationFn: (data: WifisInput) => {
            console.log(data)
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return usePostData<WifisInput>("wifis",data);      
        },
    })

    function submit(data: WifisInput){
        post.mutate(data)
    }

  return (
    <>
      <RegistrationFormStyle onSubmit={handleSubmit(submit)} >
        <label>Titulo</label>
        <input
          type='text'
          className={errors.title ? "error" : ""}
          disabled={post.isPending}
          {...register("title", { required: "Insira um Titulo!" })}
          autoComplete='off'
        />
        <small>{errors?.title?.message || ""}</small>

        <label>Rede</label>
        <input
          type='text' {...register("network", { required: "Insira uma Rede!" })}
          className={errors.network ? "error" : ""}
          disabled={post.isPending}
          autoComplete='off'
        />
        <small>{errors?.network?.message || ""}</small>

        <label>Senha</label>
        <input
          disabled={post.isPending}
          type='password'
          {...register("password", { required: "Insira uma Senha!" })}
          className={errors.password ? "error" : ""} 
          autoComplete='off'/>
        <small>{errors?.password?.message || ""}</small>
        <ButtonStyled>Criar</ButtonStyled>
      </RegistrationFormStyle>
      {post.isError && <Modal
        title={"Não foi possivel Cadastrar A credencial!"}
        description={`"${post.error?.response?.data.message || post.error.message}"`}
        buttonMessage={"voltar"}
        buttonfn={() => post.reset()}
        color="#FB9B9B"
        exitFn={() => post.reset()}
      />}
      {post.isSuccess && <Modal 
        title={"Credencial cadastrada!"}
        description={``}
        buttonMessage={"Voltar para o inicio!"}
        buttonfn={() => nav("/home")}
        color="#9BFBB0"
        exitFn={() => post.reset()}
      />}

      </>
  )
}

export default WifisRegistration