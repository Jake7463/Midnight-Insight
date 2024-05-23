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

function Dropdown1To10 (props){
    
    return(
        <StyledSelect {...props}>
            <StyledOption value="1">1</StyledOption>
            <StyledOption value="2">2</StyledOption>
            <StyledOption value="3">3</StyledOption>
            <StyledOption value="4">4</StyledOption>
            <StyledOption value="5">5</StyledOption>
            <StyledOption value="6">6</StyledOption>
            <StyledOption value="7">7</StyledOption>
            <StyledOption value="8">8</StyledOption>
            <StyledOption value="9">9</StyledOption>
            <StyledOption value="10">10</StyledOption>
        </StyledSelect>
    )
};

export default Dropdown1To10;