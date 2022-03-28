import React from 'react';
import style from './FinishBoard.module.css'
import reload from '../../assets/img/reload.png'


const FinishBoard = (props) => {
    const reloadLesson = () => {
        props.reloadLesson();
    }

    return (
        <div className={style.boardBox}>
        {props.result ? 'You win' : <img src={reload} onClick={reloadLesson} className={style.reloadIcon}/>}
        </div>
    )
}

export default FinishBoard;