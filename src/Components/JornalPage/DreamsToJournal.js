import { JChrono, JDate, JL, JN, JName, JPersonal, JPos, JPride, JSpan } from "./StyledJournal";
import useStorage from "../useStorage";
import DreamPage from "../DreamPage";
import { useState } from "react";


function DreamsToJournal (){
    const { dreams } = useStorage();
    const [visibleDreams, setVisibleDreams] = useState({});
    const toggleDream = (dreamId) => {
    setVisibleDreams(prev => ({
      ...prev,
      [dreamId]: !prev[dreamId]
    }));
  };

    return(
        <>
        {dreams.map((dream) => (
            <JSpan style={{display: "flex" ,flexDirection: "column", backgroundColor: "#0B1B32"}} key={dream.id}>
                <button onClick={()=> toggleDream(dream.id)} style={{color: "#f1f1f1", fontSize: "1rem", backgroundColor: "#0B1B32", borderWidth: "0"}}>
                <JSpan style={{backgroundColor: "#f1f1f1"}}>
                    <JChrono>#{dream.id}</JChrono>
                    <JDate>{dream.date}</JDate>
                    <JName>{dream.dreamName? dream.dreamName : "Unnamed"}</JName>
                    <JL>{dream.isLucid? "✔" : "∎"}</JL>
                    <JN>{dream.isNightmare? "✔" : "∎"}</JN>
                    <JPos>{dream.positivityScore ? dream.positivityScore : "NA"}</JPos>
                    <JPride>{dream.prideScore ? dream.prideScore : "NA"}</JPride>
                    <JPersonal>{dream.personalScore ? dream.personalScore : "NA"}</JPersonal>
                </JSpan>
                </button>
                <DreamPage {...dream} style={{display: visibleDreams[dream.id] ? "block" : "none"  }}/>
            </JSpan>
        ))}
        </>
    );
}

export default DreamsToJournal;