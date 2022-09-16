import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Component404 from './common/Component404';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Chapters from './Components/Chapters/Chapters';
import Fallback from './common/Fallback';
import FAQ from './Components/FAQ/FAQ';
import About from './Components/About/About';
import { generateLesson } from './common/generateLesson';


const App = () => {
  const [generatedLesson, passGeneratedLesson] = useState({
    lessonInfo: {
      type: '',
      units: [],
      numberOfUnits: 0,
      lesson: '',
      chapter: ''
    },
    title: 'title',
    generatedText: 'Hello!'
  });

  const reloadLesson = () => {
    passGeneratedLesson({
      ...generatedLesson, lessonInfo: {
        ...generatedLesson.lessonInfo,
      },
      generatedText: generateLesson(generatedLesson.lessonInfo.units, generatedLesson.lessonInfo.numberOfUnits)
    });
  }

  const setLesson = (lessonString, chapterString) => {
    passGeneratedLesson({
      ...generatedLesson, lessonInfo: {
        ...generatedLesson.lessonInfo,
        lesson: lessonString,
        chapter: chapterString
      }
    });
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

            <Route path='/:lesson/:chapter' element={<Main generatedLesson={generatedLesson} reloadLesson={reloadLesson} setLesson={setLesson} />} />
            <Route path='/random-text' element={<Main generatedLesson={generatedLesson} reloadLesson={reloadLesson} setLesson={setLesson} />} />
            <Route path='/random-exercise' element={<Main generatedLesson={generatedLesson} reloadLesson={reloadLesson} setLesson={setLesson} />} />
          </Routes>
          <Chapters passGeneratedLesson={passGeneratedLesson} generatedLesson={generatedLesson} />
          <Footer />
        </BrowserRouter>
      </React.Suspense>
    </div>
  )
}

export default App;
