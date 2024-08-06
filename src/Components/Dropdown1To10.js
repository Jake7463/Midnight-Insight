import { useState } from "react";
import { StyledSelect, option } from "./AddADream/StyledFormInputs";

function Dropdown1To10 (props){
    const [select, setSelect] = useState('');
    // const handleChange = (e) => setSelect(e.target.value);
    
    return(
        <StyledSelect {...props} >
            <option disabled={true} value="0">-Choose-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </StyledSelect>
    )
};

export default Dropdown1To10;