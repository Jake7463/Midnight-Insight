import styled from "styled-components";
import uploadImage from "../img/upload-mp3-icon.svg";

function TranscribeFromAudio(){
    const StyledBtn = styled.button`
        color: #000;
        background-color: #f1f1f1;
    `;
    return(
        <StyledBtn>
            <img src={uploadImage}></img>
            Upload audio / Start recording</StyledBtn>
    )
}