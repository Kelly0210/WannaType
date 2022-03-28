import React from 'react';
import style from './FinishBoard.module.css'


const FinishBoard = (props) => {
    console.log(props.result)
    return (
        <div className={style.boardBox}>
        {props.result ? '' : <img src='https://image.pngaaa.com/345/818345-middle.png' className={style.reloadIcon}/>}
        </div>
    )
}

export default FinishBoard;