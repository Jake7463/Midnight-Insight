import React from "react";
import { Link } from 'react-router-dom' ;
import {Nav1, Div2, S1} from "./Styled.js"

const linkStyle = {
    textDecoration: "none",
    fontWeight:"800",
    color: "#265cae",
    textAlign: "center",
    justifySelf: "center",
    alignSelf: "center",
    backgroundColor: "#f1f1f1",
    padding: "3px 18px",
    borderRadius: "9px",
    width: "30vw",
    maxWidth: "160px",
}
export default function MainNav(){
    return(
        <Nav1 style={{minHeight: "32px", height: "fit-content", display: "flex", flexDirection: "column", maring: "0", padding: "0"}}>
            <S1>
                <Div2></Div2>
                <Link style={linkStyle} to="/">Add a Dream</Link>
                <Link style={linkStyle} to="/journal-page">Journal</Link>
                <Div2></Div2>
            </S1>
        </Nav1>
    )
};