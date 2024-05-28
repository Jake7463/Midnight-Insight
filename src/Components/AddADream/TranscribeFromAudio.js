import styled from "styled-components";
import uploadAudio from "../../img/upload-mp3-icon.svg";

const StyledBtn = styled.button`
    all: unset;
    padding: 2px 10px;
    border: solid 1px #265CAE;
    margin: 15px auto;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f1f1f1;
    border-radius: 19px;
    min-width: max-content;
    gap: 10px;
    &:hover{
        cursor: pointer;
        transform: scale(102%);
    }
`;

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
        <StyledBtn >
            <StyledImg src={uploadAudio}/>
             <StyledP>Upload audio<br/>or<br/>Start recording</StyledP>
        </StyledBtn>
    )
}

export default TranscribeFromAudio;