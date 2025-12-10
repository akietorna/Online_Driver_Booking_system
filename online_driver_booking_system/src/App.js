import './App.css';
import Homepage from './homePage';
import Navbar from './Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (  
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
