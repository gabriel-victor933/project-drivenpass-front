import { CategoriesBlock } from "../styles/CategoriesBlock"
import { InfoBlock } from "../styles/PageInfoStyle"
import { useParams, Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import CreatePasswordButton from "../components/CreatePasswordButton"
import cred from "../assets/images/credentials.png"
import notes from "../assets/images/notes.png"
import cards from "../assets/images/cards.png"
import wifi from "../assets/images/wifi.png"
import { useFetchData } from "../hooks/useFetchData"

const typesTranslation = {
    credentials: "credenciais",
    notes: "Notas Seguras",
    cards: "Cartões",
    wifis: "Senhas de Wifi"
}

const imagesTranslation = {
    credentials: cred,
    notes: notes,
    cards: cards,
    wifis: wifi
}

function Passwords() {

    const {type} = useParams()
    
    //carregar Senhas do Banco de Dados usando o react query
    const info = useQuery({
        queryKey: [type],
        queryFn: () => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useFetchData(type)    
        }
        })

    //ESTADOS POSSIVEIS DA REQUISIÇÃO:
    
    //invalid URL
    if(!Object.keys(typesTranslation).includes(type)){
        return <p>Invalid URL!</p>
    }

    // Nenhum elemento encontrado;
    if(info.isError && info.error?.response.status == "404"){
        
        return <p>Nenhum elemento encontrado!</p>
    }
    /// Erro do backend;
    if(info.isError){
        console.log(info)
        return <p>Error!</p>
    }
    
    // Loading;
    if(info.isLoading) return <InfoBlock>Loading...</InfoBlock>
    
    // OK;
    console.log(info)
  return (
    <>
        <InfoBlock>{typesTranslation[type]}</InfoBlock>
        <CategoriesBlock>
            <img src={imagesTranslation[type]} />
            <Link to="/home"><h2>Credential title1</h2></Link>
            
        </CategoriesBlock>
        <CategoriesBlock>
            <img src={imagesTranslation[type]} />
            <h2>Credential title2</h2>
        </CategoriesBlock>
        <CreatePasswordButton />
    </>
  )
}

export default Passwords