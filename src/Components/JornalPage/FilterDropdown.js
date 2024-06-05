import styled from "styled-components";

const StyledSelect = styled.select`
    border-radius: 5px;
    width: 80px;
    &:hover{
        cursor: pointer;
    }
    padding-left: 4px;
`;

const StyledOption = styled.option`
    display: flex;
    justify-content: center;
    align-items: center;
`;

function FilterDropdown(props){
    return(
        <StyledSelect {...props}>
            <StyledOption value="choose">Choose</StyledOption>
            <StyledOption value="chronological">Chronological</StyledOption>
            <StyledOption value="date">Date</StyledOption>
            <StyledOption value="name">Name</StyledOption>
            <StyledOption value="lucid">Lucid</StyledOption>
            <StyledOption value="nightmare">Nightmare</StyledOption>
            <StyledOption value="positivity">Positivity Score</StyledOption>
            <StyledOption value="pride">Pride Score</StyledOption>
            <StyledOption value="personalScore">Personal Score</StyledOption>
        </StyledSelect>
    )
}

export default FilterDropdown;