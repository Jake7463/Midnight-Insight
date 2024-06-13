import { PAll, PBig, SpanSpaceBetween, StyledSpanInput } from "../AddADream/StyledFormInputs";
import useStorage from "../useStorage";

function DreamsToJournal (props){
    const { dreams } = useStorage();
    console.log(dreams)
    return(
        <>
        {dreams.map((dream) => (
            <SpanSpaceBetween key={dream.id} style={{backgroundColor: "#f1f1f1"}}>
                <PAll>#{dream.id}</PAll>
                <PAll>{dream.date}</PAll>
                <PAll>{dream.dreamName? dream.dreamName : "Unnamed"}</PAll>
                <PBig>{dream.isLucid? "V" : "X"}</PBig>
                <PBig>{dream.isNightmare? "v" : "X"}</PBig>
                <PBig>{dream.positivityScore ? dream.positivityScore : "NA"}</PBig>
                <PBig>{dream.prideScore ? dream.prideScore : "NA"}</PBig>
                <PBig>{dream.personalScore ? dream.personalScore : "NA"}</PBig>
            </SpanSpaceBetween>
        ))}
        </>
    );
}

export default DreamsToJournal;