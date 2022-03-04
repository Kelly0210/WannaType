import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import style from './App.css'
import Chapters from './Components/Chapters/Chapters';


function App() {
  return (
      <div className='container'>
    <Header />
    <Chapters />
    <Main />
    <Footer />
      </div>
  );
}

export default App;
