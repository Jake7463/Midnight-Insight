import { json } from "react-router";

const DreamPage = (props) => {
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
    const generalTags = props.GeneralTags;
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



    const tagsToP = (arr) => arr.map((tag)=><p>&nbsp;{tag}</p>);
    const isUnique = (bool) => bool ? "A Unique Dream" : "Part of Series: " + dreamSeriesName;

    return(
        <div style={{
            display: "felx",
            justifyContent: "center",
            padding: "10px 20px 20px 10px",
            gap: "15px"
        }} {...props}>
            <h1 style={{display: dreamName === "" ? "none" : "flex"}}>{dreamName}</h1>
            <h4>{dreamDate}</h4>
            <h2>{dreamContent}</h2>
            <h4>{isUnique(dreamUnique)}</h4>
            <section>
                <h2>Tags</h2>
                <h3 style={{display: emotionTags && emotionTags.length > 0 ? "flex" : "none"}}>
                    Emotions Tags: {emotionTags ? tagsToP(emotionTags) : ""}</h3>
                <h3 style={{display: peopleTags && peopleTags.length > 0 ? "flex" : "none"}}>
                    People Tags: {peopleTags ? tagsToP(peopleTags) : ""}</h3>
                <h3 style={{display: placesTags && placesTags.length > 0 ? "flex" : "none"}}>
                    Places Tags: {placesTags ? tagsToP(placesTags): ""}</h3>
                <h3 style={{display: generalTags && generalTags.length > 0 ? "flex" : "none"}}>
                    General Tags: {generalTags ? tagsToP(generalTags) : ""}</h3>
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