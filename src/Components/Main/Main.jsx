import React from 'react';
import style from './Main.module.css';

import CustomInput from '../CustomInput/CustomInput';
import Keyboard from '../Keyboard/Keyboard';
import StatusBar from '../StatusBar/StatusBar';

class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      mistakeHappened: false,
      numberOfMistake: 0,
      lastLetter: '',
      percentage: 0,
      cpm: 0,
    }
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

  reloadLesson = () => {
    window.location.reload()
  }

  render = () => {
    return (
      <main className={style.main}>

        <StatusBar numberOfMistake={this.state.numberOfMistake}
          percentage={this.state.percentage} cpm={this.state.cpm} />

        <CustomInput
          handleMistake={this.handleMistake}
          mistakeCounter={this.mistakeCounter}
          numberOfMistake={this.state.numberOfMistake}

          generatedText={this.props.generatedText}
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