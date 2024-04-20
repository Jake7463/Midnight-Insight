import React from "react";

const footerStyle = {
    backgroundColor: "#000000",
    color: "#f1f1f1",
    justifyContent: "center",
    textAlign: "center",
    // alignItems: "end",
    marginTop: "auto",
}

export default function Footer(){
    return(
        <footer style={footerStyle}>
            <p>This footer is so footery OMG!</p>
        </footer>
    )
}