import { useParams } from "react-router-dom"
import { InfoBlock } from "../styles/PageInfoStyle"
import { useQuery } from "@tanstack/react-query"
import { useFetchData } from "../hooks/useFetchData"
import { typesTranslation, typesSingularTranslation, imagesTranslation } from "../constants/objectsets"
import Loading from "../components/Loading"
import { CategoriesBlock } from "../styles/CategoriesBlock"
import PasswordInfoStyled from "../styles/PasswordInfoStyled"


function SelectedPassword() {

    const {type,id} = useParams()

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

    if(info.isLoading){
        return (<>
                <InfoBlock>Loading...</InfoBlock>
                <Loading />
                </>)
        
    } 
    
    console.log(info.data)
  return (
    <>
        <InfoBlock>{typesTranslation[type]}</InfoBlock>
        <PasswordInfoStyled>
            <h2>{info.data.title}</h2>
        </PasswordInfoStyled>
    </>
    
  )
}

export default SelectedPassword