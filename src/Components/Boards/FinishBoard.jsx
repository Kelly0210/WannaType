import React from 'react';
import style from './FinishBoard.module.css';
import reload from '../../assets/img/reload.png';
import arrowRight from '../../assets/img/arrowRight.png';
import arrowLeft from '../../assets/img/arrowLeft.png';
import { Link } from 'react-router-dom';


const FinishBoard = (props) => {

    const reloadLesson = () => {
        props.reloadLesson();
    }

    return (
        <div className={style.boardBox}>

        {props.result ? <h2 className={style.result}>Congratulation!</h2> : <h2 className={style.result}>Try again?</h2>}
        <img src={reload} alt='reload icon' onClick={reloadLesson} className={style.reloadIcon}/>
        
        <Link to='training/lesson-1/chapter-1' className={style.arrowLeftBox}><img src={arrowLeft} alt='arrow left'/></Link>
        <Link to={props.result ? 'training/lesson-1/chapter-1' : '#'} className={style.arrowRightBox}><img src={arrowRight} alt='arrow right'/></Link>

        </div>
        
    )
}

export default FinishBoard;