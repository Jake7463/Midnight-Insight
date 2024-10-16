import { useState } from "react";
import { StyledSelect } from "./AddADream/StyledFormInputs";

function PositivityDropdown ({value, onChange, ...props}){

    return(
        <StyledSelect value={value} onChange={onChange} {...props} >
            <option disabled={true} value="">-Choose-</option>
            <option value="Positive">Positive</option>
            <option value="Neutral">Neutral</option>
            <option value="Negative">Negative</option>
        </StyledSelect>
    )
}

export default PositivityDropdown;