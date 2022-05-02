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
import Fallback from './Components/common/Fallback';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      generatedText: ''
    }
  }

  passGeneratedText = (generatedText) => {
    this.setState({ generatedText });
  }

  render = () => {
    return (
      <React.Suspense fallback={<Fallback />}>
        <div className='container'>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/:lesson/:chapter' element={<Main generatedText={this.state.generatedText} />} />
              <Route path='/:random' element={<Main generatedText={this.state.generatedText} />} />
              <Route path='/games' element={<FallingKeys />} />

              <Route path='*' element={<Component404 />} />
            </Routes>
            <Chapters passGeneratedText={this.passGeneratedText} />
            <Footer />
          </BrowserRouter>
        </div>
      </React.Suspense>
    );
  }
}

export default App;
