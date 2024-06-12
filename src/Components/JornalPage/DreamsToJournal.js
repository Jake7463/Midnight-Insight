import { StyledSpanInput } from "../AddADream/StyledFormInputs";
import useStorage from "../useStorage";

const pColor = "#808080";

function DreamsToJournal (props){
    const { dreams } = useStorage();
    console.log(dreams)
    return(
        <>
        {dreams.map((dream) => (
            <StyledSpanInput key={dream.id} style={{backgroundColor: "#f1f1f1"}}>
                <p style={{backgroundColor: pColor}}># {dream.id}</p>
                <p style={{backgroundColor: pColor}}>{dream.date}</p>
                <p style={{backgroundColor: pColor}}>{dream.dreamName}</p>
                <p style={{backgroundColor: pColor}}>{dream.isLucid}</p>
                <p style={{backgroundColor: pColor}}>{dream.isNightmare}</p>
                <p style={{backgroundColor: pColor}}>{dream.positivityScore}</p>
                <p style={{backgroundColor: pColor}}>{dream.prideScore}</p>
                <p style={{backgroundColor: pColor}}>{dream.personalScore}</p>
            </StyledSpanInput>
        ))}
        </>
    );
}

export default DreamsToJournal;