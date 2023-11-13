import { CategoriesBlock } from "../styles/CategoriesBlock"
import { InfoBlock } from "../styles/PageInfoStyle"
import { useParams, Link } from "react-router-dom"
import CreatePasswordButton from "../components/CreatePasswordButton"
import cred from "../assets/images/credentials.png"
import notes from "../assets/images/notes.png"
import cards from "../assets/images/cards.png"
import wifi from "../assets/images/wifi.png"

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

    //carregar Senhas do Banco de Dados
    
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