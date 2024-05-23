import styled from "styled-components";

function AgeDropdown(props){
    
    const StyledSelect = styled.select`
    border-radius: 5px;
    width: 80px;
    &:hover{
        cursor: pointer;
    }
    padding: 0 0 0 4px;
`;

    return(
        <StyledSelect {...props}>
            <option value="current">Current</option>
            <option value="baby">Baby</option>
            <option value="childhood">Child</option>
            <option value="teenage">Teenager</option>
            <option value="youngAdult">Young Adult</option>
            <option value="in30s">In the 30`s</option>
            <option value="in40s">In the 40`s</option>
            <option value="in40s">In the 50`s</option>
        </StyledSelect>
    )
}

export default AgeDropdown;