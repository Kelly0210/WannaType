import React from 'react';
import style from './Main.module.css';

import CustomInput from '../CustomInput/CustomInput';
import Keyboard from '../Keyboard/Keyboard';
import StatusBar from '../StatusBar/StatusBar';

class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      lesson: '',
      mistakeHappened: false,
      numberOfMistake: 0,
      lastLetter: '',
      percentage: 0,
      cpm: 0,
    }

    this.handleMistake = this.handleMistake.bind(this);
    this.mistakeCounter = this.mistakeCounter.bind(this);

    this.completionPercentage = this.completionPercentage.bind(this);
    this.charactersPerMinute = this.charactersPerMinute.bind(this);

    this.reloadLesson = this.reloadLesson.bind(this);
    this.passLastLetter = this.passLastLetter.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.generatedText !== this.state.lesson) {
      this.setState({ lesson: this.props.generatedText });
      return true
    } else {
      return true
    }
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

        <CustomInput
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