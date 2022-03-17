import React from 'react';
import style from './Main.module.css';

import Display from '../Display/Display';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import Keyboard from '../Keyboard/Keyboard';



const Main = () => {

    return (
        <main className={style.main}>
          <Display />
          <CustomTextArea />
          <Keyboard />
        </main>
    );

}

export default Main;