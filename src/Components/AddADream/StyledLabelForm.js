import styled from "styled-components";


const StyledLabel = styled.label`
    color: #f1f1f1;
    margin: 15px 0 0 0;
    font-size: 16px;
    word-break: break-all;
`;

function StyledLabelForm(props){
    return <StyledLabel {...props}/>
};

export default StyledLabelForm; 