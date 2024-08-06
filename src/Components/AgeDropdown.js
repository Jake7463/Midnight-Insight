import { useState } from "react";
import { StyledSelect } from "./AddADream/StyledFormInputs";

function AgeDropdown(props){
    const [select, setSelect] = useState('');
    // const handleChange = (e) => setSelect(e.target.value);


    return(
        <StyledSelect {...props}>
            <option disabled={true} value="">-Choose-</option>
            <option value="Current">Current</option>
            <option value="Baby">Baby</option>
            <option value="Childhood">Child</option>
            <option value="Teenage">Teenager</option>
            <option value="Young-Adult">Young Adult</option>
            <option value="Other">Other</option>
        </StyledSelect>
    )
}

export default AgeDropdown;