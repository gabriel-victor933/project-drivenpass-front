import { useNavigate, useParams } from "react-router-dom"
import { InfoBlock } from "../styles/PageInfoStyle"
import { useQuery } from "@tanstack/react-query"
import { useFetchData } from "../hooks/useFetchData"
import { typesTranslation, typesSingularTranslation, imagesTranslation } from "../constants/objectsets"
import Loading from "../components/Loading"
import PasswordInfoStyled from "../styles/PasswordInfoStyled"
import ReturnButton from "../components/ReturnButton"
import Modal from "../components/Modal"


function SelectedPassword() {

    const {type,id} = useParams()
    const navigate = useNavigate()

    const info = useQuery({
        queryKey: [type,id],
        queryFn: () => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useFetchData(`${type}/${id}`)
        }
    })

    //TODO: tratar os seguintes casos;
    // NOT FOUND;
    // BACKEND ERROR

    if(info.isError && info.error?.response?.status == "404"){
        return (<>
            <InfoBlock />
            <Modal 
                title={typesSingularTranslation[type]} 
                description={``}
                buttonMessage={"voltar"} 
                buttonfn={() =>navigate("/home")}
                color="#FB9B9B"
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
            />
            </>)
    }

    if(info.isLoading){
        return (<>
                <InfoBlock>Loading...</InfoBlock>
                <Loading />
                </>)
        
    } 
    
    console.log(info)
    
    
  return (
    <>
        <InfoBlock>{typesTranslation[type]}</InfoBlock>
        <PasswordInfoStyled>
            <h1>{info.data.title}</h1>
            {Object.keys(info.data).map((key)=>{
                if(key == 'id' || key== 'userId') return <></>
                return (<>
                            <h1>{key}</h1>
                            <h2>{info.data[key]}</h2>
                        </>)
            })}
        </PasswordInfoStyled>
        <ReturnButton />
    </>
    
  )
}

export default SelectedPassword