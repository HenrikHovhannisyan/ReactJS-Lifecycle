import React from 'react';
import Lifecycle from './components/lifecycle';
import BasicPage from './pages/basicPage';
import GitUsers from './components/users/GitUsers';
import {
  BrowserRouter,
  Routes,
  Route,
  useMatch
} from "react-router-dom";
import User from './components/users/User';


function App() {
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Lifecycle />} />
        <Route path='basic-page' element={<BasicPage />} />

        <Route path='users' element={<GitUsers />} />
        <Route path='user/:id' element={<User />} />

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
