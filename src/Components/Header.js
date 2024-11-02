import React from "react";
import Logo from "../img/Logo.svg"
import styled from "styled-components";
import SidePanel from "./SidePanel";

const HeaderStyle = styled.header`
    color: #f1f1f1;
    background-color: #010b1a;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0;
`;

const LogoStyle = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 15vh;
    aspect-ratio: 1/1;
    padding-top: 5px;
    padding-bottom: 5px;
    justify-self: center;
    // @media (max-width: 768px){
    //     transform: translateX(-35px);
    // }
`;

export default function Header(){
    return(
        <HeaderStyle>
            {/* <SidePanel /> */}
            <LogoStyle src={Logo} alt="logo"/>
        </HeaderStyle>
    )
}