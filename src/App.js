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
import { lessonsCollection } from './common/LessonsCollection';
import { textCollection } from './common/textCollection';


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

  const reloadLesson = (lessonString = generatedLesson.lessonInfo.lesson, chapterString = generatedLesson.lessonInfo.lesson) => {
    let type = generatedLesson.lessonInfo.type;

    if (type === 'lesson') {
      const lesson = lessonsCollection[lessonString];
      const chapter = lesson[chapterString];

      passGeneratedLesson({
        ...generatedLesson, lessonInfo: {
          ...generatedLesson.lessonInfo,
          type: 'lesson',
          units: [...chapter.units],
          numberOfUnits: chapter.numberOfUnits,
          lesson: lessonString,
          chapter: chapterString,
        },
        title: chapter.title,
        generatedText: generateLesson(generatedLesson.lessonInfo.units, generatedLesson.lessonInfo.numberOfUnits)
      });

    } else if (type === 'random-text') {
      const randomText = textCollection[Math.floor(Math.random() * textCollection.length)];
      passGeneratedLesson({
        ...generatedLesson, lessonInfo: {
          ...generatedLesson.lessonInfo,
          type: 'random-text',
        },
        title: 'Random Text',
        generatedText: randomText
      });

    } else if (type === 'random-exercise') {
      const lessonsKeys = Object.keys(lessonsCollection);
      const randomLesson = lessonsKeys[Math.floor(Math.random() * lessonsKeys.length)];
      const findLesson = Object.getOwnPropertyDescriptor(lessonsCollection, randomLesson);

      const chaptersKeys = Object.keys(findLesson.value);
      const randomChapter = chaptersKeys[Math.floor(Math.random() * chaptersKeys.length)];
      const findChapter = Object.getOwnPropertyDescriptor(findLesson.value, randomChapter);

      passGeneratedLesson({
        ...generatedLesson, lessonInfo: {
          ...generatedLesson.lessonInfo,
          type: 'random-exercise',
          units: [...findChapter.value.units],
          numberOfUnits: findChapter.value.numberOfUnits,
          lesson: lessonString,
          chapter: chapterString,
        },
        title: findChapter.value.title,
        generatedText: generateLesson(generatedLesson.lessonInfo.units, generatedLesson.lessonInfo.numberOfUnits)
      });

    }
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

            <Route path='/:lesson/:chapter' element={<Main generatedLesson={generatedLesson} reloadLesson={reloadLesson} />} />
            <Route path='/random-text' element={<Main generatedLesson={generatedLesson} reloadLesson={reloadLesson} />} />
            <Route path='/random-exercise' element={<Main generatedLesson={generatedLesson} reloadLesson={reloadLesson} />} />
          </Routes>
          <Chapters generatedLesson={generatedLesson} passGeneratedLesson={passGeneratedLesson} />
          <Footer />
        </BrowserRouter>
      </React.Suspense>
    </div>
  )
}

export default App;
