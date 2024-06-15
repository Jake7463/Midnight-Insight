import styled from "styled-components";
import uploadAudio from "../../img/microphone.svg";
import { StyledLabelForm, StyledSpanInput, StyledTextFromBtn} from "./StyledFormInputs";


const StyledImg = styled.img`
    margin: 5px 8px;
    height: 12vh;
`;

const StyledP = styled.p`
    text-decoration: none;
    font-family: "Mulish", sans-serif;
    font-weight: 1000;
    font-size: 19px;
    width: 150px;
    text-align: left;
`;
    // const handleClick1 = () => console.log("did!");
function TranscribeFromAudio(){

    return(
        <StyledSpanInput style={{flexDirection: "column"}}>
        <StyledLabelForm>Transcribe from audio</StyledLabelForm>
            <StyledTextFromBtn >
                <StyledImg src={uploadAudio} style={{height: "10vh"}}/>
                <StyledP>Start recording</StyledP>
            </StyledTextFromBtn>
        </StyledSpanInput>
    )
}

export default TranscribeFromAudio;