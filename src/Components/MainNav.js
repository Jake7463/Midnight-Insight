import React, {useState} from "react";
import styled from "styled-components";


const NavStyle = styled.nav`
    display: flex;
    height: 32px;
    color: #f1f1f1;
    background-color: #265CAE;
    justify-content: space-between;
    align-items: center;
    padding-left: 5%;
    padding-right: 5%;
`;

const StyleA = styled.a`
    color: #f1f1f1;
    text-decoration: none;
    font-family: "Mulish", sans-serif;
    font-optical-sizing: auto;
    font-weight: 1000;
    font-style: normal;
`;

const StyledSep = styled.div`
    width: 2px;
    height: 26px;
    background-color: #f1f1f1;
    display: block;
`;

export default function MainNav(){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const reportsDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return(
        <NavStyle>
                <StyleA href="/">Add a Dream</StyleA>
                <StyledSep></StyledSep>
                <StyleA href="/">My Profile</StyleA>
                <StyledSep></StyledSep>
                <StyleA href="/">Journal</StyleA>
                <StyledSep></StyledSep>
                <button onClick={reportsDropdown}>Reports</button>
                {isDropdownOpen && (
                    <ul>
                    <li><StyleA href="/">New Report</StyleA></li>
                    <StyledSep></StyledSep>
                    <li><StyleA href="/">View Existing</StyleA></li>
                    </ul>
                )}
        </NavStyle>
    )
};