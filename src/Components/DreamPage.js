import { json } from "react-router";

const DreamPage = (props) => {
    const dreamId = props.id;
    const dreamName = props.dreamName;
    const dreamDate = props.date;
    const dreamContent = props.dreamContent;
    const dreamPersonalScore = props.personalScore;
    const dreamPositivityScore = props.positivityScore;
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

    console.log(dreamName);
    console.log(peopleTags);



    const tagsToP = (arr) => {
        return (
            <span style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                {arr.map((tag)=><p style={{
                    padding: "1px 12px 2px 4px",
                    backgroundColor: "#808080",
                    borderRadius: "11px",
                    textAlign: "center",
                    display: "block",
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
            <h1 style={{
                display: dreamName === "" ? "none" : "block"}}>{dreamName}</h1>
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
            }}>{dreamContent}</h2>
            <h4>{isUnique(dreamUnique)}</h4>
            <section style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "auto"}}>
                <h2 style={{marginTop: "32px"}}>Tags</h2>
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
            <section style={{display: dreamIsLucid ? "flex" : "none" , flexDirection:"column"}}>
                <h2>Lucid</h2>
                <span style={{display: dreamLucidControl ? "flex" : "none"}}>
                    <h4>Control: </h4>
                    <p>{dreamLucidControl}</p>
                </span>
                <span style={{display: dreamLucidClarity ? "flex" : "none"}}>
                    <h4>Clarity: </h4>
                    <p>{dreamLucidClarity}</p>
                </span>
                <span style={{display: dreamLucidCohesion ? "flex" : "none"}}>
                    <h4>Cohesion: </h4>
                    <p>{dreamLucidCohesion}</p>
                </span>
            </section>
            <section  style={{display: dreamIsNightmare ? "flex" : "none", flexDirection: "column"}} >
                <h2>Nightmare</h2>
                <span   span style={{display: dreamNightmareIntensity ? "flex" : "none"}}>
                    <h4>Intensity: </h4>
                    <p>{dreamNightmareIntensity}</p>
                </span>
                <h3>Reaction</h3>
                <p style={{display: dreamNightmareReactionRun ? "flex" : "none"}}>Run</p>
                <p style={{display: dreamNightmareReactionFightBack ? "flex" : "none"}}>Fight Back</p>
                <p style={{display: dreamNightmareReactionHide ? "flex" : "none"}}>Hide</p>
                <p style={{display: dreamNightmareReactionFreeze ? "flex" : "none"}}>Freeze</p>
                <p style={{display: dreamNightmareReactionGoWithIt ? "flex" : "none"}}>Just Go With It</p>
            </section>
            <section>
                <span   span style={{display: dreamPersonalScore ? "flex" : "none"}}>
                    <h4>Dream Personal Score: </h4>
                    <p>{dreamPersonalScore}</p>
                </span>
                <span style={{display: dreamPositivityScore ? "flex" : "none"}}>
                    <h4>Dream Positivity Score: </h4>
                    <p>{dreamPositivityScore}</p>
                </span>
                <span style={{display: dreamPrideScore ? "flex" : "none"}}>
                    <h4>Dream Pride Score: </h4>
                    <p>{dreamPrideScore}</p>
                </span>
            </section>
            <section>
                <p>What would you do in real life?</p>
                <p>{wouldDoIRL}</p>
                <p>Insights and personal interpretation</p>
                <p>{dreamPersonalInterpretation}</p>
            </section>
        </div>
    )
}

export default DreamPage;