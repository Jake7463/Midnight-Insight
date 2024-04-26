import react, { useState } from "react";
import styled from "styled-components";
import sideX from "../img/sideMenuX.svg";
import hamburger from "../img/hamburgerMenu.svg";

const HamburgerStyleButton = styled.button`
    all: unset;
    padding-left: 10%;
`;

const SideNav = styled.nav`
    height; 100vh;
    background-color: #265CAE;
    width: 70vw;
    position: absolute;
`;

const SideNavA = styled.a`
    
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
                    
                </SideNav>
            )}
        </>
    )
};