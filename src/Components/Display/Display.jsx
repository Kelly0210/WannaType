import React from 'react';
import style from './Display.module.css';
import {generateLesson} from '../common/generateLesson';
import { Lesson1 } from '../common/Lessons';

const Display = () => {
    return (
        <div className={style.displayBox}>
            <span className={style.displayText}>{generateLesson(Lesson1, 30)}</span>
            </div>
    )
}

export default Display;