import styled from "styled-components";

const StyledTextArea = styled.textarea`
  width: 70vw;
  font-size: 18px;
  margin: 0;
  padding: 4px;
  max-width: 262px;
  border-radius: 19px;
  height: 185px;
  text-indent: 10px;
  font-family: "Caveat", cursive;
  word-break: break-all;
  font-optical-sizing: auto;
  @media (min-width: 768.1px) {
    min-width: 602px;
    max-width: 602px;
    height: 160px;
  }
`;

const StyledTags = styled(StyledTextArea)`
  height: 48px;
  @media (min-width: 768.1px) {
    height: 56px;
  }
`;

const StyledSection = styled.section`
    margin: 15px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
`;

const StyledSpan = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin: 8px 0;
`;

const StyledH1 = styled.h1`
    font-weight: 800;
`;

const StyledLabel4LAndN = styled.label`
    width: 80px;
`;

const StyledContentTextInput = (props) => <StyledTextArea {...props} />;
const StyledTagInput = (props) => <StyledTags {...props} />;
const StyledSectionInput =(props) => <StyledSection {...props}/>;
const StyledSpanInput = (props) => <StyledSpan {...props} />
const StyledH1Input = (props) => <StyledH1 {...props}/>;
const StyledLabelLN = (props) => <StyledLabel4LAndN {...props}/>

export { StyledContentTextInput, StyledTagInput, StyledSectionInput, StyledSpanInput, StyledH1Input, StyledLabelLN };