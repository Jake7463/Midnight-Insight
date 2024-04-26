import react, { useState } from "react";
import styled from "styled-components";
import sideX from "../img/sideMenuX.svg";
import hamburger from "../img/hamburgerMenu.svg";
import profilePic from "../img/profile-boy-icon 1.svg";

const HamburgerStyleButton = styled.button`
    all: unset;
    padding-left: 10%;
`;

const HamburgerClose = styled.button`
    all: unset;
    width: 50px;
    padding: 35px 0 0 20px;
`;

const SideNav = styled.nav`
    display: flex;
    flex-direction: column;
    align-itmes: center;
    height; 100vh;
    background-color: #265CAE;
    max-width: 65vw;
    padding: 0 15px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    gap: 20px;
`;

const SideNavA = styled.a`
    text-decoration: none;
    font-family: "Mulish", sans-serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
    font-size: 28px;
    color: #f1f1f1;
`;

const SideNavA1 = styled.a`
    text-decoration: none;
    font-family: "Mulish", sans-serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
    font-size: 28px;
    color: #E2D351;
`;

const SideNavA3 = styled.a`
    text-decoration: none;
    font-family: "Mulish", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    color: #f1f1f1;
    padding-top: 20px;
`;

const ProfilePhoto = styled.img`
    width: 100px;
    align-self: center;
    padding: 0 0 20px 0;
`;

export default function SidePanel () {
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

    const ToggleSidebar = () => {
        setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
    }

    return(
        <>
            <HamburgerStyleButton onClick={ToggleSidebar}><img src={hamburger}/></HamburgerStyleButton>
            {isHamburgerMenuOpen && (
                <SideNav>
                    <HamburgerClose onClick={ToggleSidebar}><img src={sideX}/></HamburgerClose>
                    <ProfilePhoto src={profilePic} alt="profile picture place holder"/>
                    <SideNavA1 href="/">Add a Dream</SideNavA1>
                    <SideNavA href="/">Dashboard</SideNavA>
                    <SideNavA href="/">Journal</SideNavA>
                    <SideNavA href="/">New Report</SideNavA>
                    <SideNavA href="/">View Reports</SideNavA>
                    <SideNavA href="/">My Profile</SideNavA>
                    <SideNavA3 href="/">Log out</SideNavA3>
                </SideNav>
            )}
        </>
    )
};