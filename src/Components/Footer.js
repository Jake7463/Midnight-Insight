import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
    margin: 0;
    margin-top: auto;
    width: 100%;
    background-color: #000000;
    color: #f1f1f1;
    justify-content: center;
    text-align: center;
    justify-self: end;
    padding: 0;
`;

export default function Footer(){
    return(
        <FooterStyle>
            <p>This footer is so footery OMG!</p>
        </FooterStyle>
    )
}