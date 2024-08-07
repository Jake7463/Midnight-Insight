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

const StyledSpan4btns = styled.span`
    display: flex;
    flex-direction: column;
    gap: 15px;
    @media (min-width: 768.1px) {
        flex-direction: row;
        justify-conent: center;
        gap: 80px;
        margin: 0 10%;
      }
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

const AllP = styled.p`
    background-color: #808080;
    border-radius: 7px;
    padding: 0 2px;
    font-size: 16px;
      font-weight: 600;
    @media (max-width: 480px){
      font-size: 14px;
      font-weight: 200;
      border-radius: 3px;
    }
`;

const BigP = styled(AllP)`
  @media (max-width: 480px){
    display: none;
  }
`;

const StyledH2 = styled.h2`
    text-decoration: none;
    font-weight: 1000;
    font-size: 19px;
    width: 150px;
    text-align: center;
    color: #f1f1f1;
`;

const StyledBtn = styled.button`
    all: unset;
    padding: 2px 10px;
    border: solid 1px #265CAE;
    margin: 15px auto;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: center;
    align-self: center;
    background-color: #f1f1f1;
    border-radius: 19px;
    width: 250px;
    gap: 10px;
    &:hover{
        cursor: pointer;
        transform: scale(102%);
    }
`;

const StyledSbmtBtn = styled.button`
    all: unset;
    border-radius: 19px;
    background-color: #265CAE;
    color: #E2D351;
    font-family: "Mulish", sans-serif;
    font-size: 20px;
    font-weight: 800;
    &:hover{
        cursor: pointer;
        transform: scale(102%);
    }
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    padding: 12px 20px;
    border: 2px solid #E2D351;
    margin: 15px 0 25px 0;
`;

const StyledDivPages =styled.div`
        background-color: #0B1B32;
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
        color: #f1f1f1;
`;

const StyledImg4AadNav = styled.img`
  width: 55vw;
  @media (min-width: 768.1px){
    width: auto;
    aspect-ration: initial;
    width: 20vw;
  }
`;

const StyledSelectTag = styled.select`
border-radius: 5px;
width: 80px;
&:hover{
    cursor: pointer;
}
padding: 0 0 0 4px;
`;

const StyledOptionTag = styled.option`
    display: flex;
    justify-content: center;
    align-items: center;
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
const PBig = (props) => <BigP {...props}/>
const PAll = (props) => <AllP {...props}/>
const StyledTrasncriberSpan = (props) => <StyledSpan4btns {...props}/>
const StyledH2Form = (props) => <StyledH2 {...props} />
const StyledTextFromBtn = (props) => <StyledBtn {...props} />
const StyledDivForPages = (props) => <StyledDivPages {...props} />
const AdvanceImg = (props) => <StyledImg4AadNav {...props} />
const SbmtBtn = (props) => <StyledSbmtBtn {...props} />
const StyledSelect = (props) => <StyledSelectTag {...props} />
const StyledOption = (props) => <StyledOptionTag {...props} />



export { StyledContentTextInput, StyledTagInput, StyledSectionInput, StyledSpanInput, StyledH1Input, StyledLabelLN, StyledLabelForm, StyledDivPage, StyledLabelCentered, SearchInput, SpanSpaceBetween, PBig, PAll, StyledTrasncriberSpan, StyledH2Form, StyledTextFromBtn, StyledDivForPages, AdvanceImg, SbmtBtn, StyledSelect, StyledOption};