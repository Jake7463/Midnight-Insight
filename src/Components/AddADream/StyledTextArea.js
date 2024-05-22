import styled from "styled-components";

function StyledTextArea (props){
const StyledTextArea = styled.textarea`
width: 70vw;
font-size: 18px;
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

return <StyledTextArea {...props}/>
};

export default StyledTextArea;