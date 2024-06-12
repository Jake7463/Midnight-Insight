import { SearchInput, SpanSpaceBetween, StyledDivPage, StyledH1Input, StyledLabelCentered, StyledLabelForm, StyledSectionInput, StyledSpanInput } from "../AddADream/StyledFormInputs";
import DreamsToJournal from "./DreamsToJournal";
import FilterDropdown from "./FilterDropdown";
import SortDropdown from "./SortDropdown";


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
            <StyledSectionInput>
                <SpanSpaceBetween style={{fontSize: "14px", fontWeight: "200"}}>
                    <p>#</p>
                    <p>Date</p>
                    <p>Name</p>
                    <p>L</p>
                    <p>N</p>
                    <p>Positivity</p>
                    <p>Pride</p>
                    <p>Score</p>
                </SpanSpaceBetween>
                <DreamsToJournal />
            </StyledSectionInput>
        </StyledDivPage>
    )
}

export default JournalPage;