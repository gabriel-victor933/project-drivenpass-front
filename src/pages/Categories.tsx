import { CategoriesBlock } from "../styles/CategoriesBlock"
import { InfoBlock } from "../styles/PageInfoStyle"
import { iconsTranslation } from "../constants/objectsets"
import { Link } from "react-router-dom"
import ReturnButton from "../components/ReturnButton"

function Categories() {
  return (
    <>
        <InfoBlock>Escolha Uma Categoria</InfoBlock>
        <CategoriesBlock>
            <iconsTranslation.credentials />
            <Link to="/home/register/data/credentials" ><h2>Credentials</h2></Link>
        </CategoriesBlock>
        <CategoriesBlock>
            <iconsTranslation.notes />
            <Link to="/home/register/data/notes" ><h2>Notas Seguras</h2></Link>
        </CategoriesBlock>
        <CategoriesBlock>
            <iconsTranslation.cards />
            <Link to="/home/register/data/cards" ><h2>Cartões</h2></Link>
        </CategoriesBlock>
        <CategoriesBlock>
            <iconsTranslation.wifis />
            <Link to="/home/register/data/wifis" ><h2>Senhas de Wi-fi</h2></Link>
        </CategoriesBlock>
        
        <ReturnButton />
    </>
  )
}

export default Categories