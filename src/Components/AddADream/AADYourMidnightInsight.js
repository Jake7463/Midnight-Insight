import PositivityDropdown from '../PositivityFropdown';
import Dropdown1To10 from '../Dropdown1To10';
import { StyledSectionInput, StyledSpanInput, StyledH1Input, StyledLabelLN } from './StyledFormInputs'

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
    </StyledSectionInput>
    );
}


export default AADYourMidnightInsight;