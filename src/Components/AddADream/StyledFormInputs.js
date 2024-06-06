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

const StyledLabel = styled.label`
  all: unset;
  padding: 0;
  color: #f1f1f1;
  margin: 15px 0 0 0;
  font-size: 16px;
  max-width: 240px;
  text-align: center;
  @media (min-width: 768.1px){
    max-width: 400px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 15px;
`;

const StyledLabel2 = styled(StyledLabel)`
  justify-content: center;
  align-items: center;
  margin: 0;
`;

const Inp = styled.input`
  border-radius: 7px;
  width: 250px;
  height: 20px;
  @media (min-width: 768.1px){
    width: 450px;
  }
  @media (max-width: 374.9px){
    width: 150px;
  }
`;

const SpecialSpan = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  width: 335px;
  margin: 5px 0;
  @media (min-width: 768.1px){
    flex-direction: row;
    justify-content: space-between;
    width: 530px;
  }
  @media (max-width: 374.9px){
    flex-direction: column;
    justify-content: center;
    align-items: end;
    text-align: left;
    width: 200px;
    margin: 40px 0;
  }
`;

const StyledContentTextInput = (props) => <StyledTextArea {...props} />;
const StyledTagInput = (props) => <StyledTags {...props} />;
const StyledSectionInput =(props) => <StyledSection {...props}/>;
const StyledSpanInput = (props) => <StyledSpan {...props} />
const StyledH1Input = (props) => <StyledH1 {...props}/>;
const StyledLabelLN = (props) => <StyledLabel4LAndN {...props}/>
const StyledLabelForm = (props) => <StyledLabel {...props}/>
const StyledDivPage = (props) => <StyledDiv {...props}/>
const StyledLabelCentered = (props) => <StyledLabel2 {...props}/>
const SearchInput = (props) => <Inp {...props}/>
const SpanSpaceBetween = (props) => <SpecialSpan {...props}/>


export { StyledContentTextInput, StyledTagInput, StyledSectionInput, StyledSpanInput, StyledH1Input, StyledLabelLN, StyledLabelForm, StyledDivPage, StyledLabelCentered, SearchInput, SpanSpaceBetween};