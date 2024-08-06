import { useState } from "react";
import { StyledSelect } from "./AddADream/StyledFormInputs";

function PositivityDropdown (props){
    const [select, setSelect] = useState('');
    // const handleChange = (e) => setSelect(e.target.value);

    return(
        <StyledSelect {...props} >
            <option disabled={true} value="">-Choose-</option>
            <option value="Positive">Positive</option>
            <option value="Neutral">Neutral</option>
            <option value="Negative">Negative</option>
        </StyledSelect>
    )
}

export default PositivityDropdown;