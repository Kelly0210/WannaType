import React from 'react';
import style from './Main.module.css';
import Keyboard from '../Keyboard/Keyboard';
import CustomTextArea from '../CustomTextArea/CustomTextArea';


const Main = () => {

    return (
        <main className={style.main}>
          <CustomTextArea />
          <Keyboard />
        </main>
    );

}

export default Main;