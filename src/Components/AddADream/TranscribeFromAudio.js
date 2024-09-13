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
      recognition.continuous = true;  // Keep continuous recording
      recognition.interimResults = true;
      recognition.lang = 'en-US';
      let silenceTimer = null;

      // Handle speech recognition results
      recognition.onresult = (e) => {
          let interimTranscript = '';
          for (let i = e.resultIndex; i < e.results.length; i++) {
              const transcript = e.results[i][0].transcript;
              interimTranscript += transcript;
          }
          onTranscriptChange(interimTranscript);
          // Clear the silence timer since we received a result (i.e., user is speaking)
          if (silenceTimer) {
              clearTimeout(silenceTimer);
          }
      };
      // Handle speech end (i.e., silence detection)
      recognition.onspeechend = () => {
          // Start a 10-second silence timer after the last speech detected
          silenceTimer = setTimeout(() => {
              recognition.stop();  // Stop recognition if silence lasts for 10 seconds
              setIsListening(false);  // Update the listening state to reflect that it's stopped
          }, 20000);  // 10 seconds of silence before stopping
      };
      recognition.onerror = (event) => {
          console.error('Speech recognition error', event.error);
          setIsListening(false);
      };
      if (isListening) {
          recognition.start();  // Start recording when the user presses the button
      } else {
          recognition.stop();  // Stop recording when the user presses the button
          if (silenceTimer) clearTimeout(silenceTimer);  // Clear any active silence timers
      }
      return () => {
          recognition.stop();  // Cleanup: stop recording when the component unmounts
          if (silenceTimer) clearTimeout(silenceTimer);
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