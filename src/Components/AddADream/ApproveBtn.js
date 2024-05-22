import styled from "styled-components";
import ArrowRight from "../../img/arrowRight.svg"


const StyledBtn = styled.button`
    background-color: #265CAE;
    color: #00FB76;
    font-family: "Mulish", sans-serif;
    font-size: 16px;
`;

function ApproveBtn(){
    return <StyledBtn>Approve and continue <img src={ArrowRight} fill="#00FB76" alt=""/></StyledBtn>;
}

export default ApproveBtn;