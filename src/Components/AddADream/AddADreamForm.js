import styled from "styled-components"
import StyledTextArea from "./StyledTextArea";
import StyledTagInput from "./StyledTagInput";

const StyledForm = styled.form`
        font-family: "Mulish", sans-serif;
        font-size: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 32px;
        color: #000;
`;



function AddADreamForm (){
    return(
        <StyledForm>
            <StyledTextArea placeholder="Start writing here"></StyledTextArea>
            <StyledTagInput className="dream-name" type="text" placeholder="Name of the dream here, ex: Underwater blue dragon castle knight fight"></StyledTagInput>
            <StyledTagInput className="dream-emotion-tags" type="text" placeholder="Emotions tags"></StyledTagInput>
            <StyledTagInput className="dream-people-tags" type="text" placeholder="People tags"></StyledTagInput>
            <StyledTagInput className="dream-places-tags" type="text" placeholder="Places tags"></StyledTagInput>
            <StyledTagInput className="dream-general-tags" type="text" placeholder="General tags"></StyledTagInput>
        </StyledForm>)
}

export default AddADreamForm;