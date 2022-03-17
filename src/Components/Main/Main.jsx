import React from 'react';
import style from './Main.module.css';

import Display from '../Display/Display';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import Keyboard from '../Keyboard/Keyboard';
import { generateLesson } from '../common/generateLesson';
import { Lesson1 } from '../common/Lessons';



class Main extends React.Component {

  constructor() {
    super()
    this.state = {
      lesson: generateLesson(Lesson1, 30)
    }
  }

  render() {
    return (
      <main className={style.main}>
        <Display lesson={this.state.lesson}/>
        <CustomTextArea lesson={this.state.lesson}/>
        <Keyboard />
      </main>
    )
  }

}

export default Main;