import styled from "styled-components";
import TranscribeFromAudio from "./TranscribeFromAudio";
import ImgtoText from './ImgToText';
import AddADreamForm from "./AddADreamForm";

const StyledDiv =styled.div`
        background-color: #0B1B32;
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
        color: #f1f1f1;
`;

const StyledSpan = styled.span`
    display: flex;
    flex-direction: column;
    gap: 15px;
    @media (min-width: 768.1px) {
        flex-direction: row;
        justify-conent: center;
        gap: 80px;
        margin: 0 10%;
      }
`;

const StyledH2 = styled.h2`
    text-decoration: none;
    font-weight: 1000;
    font-size: 19px;
    width: 150px;
    text-align: center;
    color: #f1f1f1;
`;



function AddADream(){

    return (
        <StyledDiv>
            <StyledSpan>
                <TranscribeFromAudio />
                <ImgtoText />
            </StyledSpan>
            <StyledH2>Or start typing</StyledH2>
            <AddADreamForm />
        </StyledDiv>
    )
};

export default AddADream;