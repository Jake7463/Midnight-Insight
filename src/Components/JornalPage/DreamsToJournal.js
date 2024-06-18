import { PAll, PBig, SpanSpaceBetween, StyledSpanInput } from "../AddADream/StyledFormInputs";
import useStorage from "../useStorage";

function DreamsToJournal (props){
    const { dreams } = useStorage();
    return(
        <>
        {dreams.map((dream) => (
            <SpanSpaceBetween key={dream.id} style={{backgroundColor: "#f1f1f1", borderRadius: "7px"}}>
                <PAll style={{width: "25px", marginLeft: "5px"}}>#{dream.id}</PAll>
                <PAll style={{width: "60px", marginLeft: "-30px"}}>{dream.date}</PAll>
                <PAll style={{maxWidth: "150px", marginLeft: "-30px", marginRight: "5px"}}>{dream.dreamName? dream.dreamName : "Unnamed"}</PAll>
                <PBig style={{marginLeft: "0"}}>{dream.isLucid? "V" : "X"}</PBig>
                <PBig style={{marginLeft: "0"}}>{dream.isNightmare? "v" : "X"}</PBig>
                <PBig style={{width: "25px", marginRight: "-28px"}}>{dream.positivityScore ? dream.positivityScore : "NA"}</PBig>
                <PBig style={{width: "25px", marginRight: "-28px"}}>{dream.prideScore ? dream.prideScore : "NA"}</PBig>
                <PBig style={{width: "25px", marginRight: "5px"}}>{dream.personalScore ? dream.personalScore : "NA"}</PBig>
            </SpanSpaceBetween>
        ))}
        </>
    );
}

export default DreamsToJournal;