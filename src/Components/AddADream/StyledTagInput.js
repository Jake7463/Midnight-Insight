import styled from "styled-components";

const StyledInput = styled.input`
    width: 268px;
    border-radius: 10px;
    text-indent: 10px;
    font-family: "Caveat", cursive;
    font-size: 18px;
    @media (min-width: 768.1px){
        width: 610px;
    }
`;

function StyledTagInput(props){
    return <StyledInput {...props}/>
}

export default StyledTagInput;