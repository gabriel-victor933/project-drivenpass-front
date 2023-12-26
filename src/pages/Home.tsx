import { CategoriesBlock } from "../styles/CategoriesBlock"
import { InfoBlock } from "../styles/PageInfoStyle"
import cred from "../assets/images/credentials.png"
import notes from "../assets/images/notes.png"
import cards from "../assets/images/cards.png"
import wifi from "../assets/images/wifi.png"
import { Link, useNavigate } from "react-router-dom"
import ActionButton from "../components/ActionButton"
function Home() {
    const navigate = useNavigate()
  return (
    <>
        <InfoBlock>Minhas Senhas</InfoBlock>
        <CategoriesBlock>
            <img src={cred}/>
            <Link to="/home/credentials" ><h2>Credentials</h2></Link>
            <p className="ball">1</p>
        </CategoriesBlock>
        <CategoriesBlock>
            <img src={notes}/>
            <Link to="/home/notes" ><h2>Notas Seguras</h2></Link>
            <p className="ball">1</p>
        </CategoriesBlock>
        <CategoriesBlock>
            <img src={cards}/>
            <Link to="/home/cards" ><h2>Cartões</h2></Link>
            <p className="ball">1</p>
        </CategoriesBlock>
        <CategoriesBlock>
            <img src={wifi}/>
            <Link to="/home/wifis" ><h2>Senhas de Wi-fi</h2></Link>
            <p className="ball">1</p>
        </CategoriesBlock>
        
        <ActionButton fn={() => navigate("/home/register/type")} backColor="">
            +
        </ActionButton>
    </>
  )
}

export default Home