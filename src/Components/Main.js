import { Route , Routes } from 'react-router-dom';
import AddADream from './AddADream/AddADream';
import JournalPage from './JornalPage/JournalPage';



function Main() {
    // <Route path="/home" element={<MyProfile />} />
    // <Route path="/" element={<Journal />} />
    // <Route path='/' element={<Reports />} />
  return (
    <Routes>
      <Route path="/" element={<JournalPage />} />
      <Route path="/" element={<AddADream />} />

    </Routes>
  )
  };

  export default Main;