// import TranscribeFromAudio from "./TranscribeFromAudio";
// import ImgtoText from './ImgToText';
import styled from "styled-components"
import { StyledContentTextInput, StyledH2Form, StyledTrasncriberSpan, StyledTagInput, StyledLabelForm, StyledSectionInput, StyledSpanInput, StyledH1Input, StyledLabelLN, StyledDivForPages, AdvanceImg, SbmtBtn } from "./StyledFormInputs";
import { useState } from 'react';
import Dropdown1To10 from "../Dropdown1To10";
import PositivityDropdown from '../PositivityDropdown';
import AgeDropdown from '../AgeDropdown';
import POVDropdown from '../POVDropdown';
import useStorage from "../useStorage";
import ApproveBtn from "./ApproveBtn";
import { useNavigate } from "react-router-dom";
import arrowBack from "../../img/arrowBack.svg"
import { ArrowBack, ArrowImage } from "./ArrowBack";
import advance1 from "../../img/advance1.svg"
import advance2 from "../../img/advance2.svg"
import advance3 from "../../img/advance3.svg"
import advance4 from "../../img/advance4.svg"
import DreamPage from "../DreamPage";

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
    lucidClarity: 0,
    lucidCohesion: 0,
    lucidControl: 0,
    isNightmare: false,
    nightmareIntensity: 0,
    nightmareReactionFightBack: false,
    nightmareReactionRun: false,
    nightmareReactionHide: false,
    nightmareReactionFreeze: false,
    nightmareReactionGoWithIt: false,
    positivityScore: "",
    personalScore: 0,
    age: "",
    pov: "",
    isUnique: true,
    seriesName: "",
    situationIRL: "",
    prideScore: 0,
    personalInterpretation: "",
})
const advancement = {
    a: "flex",
    b: "none",
    c: "none",
    d: "none",
    e: "none",
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
    
const AddADream  = (anObject) => {
    const [addDreamFormState, setAddDreamFormState] = useState(anObject ? anObject : obj());
    const [advance, setAdvance] = useState(advancement)
    const { updateStorage, dreams } = useStorage();
    const navigate = useNavigate();
    const [isError, setIsError] = useState({
        error: true,
        color: "#f1f1f1"
    })
    const [isLucidCollapse, setIsLucidCollapse] = useState(false);
    const [isNightmareCollapse, setIsNightmareCollapse] = useState(false);
    const id = dreams.length+1;

    const collapseLucid = (bool) => {
        setIsLucidCollapse(bool);
    }
    const collapseNightmare = (bool) => {
        setIsNightmareCollapse(bool);
    }

    const Unique = () => {
        setAddDreamFormState({...addDreamFormState, isUnique: true})
    }
    const NotUnique = () => {
        setAddDreamFormState({...addDreamFormState, isUnique: false})
    }

    const [temp, setTemp] = useState();

    const click2Continue = (e, step) => {
        e.preventDefault();
        setAdvance({a: "none", b: "none", c: "none", d:"none", e: "none", [step]:"flex"});
        window.scrollTo(0,0);
    }

    function click2GoBack (e, step){
        e.preventDefault();
        setAdvance({a: "none", b: "none", c: "none", d:"none", e: "none", [step]:"flex"});
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
            generalTags: toArray(tempTags.general),
        });
    }

    const mustFill = () =>{
        setIsError({...isError, color: "#e71c00"})
        document.querySelector("#textAreaInput").focus();
        alert("Fill in 'Dream Content' in order to continue")
    }

    const [inputText, setInputText] = useState('');

    return(
        <StyledDivForPages>
            <StyledForm>
                <StyledSectionInput style={{display: advance.a}}>
                    <StyledH1Input style={{fontWeight: "1000", fontSize: "32px", marginTop: "30px"}}>ADD A DREAM</StyledH1Input>
                    <StyledLabelForm htmlFor="textAreaInput" id="dreamContent" required={true} style={{color: isError.color}}>Dream Content <sup>*</sup></StyledLabelForm>
                    <StyledContentTextInput
                        id="textAreaInput"
                        placeholder="Not sure how to describe your dream? Try to think of your basic senses - What did you see, feel, smell, taste, touch? Where? Who was there, what happened? If you don't remember 'anything at all', descriptions like 'I remember a blue blob and I remember thinking it had some importance, maybe', are better that not writing at all"
                        value={addDreamFormState.dreamContent}
                        onChange={(e)=>{
                            setInputText(e.target.value);
                            setAddDreamFormState({
                            ...addDreamFormState,
                            dreamContent: e.target.value,
                            id: addDreamFormState.id > 0 ? addDreamFormState.id : id,
                            date: `${((new Date()).getFullYear())}-${(new Date()).getMonth()+1}-${(new Date()).getDate()}`
                        });
                        addDreamFormState.dreamContent === "" ? setIsError({error: true, color: "#e71c00"}) : setIsError({error: false, color: "#f1f1f1"})
                    }}/>
                    <ApproveBtn type="button"  style={{display: advance.a}} onClick={(e)=>{isError.error ? mustFill() : click2Continue(e, "b")}}/>
                </StyledSectionInput>
                <StyledSectionInput style={{display: advance.b}}>
                    <StyledSpanInput>
                        <ArrowBack onClick={(e) => click2GoBack(e, "a")} style={{display: advance.b}}>
                            <ArrowImage src={arrowBack} alt = ""/>
                        </ArrowBack>
                        <AdvanceImg src={advance1}/>
                    </StyledSpanInput>
                    <StyledH1Input style={{maxWidth:"65vw", minWidth: "35vw", textAlign: "center"}}>Basic Info</StyledH1Input>
                    <StyledLabelForm htmlFor="dreamNameInput" style={{width: "80vw", margin: "30px 0 0 0", fontSize: "20px", fontWeight: "600"}}>Name The Dream</StyledLabelForm>
                    <StyledTagInput
                        id="dreamNameInput"
                        className="dream-name"
                        type="text"
                        value={addDreamFormState.dreamName}
                        placeholder="ex: Underwater blue dragon castle knight fight"
                        onChange={(e)=>{setAddDreamFormState({...addDreamFormState, dreamName: e.target.value})}}/>
                    <StyledLabelForm htmlFor="date" style={{width: "80vw", margin: "30px 0 0 0", fontSize: "20px", fontWeight: "600"}}>Date</StyledLabelForm>
                    <input style={{width: "90px", padding: "4px 9px", borderRadius: "14px", height: '22px', textAlign: "center"}}
                        id="date"
                        className="date"
                        type="text"
                        placeholder="Today"
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "text")}
                        onChange={(e)=>{setAddDreamFormState({...addDreamFormState, date: e.target.value})}}/>
                    <StyledLabelForm htmlFor="dreamNameInput" style={{width: "80vw", margin: "30px 0 0 0", fontSize: "20px", fontWeight: "600"}}>Tags</StyledLabelForm>
                    <StyledLabelForm htmlFor="emotionTagsInput">What emotions have you experienced?</StyledLabelForm>
                    <StyledTagInput
                        id="emotionTagsInput"
                        className="emotionTagsInput"
                        type="text"
                        value={addDreamFormState.emotionTags}
                        placeholder="ex: happiness, excited, impatient, disgust, fear, ..."
                        onChange={(e)=>{setTempTags({...tempTags, emotions: e.target.value})}}/>
                    <StyledLabelForm htmlFor="peopleTagsInput">Who was there in your dream?</StyledLabelForm>
                    <StyledTagInput
                        id="peopleTagsInput"
                        className="peopleTagsInput"
                        type="text"
                        value={addDreamFormState.peopleTags}
                        placeholder="ex: mom, pete, prev boss, highschool crush, ..."
                        onChange={(e)=>{setTempTags({...tempTags, people: e.target.value})}}/>
                    <StyledLabelForm htmlFor="placesTagsInput">Where were you in the dream?</StyledLabelForm>
                    <StyledTagInput
                        id="placesTagsInput"
                        className="placesTagsInput"
                        type="text"
                        value={addDreamFormState.placesTags}
                        placeholder="ex: 3rd grade house, middle school, volcano, previous workplace"
                        onChange={(e)=>{setTempTags({...tempTags, places: e.target.value})}}/>
                    <StyledLabelForm htmlFor="generalTagsInput">General Tags</StyledLabelForm>
                    <StyledTagInput
                        id="generalTagsInput"
                        className="dreamGeneralTags"
                        type="text"
                        value={addDreamFormState.generalTags}
                        placeholder="ex: superpowers ,friendship, lizards, dragon eggs, giant apples, ..."
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
                            onChange={(e)=>{
                                setAddDreamFormState({...addDreamFormState, isLucid: e.target.checked});
                                collapseLucid(e.target.checked);
                                }}/>
                        <label htmlFor="isLucid"><h2>Lucid Dream</h2></label>
                    </StyledSpanInput>
                    <StyledSpanInput style={{display: isLucidCollapse ? "flex" : "none", flexDirection: "column"}}>
                        <StyledSpanInput>
                            <StyledLabelLN htmlFor="AADClarityScore">Clarity:</StyledLabelLN>
                            <Dropdown1To10
                                id="AADClarityScore"
                                name="AADClarityScore"
                                value={addDreamFormState.lucidClarity || ""}
                                onChange={(e)=>{setAddDreamFormState({...addDreamFormState, lucidClarity: e.target.value})}}/>
                        </StyledSpanInput>
                        <StyledSpanInput>
                            <StyledLabelLN htmlFor="AADCohesionScore">Cohesion:</StyledLabelLN>
                            <Dropdown1To10
                                id="AADCohesionScore"
                                name="AADCohesionScore"
                                value={addDreamFormState.lucidCohesion || ""}
                                onChange={(e)=>{setAddDreamFormState({...addDreamFormState, lucidCohesion: e.target.value})}} />
                        </StyledSpanInput>
                        <StyledSpanInput>
                            <StyledLabelLN htmlFor="AADControlScore">Control:</StyledLabelLN>
                            <Dropdown1To10
                                id="AADControlScore"
                                name="AADControlScore"
                                value={addDreamFormState.lucidControl || ""}
                                onChange={(e)=>{setAddDreamFormState({...addDreamFormState, lucidControl: e.target.value})}}/>
                        </StyledSpanInput>
                    </StyledSpanInput>
                    <StyledSpanInput>
                        <input
                            type="checkbox"
                            id="isNightmare"
                            name="isNightmare"
                            value={addDreamFormState.isNightmare}
                            onChange={(e)=>{
                                setAddDreamFormState({...addDreamFormState, isNightmare: e.target.checked});
                                collapseNightmare(e.target.checked);
                            }}/>
                        <label htmlFor="isNightmare"><h2>Nightmare</h2></label>
                    </StyledSpanInput>
                    <StyledSpanInput style={{display: isNightmareCollapse ? "flex" : "none", flexDirection: "column"}}>
                        <StyledSpanInput>
                            <StyledLabelLN htmlFor="AADNightmareIntensity">Intensity:</StyledLabelLN>
                            <Dropdown1To10
                                id="AADNightmareIntensity"
                                name="AADNightmareIntensity"
                                value={addDreamFormState.nightmareIntensity || ""}
                                onChange={(e)=>{setAddDreamFormState({...addDreamFormState, nightmareIntensity: e.target.value})}}/>
                        </StyledSpanInput>
                        <h3>Reaction</h3>
                        <StyledSpanInput>
                            <input type="checkbox" id="didRun" name="didRun"
                                value={addDreamFormState.nightmareReactionRun}
                                onChange={(e)=>{
                                    setAddDreamFormState({...addDreamFormState, nightmareReactionRun: e.target.checked})}}/>
                            <StyledLabelLN htmlFor="didRun">Run</StyledLabelLN>
                            <input type="checkbox" id="didFightBack" name="didFightBack"
                                value={addDreamFormState.nightmareReactionFightBack}
                                onChange={(e)=>{
                                    setAddDreamFormState({...addDreamFormState, nightmareReactionFightBack: e.target.checked})}}/>
                            <StyledLabelLN htmlFor="didFightBack">Fight Back</StyledLabelLN>
                        </StyledSpanInput>
                        <StyledSpanInput>
                            <input type="checkbox" id="didHide" name="didHide"
                                value={addDreamFormState.nightmareReactionHide}
                                onChange={(e)=>{
                                    setAddDreamFormState({...addDreamFormState, nightmareReactionHide: e.target.checked})}}/>
                            <StyledLabelLN htmlFor="didHide">Hide</StyledLabelLN>
                            <input type="checkbox" id="Freeze" name="Freeze"
                                value={addDreamFormState.nightmareReactionFreeze}
                                onChange={(e)=>{
                                    setAddDreamFormState({...addDreamFormState, nightmareReactionFreeze: e.target.checked})}}/>
                            <StyledLabelLN htmlFor="Freeze">Freeze</StyledLabelLN>
                        </StyledSpanInput>
                        <StyledSpanInput style={{justifyContent: "center"}}>
                            <input type="checkbox" id="goWithIt" name="goWithIt"
                                value={addDreamFormState.nightmareReactionGoWithIt}
                                onChange={(e)=>{
                                    setAddDreamFormState({...addDreamFormState, nightmareReactionGoWithIt: e.target.checked})}}/>
                            <StyledLabelLN htmlFor="goWithIt" style={{width: "auto", textAlign: "center"}}>Just Go With It</StyledLabelLN>
                        </StyledSpanInput>
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
                            value={addDreamFormState.positivityScore || ""}
                            onChange={(e)=>{setAddDreamFormState({...addDreamFormState, positivityScore: e.target.value})}}/>
                    </StyledSpanInput>
                    <StyledSpanInput>
                        <StyledLabelLN htmlFor="AADPersonalScore">Personal Score:</StyledLabelLN>
                        <Dropdown1To10
                            id="AADPersonalScore"
                            name="AADPersonalScore"
                            value={addDreamFormState.personalScore || ""}
                            onChange={(e)=>{setAddDreamFormState({...addDreamFormState, personalScore: e.target.value})}}/>
                    </StyledSpanInput>
                    <StyledSpanInput>
                        <StyledLabelLN htmlFor="AADAge">Age</StyledLabelLN>
                        <AgeDropdown
                            id="AADAge"
                            name="AADAge"
                            value={addDreamFormState.age || ""}
                            onChange={(e)=>{setAddDreamFormState({...addDreamFormState, age: e.target.value})}}/>
                    </StyledSpanInput>
                    <StyledSpanInput>
                        <StyledLabelLN htmlFor="AADPOV">POV</StyledLabelLN>
                        <POVDropdown
                            id="AADPOV"
                            name="AADPOV"
                            value={addDreamFormState.pov || ""}
                            onChange={(e)=>{setAddDreamFormState({...addDreamFormState, pov: e.target.value})}}/>
                    </StyledSpanInput>
                    <h3 style={{margin: "55px 0 0 0"}}>Was it a unique dream?</h3>
                    <StyledSpan4Radio style={{textAlign: "center", width: "80vw"}}>
                        <StyledSpanInput>
                        <label htmlFor="isUnique">
                            <input
                                type="radio"
                                id="isUnique"
                                name="uniqueDream"
                                style={{marginRight: "10px"}}
                                onChange={()=>Unique()}/>
                           Unique Dream</label>
                        <label htmlFor="isNotUnique">
                            <input
                                type="radio"
                                id="isNotUnique"
                                name="uniqueDream"
                                style={{marginRight: "10px"}}
                                onChange={()=>NotUnique()}/>
                             Repeating / Part of a sreies</label>
                        </StyledSpanInput>
                    </StyledSpan4Radio>
                    <StyledSpanInput style={{flexDirection: "column", marginTop: "0", display: addDreamFormState.isUnique ? "none" : "flex"}}>
                        <StyledLabelForm htmlFor="nameRepeatingSeries" style={{margin: "0"}}>Name The Series</StyledLabelForm>
                        <StyledTagInput
                            id="nameRepeatingSeries"
                            type="text"
                            // selectBoxOptions={series}
                            style={{margin: "0"}}
                            value={addDreamFormState.seriesName}
                            onChange={(e)=>{setAddDreamFormState({...addDreamFormState, seriesName: e.target.value})}}/>
                    </StyledSpanInput>
                    <h3 style={{margin: "55px 0 0 0"}}>Back To Reality</h3>
                    <StyledSpanInput>
                        <StyledLabelLN htmlFor="AADPride">Pride in actions?</StyledLabelLN>
                        <Dropdown1To10
                            id="AADPride"
                            name="AADPersonalScore"
                            value={addDreamFormState.prideScore}
                            onChange={(e)=>{setAddDreamFormState({...addDreamFormState, prideScore: e.target.value})}}/>
                    </StyledSpanInput>
                    <StyledSpanInput style={{flexDirection: "column"}}>
                        <StyledLabelForm htmlFor="situationIRL">What Would've You Done In This Situation In Real Life?</StyledLabelForm>
                        <StyledContentTextInput
                            id="situationIRL"
                            type="text"
                            placeholder="An opportunity to assess your reactions, actions, and state of mind and imagine what would you do in real life, now that you had the experience from the dream to learn from"
                            value={addDreamFormState.situationIRL}
                            onChange={(e)=>{setAddDreamFormState({...addDreamFormState, situationIRL: e.target.value})}}/>
                    </StyledSpanInput>
                    <StyledSpanInput style={{flexDirection: "column"}}>
                        <StyledLabelForm htmlFor="wouldDoIRL">Your interpretation, lessons learned from the dream + hidden or underlying messages</StyledLabelForm>
                        <StyledContentTextInput
                            id="wouldDoIRL"
                            type="text"
                            placeholder="If you feel there's a special or specific meaning to that dream, this is the place for this kind of brainstorm and enlightenment"
                            value={addDreamFormState.personalInterpretation }
                            onChange={(e)=>{setAddDreamFormState({...addDreamFormState, personalInterpretation: e.target.value})}}/>
                    </StyledSpanInput>
                    <SbmtBtn type="button" onClick={(e)=>{
                        const temp = addDreamFormState
                        updateStorage(temp)
                        setAddDreamFormState(obj)
                        setTemp(temp)
                        click2Continue(e, "e");
                    }}
                    style={{display: advance.d}}>Submit and Preview</SbmtBtn>
                </StyledSectionInput>
                <StyledSectionInput style={{display: advance.e}}>
                    <StyledSpanInput style={{justifyContent: "center", alignItems: "center"}}>
                        <ArrowBack onClick={(e) => {click2GoBack(e, "d")}} style={{display: advance.e}}>
                            <ArrowImage src={arrowBack} alt = ""/>
                        </ArrowBack>
                        <AdvanceImg src={advance4}/>
                    </StyledSpanInput>
                    <DreamPage {...temp}/>
                    <SbmtBtn type="button" onClick = {()=>navigate("/journal-page")}>Go to journal</SbmtBtn>
                </StyledSectionInput>
            </StyledForm>
        </StyledDivForPages>
        )
}

export default AddADream;