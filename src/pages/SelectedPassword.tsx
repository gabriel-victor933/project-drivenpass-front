/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate, useParams } from "react-router-dom"
import { InfoBlock } from "../styles/PageInfoStyle"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { typesTranslation, typesSingularTranslation } from "../constants/objectsets"
import Loading from "../components/Loading"
import PasswordInfoStyled from "../styles/PasswordInfoStyled"
import ReturnButton from "../components/ReturnButton"
import Modal from "../components/Modal"
import ActionButton from "../components/ActionButton"
import { useApiCall } from "../hooks/useApiCall"
import ListItem from "../components/ListItem"


function SelectedPassword() {

    const {type,id} = useParams()
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const info = useQuery({
        queryKey: [type,{id: id}],
        queryFn: () => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useApiCall(`${type}/${id}`,"get")
        },
        retry: false
    })

    const deleteData = useMutation({
        mutationFn: () => {
            return useApiCall(`${type}/${id}`,"delete")
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [type]
            })
            
        }
    })

    if(type == undefined || !Object.keys(typesTranslation).includes(type)){
        return (<>
                <InfoBlock />
                <Modal 
                    title={"Error 404"} 
                    description={`Página não encontrada`}
                    buttonMessage={"voltar"} 
                    buttonfn={() =>navigate("/home")}
                    color="#FB9B9B"
                    exitFn={() => undefined}
                />
                </>)
    }

    if(deleteData.isSuccess){
        return (<>
            <InfoBlock />
            <Modal 
                title={"Deletado com sucesso!"} 
                description={``}
                buttonMessage={"Voltar"} 
                buttonfn={() =>navigate("/home")}
                color="#9BFBB0"
                exitFn={() => undefined}
            />
            </>)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if(info.isError && (info.error as any)?.response?.status == "404"){
        return (<>
            <InfoBlock />
            <Modal 
                title={(typesSingularTranslation as never)[type]} 
                description={``}
                buttonMessage={"voltar"} 
                buttonfn={() =>navigate("/home")}
                color="#FB9B9B"
                exitFn={() => undefined}
            />
            </>)
        
    }
    
    if(info.isError){
        console.log(info.error)
        return (<>
            <InfoBlock />
            <Modal 
                title={"ERROR"} 
                description={`Não foi possível acessar a página no momento tente novamente mais tarde.`}
                buttonMessage={"voltar"} 
                buttonfn={() =>navigate("/home")}
                color="#FB9B9B"
                exitFn={() => undefined}
            />
            </>)
    }

    if(info.isLoading || deleteData.isPending){
        return (<>
                <InfoBlock>Loading...</InfoBlock>
                <Loading size={undefined} color={undefined}/>
                </>)
        
    }  
    
  return (
    <>
        <InfoBlock>{(typesTranslation as never)[type]}</InfoBlock>
        <PasswordInfoStyled>
            <h1>{info.data.title}</h1>
            {Object.keys(info.data).map((key,i)=>{
                if(key == 'id' || key == 'userId' || key == 'title' ) return <></>
                return (<ListItem id={i} title={key} value={info.data[key]}/>)
            })}
        </PasswordInfoStyled>
        <ReturnButton />
        <ActionButton fn={()=>deleteData.mutate()} backColor={"#fc0303"}>
            X
        </ActionButton>
    </>
    
  )
}

export default SelectedPassword