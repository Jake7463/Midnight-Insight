import React from "react";
import LogoMain from "../img/LogoMain.jpg"

const headerStyle = {
    color: "#f1f1f1",
    backgroundColor: "#000000",
    deisplay: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
}

const logoStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    maxHeight: "15vh",
//     aspectRatio: "1/1",
    paddingTop: "5px",
    paddingBottom: "5px",
    justifySelf: "center",
}

export default function Header(){
    return(
        <header style={headerStyle}>
            <img src={LogoMain} style={logoStyle} alt="logo"/>
        </header>
    )
}