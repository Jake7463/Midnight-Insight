import styled from "styled-components"
import StyledTextArea from "./StyledTextArea";

const StyledForm = styled.form`
        font-family: "Mulish", sans-serif;
        font-size: 16px;
`;

const StyledDreamName = styled.input`
`;

function AddADreamForm (){
    return(
        <form>
            <StyledTextArea></StyledTextArea>
        </form>)
}

export default AddADreamForm;