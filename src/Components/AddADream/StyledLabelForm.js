import styled from "styled-components";


const StyledLabel = styled.label`
    all: unset;
    padding: 0;
    color: #f1f1f1;
    margin: 15px 0 0 0;
    font-size: 16px;

    max-width: 240px;
    text-align: center;
`;

function StyledLabelForm(props){
    return <StyledLabel {...props}/>
};

export default StyledLabelForm; 