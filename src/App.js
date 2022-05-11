import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Component404 from './Components/common/Component404';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import FallingKeys from './Components/Games/FallingKeys';
import Chapters from './Components/Chapters/Chapters';
import FAQ from './Components/FAQ/FAQ';

const App = () => {

  const [generatedText, generateText] = useState('');

  const reloadLesson = () => {
    generateText('');
  }
  return (
    <div className='container'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:lesson/:chapter' element={<Main generatedText={generatedText} reloadLesson={reloadLesson}/>} />
          <Route path='/random-text' element={<Main generatedText={generatedText} reloadLesson={reloadLesson}/>} />
          <Route path='/random-test' element={<Main generatedText={generatedText} reloadLesson={reloadLesson}/>} />
          <Route path='/games' element={<FallingKeys />} />

          <Route path='*' element={<Component404 />} />
          <Route path='/FAQ' element={<FAQ />} />
        </Routes>
        <Chapters generateText={generateText} generatedText={generatedText} />
        <Footer />
      </BrowserRouter>
    </div>
  );

}

export default App;
