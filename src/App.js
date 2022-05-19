import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Component404 from './Components/common/Component404';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Chapters from './Components/Chapters/Chapters';
import Fallback from './Components/common/Fallback';
import FAQ from './Components/FAQ/FAQ';
import About from './Components/About/About';

const App = () => {

  const [generatedText, generateText] = useState('');

  const reloadLesson = () => {
    generateText('');
  }

  return (
    <div className='container'>
      <React.Suspense fallback={<Fallback />}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Component404 />} />
            <Route path='/about' element={<About />} />
            <Route path='/FAQ' element={<FAQ />} />

            <Route path='/:lesson/:chapter' element={<Main generatedText={generatedText} reloadLesson={reloadLesson} />} />
            <Route path='/random-text' element={<Main generatedText={generatedText} reloadLesson={reloadLesson} />} />
            <Route path='/random-exercise' element={<Main generatedText={generatedText} reloadLesson={reloadLesson} />} />

          </Routes>
          <Chapters generateText={generateText} generatedText={generatedText} />
          <Footer />
        </BrowserRouter>
      </React.Suspense>
    </div>
  )
}

export default App;
