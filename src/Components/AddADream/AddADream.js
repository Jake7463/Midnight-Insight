import styled from "styled-components";

import AddADreamForm from "./AddADreamForm";
import { StyledH1Input, StyledSectionInput } from "./StyledFormInputs";

const StyledDiv =styled.div`
        background-color: #0B1B32;
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
        color: #f1f1f1;
`;


function AddADream(){

    return (
        <StyledDiv>
            <StyledH1Input style={{fontWeight: "1000", fontSize: "32px", marginTop: "30px"}}>ADD A DREAM</StyledH1Input>
            <AddADreamForm />
        </StyledDiv>
    )
};

export default AddADream;