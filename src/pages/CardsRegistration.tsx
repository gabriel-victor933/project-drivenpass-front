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
    const { register, handleSubmit, formState: {errors } } = useForm<CardsInput>()
    const nav = useNavigate()

    const post = useMutation({
        mutationFn: (data: CardsInput) => {
            console.log(data)
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return usePostData<CardsInput>("cards",data);      
        },
    })

    function submit(data: CardsInput){
        data.expirationDate = data.expirationDate.replace("-","/")
        post.mutate(data)
    }
    
    function validateCardNumber(cardNumber: string){
        if(!cardNumber) return "Insira o Número do cartão."

        if(cardNumber.length != 16) return "O numero do cartão deve possuir 16 digitos"

        if(cardNumber.split("").some((ele)=> ele == "-" ||ele=="e"||ele=="E"||ele==".")){
          return "O numero do cartão deve possuir apenas números."
        } 
    }

    function validateExpirationDate(date: string){
        if(!date) return "Insira o vencimento do Cartão."

        const today = new Date()
        const [year,month] = date.split("-")
        if(parseInt(year) < today.getFullYear()) return "Data de vencimento inválida."
        if(parseInt(year)==today.getFullYear() && parseInt(month)-1 < today.getMonth()){
          return "Data de vencimento inválida."
        }
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
        {...register("number",{validate: validateCardNumber })}
          autoComplete='off'
        />
        <small>{errors?.number?.message || ""}</small>

        <label>Nome</label>
        <input
          type='text'
          className={errors.name ? "error" : ""}
          disabled={post.isPending}
          {...register("name", { required: "Insira o Nome!" })}
          autoComplete='off'
        />
        <small>{errors?.name?.message || ""}</small>

        <label>cvv</label>
        <input
          type='number'
          className={errors.cvv ? "error" : ""}
          disabled={post.isPending}
          {...register("cvv", { required: "Insira o CVV!",
          pattern: {value: /[0-9]{3}/, message: "Insira um cvv válido."} })}
          autoComplete='off'
        />
        <small>{errors?.cvv?.message || ""}</small>

        <label>Vencimento</label>
        <input
          type='month'
          className={errors.expirationDate ? "error" : ""}
          disabled={post.isPending}
          {...register("expirationDate", { validate: validateExpirationDate})}
          autoComplete='off'
        />
        <small>{errors?.expirationDate?.message || ""}</small>

        <label>Senha</label>
        <input
          type='password'
          className={errors.password ? "error" : ""}
          disabled={post.isPending}
          {...register("password", { required: "Insira a senha!" })}
          autoComplete='off'
        />
        <small>{errors?.password?.message || ""}</small>
        
        <legend>Tipo de cartão:</legend>
        <div className='checkbox'>
          <input {...register("isVirtual")} type="checkbox"  />
          <label htmlFor="isVirtual" >Cartão Virtual</label>
        </div>

        <select {...register("type")}>
          <option value="DEBT">Débito</option>
          <option value="CREDIT">Crédito</option>
          <option value="BOTH">Ambos</option>
        </select>

        <ButtonStyled>Criar</ButtonStyled>
      </RegistrationFormStyle>
      {post.isError && <Modal
        title={"Não foi possivel Cadastrar A credencial!"}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        description={`"${(post.error as any)["response"]?.data.message || post.error.message}"`}
        buttonMessage={"voltar"}
        buttonfn={() => post.reset()}
        color="#FB9B9B"
        exitFn={() => post.reset()}
      />}
      {post.isSuccess && <Modal 
        title={"Cartão cadastrado!"}
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