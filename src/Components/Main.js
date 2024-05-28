import { Route , Routes } from 'react-router-dom';
import AddADream from './AddADream/AddADream';

function Main() {

    // <Route path="/home" element={<MyProfile />} />
    // <Route path="/reservation-page" element={<Journal />} />
    // <Route path='/confirmation-page' element={<Reports />} />
    return (
      <Routes>
        <Route path="/" element={<AddADream />} />

      </Routes>
    )
  };
  
  export default Main;
  
  