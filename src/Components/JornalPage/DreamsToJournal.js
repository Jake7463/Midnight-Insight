import { PAll, PBig, SpanSpaceBetween, StyledSpanInput } from "../AddADream/StyledFormInputs";
import useStorage from "../useStorage";

function DreamsToJournal (props){
    const { dreams } = useStorage();
    console.log(dreams)
    return(
        <>
        {dreams.map((dream) => (
            <SpanSpaceBetween key={dream.id} style={{backgroundColor: "#f1f1f1", borderRadius: "7px"}}>
                <PAll style={{width: "25px"}}>#{dream.id}</PAll>
                <PAll style={{width: "60px", marginLeft: "-50px"}}>{dream.date}</PAll>
                <PAll style={{maxWidth: "100px", marginLeft: "-50px"}}>{dream.dreamName? dream.dreamName : "Unnamed"}</PAll>
                <PBig style={{marginLeft: "-40px"}}>{dream.isLucid? "V" : "X"}</PBig>
                <PBig style={{marginLeft: "-30px"}}>{dream.isNightmare? "v" : "X"}</PBig>
                <PBig style={{width: "25px"}}>{dream.positivityScore ? dream.positivityScore : "NA"}</PBig>
                <PBig style={{width: "25px"}}>{dream.prideScore ? dream.prideScore : "NA"}</PBig>
                <PBig style={{width: "25px"}}>{dream.personalScore ? dream.personalScore : "NA"}</PBig>
            </SpanSpaceBetween>
        ))}
        </>
    );
}

export default DreamsToJournal;