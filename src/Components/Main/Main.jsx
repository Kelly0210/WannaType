import React from 'react';
import style from './Main.module.css';

import CustomInput from '../CustomInput/CustomInput';
import Keyboard from '../Keyboard/Keyboard';
import StatusBar from '../StatusBar/StatusBar';
import Chapters from '../Chapters/Chapters';
import { generateLesson } from '../common/generateLesson';
import { lessonsCollection } from '../common/lessonsCollection';

class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      generatedText: '',
      mistakeHappened: false,
      numberOfMistake: 0,
      lastLetter: '',
      percentage: 0,
      cpm: 0,
    }
  }

  // componentDidMount() {
  //   if (!this.state.generatedText) {
  //     this.generateText();
  //   }
  // }

  shouldComponentUpdate(nextState, nextProps) {
    if (nextState.generatedText !== this.state.generatedText || !nextState.generatedText) {
      this.setState({ generatedText: this.props.generatedText });
      return true
    } else {
      return true
    }
  }

  generateText = () => {
    let stepOne = window.location.pathname.replaceAll('/', '.').replaceAll('-', '');
    let stepTwo = stepOne.slice(1);
    let stepThree = stepTwo.split('.').reduce((o, i) => o[i], lessonsCollection);
    this.setState({ generatedText: stepThree });
  }

  handleMistake = (boolean) => {
    this.setState({ mistakeHappened: boolean });
  }

  mistakeCounter = () => {
    this.setState({ numberOfMistake: this.state.numberOfMistake + 1 });
  }

  passLastLetter = (lastLetter) => {
    this.setState({ lastLetter });
  }

  completionPercentage = (percentage) => {
    this.setState({ percentage });
  }

  charactersPerMinute = (cpm) => {
    this.setState({ cpm });
  }

  passGeneratedText = (generatedText) => {
    this.setState({ generatedText });
  }

  reloadLesson = () => {
    this.setState({
      generatedText: this.props.generatedText,
      mistakeHappened: false,
      numberOfMistake: 0,
      lastLetter: '',
      percentage: 0,
      cpm: 0,
    });
  }

  render = () => {
    return (
      <main className={style.main}>

        <StatusBar numberOfMistake={this.state.numberOfMistake} mistakeHappened={this.state.mistakeHappened}
          percentage={this.state.percentage} cpm={this.state.cpm} />

        <CustomInput
          handleMistake={this.handleMistake}
          mistakeCounter={this.mistakeCounter}
          numberOfMistake={this.state.numberOfMistake}

          generatedText={this.state.generatedText}
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