import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import uploadAudio from "../../img/microphone.svg";
import { StyledLabelForm, StyledSpanInput, StyledTextFromBtn} from "./StyledFormInputs";


const StyledP = styled.p`
    text-decoration: none;
    font-family: "Mulish", sans-serif;
    font-weight: 1000;
    font-size: 19px;
    width: 150px;
    text-align: left;
`;

const TranscribeFromAudio = ({ onTranscriptChange, onListeningChange }) => {
    const [isListening, setIsListening] = useState(false);
    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
          console.error('Speech Recognition is not supported in this browser.');
          return;
        }
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';
        recognition.onresult = (e) => {
          let interimTranscript = '';
          for (let i = e.resultIndex; i < e.results.length; i++) {
            const transcript = e.results[i][0].transcript;
            interimTranscript += transcript;
            console.log(e.results[i][0]);
          }
          onTranscriptChange(interimTranscript);
        };
        recognition.onerror = (event) => {
          console.error('Speech recognition error', event.error);
          setIsListening(false);
        };    if (isListening) {
          recognition.start();
        } else {
          recognition.stop();
        }    return () => {
          recognition.stop();
        };
      }, [isListening, onTranscriptChange]);
      const toggleListening = () => {
        const newIsListening = !isListening;
        setIsListening(newIsListening);
        onListeningChange(newIsListening);
      };

    return(
        <StyledSpanInput style={{flexDirection: "column"}}>
        <StyledLabelForm style={{marginBottom: "-30px"}}>Transcribe from audio</StyledLabelForm>
            <StyledTextFromBtn onClick={toggleListening}>
                <img src={uploadAudio} style={{height: "10vh", margin: "5px 8px"}}/>
                <StyledP>{isListening ? 'Stop Recording' : 'Start Recording'}</StyledP>
            </StyledTextFromBtn>
        </StyledSpanInput>
    )
}

export default TranscribeFromAudio;