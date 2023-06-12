import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

import './App.css';
import Game from './Pages/Game/Game';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/game' element={<Game/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
