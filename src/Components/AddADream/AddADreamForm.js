import styled from "styled-components"
import StyledFormInputs from "./StyledFormInputs";
import StyledLabelForm from "./StyledLabelForm";

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
            <StyledLabelForm for="textAreaInput">Dream Content</StyledLabelForm>
            <StyledFormInputs.StyledContentTextInput id="textAreaInput" placeholder="Start writing here" />
            <StyledLabelForm for="dreamNameInput">What would be a good name for the dream?</StyledLabelForm>
            <StyledFormInputs.StyledTagInput id="dreamNameInput" className="dream-name" type="text" placeholder="ex: Underwater blue dragon castle knight fight"/>
            <StyledLabelForm for="emotionTagsInput">What emotions have you experienced?</StyledLabelForm>
            <StyledFormInputs.StyledTagInput className="emotionTagsInput" type="text" placeholder="Emotions tags"/>
            <StyledLabelForm for="peopleTagsInput">Who was there in your dream?</StyledLabelForm>
            <StyledFormInputs.StyledTagInput className="peopleTagsInput" type="text" placeholder="People tags"/>
            <StyledLabelForm for="placesTagsInput">Where were you in the dream?</StyledLabelForm>
            <StyledFormInputs.StyledTagInput id="" className="placesTagsInput" type="text" placeholder="ex: 3rd grade house, middle school, volcano, previous workplace"/>
            <StyledLabelForm for="gerealTagsInput">General Tags</StyledLabelForm>
            <StyledTagInput id="generalTagsInput" className="dream-general-tags" type="text" placeholder="General tags"/>
        </StyledForm>)
}

export default AddADreamForm;