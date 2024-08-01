import { json } from "react-router";

const DreamPage = (props) => {
    const dreamId = props.id;
    const dreamName = props.dreamName;
    const dreamDate = props.date;
    const dreamContent = props.dreamContent;
    const dreamPersonalScore = props.personalScore;
    const dreamPositivityScore = props.positivityScore;
    const dreamPOV = props.pov;
    const dreamAge = props.age;
    const dreamPrideScore = props.prideScore;
    const dreamUnique = props.isUnique;
    const dreamSeriesName = props.seriesName;
    const emotionTags = props.emotionTags;
    const peopleTags = props.peopleTags;
    const placesTags = props.placesTags;
    const generalTags = props.generalTags;
    const dreamIsLucid = props.isLucid;
    const dreamLucidControl = props.lucidControl;
    const dreamLucidClarity = props.lucidClarity;
    const dreamLucidCohesion = props.lucidCohesion;
    const dreamIsNightmare = props.isNightmare;
    const dreamNightmareIntensity = props.nightmareIntensity;
    const dreamNightmareReactionRun = props.nightmareReactionRun;
    const dreamNightmareReactionFightBack = props.nightmareReactionFightBack;
    const dreamNightmareReactionHide = props.nightmareReactionHide;
    const dreamNightmareReactionFreeze = props.nightmareReactionFreeze;
    const dreamNightmareReactionGoWithIt = props.nightmareReactionGoWithIt;
    const wouldDoIRL = props.situationIRL;
    const dreamPersonalInterpretation = props.personalInterpretation;

    console.log(dreamAge);
    console.log(peopleTags);



    const tagsToP = (arr) => {
        return (
            <span style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                {arr.map((tag)=><p style={{
                    padding: "1px 8px 2px 2px",
                    backgroundColor: "#808080",
                    borderRadius: "11px",
                    textAlign: "center",
                    display: "block",
                    margin: "1px 3px 1px 0"
            }}>&nbsp;{tag}</p>)}</span>
        )
    }
    const isUnique = (bool) => bool ? "A Unique Dream" : "Part of Series: " + dreamSeriesName;

    return(
        <div style={{
            marginLeft: "auto",
            marginRight: "auto",
            display: "felx",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "10px 20px 20px 20px",
            gap: "15px"
        }} {...props}>
            <h1 style={{display: dreamName === "" ? "none" : "block", fontWeight: "1000", fontSize: "2.4rem"}}>{dreamName}</h1>
            <span style={{display: "flex", justifyContent: "space-between"}}>
                <p>Dream #{dreamId}</p>
                <h4>{dreamDate}</h4>
            </span>
            <h2 style={{
                width: "70vw",
                borderRadius: "19px",
                padding: "10px 20px",
                minHeight: "85px",
                color: "#0B1B32",
                backgroundColor: "#00fb76",
                margin: "1rem auto",
                textAlign: "left",
                fontSize: "18px",
                fontWeight: "600",
            }}>{dreamContent}</h2>
            <h4>{isUnique(dreamUnique)}</h4>
            <section style={{marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <span style={{display: dreamPositivityScore? "flex" : "none", justifyContent: "space-between", width: "80%", margin: "10px 0"}}>
                    <h4>Dream Positivity Score: </h4>
                    <p>{dreamPositivityScore}</p>
                </span>
                <span   span style={{display: dreamPersonalScore ? "flex" : "none", justifyContent: "space-between", width: "80%", margin: "10px 0"}}>
                    <h4>Dream Personal Score: </h4>
                    <p>&nbsp;{dreamPersonalScore}</p>
                </span>
                <span style={{display: dreamPrideScore > 0 && dreamPrideScore < 11 ? "flex" : "none", justifyContent: "space-between", width: "80%", margin: "10px 0"}}>
                    <h4>Dream Pride Score: </h4>
                    <p>{dreamPrideScore}</p>
                </span>
                <span style={{display: dreamPOV === "self" || "other" ? "flex" : "none", justifyContent: "space-between", width: "80%", margin: "10px 0"}}>
                    <h4>Dream Point of View: </h4>
                    <p>{dreamPOV}</p>
                </span>
                <span style={{display: dreamAge? "flex" : "none", justifyContent: "space-between", width: "80%", margin: "10px 0"}}>
                    <h4>Dream Age:</h4>
                    <p>{dreamAge}</p>
                </span>
            </section>
            <section style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "auto"}}>
                <h2 style={{margin: "32px 0 10px 0"}}>Tags</h2>
                <span style={{display: emotionTags && emotionTags.length > 0 ? "flex" : "none", justifyContent: "left", width: "85%", minHeight: "2rem", margin: "8px 0"}}>
                    <h3 style={{marginRight: "10px"}} >Emotions: </h3>
                    <h3>{emotionTags ? tagsToP(emotionTags) : ""}</h3>
                </span>
                <span style={{display: peopleTags && peopleTags.length > 0 ? "flex" : "none", justifyContent: "left", width: "85%", minHeight: "2rem", margin: "8px 0"}}>
                    <h3 style={{marginRight: "10px"}}>People:</h3>
                    <h3>{peopleTags ? tagsToP(peopleTags) : ""}</h3>
                </span>
                < span style={{display: placesTags && placesTags.length > 0 ? "flex" : "none", justifyContent: "left", width: "85%", minHeight: "2rem", margin: "8px 0"}}>
                    <h3 style={{marginRight: "10px"}}>Places: </h3>
                    <h3>{placesTags ? tagsToP(placesTags): ""}</h3>
                </span>
                <span style={{display: generalTags && generalTags.length > 0 ? "flex" : "none", justifyContent: "left", width: "85%", minHeight: "2rem", margin: "8px 0"}}>
                    <h3 style={{marginRight: "10px"}}>General Tags: </h3>
                    <h3>{generalTags ? tagsToP(generalTags) : ""}</h3>
                </span>
            </section>
            <section style={{display: dreamIsLucid ? "flex" : "none" , flexDirection:"column", alignItems: "center", marginTop: "25px"}}>
                <h2 style={{margin: "10px 0"}}>Lucid</h2>
                <span style={{display: dreamLucidControl ? "flex" : "none", justifyContent: "space-between", width: "80%"}}>
                    <h4>Control: </h4>
                    <p>{dreamLucidControl}</p>
                </span>
                <span style={{display: dreamLucidClarity ? "flex" : "none", justifyContent: "space-between", width: "80%"}}>
                    <h4>Clarity: </h4>
                    <p>{dreamLucidClarity}</p>
                </span>
                <span style={{display: dreamLucidCohesion ? "flex" : "none", justifyContent: "space-between", width: "80%"}}>
                    <h4>Cohesion: </h4>
                    <p>{dreamLucidCohesion}</p>
                </span>
            </section>
            <section  style={{display: dreamIsNightmare ? "flex" : "none", flexDirection: "column", alignItems: "center", marginTop: "25px"}} >
                <h2 style={{margin: "10px 0"}}>Nightmare</h2>
                <span   span style={{display: dreamNightmareIntensity ? "flex" : "none", justifyContent: "space-between", width: "80%"}}>
                    <h4>Intensity: </h4>
                    <p>{dreamNightmareIntensity}</p>
                </span>
                <h3 style={{margin: "10px 0"}}>Reaction</h3>
                <span style={{display: "flex", margin: "10px 0"}}>
                    <p style={{display: dreamNightmareReactionRun ? "flex" : "none", margin: "0 8px"}}>Run</p>
                    <p style={{display: dreamNightmareReactionFightBack ? "flex" : "none", margin: "0 8px"}}>Fight Back </p>
                    <p style={{display: dreamNightmareReactionHide ? "flex" : "none", margin: "0 8px"}}>Hide</p>
                    <p style={{display: dreamNightmareReactionFreeze ? "flex" : "none", margin: "0 8px"}}>Freeze</p>
                    <p style={{display: dreamNightmareReactionGoWithIt ? "flex" : "none", margin: "0 8px"}}>Just Go With It</p>
                </span>
            </section>
            <section style={{display: wouldDoIRL ? "flex" : "none", flexDirection: "column", margin: "32px auto", alignItems: "center"}}>
                <h2>What would you do in real life?</h2>
                <p style={{
                    display: "block",
                    padding: "12px 18px",
                    backgroundColor: "#808080",
                    width: "70vw",
                    borderRadius: "14px",
                    marginTop: "14px",
                    textAlign: "left",
                }}>{wouldDoIRL}</p>
            </section>
            <section style={{display: dreamPersonalInterpretation ? "flex" : "none", flexDirection: "column", margin: "32px auto", alignItems: "center"}}>
                <h2>Insights and personal interpretation</h2>
                <p style={{
                    display: "block",
                    padding: "12px 18px",
                    backgroundColor: "#808080",
                    width: "70vw",
                    borderRadius: "14px",
                    marginTop: "14px",
                    textAlign: "left",
                }}>{dreamPersonalInterpretation}</p>
            </section>
        </div>
    )
}

export default DreamPage;