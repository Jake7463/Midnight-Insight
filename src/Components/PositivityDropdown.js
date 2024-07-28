import styled from "styled-components";

const StyledSelect = styled.select`
    border-radius: 5px;
    width: 80px;
    &:hover{
        cursor: pointer;
    }
    padding: 0 0 0 4px;
`;

function PositivityDropdown (props){
    return(
        <StyledSelect {...props}>
            <option value="positive">Positive</option>
            <option value="neutral">Neutral</option>
            <option value="negative">Negative</option>
        </StyledSelect>
    )
}

export default PositivityDropdown;