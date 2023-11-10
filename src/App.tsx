import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./styles/GlobalStyle"

function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<h1>layout tela de login</h1>}> {/*telas de login*/}
            <Route index element={<h1>Tela de login</h1>}/>
            <Route path="signup" element={<h1>Tela de signup</h1>} />
          </Route> 
          <Route path="/home" element={<h1>Layout Tela HOME</h1>}>{/*telas de home*/}
            <Route index element={<h1>Minhas senhas</h1>} />
            <Route path=":type" element={<h1>Listagem de tipo selecionado</h1>} />
            <Route path=":type/:id" element={<h1>Informação da senha selecionada</h1>} />
            <Route path="register-type" element={<h1>Escolha do tipo de senha</h1>}/>
            <Route path="register-datas" element={<h1>Cadastro das infos da senhas</h1>}/>
          </Route> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
