import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
    margin: 0;
    margin-top: auto;
    width: 100%;
    background: linear-gradient(#0B1B32, #010b1a, #010b1a);
    color: #f1f1f1;
    justify-content: center;
    text-align: center;
    justify-self: end;
`;

const StyledP = styled.p`
    padding: 13px 0;
`;

export default function Footer(){
    return(
        <FooterStyle>
            <StyledP>Designed and Built By Jacob Baitman 2024</StyledP>
            <StyledP>ReactJS, JavaScript, HTML, and <br></br>CSS (Styled Component lib)</StyledP>
        </FooterStyle>
    )
}