// App.jsx
import React from 'react';

import './App.css'; 
import Sidebar from './Components/SideBar';
import Home from './Pages/Home';

const App = () => {
  return (
    <div className="app-wrapper">
      <Sidebar/>
      <Home></Home>
    </div>
  );
};

export default App;