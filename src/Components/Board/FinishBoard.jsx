import React from 'react';
import style from './FinishBoard.module.css';
import reload from '../../assets/img/reload.png';
import boardArrow from '../../assets/img/boardArrow.png';
import { Link } from 'react-router-dom';

import { tipsCollection } from '../common/tipsCollection';


const FinishBoard = (props) => {

    const reloadLesson = () => {
        props.reloadLesson();
    }

    const randomTip = () => {
        return tipsCollection[Math.floor(Math.random() * tipsCollection.length)];
    }

    return (
        <div className={style.boardBox}>

        {props.result ? <h2>Congratulation!</h2> : <h2>Try again?</h2>}
        <img className={style.reloadIcon} onClick={reloadLesson} src={reload} alt='reload icon'/>
        
        <Link to='/lesson-1/chapter-1' className={style.arrowLeftLink}><img src={boardArrow} alt='arrow left'/></Link>
        <Link to={props.result ? '/lesson-1/chapter-1' : '#'} className={style.arrowRightLink}><img src={boardArrow} alt='arrow right'/></Link>

        <div className={style.tips}>{randomTip()}</div>
        </div>
        
    )
}

export default FinishBoard;