
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
    const dreamNightmareReactionRun = props.nightmareReactionRun;
    const dreamNightmareReactionFightBack = props.nightmareReactionFightBack;
    const dreamNightmareReactionHide = props.nightmareReactionHide;
    const dreamNightmareReactionFreeze = props.nightmareReactionFreeze;
    const dreamNightmareReactionGoWithIt = props.nightmareReactionGoWithIt;
    const wouldDoIRL = props.situationIRL;
    const dreamPersonalInterpretation = props.personalInterpretation;



    const tagsToP = (arr) => arr.map((tag)=><li key={tag} >{tag}</li>);
    const isUnique = (bool) => bool ? "A Unique Dream" : "Part of Series: " + dreamSeriesName;
    const scoreParams = (textParam ,lucidParam) => {
        return(
            <span>
                <h4>{textParam}: </h4>
                <p>{lucidParam}</p>
            </span>
        )
    }

    const displayTags = (tags) => {
        if (tags){
            return tags.length > 0 ? "flex" : "none";
        }
    }

    return(
        <div style={{
            display: "felx",
            justifyContent: "center",
            padding: "10px 20px 20px 10px",
            gap: "15px"
        }} {...props}>
            <h1 style={{display: dreamName === "" ? "none" : "auto"}}>{dreamName}</h1>
            <h4>{dreamDate}</h4>
            <h2>{dreamContent}</h2>
            <h4>{isUnique(dreamUnique)}</h4>
            <section>
                <h2>Tags</h2>
                <h3 style={{display: emotionTags && emotionTags.length > 0 ? "auto" : "none"}}>
                    Emotions Tags: <ul>{emotionTags ? tagsToP(emotionTags) : ""}</ul></h3>
                <h3 style={{display: peopleTags && peopleTags.length > 0 ? "auto" : "none"}}>
                    People Tags: <ul>{peopleTags ? tagsToP(peopleTags) : ""}</ul></h3>
                <h3 style={{display: placesTags && placesTags.length > 0 ? "auto" : "none"}}>
                    Places Tags: <ul>{placesTags ? tagsToP(placesTags): ""}</ul></h3>
                <h3 style={{display: generalTags && generalTags.length > 0 ? "auto" : "none"}}>
                    General Tags: <ul>{generalTags ? tagsToP(generalTags) : ""}</ul></h3>
            </section>
            <section style={{display: dreamIsLucid ? "flex" : "none" , flexDirection:"column"}}>
                <h2>Lucid</h2>
                {dreamLucidControl ? scoreParams("Control: ", {dreamLucidControl}) : ""}
                {dreamLucidClarity ? scoreParams("Clarity: ", {dreamLucidClarity}) : ""}
                {dreamLucidCohesion ? scoreParams("Cohesino: ", {dreamLucidCohesion}) : ""}
            </section>
            <section  style={{display: dreamIsNightmare ? "auto" : "none"}} >
                <h2>Nightmare</h2>
                {dreamNightmareIntensity ? scoreParams("Intensity: ", {dreamNightmareIntensity}) : ""}
                <h3>Reaction</h3>
                <p style={{display: dreamNightmareReactionRun ? "auto" : "none"}}>Run</p>
                <p style={{display: dreamNightmareReactionFightBack ? "auto" : "none"}}>Fight Back</p>
                <p style={{display: dreamNightmareReactionHide ? "auto" : "none"}}>Hide</p>
                <p style={{display: dreamNightmareReactionFreeze ? "auto" : "none"}}>Freeze</p>
                <p style={{display: dreamNightmareReactionGoWithIt ? "auto" : "none"}}>Just Go With It</p>
            </section>
            <section>
                {dreamPersonalScore ? scoreParams("Dream Personal Score: ", {dreamPersonalScore}) : ""}
                {dreamPositivityScore ? scoreParams("Dream Positivity Score: ", {dreamPositivityScore}) : ""}
                {dreamPrideScore ? scoreParams("Dream Pride Score: ", {dreamPrideScore}) : ""}
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