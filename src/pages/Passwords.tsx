import { CategoriesBlock } from "../styles/CategoriesBlock"
import { InfoBlock } from "../styles/PageInfoStyle"
import { useParams, Link, useNavigate } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import Modal from "../components/Modal"
import Loading from "../components/Loading"
import { typesTranslation, typesSingularTranslation, iconsTranslation } from "../constants/objectsets"
import ReturnButton from "../components/ReturnButton"
import { useApiCall } from "../hooks/useApiCall"
import ActionButton from "../components/ActionButton"


function Passwords() {

    const {type} = useParams()
    const navigate = useNavigate()
    
    const info = useQuery({
        queryKey: [type],
        queryFn: () => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useApiCall(type,"get")    
        },
        retry: false
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
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if(info.isError && (info.error as any)["response"]?.status == "404"){
        return (<>
                <InfoBlock>{(typesTranslation as never)[type]}</InfoBlock>
                <CategoriesBlock>
                    <h2>{(typesSingularTranslation as never)[type]}</h2>
                </CategoriesBlock>
                <ActionButton fn={() => navigate(`/home/register/${type}/data`)} backColor="">
                    +
                </ActionButton>
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
    
    if(info.isLoading){
        return (<>
                <InfoBlock>Loading...</InfoBlock>
                <Loading size={undefined} color={undefined}/>
                </>)
        
    } 
    
  return (
    <>
        <InfoBlock>{(typesTranslation as never)[type]}</InfoBlock>
        {info.data.map((pass: {id: number, title: string})=>{
            
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const Icon = (iconsTranslation as any)[type];
            return (<CategoriesBlock key={pass.id}>
                
                <Icon />
                <Link to={`${pass.id}`}><h2>{pass.title}</h2></Link>
            </CategoriesBlock>)
        })}
        <ReturnButton />
    </>
  )
}

export default Passwords