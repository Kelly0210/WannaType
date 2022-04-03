import React from 'react';
import style from './FinishBoard.module.css';
import reload from '../../assets/img/reload.png';
import arrowRight from '../../assets/img/arrowRight.png';
import arrowLeft from '../../assets/img/arrowLeft.png';


const FinishBoard = (props) => {
    const reloadLesson = () => {
        props.reloadLesson();
    }

    return (
        <div className={style.boardBox}>
        {props.result ? <h2 className={style.result}>Congratulation!</h2> : <h2 className={style.result}>Try again?</h2>}
        <img src={reload} onClick={reloadLesson} className={style.reloadIcon}/>
        <img className={style.arrowRight} src={arrowRight}/>
        <img className={style.arrowLeft} src={arrowLeft}/>
        </div>
        
    )
}

export default FinishBoard;