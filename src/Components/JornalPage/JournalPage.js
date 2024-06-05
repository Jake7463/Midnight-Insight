import { StyledH1Input, StyledLabelForm } from "../AddADream/StyledFormInputs";
import SortDropdown from "./SortDropdown";


function JournalPage(){

    return(
        <div>
            <StyledH1Input>Your Dream Journal</StyledH1Input>
            <StyledLabelForm>Sort By:</StyledLabelForm>
            <SortDropdown />
            <StyledLabelForm>Filter</StyledLabelForm>
        </div>
    )
}

export default JournalPage;