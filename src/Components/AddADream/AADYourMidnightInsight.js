import PositivityDropdown from '../PositivityDropdown';
import Dropdown1To10 from '../Dropdown1To10';
import { StyledSectionInput, StyledSpanInput, StyledH1Input, StyledLabelLN } from './StyledFormInputs'
import AgeDropdown from '../AgeDropdown';
import POVDropdown from '../POVDropdown';

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
    </StyledSectionInput>
    );
}


export default AADYourMidnightInsight;