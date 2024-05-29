import { Route , Routes } from 'react-router-dom';
import AddADream from './AddADream/AddADream';

function Main() {
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