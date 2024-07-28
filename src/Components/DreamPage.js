
const DreamPage = (props) => {
    console.log(props);
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
    const dreamNightmareReactionRun = props.nightmareReaction.run;
    const dreamNightmareReactionFightBack = props.nightmareReaction.fightBack;
    const dreamNightmareReactionHide = props.nightmareReaction.hide;
    const dreamNightmareReactionFreeze = props.nightmareReaction.freeze;
    const dreamNightmareReactionGoWithIt = props.nightmareReaction.goWithIt;
    const wouldDoIRL = props.situationIRL;
    const dreamPersonalInterpretation = props.personalInterpretation;



    const tagsToP = (arr) => arr.map((tag)=><p>{tag}</p>);
    const isUnique = (bool) => bool ? "A Unique Dream" : "Part of Series: " + dreamSeriesName;
    const scoreParams = (textParam ,lucidParam) => {
        return(
            <span>
                <h4>{textParam}: </h4>
                <p>{lucidParam}</p>
            </span>
        )
    }

    return(
        <div style={{
            display: "felx",
            justifyContent: "center",
            padding: "10px 20px 20px 10px",
            gap: "15px"
        }}>
            <h1 style={{display: dreamName === "" ? "none" : "auto"}}>{dreamName}</h1>
            <h4>{dreamDate}</h4>
            <h2>{dreamContent}</h2>
            <h4>{isUnique(dreamUnique)}</h4>
            <section>
                <h2>Tags</h2>
                <h3 style={{display: emotionTags.length > 0 ? "auto" : "none"}}>Emotions Tags: {tagsToP(emotionTags)}</h3>
                <h3 style={{display: peopleTags.length > 0 ? "auto" : "none"}}>People Tags: {tagsToP(peopleTags)}</h3>
                <h3 style={{display: placesTags.length > 0 ? "auto" : "none"}}>Places Tags: {tagsToP(placesTags)}</h3>
                <h3 style={{display: generalTags.length > 0 ? "auto" : "none"}}>General Tags: {tagsToP(generalTags)}</h3>
            </section>
            <section style={{display: dreamIsLucid ? "auto" : "none"}}>
                <h2>Lucid</h2>
                {scoreParams("Control: ", {dreamLucidControl})}
                {scoreParams("Clarity: ", {dreamLucidClarity})}
                {scoreParams("Cohesino: ", {dreamLucidCohesion})}
            </section>
            <section  style={{display: dreamIsNightmare ? "auto" : "none"}} >
                <h2>Nightmare</h2>
                {scoreParams("Intensity: ", {dreamNightmareIntensity})}
                <h3>Reaction</h3>
                <p style={{display: dreamNightmareReactionRun ? "auto" : "none"}}>Run</p>
                <p style={{display: dreamNightmareReactionFightBack ? "auto" : "none"}}>Fight Back</p>
                <p style={{display: dreamNightmareReactionHide ? "auto" : "none"}}>Hide</p>
                <p style={{display: dreamNightmareReactionFreeze ? "auto" : "none"}}>Freeze</p>
                <p style={{display: dreamNightmareReactionGoWithIt ? "auto" : "none"}}>Just Go With It</p>
            </section>
            <section>
                {scoreParams("Dream Personal Score: ", {dreamPersonalScore})}
                {scoreParams("Dream Positivity Score: ", {dreamPositivityScore})}
                {scoreParams("Dream Pride Score: ", {dreamPrideScore})}
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