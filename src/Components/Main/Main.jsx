import React from 'react';
import style from './Main.module.css';

import CustomInput from '../CustomInput/CustomInput';
import Keyboard from '../Keyboard/Keyboard';
import StatusBar from '../StatusBar/StatusBar';

const Main = (props) => {
  const [numberOfMistakes, mistakeCounter] = React.useState(0);
  const [percentage, completionPercentage] = React.useState(0);
  const [CPM, charactersPerMinute] = React.useState(0);
  const [lastLetter, passLastLetter] = React.useState('');
  const [mistakeHappened, mistakeHappenedToggle] = React.useState(false);

  const mistakesHandler = () => {
    mistakeCounter(numberOfMistakes + 1);
  }

  const reloadLesson = () => {
    mistakeCounter(0);
    completionPercentage(0);
    charactersPerMinute(0);
    passLastLetter('');
    mistakeHappenedToggle(false);

    props.reloadLesson();
  }

  return (
    <main className={style.main}>

    <h2 className={style.lessonTitle} dangerouslySetInnerHTML={{__html: props.generatedLesson.title}}/>

      <StatusBar numberOfMistakes={numberOfMistakes}
        percentage={percentage} CPM={CPM} />

      <CustomInput
        mistakeCounter={mistakesHandler}
        numberOfMistakes={numberOfMistakes}
        mistakeHappenedToggle={mistakeHappenedToggle}

        generatedText={props.generatedText}
        reloadLesson={reloadLesson}

        completionPercentage={completionPercentage}
        passLastLetter={passLastLetter}
        charactersPerMinute={charactersPerMinute}
        generatedLesson={props.generatedLesson}
      />
      <Keyboard lastLetter={lastLetter}
        mistakeHappened={mistakeHappened} numberOfMistakes={numberOfMistakes} />
    </main>)
}

export default Main;