import styled from "styled-components";
import uploadImage from "../../img/camera.svg";

function ImgtoText(){
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
    // const handleClick1 = () => console.log("did!");

    return(
        <StyledBtn >
            <StyledImg src={uploadImage} style={{fill: "currentColor",color: "#00fb76"}}></StyledImg>
             <StyledP>Text From Image Capture</StyledP> </StyledBtn>
    )
}

export default ImgtoText;