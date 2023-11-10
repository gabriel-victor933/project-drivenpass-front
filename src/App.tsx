import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./styles/GlobalStyle"
import LoginLayoult from "./components/LoginLayoult"
import HomeLayoult from "./components/HomeLayoult"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import Passwords from "./pages/Passwords"

function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<LoginLayoult />}> {/*telas de login*/}
            <Route index element={<Login />}/>
            <Route path="signup" element={<Signup />} />
          </Route> 
          <Route path="/home" element={<HomeLayoult />}>{/*telas de home*/}
            <Route index element={<Home />} />
            <Route path=":type" element={<Passwords />} />
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
