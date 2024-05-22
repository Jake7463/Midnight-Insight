import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
    margin-top: auto;
    width: 100vw;
    background-color: #000000;
    color: #f1f1f1;
    justify-content: center;
    text-align: center;
    justify-self: end;
    margin: 0;
    padding: 0;
`;

export default function Footer(){
    return(
        <FooterStyle>
            <p>This footer is so footery OMG!</p>
        </FooterStyle>
    )
}