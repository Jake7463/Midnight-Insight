import React from "react";
import styled from "styled-components";


const NavStyle = styled.nav`
    min-height: 32px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: auto;
`;

const StyleA = styled.a`
    color: #f1f1f1;
    text-decoration: none;
    font-family: "Mulish", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    display: block;
`;

const StyleA2 = styled.a`
    color: #e2d351;
    text-decoration: none;
    font-family: "Mulish", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    display: block;
    justify-self: center;
    text-align: cetner;
`;

const StyledSep = styled.div`
    width: 2px;
    height: 26px;
    background-color: #f1f1f1;
    display: block;
`;

const Span1 = styled.span`
    display: flex;
    background-color: #265CAE;
    min-height: 32px;
    height: fit-content;
    color: #f1f1f1;
    justify-content: space-between;
    align-items: center;
    padding: 0;
`;

export default function MainNav(){
    return(
        <NavStyle>
            <Span1>
                <StyledSep></StyledSep>
                <StyleA2 href="/">Add a <br/>Dream</StyleA2>
                <StyledSep></StyledSep>
                <StyleA href="/">My Profile</StyleA>
                <StyledSep></StyledSep>
                <StyleA href="/">Journal</StyleA>
                <StyledSep></StyledSep>
                <StyleA href="/">Reports</StyleA>
                <StyledSep></StyledSep>
            </Span1>
        </NavStyle>
    )
};