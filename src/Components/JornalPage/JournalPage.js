import { PAll, PBig, SearchInput, SpanSpaceBetween, StyledDivPage, StyledH1Input, StyledLabelCentered, StyledLabelForm, StyledSectionInput, StyledSpanInput } from "../AddADream/StyledFormInputs";
import DreamsToJournal from "./DreamsToJournal";
import FilterDropdown from "./FilterDropdown";
import SortDropdown from "./SortDropdown";
import { JChrono, JDate, JL, JN, JName, JPersonal, JPos, JPride, JSpan } from "./StyledJournal";


function JournalPage(){

    return(
        <StyledDivPage>
            <StyledSectionInput>
                <StyledH1Input>Your Dream Journal</StyledH1Input>
                <StyledSpanInput style={{flexDirection: "row"}}>
                    <StyledLabelCentered>Dates</StyledLabelCentered>
                    <SearchInput type="date" style={{width: "120px", textIndent: "5px"}} />
                </StyledSpanInput>
                <StyledSpanInput style={{flexDirection: "row"}}>
                    <StyledLabelCentered>Search:</StyledLabelCentered>
                    <SearchInput type="text" />
                </StyledSpanInput>
            </StyledSectionInput>
            <StyledSectionInput>
                <h2 style={{textAlign: "center", fontSize: "18px", fontWeight: "800", padding: "0 10px", marginTop: "25px"}}>Found #Number dreams for current search</h2>
                <SpanSpaceBetween>
                    <StyledSpanInput style={{flexDirection: "row"}}>
                        <StyledLabelCentered>Sort By:</StyledLabelCentered>
                        <SortDropdown />
                    </StyledSpanInput>
                    <StyledSpanInput style={{flexDirection: "row"}}>
                            <StyledLabelCentered>Filter</StyledLabelCentered>
                            <FilterDropdown />
                    </StyledSpanInput>
                </SpanSpaceBetween>
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