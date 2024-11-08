import { useState } from "react";
import { StyledSelect, option } from "./AddADream/StyledFormInputs";

function Dropdown1To10 ({value, onChange, ...props}){

    return(
        <StyledSelect value={value} onChange={onChange} {...props} >
            <option disabled={true} value="">-Choose-</option>
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