import styled from "styled-components";




const StyledArrowBack  = styled.button`
    display: flex;
    border-radius: 50px;
    align-self: start;
    margin-left: -45px;
    box-shadow: 0 0 2px 1px #D1E2F9;
    @media(min-width: 768.1px){
        margin-left: -150px;
        margin-right: 80px;
        }
`;

const StyledArrowImg = styled.img`
    width: 45px;
    border-radius: 100%;
    border-color: none;
`;

const ArrowBack = (props) => <StyledArrowBack {...props} />
const ArrowImage = (props) => <StyledArrowImg {...props} />

export {ArrowBack, ArrowImage};