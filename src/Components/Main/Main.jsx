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
      lesson: generateLesson(Lesson1, 30),
      mistake: false
    }
    this.mistakeAddClass = this.mistakeAddClass.bind(this);
  }

  mistakeAddClass(boolean) {
    this.setState({mistake: boolean});
  }

  render() {
    return (
      <main className={style.main}>
        <Display lesson={this.state.lesson} mistake={this.state.mistake}/>
        <CustomTextArea lesson={this.state.lesson} mistakeAddClass={this.mistakeAddClass}/>
        <Keyboard />
      </main>
    )
  }

}

export default Main;