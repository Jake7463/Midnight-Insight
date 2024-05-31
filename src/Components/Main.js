import { Route , Routes } from 'react-router-dom';
import AddADream from './AddADream/AddADream';
import { useState } from 'react';


function Main() {
  const [dreamKey, setDreamKey] = useState("");
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