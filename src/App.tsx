import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App

function Home(){
  return(
    <>
    <h1>home</h1>
    <Link to="/about">About</Link>
    </>

  )
}


function About(){
  return(
    <>
    <h1>About</h1>
    <Link to="/">home</Link>
    </>

  )
}