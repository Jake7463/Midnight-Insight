import styled from "styled-components";

function StyledFormInputs (props){
  const StyledTextArea = styled.textarea`
  width: 70vw;
  font-size: 18px;
  margin: 0;
  padding: 1px 4px;
  max-width: 262px;
  border-radius: 19px;
  height: 185px;
  text-indent: 10px;
  font-family: "Caveat", cursive;
  font-optical-sizing: auto;
  @media (min-width: 768.1px){
    min-width: 602px;
    max-width: 602px;
    height: 160px;
  }
  `;
  function StyledContentTextInput (props){
  return <StyledTextArea {...props}/>
  };

  const StyledInput = styled(StyledTextArea)`
  `;

  function StyledTagInput(props){
      return <StyledInput {...props} rows="1"/>;
  };
  return{
    StyledContentTextInput,
    StyledTagInput
  }
}
export default StyledFormInputs;