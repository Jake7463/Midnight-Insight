import {StyledDivPage, StyledH1Input, StyledSectionInput} from "../AddADream/StyledFormInputs";
import DreamsToJournal from "./DreamsToJournal";

import { JChrono, JDate, JL, JN, JName, JPersonal, JPos, JPride, JSpan } from "./StyledJournal";


function JournalPage(){
    const dreans = JSON.parse(localStorage.getItem("dreams"))
    return(
        <StyledDivPage style={{marginBottom:"43px"}}>
            <StyledSectionInput>
                <StyledH1Input>Your Dream Journal</StyledH1Input>
            </StyledSectionInput>
            <StyledSectionInput>
                <h2 style={{textAlign: "center", fontSize: "18px", fontWeight: "800", padding: "0 10px", marginTop: "25px"}}>
                    You have {dreans.length} dreams in your journal</h2>
                {/* <SpanSpaceBetween>
                    <StyledSpanInput style={{flexDirection: "row"}}>
                        <StyledLabelCentered>Sort By:</StyledLabelCentered>
                        <SortDropdown />
                    </StyledSpanInput>
                    <StyledSpanInput style={{flexDirection: "row"}}>
                            <StyledLabelCentered>Filter</StyledLabelCentered>
                            <FilterDropdown />
                    </StyledSpanInput>
                </SpanSpaceBetween> */}
            </StyledSectionInput>
            <StyledSectionInput style={{marginBottom: "25px"}}>
                <JSpan style={{fontSize: "14px", fontWeight: "200"}}>
                    <JChrono style={{backgroundColor: "inherit"}}>#</JChrono>
                    <JDate style={{backgroundColor: "inherit"}}>Date</JDate>
                    <JName style={{backgroundColor: "inherit", textAlign: "center"}}>Name</JName>
                    <JL style={{backgroundColor: "inherit"}}>L</JL>
                    <JN style={{backgroundColor: "inherit"}}>N</JN>
                    <JPos style={{backgroundColor: "inherit"}}>Positivity Score</JPos>
                    <JPride style={{backgroundColor: "inherit"}}>Pride Score</JPride>
                    <JPersonal style={{backgroundColor: "inherit"}}>Personal Score</JPersonal>
                </JSpan>
                <DreamsToJournal />
            </StyledSectionInput>
        </StyledDivPage>
    )
}

export default JournalPage;