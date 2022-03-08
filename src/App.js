import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Chapters from './Components/Chapters/Chapters';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Header />
          <Routes>
          <Route path='/chapter' element={<Main />}/>
          <Route path='*' element={<div>404</div>}/>
          </Routes>
          <div>Hello</div> {/* to component */}
        <Chapters/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
