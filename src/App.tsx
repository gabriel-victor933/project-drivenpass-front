import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./styles/GlobalStyle"
import LoginLayoult from "./components/LoginLayoult"
import HomeLayoult from "./components/HomeLayoult"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import Passwords from "./pages/Passwords"
import Categories from "./pages/Categories"
import SelectedPassword from "./pages/SelectedPassword"
import RegistrationLayoult from "./components/RegistrationLayoult"
import CredentialsRegistration from "./pages/CredentialsRegistration"
import NotesRegistration from "./pages/NotesRegistration"
import WifisRegistration from "./pages/WifisRegistration"
import CardsRegistration from "./pages/CardsRegistration"

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
            <Route path=":type/:id" element={<SelectedPassword />} />
            <Route path="register/type" element={<Categories />}/>
            <Route path="register/data" element={<RegistrationLayoult />}>
                <Route path="credentials" element={<CredentialsRegistration />} />
                <Route path="notes" element={<NotesRegistration />} />
                <Route path="cards" element={<CardsRegistration />} />
                <Route path="wifis" element={<WifisRegistration />} />
                <Route path="*" element={<h1>not found!</h1>} />
            </Route>
          </Route> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
