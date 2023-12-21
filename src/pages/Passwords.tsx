import { CategoriesBlock } from "../styles/CategoriesBlock"
import { InfoBlock } from "../styles/PageInfoStyle"
import { useParams, Link, useNavigate } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import CreatePasswordButton from "../components/CreatePasswordButton"
import { useFetchData } from "../hooks/useFetchData"
import Modal from "../components/Modal"
import Loading from "../components/Loading"
import { typesTranslation, typesSingularTranslation, imagesTranslation } from "../constants/objectsets"


function Passwords() {

    const {type} = useParams()
    const navigate = useNavigate()
    
    const info = useQuery({
        queryKey: [type],
        queryFn: () => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useFetchData(type)    
        }
        })

    if(!Object.keys(typesTranslation).includes(type)){
        return (<>
                <InfoBlock />
                <Modal 
                    title={"Error 404"} 
                    description={`Página não encontrada`}
                    buttonMessage={"voltar"} 
                    buttonfn={() =>navigate("/home")}
                    color="#FB9B9B"
                />
                </>)
    }

    if(info.isError && info.error?.response?.status == "404"){
        return (<>
                <InfoBlock>{typesTranslation[type]}</InfoBlock>
                <CategoriesBlock>
                    <h2>{typesSingularTranslation[type]}</h2>
                </CategoriesBlock>
                <CreatePasswordButton url={`/home/register/${type}/data`}/>
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
    
  return (
    <>
        <InfoBlock>{typesTranslation[type]}</InfoBlock>
        {info.data.map((pass)=>{
            return (<CategoriesBlock key={pass.id}>
                <img src={imagesTranslation[type]} />
                <Link to={`${pass.id}`}><h2>{pass.title}</h2></Link>
            </CategoriesBlock>)
        })}
    </>
  )
}

export default Passwords