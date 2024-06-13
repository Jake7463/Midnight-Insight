import { SpanSpaceBetween, StyledSpanInput } from "../AddADream/StyledFormInputs";
import useStorage from "../useStorage";

const styling = {
    backgroundColor: "#808080",
    borderRadius: "3px",
}


function DreamsToJournal (props){
    const { dreams } = useStorage();
    console.log(dreams)
    return(
        <>
        {dreams.map((dream) => (
            <SpanSpaceBetween key={dream.id} style={{backgroundColor: "#f1f1f1"}}>
                <p style={styling}># {dream.id}</p>
                <p style={styling}>{dream.date}</p>
                <p style={styling}>{dream.dreamName? dream.dreamName : "Unnamed"}</p>
                <p style={styling}>{dream.isLucid? "V" : "X"}</p>
                <p style={styling}>{dream.isNightmare? "v" : "X"}</p>
                <p style={styling}>{dream.positivityScore ? dream.positivityScore : "NA"}</p>
                <p style={styling}>{dream.prideScore ? dream.prideScore : "NA"}</p>
                <p style={styling}>{dream.personalScore ? dream.personalScore : "NA"}</p>
            </SpanSpaceBetween>
        ))}
        </>
    );
}

export default DreamsToJournal;