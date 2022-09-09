import React from 'react';
import style from './FinishBoard.module.css';
import reload from '../../assets/img/reload.png';
import boardArrow from '../../assets/img/boardArrow.png';
import { Link } from 'react-router-dom';

import { tipsCollection } from '../../common/tipsCollection';


const FinishBoard = (props) => {

    const reloadLesson = () => {
        props.reloadLesson();
    }

    const randomTip = () => {
        return tipsCollection[Math.floor(Math.random() * tipsCollection.length)];
    }

    const decrementChapter = () => {
        let currentUrl = window.location.pathname;

        if (currentUrl === '/lesson-1/chapter-1') {
            return '#'
        } else {
            let pastChapter = currentUrl.slice(18).replace('-', '');
            pastChapter = --pastChapter;
            return currentUrl.slice(0, 18) + pastChapter;
        }
    }

    const incrementChapter = () => {
        let currentUrl = window.location.pathname;

        if (currentUrl === 'lesson-13/chapter-15') {
            return '#'
        } else {
            let nextChapter = currentUrl.slice(18).replace('-', '');
            nextChapter = ++nextChapter;
            return currentUrl.slice(0, 18) + nextChapter;
        }
    }



    return (

        <div className={style.boardBox}>

            {props.isPassed ? <h2>Congratulation!</h2> : <h2>Try again?</h2>}
            <img className={style.reloadIcon} onClick={reloadLesson} src={reload} alt='reload icon' />

            <Link to={decrementChapter()} className={style.arrowLeftLink} onClick={reloadLesson}><img src={boardArrow} alt='arrow left' /></Link>
            <Link to={incrementChapter()} className={style.arrowRightLink} onClick={reloadLesson}><img src={boardArrow} alt='arrow right' /></Link>

            <div className={style.tips}>{randomTip()}</div>
        </div>

    )
}

export default FinishBoard;