import { PAll, PBig, SpanSpaceBetween, StyledSpanInput } from "../AddADream/StyledFormInputs";
import { JChrono, JDate, JL, JN, JName, JPersonal, JPos, JPride, JSpan } from "./StyledJournal";
import useStorage from "../useStorage";

function DreamsToJournal (props){
    const { dreams } = useStorage();
    return(
        <>
        {dreams.map((dream) => (
            <JSpan key={dream.id} style={{backgroundColor: "#f1f1f1"}}>
                <JChrono>#{dream.id}</JChrono>
                <JDate>{dream.date}</JDate>
                <JName>{dream.dreamName? dream.dreamName : "Unnamed"}</JName>
                <JL>{dream.isLucid? "✔" : "∎"}</JL>
                <JN>{dream.isNightmare? "✔" : "∎"}</JN>
                <JPos>{dream.positivityScore ? dream.positivityScore : "NA"}</JPos>
                <JPride>{dream.prideScore ? dream.prideScore : "NA"}</JPride>
                <JPersonal>{dream.personalScore ? dream.personalScore : "NA"}</JPersonal>
            </JSpan>
        ))}
        </>
    );
}

export default DreamsToJournal;