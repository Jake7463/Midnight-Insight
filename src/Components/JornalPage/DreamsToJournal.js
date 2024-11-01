import { JChrono, JDate, JL, JN, JName, JPersonal, JPos, JPride, JSpan } from "./StyledJournal";
import useStorage from "../useStorage";
import DreamPage from "../DreamPage";
import { useState } from "react";


function DreamsToJournal (props){
    const { dreams } = useStorage();
    const [show, setShow] = useState()
    const clickity = (e) =>{
        show === "none" ? setShow("flex") : setShow("none")
    }
    return(
        <>
        {dreams.map((dream) => (
            <JSpan  >
                <JSpan
                key={dream.id}
                style={{backgroundColor: "#f1f1f1"}}
                onClick = {clickity}>
                    <JChrono>#{dream.id}</JChrono>
                    <JDate>{dream.date}</JDate>
                    <JName>{dream.dreamName? dream.dreamName : "Unnamed"}</JName>
                    <JL>{dream.isLucid? "✔" : "∎"}</JL>
                    <JN>{dream.isNightmare? "✔" : "∎"}</JN>
                    <JPos>{dream.positivityScore ? dream.positivityScore : "NA"}</JPos>
                    <JPride>{dream.prideScore ? dream.prideScore : "NA"}</JPride>
                    <JPersonal>{dream.personalScore ? dream.personalScore : "NA"}</JPersonal>
                </JSpan>
                <DreamPage {...dream} style={{display: "none"}}/>
            </JSpan>
        ))}
        </>
    );
}

export default DreamsToJournal;