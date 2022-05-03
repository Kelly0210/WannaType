import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Component404 from './Components/common/Component404';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import FallingKeys from './Components/Games/FallingKeys';

const App = () => {

  return (
    <div className='container'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:lesson/:chapter' element={<Main />} />
          <Route path='/random-text' element={<Main />} />
          <Route path='/games' element={<FallingKeys />} />

          <Route path='*' element={<Component404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );

}

export default App;
