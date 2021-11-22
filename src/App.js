import React from 'react';
import {Routes, Route, Link  } from 'react-router-dom';

import './App.css';
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home  />}/>
        <Route path='/rooms/' exact element={<Rooms />}/>
        <Route path='/rooms/:slug' exact element={<SingleRoom  />}/>
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
