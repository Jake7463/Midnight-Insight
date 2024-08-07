import styled from "styled-components";
import ArrowRight from "../../img/arrowRight.svg"


const StyledBtn = styled.button`
    all: unset;
    border-radius: 19px;
    background-color: #265CAE;
    color: #f1f1f1;
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
    overflow-wrap: break-word;
    width: 180px;
    padding: 12px 20px;
    border: 2px solid #D1E2F9;
    margin: 15px 0 25px 0;
`;

function ApproveBtn(props){
    return <StyledBtn {...props}>Approve and continue<img src={ArrowRight} fill="#00FB76" alt="" style={{width: "65px"}}/></StyledBtn>;
}

export default ApproveBtn;