import styled from "styled-components"
import { Outlet } from "react-router-dom"
import logo from "../assets/images/Vector.png"
import exit from "../assets/images/exit.png"
import { Link,useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Header = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7px;

    a {
        text-decoration: none;
    }
`

const Logo = styled.img<{$logoHeight?: string;}>`
    width: 51px;
    height: ${props => props.$logoHeight || "70px"};
`

const Title = styled.h1`
    font-family: "Righteous";
    font-size: 38px;
    color: #005985;
`

const Footer = styled.footer`
    width: 100%;
    height: 21px;
    border: 3px;
    background-color: #005985;
    position: fixed;
    bottom: 0px;
`

function HomeLayoult() {
    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(!token) navigate("/")
    },[navigate])

    function handleExit(){
        localStorage.removeItem("token");
        navigate("/");
    }
  return (
    <>
        <Header>
            <Logo src={logo}/>
            <Link to="/home"><Title>DrivenPass</Title></Link>
            <Logo src={exit} $logoHeight={"45px"} onClick={handleExit}/>
        </Header>
        <Outlet />
        <Footer />
    </>

  )
}

export default HomeLayoult