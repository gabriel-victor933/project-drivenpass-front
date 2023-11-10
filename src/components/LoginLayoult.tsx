import { Outlet } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/images/Vector.png"

const Header = styled.header`
    width: 100%;
    height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
`

const Logo = styled.img`
    width: 113px;
    height: 154px;
`

const Title = styled.h1`
    font-family: "Righteous";
    size: 36px;
    color: #005985;
`

function LoginLayoult() {
  return (
    <>
        <Header>
            <Logo src={logo}/>
            <Title>DrivenPass</Title>
        </Header>
        <Outlet />
    </>
  )
}

export default LoginLayoult