import { TabPanel } from '@mui/lab';
import React from 'react';
import Card1 from './components/Card1';
import Final from './components/Final'
import Card2 from './components/Card2'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from './components/MainLayout';


function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path='/' element = {<Card1/>}/>
      <Route path= '/card2' element = {<Card2/>}/>
      <Route path= '/mainlayout' element = {<MainLayout/>}/>
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
