import { CategoriesBlock } from "../styles/CategoriesBlock"
import { InfoBlock } from "../styles/PageInfoStyle"
import cred from "../assets/images/credentials.png"
import notes from "../assets/images/notes.png"
import cards from "../assets/images/cards.png"
import wifi from "../assets/images/wifi.png"
import { Link } from "react-router-dom"
import ReturnButton from "../components/ReturnButton"

function Categories() {
  return (
    <>
        <InfoBlock>Escolha Uma Categoria</InfoBlock>
        <CategoriesBlock>
            <img src={cred}/>
            <Link to="/home/register/credentials/data" ><h2>Credentials</h2></Link>
        </CategoriesBlock>
        <CategoriesBlock>
            <img src={notes}/>
            <Link to="/home/register/notes/data" ><h2>Notas Seguras</h2></Link>
        </CategoriesBlock>
        <CategoriesBlock>
            <img src={cards}/>
            <Link to="/home/register/cards/data" ><h2>Cartões</h2></Link>
        </CategoriesBlock>
        <CategoriesBlock>
            <img src={wifi}/>
            <Link to="/home/register/wifis/data" ><h2>Senhas de Wi-fi</h2></Link>
        </CategoriesBlock>
        
        <ReturnButton />
    </>
  )
}

export default Categories