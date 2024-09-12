import styled from "styled-components";

const StyledJSpan = styled.span`
    @media (min-width: 768.1px){
        width: 75vw;
        border-radius: 13px;
        display: grid;
        grid-template-columns: 0.03fr 0.15fr 0.53fr 0.02fr 0.02fr 0.1fr 0.1fr 0.1fr;
        grid-template-areas: "chrono date name lucid nightmare positivity pride personal-score";
        grid-gap: 5px;
    }
`;

const StyledJChrono = styled.p`
    grid-area: chrono;
    background-color: #265cae;
    text-align: center;
    padding: 2px 17px;
    border-radius: 8px;
    margin: 5px 10px;
    align-self: center;
`;
const StyledJDate =styled(StyledJChrono)`
    grid-area: date;
`;
const StyledJName =styled(StyledJChrono)`
    grid-area: name;
`;

const StyledJL =styled(StyledJChrono)`
    grid-area: lucid;
`;

const StyledJN =styled(StyledJChrono)`
    grid-area: nightmare;
`;

const StyledJPos =styled(StyledJChrono)`
    grid-area: positivity;
`;

const StyledJPride =styled(StyledJChrono)`
    grid-area: pride;
`;

const StyledJPersonal =styled(StyledJChrono)`
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