import { useState } from "react";
import { StyledSelect } from "./AddADream/StyledFormInputs";

function POVDropdown(props){
    const [select, setSelect] = useState('');
    // const handleChange = (e) => setSelect(e.target.value);

    return(
        <StyledSelect {...props} >
            <option disabled={true} value="">-Choose-</option>
            <option value="Self">Self</option>
            <option value="Other">Other</option>
        </StyledSelect>
    )
}

export default POVDropdown;