import styled from "styled-components";

const StyledJSpan = styled.span`
    @media screen and (min-width: 1124px) and (max-width: 1585px){
        width: 83vw;
        border-radius: 13px;
        display: grid;
        grid-template-columns: 0.5fr 3fr 4fr 0fr 0fr 1fr 1fr 1fr;
        grid-template-areas: "chrono date name lucid nightmare positivity pride personal-score";
    }
    @media screen and (min-width: 768px) and (max-width: 1123px){
        width: 86vw;
        border-radius: 13px;
        display: grid;
        grid-template-columns: 1fr 3fr 4fr 1.5fr 1.5fr 2.5fr 2.5fr 2.5fr;
        grid-template-areas: "chrono date name lucid nightmare positivity pride personal-score";
    }
    @media screen and (min-width: 1585px){
        width: 75vw;
        border-radius: 13px;
        display: grid;
        grid-template-columns: 0.03fr 0.15fr 0.6fr 0.02fr 0.02fr 0.1fr 0.1fr 0.1fr;
        grid-template-areas: "chrono date name lucid nightmare positivity pride personal-score";
        grid-gap: 15px;
    }
    @media screen and (min-width: 480.1px) and (max-width: 768px){
        width: 92vw;
        border-radius: 13px;
        display: grid;
        grid-template-columns: 1fr 3fr 4fr 1fr 1fr;
        grid-template-areas: "chrono date name lucid nightmare";
    }
    @media screen and (max-width: 480px){
        width: 88vw;
        border-radius: 9px;
        display: grid;
        grid-template-columns: 0.8fr 1.5fr;
        grid-template-areas: "date name";
    }
`;

const StyledJDate =styled.p`
    grid-area: date;
    background-color: #265cae;
    text-align: center;
    padding: 2px 7px;
    border-radius: 8px;
    margin: 5px 10px;
    align-self: center;
    @media screen and (min-width: 1124px) and (max-width: 1585px){
        padding: 2px 4px;
    }
    @media screen and (min-width: 768px) and (max-width: 1123px){
        padding: 0 1px;
    }
`;

const StyledJChrono = styled(StyledJDate)`
    grid-area: chrono;
    @media screen and (max-width: 480px){
        display: none;
    }
`;

const StyledJName =styled(StyledJDate)`
    grid-area: name;
    text-overflow: ellipsis; 
    overflow: hidden; 
    white-space: nowrap;
    text-align: left;
`;

const StyledJL =styled(StyledJChrono)`
    grid-area: lucid;
`;

const StyledJN =styled(StyledJL)`
    grid-area: nightmare;
`;

const StyledJPos =styled(StyledJL)`
    grid-area: positivity;
    @media screen and (min-width: 480px) and (max-width: 768px){
        display: none;
    }
`;

const StyledJPride =styled(StyledJPos)`
    grid-area: pride;
`;

const StyledJPersonal =styled(StyledJPos)`
    grid-area: personal-score;
`;

const JSpan = (props) => <StyledJSpan {...props}/>;
const JChrono = (props) => <StyledJChrono {...props}/>
const JDate = (props) => <StyledJDate {...props}/>
const JName = (props) => <StyledJName {...props}/>
const JL = (props) => <StyledJL {...props}/>
const JN = (props) => <StyledJN {...props}/>
const JPos = (props) => <StyledJPos {...props}/>
const JPride = (props) => <StyledJPride {...props}/>
const JPersonal = (props) => <StyledJPersonal {...props}/>

export {
    JSpan,
    JChrono,
    JDate,
    JName,
    JL,
    JN,
    JPos,
    JPride,
    JPersonal,
}