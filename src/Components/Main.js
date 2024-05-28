import { Route , Routes } from 'react-router-dom';
import AddADream from './AddADream/AddADream';
import { useState } from 'react';

const obj = {
  dreamContent: "",
  dreamName: "",
  emotionTags: [],
  peopleTags: [],
  placesTags: [],
  generalTags: [],
  isLucid: false,
  lucidClarity: null,
  lucidCohesion: null,
  lucidControl: null,
  isNightmare: false,
  nightmareIntensity: null,
  nightmareReaction: {fightBack: false, run: false, hide: false, freeze: false,},
  positivityScore: null,
  personalScore: null,
  age: "",
  pov: "",
  isUnique: true,
  seriesName: "",
  situationIRL: "",
  prideScore: null,
  personalInterpretation: "",
}


function Main() {
  const [addDreamFormState, setAddDreamFormState] = useState(obj);
    // <Route path="/home" element={<MyProfile />} />
    // <Route path="/" element={<Journal />} />
    // <Route path='/' element={<Reports />} />
  return (
    <Routes>
      <Route path="/" element={<AddADream />} />

    </Routes>
  )
  };

  export default Main;