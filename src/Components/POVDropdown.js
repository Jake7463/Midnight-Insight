import { useState } from "react";
import { StyledSelect } from "./AddADream/StyledFormInputs";

function POVDropdown({value, onChange, ...props}){

    return(
        <StyledSelect value={value} onChange={onChange} {...props} >
            <option disabled={true} value="">-Choose-</option>
            <option value="Self">Self</option>
            <option value="Other">Other</option>
        </StyledSelect>
    )
}

export default POVDropdown;