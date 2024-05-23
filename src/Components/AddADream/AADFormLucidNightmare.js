import styled from "styled-components"
import Dropdown1To10 from "../Dropdown1To10";
import { StyledSectionInput, StyledSpanInput, StyledH1Input, StyledLabelLN } from './StyledFormInputs'

function AADFormLucidNightmare (){
    return (
    <StyledSectionInput>
        <StyledH1Input>Lucid And Nightmare</StyledH1Input>
        <StyledSpanInput>
            <input type="checkbox" id="isLucid" name="isLucid"></input>
            <label htmlFor="isLucid"><h2>Lucid Dream</h2></label>
        </StyledSpanInput>
        <StyledSpanInput>
            <StyledLabelLN htmlFor="AADClarityScore">Clarity:</StyledLabelLN>
            <Dropdown1To10 id="AADClarityScore" name="AADClarityScore"/>
        </StyledSpanInput>
        <StyledSpanInput>
            <StyledLabelLN htmlFor="AADCohesionScore">Cohesion:</StyledLabelLN>
            <Dropdown1To10 id="AADCohesionScore" name="AADCohesionScore"/>
        </StyledSpanInput>
        <StyledSpanInput>
            <StyledLabelLN htmlFor="AADControlScore">Control:</StyledLabelLN>
            <Dropdown1To10 id="AADControlScore" name="AADControlScore"/>
        </StyledSpanInput>
        <StyledSpanInput>
            <input type="checkbox" id="isNightmare" name="isNightmare"></input>
            <label htmlFor="isNightmare"><h2>Nightmare</h2></label>
        </StyledSpanInput>
        <StyledSpanInput>
            <StyledLabelLN htmlFor="AADClarityScore">Intensity:</StyledLabelLN>
            <Dropdown1To10 id="AADClarityScore" name="AADClarityScore"/>
        </StyledSpanInput>
        <h3>Reaction</h3>
        <StyledSpanInput>
            <input type="checkbox" id="didRun" name="didRun"></input>
            <StyledLabelLN htmlFor="didRun">Run</StyledLabelLN>
            <input type="checkbox" id="didFightBack" name="didFightBack"></input>
            <StyledLabelLN htmlFor="didFightBack">Fight Back</StyledLabelLN>
        </StyledSpanInput>
        <StyledSpanInput>
            <input type="checkbox" id="didHide" name="didHide"></input>
            <StyledLabelLN htmlFor="didHide">Hide</StyledLabelLN>
            <input type="checkbox" id="Freeze" name="Freeze"></input>
            <StyledLabelLN htmlFor="Freeze">Freeze</StyledLabelLN>
        </StyledSpanInput>
    </StyledSectionInput>
)
}

export default AADFormLucidNightmare;