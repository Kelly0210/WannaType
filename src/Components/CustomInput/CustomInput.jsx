/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import * as PropTypes from 'prop-types';
import FinishBoard from '../Board/FinishBoard';
import DisplayText from '../Display/DisplayText';
import style from './CustomInput.module.css';

const CustomInput = (props) => {
    const [isDisabled, disableInput] = React.useState(false);
    const [isPassed, passedResult] = React.useState(false);
    const [startTimeMs, setStopwatch] = React.useState(0);
    const [value, changeValue] = React.useState('');

    React.useEffect(() => {
        if (value.length !== 0) {
            props.passLastLetter(value.slice(-1));
        }
    }, [value]);

    React.useEffect(() => {
        if (value.slice(-1) !== props.generatedLesson.generatedText[value.length - 1]) {
            props.mistakeCounter();
            props.mistakeHappenedToggle(true);
        } else {
            props.mistakeHappenedToggle(false);
        }

        if (props.numberOfMistakes === 3) {
            disableInput(true);
            passedResult(false);
        }
    }, [value]);

    React.useEffect(() => {
        if (value.length === 1) {
            setStopwatch(new Date().getTime());
        }
        if (value.length !== 0) {
            let timePassedMs = new Date().getTime();
            let timePassedMin = (timePassedMs - startTimeMs) / 1000 / 60;
            let CPM = Math.ceil(value.length / timePassedMin);

            props.charactersPerMinute(CPM);
        }
    }, [value.length]);

    React.useEffect(() => {
        if (value.length === props.generatedLesson.generatedText.length) {
            passedResult(true);
            disableInput(true);
        }
    }, [value.length, props.generatedLesson.generatedText.length]);

    React.useEffect(() => {
        let percentage = Math.ceil(value.length / props.generatedLesson.generatedText.length * 100);
        props.completionPercentage(percentage);
    });

    const reloadLesson = () => {
        setStopwatch(0);
        disableInput(false);
        passedResult(false);
        changeValue('');

        props.reloadLesson();
    };

    return (
        <div className={style.InputBox}>
            <DisplayText value={value}
                generatedText={props.generatedLesson.generatedText} />

            <input autoFocus
                value={value}
                disabled={isDisabled}
                onChange={event => changeValue(event.target.value)} />

            {isDisabled && <FinishBoard isPassed={isPassed}
                lessonInfo={props.generatedLesson.lessonInfo}
                reloadLesson={reloadLesson}
                setLesson={props.setLesson}
            />}
        </div>
    )
};

CustomInput.propTypes = {
    generatedText: PropTypes.string,
    reloadLesson: PropTypes.func,

    numberOfMistake: PropTypes.number,
    handleMistake: PropTypes.func,
    mistakeCounter: PropTypes.func,

    completionPercentage: PropTypes.func,
    charactersPerMinute: PropTypes.func,
    passLastLetter: PropTypes.func
};

export default CustomInput;