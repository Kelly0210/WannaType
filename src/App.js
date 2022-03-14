import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Component404 from './Components/common/Component404';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Chapters from './Components/Chapters/Chapters';
import FallingKeys from './Components/Games/FallingKeys';

const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <Header />
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/training/:lesson' element={<Main />}/>
          <Route path='/training/:random' element={<Main />}/>
          <Route path='/games' element={<FallingKeys />}/>

          <Route path='*' element={<Component404 />}/>
          </Routes>
        <Chapters/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
