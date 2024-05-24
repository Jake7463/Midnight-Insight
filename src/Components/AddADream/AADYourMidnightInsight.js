import PositivityDropdown from '../PositivityDropdown';
import Dropdown1To10 from '../Dropdown1To10';
import { StyledContentTextInput, StyledSectionInput, StyledSpanInput, StyledH1Input, StyledLabelLN, StyledTagInput} from './StyledFormInputs'
import AgeDropdown from '../AgeDropdown';
import POVDropdown from '../POVDropdown';
import StyledLabelForm from "./StyledLabelForm";

function AADYourMidnightInsight(){
    return(
    <StyledSectionInput>
        <StyledH1Input>Your Midnight Insight</StyledH1Input>
        <StyledSpanInput>
            <StyledLabelLN htmlFor="AADPositivity">Positivity:</StyledLabelLN>
            <PositivityDropdown id="AADPositivity" name="AADPositivity"/>
        </StyledSpanInput>
        <StyledSpanInput>
            <StyledLabelLN htmlFor="AADPersonalScore">Personal Score:</StyledLabelLN>
            <Dropdown1To10 id="AADPersonalScore" name="AADPersonalScore"/>
        </StyledSpanInput>
        <StyledSpanInput>
            <StyledLabelLN htmlFor="AADAge">Age</StyledLabelLN>
            <AgeDropdown id="AADAge" name="AADAge"/>
        </StyledSpanInput>
        <StyledSpanInput>
            <StyledLabelLN htmlFor="AADPOV">POV</StyledLabelLN>
            <POVDropdown id="AADPOV" name="AADPOV"/>
        </StyledSpanInput>
        <StyledSpanInput style={{alignSelf: "start"}}>
            <input type="radio" id="isUnique" name="uniqueDream" value="Unique Dream"/>
            <label htmlFor="isUnique">Unique Dream</label>
        </StyledSpanInput>
        <StyledSpanInput style={{alignSelf: "start"}}>
            <input type="radio" id="isNotUnique" name="uniqueDream"value="Repeating / Part of a sreies"/>
            <label htmlFor="isNotUnique">Repeating / Part of a sreies</label>
        </StyledSpanInput>
        <StyledSpanInput style={{flexDirection: "column"}}>
            <StyledLabelForm htmlFor="nameRepeatingSeries">Name The Series</StyledLabelForm>
            <StyledTagInput id="nameRepeatingSeries" type="text" placeholder="Start typing here..."/>
        </StyledSpanInput>
        <StyledSpanInput style={{flexDirection: "column"}}>
            <StyledLabelForm htmlFor="situationIRL">What Would've You Done In This Situation In real Life</StyledLabelForm>
            <StyledContentTextInput id="situationIRL" type="text" placeholder="Start typing here..."/>
        </StyledSpanInput>
        <StyledSpanInput>
            <StyledLabelLN htmlFor="AADPride">Pride in actions?</StyledLabelLN>
            <Dropdown1To10 id="AADPride" name="AADPersonalScore"/>
        </StyledSpanInput>
        <StyledSpanInput style={{flexDirection: "column"}}>
            <StyledLabelForm htmlFor="wouldDoIRL">Your interpretation, lessons learned from the dream + hidden or underlying messages</StyledLabelForm>
            <StyledContentTextInput id="wouldDoIRL" type="text" placeholder="Start typing here..."/>
        </StyledSpanInput>
    </StyledSectionInput>
    );
}


export default AADYourMidnightInsight;