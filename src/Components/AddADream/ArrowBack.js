import styled from "styled-components";




const StyledArrowBack  = styled.button`
    display: flex;
    border-radius: 50%;
`;

const ArrowBack = (props) => <StyledArrowBack {...props} />

export {ArrowBack};