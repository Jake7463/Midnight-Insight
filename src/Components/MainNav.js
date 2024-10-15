import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom' ;


const NavStyle = styled.nav`
    min-height: 32px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    maring: 0;
    padding: 0;
    @media (max-width: 460px){
        display: none;
    }
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

const StyledSep2 = styled.div`
    width: 2px;
    height: 26px;
    background-color: #265CAE;
    display: block;
`;

const Span1 = styled.span`
    display: flex;
    background-color: #265CAE;
    min-height: 32px;
    width: 100%;
    height: fit-content;
    color: #f1f1f1;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
`;


export default function MainNav(){
    return(
        <NavStyle>
            <Span1>
                <StyledSep2></StyledSep2>
                <Link style={{textDecoration: "none", fontWeight:"800", color: "#265cae", textAlign: "center", justifySelf: "center", alignSelf: "center", backgroundColor: "#f1f1f1", padding: "3px 18px", borderRadius: "9px"}}  to="/">Add a Dream</Link>
                {/* <StyledSep></StyledSep> */}
                {/* <Link style={{textDecoration: "none", fontWeight:"800", color: "#808080", textAlign: "center", justifySelf: "center", alignSelf: "center"}} to="/" >My Profile</Link>
                <StyledSep></StyledSep> */}
                <Link style={{textDecoration: "none", fontWeight:"800", color: "#265cae", textAlign: "center", justifySelf: "center", alignSelf: "center", backgroundColor: "#f1f1f1", padding: "3px 18px", borderRadius: "9px"}} to="/journal-page">Journal</Link>
                {/* <StyledSep></StyledSep>
                <Link style={{textDecoration: "none", fontWeight:"800", color: "#808080", textAlign: "center", justifySelf: "center", alignSelf: "center"}} to="/">Reports</Link> */}
                <StyledSep2></StyledSep2>
            </Span1>
        </NavStyle>
    )
};