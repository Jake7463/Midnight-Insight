import styled from "styled-components";
import ArrowRight from "../../img/arrowRight.svg"


const StyledBtn = styled.button`
    all: unset;
    border-radius: 19px;
    background-color: #265CAE;
    color: #00FB76;
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
    padding: 4px 10px;
    width: 220px;
    padding: 12px 20px;
    border: 2px solid #D1E2F9;
`;

function ApproveBtn(props){
    return <StyledBtn {...props}>Approve and continue<img src={ArrowRight} fill="#00FB76" alt="" style={{width: "65px"}}/></StyledBtn>;
}

export default ApproveBtn;