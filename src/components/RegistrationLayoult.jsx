import { Outlet, useLocation } from "react-router-dom"
import { InfoBlock } from "../styles/PageInfoStyle"
import { typesTranslation } from "../constants/objectsets"
import ReturnButton from "./ReturnButton"
import {CategoriesBlock} from "../styles/CategoriesBlock"

function RegistrationLayoult(){
    const loc = useLocation()
    const type = loc.pathname.split("/").pop();
    return(<>
            <InfoBlock>{typesTranslation[type]}</InfoBlock>
            <CategoriesBlock>
                <h1>Cadastro</h1>
            </CategoriesBlock>
            <Outlet />
            <ReturnButton />
            </>)
}

export default RegistrationLayoult