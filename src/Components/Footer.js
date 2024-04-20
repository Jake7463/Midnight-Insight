import React from "react";

const footerStyle = {
    display: "flex",
    width: "100vw",
    backgroundColor: "#000000",
    color: "#f1f1f1",
    justifyContent: "center",
    // textAlign: "center",
    alignSelf: "end",
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 20,
}

export default function Footer(){
    return(
        <footer style={footerStyle}>
            <p>This footer is so footery OMG!</p>
        </footer>
    )
}