import styled from "styled-components"
import { StyledContentTextInput, StyledTagInput, StyledLabelForm, StyledSectionInput, StyledSpanInput, StyledH1Input, StyledLabelLN } from "./StyledFormInputs";
import { useState } from 'react';
import Dropdown1To10 from "../Dropdown1To10";
import PositivityDropdown from '../PositivityDropdown';
import AgeDropdown from '../AgeDropdown';
import POVDropdown from '../POVDropdown';
import useStorage from "../useStorage";
import ApproveBtn from "./ApproveBtn";

const obj = {
    id: 0,
    dreamContent: "",
    dreamName: "",
    emotionTags: [],
    peopleTags: [],
    placesTags: [],
    generalTags: [],
    isLucid: false,
    lucidClarity: null,
    lucidCohesion: null,
    lucidControl: null,
    isNightmare: false,
    nightmareIntensity: null,
    nightmareReaction: {fightBack: false, run: false, hide: false, freeze: false,},
    positivityScore: null,
    personalScore: null,
    age: "",
    pov: "",
    isUnique: true,
    seriesName: "",
    situationIRL: "",
    prideScore: null,
    personalInterpretation: "",
}
const refresh = JSON.parse(JSON.stringify(obj));

const StyledForm = styled.form`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
`;

const StyledSpan4Radio = styled(StyledSpanInput)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: 768.1px){
        flex-direction: row;
    }
`;


function AddADreamForm (){
    const [addDreamFormState, setAddDreamFormState] = useState(obj);
    // const id = Storage.dreamKey;
    // console.log(id);
    const { updateStorage, dreams } = useStorage();
    const handleSubmit = (e) => {
        e.preventDefault();
        updateStorage(addDreamFormState);
        setAddDreamFormState(refresh);
    }

    const id = dreams.length+1;
    return(
        <StyledForm onSubmit={handleSubmit}>
            <StyledLabelForm htmlFor="textAreaInput">Dream Content</StyledLabelForm>
            <StyledContentTextInput
                id="textAreaInput"
                placeholder="Start writing here"
                onChange={(e)=>{setAddDreamFormState({...addDreamFormState, dreamContent: e.target.value, id: id});
            }}/>
            <ApproveBtn />
            <StyledLabelForm htmlFor="dreamNameInput">What would be a good name for the dream?</StyledLabelForm>
            <StyledTagInput
                id="dreamNameInput"
                className="dream-name"
                type="text"
                placeholder="ex: Underwater blue dragon castle knight fight"
                onChange={(e)=>{setAddDreamFormState({...addDreamFormState, dreamName: e.target.value})}}/>
            <StyledLabelForm htmlFor="emotionTagsInput">What emotions have you experienced?</StyledLabelForm>
            <StyledTagInput
                id="emotionTagsInput"
                className="emotionTagsInput"
                type="text"
                placeholder="Emotions tags"
                onChange={(e)=>{setAddDreamFormState({...addDreamFormState, emotionTags: e.target.value})}}/>
            <StyledLabelForm htmlFor="peopleTagsInput">Who was there in your dream?</StyledLabelForm>
            <StyledTagInput
                id="peopleTagsInput"
                className="peopleTagsInput"
                type="text"
                placeholder="People tags"
                onChange={(e)=>{setAddDreamFormState({...addDreamFormState, peopleTags: e.target.value})}}/>
            <StyledLabelForm htmlFor="placesTagsInput">Where were you in the dream?</StyledLabelForm>
            <StyledTagInput
                id="placesTagsInput"
                className="placesTagsInput"
                type="text"
                placeholder="ex: 3rd grade house, middle school, volcano, previous workplace"
                onChange={(e)=>{setAddDreamFormState({...addDreamFormState, placesTags: e.target.value})}}/>
            <StyledLabelForm htmlFor="gerealTagsInput">General Tags</StyledLabelForm>
            <StyledTagInput
                id="generalTagsInput"
                className="dreamGeneralTags"
                type="text"
                placeholder="General tags"
                onChange={(e)=>{setAddDreamFormState({...addDreamFormState, generalTags: e.target.value})}}/>
            <StyledSectionInput id="lucidAndNightmareSection">
                <StyledH1Input>Lucid And Nightmare</StyledH1Input>
                <StyledSpanInput>
                    <input
                        type="checkbox"
                        id="isLucid"
                        name="isLucid"
                        onChange={(e)=>{setAddDreamFormState({...addDreamFormState, isLucid: e.target.value})}}/>
                    <label htmlFor="isLucid"><h2>Lucid Dream</h2></label>
                </StyledSpanInput>
                <StyledSpanInput>
                    <StyledLabelLN htmlFor="AADClarityScore">Clarity:</StyledLabelLN>
                    <Dropdown1To10
                        id="AADClarityScore"
                        name="AADClarityScore"
                        onChange={(e)=>{setAddDreamFormState({...addDreamFormState, lucidClarity: e.target.value})}}/>
                </StyledSpanInput>
                <StyledSpanInput>
                    <StyledLabelLN htmlFor="AADCohesionScore">Cohesion:</StyledLabelLN>
                    <Dropdown1To10
                        id="AADCohesionScore"
                        name="AADCohesionScore"
                        onChange={(e)=>{setAddDreamFormState({...addDreamFormState, lucidCohesion: e.target.value})}} />
                </StyledSpanInput>
                <StyledSpanInput>
                    <StyledLabelLN htmlFor="AADControlScore">Control:</StyledLabelLN>
                    <Dropdown1To10
                        id="AADControlScore"
                        name="AADControlScore"
                        onChange={(e)=>{setAddDreamFormState({...addDreamFormState, lucidControl: e.target.value})}}/>
                </StyledSpanInput>
                <StyledSpanInput>
                    <input
                        type="checkbox"
                        id="isNightmare"
                        name="isNightmare"
                        onChange={(e)=>{setAddDreamFormState({...addDreamFormState, isNightmare: e.target.value})}}/>
                    <label htmlFor="isNightmare"><h2>Nightmare</h2></label>
                </StyledSpanInput>
                <StyledSpanInput>
                    <StyledLabelLN htmlFor="AADNightmareIntensity">Intensity:</StyledLabelLN>
                    <Dropdown1To10
                        id="AADNightmareIntensity"
                        name="AADNightmareIntensity"
                        onChange={(e)=>{setAddDreamFormState({...addDreamFormState, nightmareIntensity: e.target.value})}}/>
                </StyledSpanInput>
                <h3>Reaction</h3>
                <StyledSpanInput>
                    <input type="checkbox" id="didRun" name="didRun"
                        onChange={(e)=>{
                            setAddDreamFormState({...addDreamFormState, nightmareReaction:{
                                ...addDreamFormState.nightmareReaction, run: e.target.checked}})}}/>
                    <StyledLabelLN htmlFor="didRun">Run</StyledLabelLN>
                    <input type="checkbox" id="didFightBack" name="didFightBack"
                        onChange={(e)=>{
                            setAddDreamFormState({...addDreamFormState, nightmareReaction:{
                                ...addDreamFormState.nightmareReaction, fightBack: e.target.checked}})}}/>
                    <StyledLabelLN htmlFor="didFightBack">Fight Back</StyledLabelLN>
                </StyledSpanInput>
                <StyledSpanInput>
                    <input type="checkbox" id="didHide" name="didHide"
                        onChange={(e)=>{
                            setAddDreamFormState({...addDreamFormState, nightmareReaction:{
                                ...addDreamFormState.nightmareReaction, hide: e.target.checked}})}}/>
                    <StyledLabelLN htmlFor="didHide">Hide</StyledLabelLN>
                    <input type="checkbox" id="Freeze" name="Freeze"
                        onChange={(e)=>{
                            setAddDreamFormState({...addDreamFormState, nightmareReaction:{
                                ...addDreamFormState.nightmareReaction, freeze: e.target.checked}})}}/>
                    <StyledLabelLN htmlFor="Freeze">Freeze</StyledLabelLN>
                </StyledSpanInput>
            </StyledSectionInput>
            <StyledSectionInput>
                <StyledH1Input>Your Midnight Insight</StyledH1Input>
                <StyledSpanInput>
                    <StyledLabelLN htmlFor="AADPositivity">Positivity:</StyledLabelLN>
                    <PositivityDropdown
                        id="AADPositivity"
                        name="AADPositivity"
                        onChange={(e)=>{setAddDreamFormState({...addDreamFormState, positivityScore: e.target.value})}}/>
                </StyledSpanInput>
                <StyledSpanInput>
                    <StyledLabelLN htmlFor="AADPersonalScore">Personal Score:</StyledLabelLN>
                    <Dropdown1To10
                        id="AADPersonalScore"
                        name="AADPersonalScore"
                        onChange={(e)=>{setAddDreamFormState({...addDreamFormState, personalScore: e.target.value})}}/>
                </StyledSpanInput>
                <StyledSpanInput>
                    <StyledLabelLN htmlFor="AADAge">Age</StyledLabelLN>
                    <AgeDropdown
                        id="AADAge"
                        name="AADAge"
                        onChange={(e)=>{setAddDreamFormState({...addDreamFormState, age: e.target.value})}}/>
                </StyledSpanInput>
                <StyledSpanInput>
                    <StyledLabelLN htmlFor="AADPOV">POV</StyledLabelLN>
                    <POVDropdown
                        id="AADPOV"
                        name="AADPOV"
                        onChange={(e)=>{setAddDreamFormState({...addDreamFormState, pov: e.target.value})}}/>
                </StyledSpanInput>
                <h3>Was it a unique dream?</h3>
                <StyledSpan4Radio>
                    <StyledSpanInput>
                        <input
                            type="radio"
                            id="isUnique"
                            name="uniqueDream"
                            value="uniqueDream"
                            onChange={(e)=>{setAddDreamFormState({...addDreamFormState, isUnique: e.target.checked})}}/>
                        <label htmlFor="isUnique">Unique Dream</label>
                    </StyledSpanInput>
                    <StyledSpanInput >
                        <input
                            type="radio"
                            id="isNotUnique"
                            name="isNotUnique"
                            value="notUnique"
                            onChange={(e)=>{setAddDreamFormState({...addDreamFormState, isUnique: !e.target.checked})}}/>
                        <label htmlFor="isNotUnique">Repeating / Part of a sreies</label>
                    </StyledSpanInput>
                </StyledSpan4Radio>
                <StyledSpanInput style={{flexDirection: "column", marginTop: "0"}}>
                    <StyledLabelForm htmlFor="nameRepeatingSeries" style={{margin: "0"}}>Name The Series</StyledLabelForm>
                    <StyledTagInput
                        id="nameRepeatingSeries"
                        type="text"
                        placeholder="Start typing here..."
                        style={{margin: "0"}}
                        onChange={(e)=>{setAddDreamFormState({...addDreamFormState, seriesName: e.target.value})}}/>
                </StyledSpanInput>
                <StyledSpanInput style={{flexDirection: "column"}}>
                    <StyledLabelForm htmlFor="situationIRL">What Would've You Done In This Situation In real Life</StyledLabelForm>
                    <StyledContentTextInput
                        id="situationIRL"
                        type="text"
                        placeholder="Start typing here..."
                        onChange={(e)=>{setAddDreamFormState({...addDreamFormState, situationIRL: e.target.value})}}/>
                </StyledSpanInput>
                <StyledSpanInput>
                    <StyledLabelLN htmlFor="AADPride">Pride in actions?</StyledLabelLN>
                    <Dropdown1To10
                        id="AADPride"
                        name="AADPersonalScore"
                        onChange={(e)=>{setAddDreamFormState({...addDreamFormState, prideScore: e.target.value})}}/>
                </StyledSpanInput>
                <StyledSpanInput style={{flexDirection: "column"}}>
                    <StyledLabelForm htmlFor="wouldDoIRL">Your interpretation, lessons learned from the dream + hidden or underlying messages</StyledLabelForm>
                    <StyledContentTextInput
                        id="wouldDoIRL"
                        type="text"
                        placeholder="Start typing here..."
                        onChange={(e)=>{setAddDreamFormState({...addDreamFormState, personalInterpretation: e.target.value})}}/>
                </StyledSpanInput>
            </StyledSectionInput>
            <button type="submit">Submit</button>
        </StyledForm>)
}

export default AddADreamForm;