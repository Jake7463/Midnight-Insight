import React from "react";
import Logo from "../img/Logo.svg";
import styled from "styled-components";
import SidePanel from "./SidePanel";

const HeaderStyle = styled.header`
    color: #f1f1f1;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
`;

const LogoStyle = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 15vh;
    aspect-ratio: 1/1;
    padding-top: 5px;
    transform: translateX(-35px);
    padding-bottom: 5px;
    justify-self: center;
`;

export default function Header(){
    return(
        <HeaderStyle>
            <SidePanel />
            <LogoStyle src={Logo} alt="logo"/>
        </HeaderStyle>
    )
}