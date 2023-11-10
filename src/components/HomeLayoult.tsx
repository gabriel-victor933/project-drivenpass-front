import styled from "styled-components"
import { Outlet } from "react-router-dom"
import logo from "../assets/images/Vector.png"
import exit from "../assets/images/exit.png"

const Header = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7px;
`

const Logo = styled.img<{$logoHeight?: string;}>`
    width: 51px;
    height: ${props => props.$logoHeight || "70px"};
`

const Title = styled.h1`
    font-family: "Righteous";
    size: 38px;
    color: #005985;
`

function HomeLayoult() {
  return (
    <>
        <Header>
            <Logo src={logo}/>
            <Title>DrivenPass</Title>
            <Logo src={exit} $logoHeight={"45px"}/>
        </Header>
        <Outlet />
    </>

  )
}

export default HomeLayoult