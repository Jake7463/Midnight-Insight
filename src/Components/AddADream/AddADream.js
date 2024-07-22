import TranscribeFromAudio from "./TranscribeFromAudio";
import ImgtoText from './ImgToText';
import styled from "styled-components"
import { StyledContentTextInput, StyledH2Form, StyledTrasncriberSpan, StyledTagInput, StyledLabelForm, StyledSectionInput, StyledSpanInput, StyledH1Input, StyledLabelLN, StyledDivForPages, AdvanceImg, SbmtBtn } from "./StyledFormInputs";
import { useState, useEffect } from 'react';
import Dropdown1To10 from "../Dropdown1To10";
import PositivityDropdown from '../PositivityDropdown';
import AgeDropdown from '../AgeDropdown';
import POVDropdown from '../POVDropdown';
import useStorage from "../useStorage";
import ApproveBtn from "./ApproveBtn";
import { Navigate, useNavigate } from "react-router";
import arrowBack from "../../img/arrowBack.svg"
import { ArrowBack, ArrowImage } from "./arrowBack";
import advance0 from "../../img/advance0.svg"
import advance1 from "../../img/advance1.svg"
import advance2 from "../../img/advance2.svg"
import advance3 from "../../img/advance3.svg"
import advance4 from "../../img/advance4.svg"
import useUpdateStorage from "./useUpdateStorage";

const obj = () => ({
    id: 0,
    date: "",
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
})
const advancement = {
    a: "flex",
    b: "none",
    c: "none",
    d: "none"
};

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

function AddADream (){
    const [addDreamFormState, setAddDreamFormState] = useState(obj());
    const [advance, setAdvance] = useState(advancement)
    const { updateStorage, exportToBrowser, dreams } = useStorage();
    const navigate = useNavigate();
    const [isError, setIsError] = useState({
        error: true,
        color: "#f1f1f1"})

    let temp = addDreamFormState;

    useEffect(()=>{
        temp = JSON.parse(JSON.stringify(addDreamFormState));
    },[addDreamFormState]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateStorage(temp)
        setAddDreamFormState(obj);
        setTimeout(()=>navigate("/journal-page"),1800);
    }

    const click2Continue = (e, step) => {
        e.preventDefault();
        setAdvance({a: "none", b: "none", c: "none", d:"none", [step]:"flex"});
        window.scrollTo(0,0);
    }

    const id = dreams.length+1;

    function click2GoBack (e, step){
        e.preventDefault();
        setAdvance({a: "none", b: "none", c: "none", d:"none", [step]:"flex"});
    }

    const [tempTags, setTempTags] = useState({
        emotions: "",
        people: "",
        places: "",
        general: ""
    });


    const toArray = (string) => {
        const arr = string.split(",").map(item => item.trim()).filter(Boolean);
        return arr;
    }

    const arrayFinalize = () => {
        setAddDreamFormState({
            ...addDreamFormState,
            emotionTags: toArray(tempTags.emotions),
            peopleTags: toArray(tempTags.people),
            placesTags: toArray(tempTags.places),
            generalTags: toArray(tempTags.general)
        });
    }

    const mustFill = () =>{
        setIsError({...isError, color: "#e71c00"})
        document.querySelector("#textAreaInput").focus();
    }

    return(
        <StyledDivForPages>
            <StyledForm onSubmit={(e)=>handleSubmit(e)}>
                <StyledSectionInput style={{display: advance.a}}>
                    <StyledH1Input style={{fontWeight: "1000", fontSize: "32px", marginTop: "30px"}}>ADD A DREAM</StyledH1Input>
                    <StyledTrasncriberSpan>
                        <TranscribeFromAudio />
                        <ImgtoText />
                    </StyledTrasncriberSpan>
                    <StyledH2Form>Or start typing</StyledH2Form>
                    <StyledLabelForm htmlFor="textAreaInput" id="dreamContent" required="true" style={{color: isError.color}}>Dream Content <sup>*</sup></StyledLabelForm>
                    <StyledContentTextInput
                        id="textAreaInput"
                        placeholder="Start writing here"
                        value={addDreamFormState.dreamContent}
                        onChange={(e)=>{setAddDreamFormState({
                            ...addDreamFormState,
                            dreamContent: e.target.value,
                            id: id,
                            date: `${(new Date()).getDate()}/${(new Date()).getMonth()+1}/${((new Date()).getYear())-100}`
                        });
                        addDreamFormState.dreamContent === "" ? setIsError({error: true, color: "#e71c00"}) : setIsError({error: false, color: "#f1f1f1"})
                    }}/>
                    <ApproveBtn type="button"  style={{display: advance.a}}
                    onClick={(e)=>{isError.error ? mustFill() : click2Continue(e, "b")}}
                        onMouseUp={mustFill}/>
                </StyledSectionInput>
                <StyledSectionInput style={{display: advance.b}}>
                    <StyledSpanInput>
                        <ArrowBack onClick={(e) => click2GoBack(e, "a")} style={{display: advance.b}}>
                            <ArrowImage src={arrowBack} alt = ""/>
                        </ArrowBack>
                        <AdvanceImg src={advance1}/>
                    </StyledSpanInput>
                    <StyledH1Input style={{maxWidth:"65vw", minWidth: "35vw", textAlign: "center"}}>Name & Tags</StyledH1Input>
                    <StyledLabelForm htmlFor="dreamNameInput">What would be a good name for the dream?</StyledLabelForm>
                    <StyledTagInput
                        id="dreamNameInput"
                        className="dream-name"
                        type="text"
                        value={addDreamFormState.dreamName}
                        placeholder="ex: Underwater blue dragon castle knight fight"
                        onChange={(e)=>{setAddDreamFormState({...addDreamFormState, dreamName: e.target.value})}}/>
                    <StyledLabelForm htmlFor="emotionTagsInput">What emotions have you experienced?</StyledLabelForm>
                    <StyledTagInput
                        id="emotionTagsInput"
                        className="emotionTagsInput"
                        type="text"
                        // value={addDreamFormState.emotionTags}
                        placeholder="Emotions tags"
                        onChange={(e)=>{setTempTags({...tempTags, emotions: e.target.value})}}/>
                    <StyledLabelForm htmlFor="peopleTagsInput">Who was there in your dream?</StyledLabelForm>
                    <StyledTagInput
                        id="peopleTagsInput"
                        className="peopleTagsInput"
                        type="text"
                        // value={addDreamFormState.peopleTags}
                        placeholder="People tags"
                        onChange={(e)=>{setTempTags({...tempTags, people: e.target.value})}}/>
                    <StyledLabelForm htmlFor="placesTagsInput">Where were you in the dream?</StyledLabelForm>
                    <StyledTagInput
                        id="placesTagsInput"
                        className="placesTagsInput"
                        type="text"
                        // value={addDreamFormState.placesTags}
                        placeholder="ex: 3rd grade house, middle school, volcano, previous workplace"
                        onChange={(e)=>{setTempTags({...tempTags, places: e.target.value})}}/>
                    <StyledLabelForm htmlFor="generalTagsInput">General Tags</StyledLabelForm>
                    <StyledTagInput
                        id="generalTagsInput"
                        className="dreamGeneralTags"
                        type="text"
                        // value={addDreamFormState.generalTags}
                        placeholder="General tags"
                        onChange={(e)=>{setTempTags({...tempTags, general: e.target.value})}}/>
                        <ApproveBtn type="button" onClick={(e)=>
                                {click2Continue(e, "c");
                                arrayFinalize();}}
                            style={{display: advance.b}}/>
                </StyledSectionInput>
                <StyledSectionInput id="lucidAndNightmareSection" style={{display: advance.c}}>
                    <StyledSpanInput>
                        <ArrowBack onClick={(e) => click2GoBack(e, "b")} style={{display: advance.c}}>
                            <ArrowImage src={arrowBack} alt = ""/>
                        </ArrowBack>
                        <AdvanceImg src={advance2}/>
                    </StyledSpanInput>
                    <StyledH1Input style={{maxWidth:"65vw", minWidth: "35vw", textAlign: "center"}}>Lucid And Nightmare</StyledH1Input>
                    <StyledSpanInput>
                        <input
                            type="checkbox"
                            id="isLucid"
                            name="isLucid"
                            value={addDreamFormState.isLucid}
                            onChange={(e)=>{setAddDreamFormState({...addDreamFormState, isLucid: e.target.checked})}}/>
                        <label htmlFor="isLucid"><h2>Lucid Dream</h2></label>
                    </StyledSpanInput>
                    <StyledSpanInput>
                        <StyledLabelLN htmlFor="AADClarityScore">Clarity:</StyledLabelLN>
                        <Dropdown1To10
                            id="AADClarityScore"
                            name="AADClarityScore"
                            value={addDreamFormState.lucidClarity}
                            onChange={(e)=>{setAddDreamFormState({...addDreamFormState, lucidClarity: e.target.value})}}/>
                    </StyledSpanInput>
                    <StyledSpanInput>
                        <StyledLabelLN htmlFor="AADCohesionScore">Cohesion:</StyledLabelLN>
                        <Dropdown1To10
                            id="AADCohesionScore"
                            name="AADCohesionScore"
                            value={addDreamFormState.lucidCohesion}
                            onChange={(e)=>{setAddDreamFormState({...addDreamFormState, lucidCohesion: e.target.value})}} />
                    </StyledSpanInput>
                    <StyledSpanInput>
                        <StyledLabelLN htmlFor="AADControlScore">Control:</StyledLabelLN>
                        <Dropdown1To10
                            id="AADControlScore"
                            name="AADControlScore"
                            value={addDreamFormState.lucidControl}
                            onChange={(e)=>{setAddDreamFormState({...addDreamFormState, lucidControl: e.target.value})}}/>
                    </StyledSpanInput>
                    <StyledSpanInput>
                        <input
                            type="checkbox"
                            id="isNightmare"
                            name="isNightmare"
                            value={addDreamFormState.isNightmare}
                            onChange={(e)=>{setAddDreamFormState({...addDreamFormState, isNightmare: e.target.checked})}}/>
                        <label htmlFor="isNightmare"><h2>Nightmare</h2></label>
                    </StyledSpanInput>
                    <StyledSpanInput>
                        <StyledLabelLN htmlFor="AADNightmareIntensity">Intensity:</StyledLabelLN>
                        <Dropdown1To10
                            id="AADNightmareIntensity"
                            name="AADNightmareIntensity"
                            value={addDreamFormState.nightmareIntensity}
                            onChange={(e)=>{setAddDreamFormState({...addDreamFormState, nightmareIntensity: e.target.value})}}/>
                    </StyledSpanInput>
                    <h3>Reaction</h3>
                    <StyledSpanInput>
                        <input type="checkbox" id="didRun" name="didRun"
                            value={addDreamFormState.nightmareReaction.run}
                            onChange={(e)=>{
                                setAddDreamFormState({...addDreamFormState, nightmareReaction:{
                                    ...addDreamFormState.nightmareReaction, run: e.target.checked}})}}/>
                        <StyledLabelLN htmlFor="didRun">Run</StyledLabelLN>
                        <input type="checkbox" id="didFightBack" name="didFightBack"
                            value={addDreamFormState.nightmareReaction.fightBack}
                            onChange={(e)=>{
                                setAddDreamFormState({...addDreamFormState, nightmareReaction:{
                                    ...addDreamFormState.nightmareReaction, fightBack: e.target.checked}})}}/>
                        <StyledLabelLN htmlFor="didFightBack">Fight Back</StyledLabelLN>
                    </StyledSpanInput>
                    <StyledSpanInput>
                        <input type="checkbox" id="didHide" name="didHide"
                            value={addDreamFormState.nightmareReaction.hide}
                            onChange={(e)=>{
                                setAddDreamFormState({...addDreamFormState, nightmareReaction:{
                                    ...addDreamFormState.nightmareReaction, hide: e.target.checked}})}}/>
                        <StyledLabelLN htmlFor="didHide">Hide</StyledLabelLN>
                        <input type="checkbox" id="Freeze" name="Freeze"
                            value={addDreamFormState.nightmareReaction.freeze}
                            onChange={(e)=>{
                                setAddDreamFormState({...addDreamFormState, nightmareReaction:{
                                    ...addDreamFormState.nightmareReaction, freeze: e.target.checked}})}}/>
                        <StyledLabelLN htmlFor="Freeze">Freeze</StyledLabelLN>
                    </StyledSpanInput>
                    <ApproveBtn type="button" onClick={(e)=>click2Continue(e, "d")} style={{display: advance.c}}/>
                </StyledSectionInput>
                <StyledSectionInput style={{display: advance.d}}>
                    <StyledSpanInput style={{justifyContent: "center", alignItems: "center"}}>
                        <ArrowBack onClick={(e) => click2GoBack(e, "c")} style={{display: advance.d}}>
                            <ArrowImage src={arrowBack} alt = ""/>
                        </ArrowBack>
                        <AdvanceImg src={advance3}/>
                    </StyledSpanInput>
                    <StyledH1Input style={{maxWidth:"65vw", minWidth: "35vw", textAlign: "center"}}>Your Insight</StyledH1Input>
                    <StyledSpanInput>
                        <StyledLabelLN htmlFor="AADPositivity">Positivity:</StyledLabelLN>
                        <PositivityDropdown
                            id="AADPositivity"
                            name="AADPositivity"
                            value={addDreamFormState.positivityScore}
                            onChange={(e)=>{setAddDreamFormState({...addDreamFormState, positivityScore: e.target.value})}}/>
                    </StyledSpanInput>
                    <StyledSpanInput>
                        <StyledLabelLN htmlFor="AADPersonalScore">Personal Score:</StyledLabelLN>
                        <Dropdown1To10
                            id="AADPersonalScore"
                            name="AADPersonalScore"
                            value={addDreamFormState.personalScore}
                            onChange={(e)=>{setAddDreamFormState({...addDreamFormState, personalScore: e.target.value})}}/>
                    </StyledSpanInput>
                    <StyledSpanInput>
                        <StyledLabelLN htmlFor="AADAge">Age</StyledLabelLN>
                        <AgeDropdown
                            id="AADAge"
                            name="AADAge"
                            value={addDreamFormState.age}
                            onChange={(e)=>{setAddDreamFormState({...addDreamFormState, age: e.target.value})}}/>
                    </StyledSpanInput>
                    <StyledSpanInput>
                        <StyledLabelLN htmlFor="AADPOV">POV</StyledLabelLN>
                        <POVDropdown
                            id="AADPOV"
                            name="AADPOV"
                            value={addDreamFormState.pov}
                            onChange={(e)=>{setAddDreamFormState({...addDreamFormState, pov: e.target.value})}}/>
                    </StyledSpanInput>
                    <h3>Was it a unique dream?</h3>
                    <StyledSpan4Radio>
                        <StyledSpanInput>
                            <input
                                type="radio"
                                id="isUnique"
                                name="uniqueDream"
                                value={addDreamFormState.isUnique}
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
                            value={addDreamFormState.seriesName}
                            onChange={(e)=>{setAddDreamFormState({...addDreamFormState, seriesName: e.target.value})}}/>
                    </StyledSpanInput>
                    <StyledSpanInput style={{flexDirection: "column"}}>
                        <StyledLabelForm htmlFor="situationIRL">What Would've You Done In This Situation In real Life</StyledLabelForm>
                        <StyledContentTextInput
                            id="situationIRL"
                            type="text"
                            placeholder="Start typing here..."
                            value={addDreamFormState.situationIRL}
                            onChange={(e)=>{setAddDreamFormState({...addDreamFormState, situationIRL: e.target.value})}}/>
                    </StyledSpanInput>
                    <StyledSpanInput>
                        <StyledLabelLN htmlFor="AADPride">Pride in actions?</StyledLabelLN>
                        <Dropdown1To10
                            id="AADPride"
                            name="AADPersonalScore"
                            value={addDreamFormState.prideScore}
                            onChange={(e)=>{setAddDreamFormState({...addDreamFormState, prideScore: e.target.value})}}/>
                    </StyledSpanInput>
                    <StyledSpanInput style={{flexDirection: "column"}}>
                        <StyledLabelForm htmlFor="wouldDoIRL">Your interpretation, lessons learned from the dream + hidden or underlying messages</StyledLabelForm>
                        <StyledContentTextInput
                            id="wouldDoIRL"
                            type="text"
                            placeholder="Start typing here..."
                            value={addDreamFormState.personalInterpretation }
                            onChange={(e)=>{setAddDreamFormState({...addDreamFormState, personalInterpretation: e.target.value})}}/>
                    </StyledSpanInput>
                <SbmtBtn type="submit">Finish & Submit</SbmtBtn>
                </StyledSectionInput>
            </StyledForm>
        </StyledDivForPages>
        )
}

export default AddADream;