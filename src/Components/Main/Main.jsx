import React from 'react';
import style from './Main.module.css';

import CustomTextArea from '../CustomTextArea/CustomTextArea';
import Keyboard from '../Keyboard/Keyboard';
import StatusBar from '../StatusBar/StatusBar';

import { generateLesson } from '../common/generateLesson';
import { tutorial } from '../common/Lessons';

class Main extends React.Component {

  constructor() {
    super()
    this.state = {
      lesson: generateLesson(tutorial.lesson1.chapter1, 50),
      mistakeHappened: false,
      numberOfMistake: 0,
      lastLetter: '',
      percentage: 0,
      cpm: 0,
      // url: window.location.pathname
    }

    this.handleMistake = this.handleMistake.bind(this);
    this.mistakeCounter = this.mistakeCounter.bind(this);

    this.completionPercentage = this.completionPercentage.bind(this);
    this.charactersPerMinute = this.charactersPerMinute.bind(this);

    this.reloadLesson = this.reloadLesson.bind(this);
    this.passLastLetter = this.passLastLetter.bind(this);
  }

  handleMistake(boolean) {
    this.setState({ mistakeHappened: boolean });
  }

  mistakeCounter() {
    this.setState({ numberOfMistake: this.state.numberOfMistake + 1 });
  }

  passLastLetter(lastLetter) {
    this.setState({ lastLetter });
  }

  completionPercentage(percentage) {
    this.setState({ percentage });
  }

  charactersPerMinute(cpm) {
    this.setState({ cpm });
  }

  reloadLesson() {
    window.location.reload();
  }

  render() {
    return (
      <main className={style.main}>
        <StatusBar numberOfMistake={this.state.numberOfMistake}
          percentage={this.state.percentage} cpm={this.state.cpm} />

        <CustomTextArea
          handleMistake={this.handleMistake}
          mistakeCounter={this.mistakeCounter}
          numberOfMistake={this.state.numberOfMistake}

          lesson={this.state.lesson}
          reloadLesson={this.reloadLesson}

          completionPercentage={this.completionPercentage}
          passLastLetter={this.passLastLetter}
          charactersPerMinute={this.charactersPerMinute}
        />

        <Keyboard mistakeHappened={this.state.mistakeHappened}
          lastLetter={this.state.lastLetter} />
      </main>
    )
  }

}

export default Main;

  // shouldComponentUpdate(nextProps, nextState) { 
  //   this.setState({url: window.location.pathname})
  //   if (this.state.url !== nextState.url) {
  //     console.log('test')
  //     return true;
  //   } else {
  //     return false
  //   }


  //   // let test = event.target.pathname.replaceAll('/', '.');
  //   // let testTwo = test.replaceAll('-', '');
  //   // let testThree = testTwo.slice(1);
  //   // let testFour = testThree.split('.').reduce((o,i)=> o[i], tutorial);
  //  }
