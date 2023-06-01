import React from 'react';
import Home from './Pages/Home/Home';
import Navbar from './Shared/Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;