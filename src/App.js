import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

import './App.css';
import Game from './Pages/Game/Game';
import { StageContextProvider } from './Context/StageContext';

function App() {
  return (
    <>
      <StageContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Game/>}/>
          </Routes>
        </BrowserRouter>
      </StageContextProvider>
    </>
  );
}

export default App;
