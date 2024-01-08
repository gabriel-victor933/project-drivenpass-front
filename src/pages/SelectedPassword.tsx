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

    if(info.isError && info.error?.response?.status == "404"){
        return (<>
            <InfoBlock />
            <Modal 
                title={typesSingularTranslation[type]} 
                description={``}
                buttonMessage={"voltar"} 
                buttonfn={() =>navigate("/home")}
                color="#FB9B9B"
                exitFn={() => undefined}
            />
            </>)
        
    }
    
    if(info.isError){
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
                <Loading />
                </>)
        
    }  
    
  return (
    <>
        <InfoBlock>{typesTranslation[type]}</InfoBlock>
        <PasswordInfoStyled>
            <h1>{info.data.title}</h1>
            {Object.keys(info.data).map((key,i)=>{
                if(key == 'id' || key == 'userId' ) return <></>
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