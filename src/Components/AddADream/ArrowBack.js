import styled from "styled-components";




const StyledArrowBack  = styled.button`
    display: flex;
    border-radius: 50px;
    align-self: start;
    margin-left: -25px;
`;

const StyledArrowImg = styled.img`
    width: 45px;
    border-radius: 100%;
    border-color: none;
`;

const ArrowBack = (props) => <StyledArrowBack {...props} />
const ArrowImage = (props) => <StyledArrowImg {...props} />

export {ArrowBack, ArrowImage};