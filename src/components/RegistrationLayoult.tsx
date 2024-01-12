import { Outlet, useLocation } from "react-router-dom"
import { InfoBlock } from "../styles/PageInfoStyle"
import { typesTranslation } from "../constants/objectsets"
import ReturnButton from "./ReturnButton"
import {CategoriesBlock} from "../styles/CategoriesBlock"

function RegistrationLayoult(){
    
    const type = useLocation().pathname.split("/").pop() || "error";
    
    return(<>
            <InfoBlock>{(typesTranslation as never)[type]}</InfoBlock>
            <CategoriesBlock>
                <h1>Cadastro</h1>
            </CategoriesBlock>
            <Outlet />
            <ReturnButton />
            </>)
}

export default RegistrationLayoult