import styled from "styled-components";

function StyledTextArea (){
const StyledTextArea = styled.textarea`
width: 70vw;
max-width: 270px;
border-radius: 19px;
height: 185px;
text-indent: 10px;
font-family: "Caveat", cursive;
font-optical-sizing: auto;
  @media (min-width: 768.1px){
    min-width: 610px;
    max-width: 610px;
    height: 160px;
  }
`;

return <StyledTextArea></StyledTextArea>
};

export default StyledTextArea;