import styled from "styled-components";
import uploadImage from "../../img/camera.svg";
import { StyledLabelForm, StyledSpanInput, StyledTextFromBtn } from "./StyledFormInputs";

function ImgtoText(){
    const StyledImg = styled.img`
        margin: 5px 8px;
        height: 10vh;
    `;

    const StyledP = styled.p`
        text-decoration: none;
        font-family: "Mulish", sans-serif;
        font-weight: 1000;
        font-size: 19px;
        width: 150px;
        text-align: left;
    `;

    return(
        <StyledSpanInput style={{flexDirection: "column"}}>
        <StyledLabelForm> Extract text from Image</StyledLabelForm>
        <StyledTextFromBtn >
            <StyledImg src={uploadImage} style={{fill: "currentColor",color: "#00fb76"}}></StyledImg>
            <StyledP>Image Capture</StyledP>
        </StyledTextFromBtn>
        </StyledSpanInput>
    )
}

export default ImgtoText;