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
        return '#'
    }

    const incrementChapter = () => {
        return '#'
    }

    return (
        <div className={style.blockWindow}>
            <div className={style.boardBox}>
                {props.isPassed ? <h2>Congratulation!</h2> : <h2>Try again?</h2>}
                <img src={reload} onClick={reloadLesson} className={style.reloadIcon} alt='reload icon' />

                {props.lessonInfo.type === 'lesson' &&
                    <>
                        <Link to={decrementChapter()} onClick={reloadLesson} className={style.arrowLeftLink}><img src={boardArrow} alt='arrow left' /></Link>
                        <Link to={incrementChapter()} onClick={reloadLesson} className={style.arrowRightLink}><img src={boardArrow} alt='arrow right' /></Link>
                    </>
                }

                <div className={style.tips}>{randomTip()}</div>
            </div>
        </div>
    )
}

export default FinishBoard;