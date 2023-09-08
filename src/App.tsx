import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';

import { HelloPage } from './pages/HelloPage/HelloPage';
import { MapRouterPage } from './pages/MapRouterPage/MapRouterPage';

function App() {
  return (
    <div className="App">  
      <BrowserRouter> 
        <Routes>
            <Route path="/"  element={<HelloPage />}/>   
            <Route path='/map/router' element={<MapRouterPage/>}/>
        </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App;
