import { useMutation } from '@tanstack/react-query'
import { ButtonStyled } from '../styles/ButtonStyled'
import RegistrationFormStyle from "../styles/RegistrationFormStyle"
import {useForm} from "react-hook-form"
import Modal from '../components/Modal'
import { useNavigate } from 'react-router-dom'
import usePostData from '../hooks/usePostData'

type NotesInput = {
    title: string,
    text: string

}

function NotesRegistration() {
    const { register, handleSubmit, formState: {errors} } = useForm<NotesInput>()
    const nav = useNavigate()

    const post = useMutation({
        mutationFn: (data: NotesInput) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return usePostData<NotesInput>("notes",data);      
        },
    })

    function submit(data: NotesInput){
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

        <label>Texto</label>
        <textarea
        rows={10} cols={33}
        {...register("text", { required: "Insira um texto válido!" })}
          className={errors.text ? "error" : ""}
          disabled={post.isPending}
          autoComplete='off'
        ></textarea>
        <small>{errors?.text?.message || ""}</small>


        <ButtonStyled>Criar</ButtonStyled>
      </RegistrationFormStyle>

      {post.isError && <Modal
        title={"Não foi possivel Cadastrar A credencial!"}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        description={`"${(post.error as any)?.response?.data.message || post.error.message}"`}
        buttonMessage={"voltar"}
        buttonfn={() => post.reset()}
        color="#FB9B9B"
        exitFn={() => post.reset()}
      />}
      {post.isSuccess && <Modal 
        title={"Nota cadastrada!"}
        description={``}
        buttonMessage={"Voltar para o inicio!"}
        buttonfn={() => nav("/home")}
        color="#9BFBB0"
        exitFn={() => post.reset()}
      />}

      </>
  )
}

export default NotesRegistration