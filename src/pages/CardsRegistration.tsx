import { useMutation } from '@tanstack/react-query'
import { ButtonStyled } from '../styles/ButtonStyled'
import RegistrationFormStyle from "../styles/RegistrationFormStyle"
import {useForm} from "react-hook-form"
import Modal from '../components/Modal'
import { useNavigate } from 'react-router-dom'
import usePostData from '../hooks/usePostData'

type CardsInput = {
    title: string
    number: string
    name: string
    cvv: string
    expirationDate: string
    password: string
    isVirtual: boolean
    type: "CREDIT" | "DEBT" | "BOTH" 
}

function CardsRegistration () {
    const { register, handleSubmit, formState: {errors }, setValue } = useForm<CardsInput>()
    const nav = useNavigate()

    const post = useMutation({
        mutationFn: (data: CardsInput) => {
            console.log(data)
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return usePostData<CardsInput>("cards",data);      
        },
    })

    function submit(data: CardsInput){
        post.mutate(data)
    }
    
    function validateCardNumber(cardNumber: string){
        if(cardNumber.length != 16) return "O numero do cartão deve possuir 16 números"
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

        <label>Número do Cartão</label>
        <input
          type='number'
          className={errors.number ? "error" : ""}
          disabled={post.isPending}
        {...register("number",{required: "Insira O Número do cartão",validate: validateCardNumber})}
          autoComplete='off'
        />
        <small>{errors?.number?.message || ""}</small>

        <label>Nome</label>
        <input
          type='text'
          className={errors.name ? "error" : ""}
          disabled={post.isPending}
          {...register("name", { required: "Insira um Nome!" })}
          autoComplete='off'
        />
        <small>{errors?.name?.message || ""}</small>

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

export default CardsRegistration 