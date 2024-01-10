import { useNavigate } from "react-router-dom"
import Modal from "./Modal"

const NotFoundComponent: React.FC<{url: string, btMessage: string}> = ({url,btMessage}) => {
    const navigate = useNavigate()
  return (
    <Modal 
        title="Page Not Found"
        description="Essa página não existe, confira a URL e tente novamente"
        buttonMessage={btMessage}
        buttonfn={() => navigate(url)}
        color="#005985"
        exitFn={() => undefined}
    />
  )
}

export default NotFoundComponent