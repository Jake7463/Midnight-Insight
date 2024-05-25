import styled from "styled-components"
import { StyledContentTextInput, StyledTagInput, StyledLabelForm } from "./StyledFormInputs";
import AADFormLucidNightmare from "./AADFormLucidNightmare";
import AADYourMidnightInsight from "./AADYourMidnightInsight";

const StyledForm = styled.form`
        font-family: "Mulish", sans-serif;
        font-size: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
`;


function AddADreamForm (){
    return(
        <StyledForm>
            <StyledLabelForm htmlFor="textAreaInput">Dream Content</StyledLabelForm>
            <StyledContentTextInput id="textAreaInput" placeholder="Start writing here" />
            <StyledLabelForm htmlFor="dreamNameInput">What would be a good name for the dream?</StyledLabelForm>
            <StyledTagInput id="dreamNameInput" className="dream-name" type="text" placeholder="ex: Underwater blue dragon castle knight fight"/>
            <StyledLabelForm htmlFor="emotionTagsInput">What emotions have you experienced?</StyledLabelForm>
            <StyledTagInput id="emotionTagsInput" className="emotionTagsInput" type="text" placeholder="Emotions tags"/>
            <StyledLabelForm htmlFor="peopleTagsInput">Who was there in your dream?</StyledLabelForm>
            <StyledTagInput id="peopleTagsInput" className="peopleTagsInput" type="text" placeholder="People tags"/>
            <StyledLabelForm htmlFor="placesTagsInput">Where were you in the dream?</StyledLabelForm>
            <StyledTagInput id="placesTagsInput" className="placesTagsInput" type="text" placeholder="ex: 3rd grade house, middle school, volcano, previous workplace"/>
            <StyledLabelForm htmlFor="gerealTagsInput">General Tags</StyledLabelForm>
            <StyledTagInput id="generalTagsInput" className="dreamGeneralTags" type="text" placeholder="General tags"/>
            <AADFormLucidNightmare />
            <AADYourMidnightInsight />
        </StyledForm>)
}

export default AddADreamForm;