import { CategoriesBlock } from "../styles/CategoriesBlock"
import { InfoBlock } from "../styles/PageInfoStyle"
import cred from "../assets/images/credentials.png"
import notes from "../assets/images/notes.png"
import cards from "../assets/images/cards.png"
import wifi from "../assets/images/wifi.png"
import CreatePasswordButton from "../components/CreatePasswordButton"
function Home() {
  return (
    <>
        <InfoBlock>Minhas Senhas</InfoBlock>
        <CategoriesBlock>
            <img src={cred}/>
            <h2>Credentials</h2>
            <p className="ball">1</p>
        </CategoriesBlock>
        <CategoriesBlock>
            <img src={notes}/>
            <h2>Notas Seguras</h2>
            <p className="ball">1</p>
        </CategoriesBlock>
        <CategoriesBlock>
            <img src={cards}/>
            <h2>Cartões</h2>
            <p className="ball">1</p>
        </CategoriesBlock>
        <CategoriesBlock>
            <img src={wifi}/>
            <h2>Senhas de Wi-fi</h2>
            <p className="ball">1</p>
        </CategoriesBlock>
        <CreatePasswordButton />
    </>
  )
}

export default Home