import React from 'react';
import Chapters from '../Chapters/Chapters';
import style from './Main.module.css';
import Keyboard from '../Keyboard/Keyboard';

const Main = () => {
    return (
        <main className={style.main}>
        <textarea></textarea>
        <Keyboard />
      </main>
    );

}

export default Main;