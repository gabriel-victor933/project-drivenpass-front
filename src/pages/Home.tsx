import { CategoriesBlock } from "../styles/CategoriesBlock"
import { InfoBlock } from "../styles/PageInfoStyle"
import cred from "../assets/images/credentials.png"
import notes from "../assets/images/notes.png"
import cards from "../assets/images/cards.png"
import wifi from "../assets/images/wifi.png"
import { Link, useNavigate } from "react-router-dom"
import ActionButton from "../components/ActionButton"
import { useApiCall } from "../hooks/useApiCall"
import { useQuery } from "@tanstack/react-query"
import Loading from "../components/Loading"
function Home() {
    const navigate = useNavigate()

    const info = useQuery({
        queryKey: ["count"],
        queryFn: () => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            return useApiCall("users/passwords","get")    
        }
        })

        console.log(info)

  return (
    <>
        <InfoBlock>Minhas Senhas</InfoBlock>
        <CategoriesBlock>
            <img src={cred}/>
            <Link to="/home/credentials" ><h2>Credentials</h2></Link>
            <div className="ball">
                {info.isLoading && <Loading size={"26"} color={"#fff"}/>}
                {info.isFetched && <>{info.data?.credentials}</>}
                {info.isError &&<>i</>}
            </div>
        </CategoriesBlock>
        <CategoriesBlock>
            <img src={notes}/>
            <Link to="/home/notes" ><h2>Notas Seguras</h2></Link>
            <div className="ball">
                {info.isLoading && <Loading size={"26"} color={"#fff"}/>}
                {info.isFetched && <>{info.data?.notes}</>}
                {info.isError &&<>i</>}
            </div>
        </CategoriesBlock>
        <CategoriesBlock>
            <img src={cards}/>
            <Link to="/home/cards" ><h2>Cartões</h2></Link>
            <div className="ball">
                {info.isLoading && <Loading size={"26"} color={"#fff"}/>}
                {info.isFetched && <>{info.data?.cards}</>}
                {info.isError &&<>i</>}
            </div>
        </CategoriesBlock>
        <CategoriesBlock>
            <img src={wifi}/>
            <Link to="/home/wifis" ><h2>Senhas de Wi-fi</h2></Link>
            <div className="ball">
                {info.isLoading && <Loading size={"26"} color={"#fff"}/>}
                {info.isFetched && <>{info.data?.wifis}</>}
                {info.isError &&<>i</>}
            </div>
        </CategoriesBlock>
        
        <ActionButton fn={() => navigate("/home/register/type")} backColor="">
            +
        </ActionButton>
    </>
  )
}

export default Home