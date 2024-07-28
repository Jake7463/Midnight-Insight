import styled from "styled-components";

const StyledSelect = styled.select`
    border-radius: 5px;
    width: 80px;
    &:hover{
        cursor: pointer;
    }
    padding: 0 0 0 4px;
`;

function POVDropdown(props){
    return(
        <StyledSelect {...props}>
            <option value="self">Self</option>
            <option value="other">Other</option>
        </StyledSelect>
    )
}

export default POVDropdown;