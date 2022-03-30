import React from 'react';
import Lifecycle from './components/lifecycle';
import BasicPage from './pages/basicPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Lifecycle />} />
        <Route path='basic-page' element={<BasicPage />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
