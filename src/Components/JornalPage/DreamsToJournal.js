import { SpanSpaceBetween, StyledSpanInput } from "../AddADream/StyledFormInputs";
import useStorage from "../useStorage";

const pColor = "#808080";

function DreamsToJournal (props){
    const { dreams } = useStorage();
    console.log(dreams)
    return(
        <>
        {dreams.map((dream) => (
            <SpanSpaceBetween key={dream.id} style={{backgroundColor: "#f1f1f1"}}>
                <p style={{backgroundColor: pColor}}># {dream.id}</p>
                <p style={{backgroundColor: pColor}}>{dream.date}</p>
                <p style={{backgroundColor: pColor}}>{dream.dreamName? dream.dreamName : "Unnamed"}</p>
                <p style={{backgroundColor: pColor}}>{dream.isLucid? "V" : "X"}</p>
                <p style={{backgroundColor: pColor}}>{dream.isNightmare? "v" : "X"}</p>
                <p style={{backgroundColor: pColor}}>{dream.positivityScore ? dream.positivityScore : "NA"}</p>
                <p style={{backgroundColor: pColor}}>{dream.prideScore ? dream.prideScore : "NA"}</p>
                <p style={{backgroundColor: pColor}}>{dream.personalScore ? dream.personalScore : "NA"}</p>
            </SpanSpaceBetween>
        ))}
        </>
    );
}

export default DreamsToJournal;