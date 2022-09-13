import React from 'react';
import style from './FinishBoard.module.css';
import reload from '../../assets/img/reload.png';
import boardArrow from '../../assets/img/boardArrow.png';
import { Link } from 'react-router-dom';
import { tipsCollection } from '../../common/tipsCollection';
import { lessonsCollection } from '../../common/LessonsCollection';

const FinishBoard = (props) => {
    const blockWindow = React.createRef();
    const showWindow = React.createRef();

    let state = {
        lesson: 'lesson3',
        chapter: 'chapter4'
    }

    const reloadLesson = () => {
        props.reloadLesson();
    }

    const randomTip = () => {
        return tipsCollection[Math.floor(Math.random() * tipsCollection.length)];
    }

    const decrementChapter = () => {
        if (state.lesson === 'lesson1' && state.chapter === 'chapter1') return '#';

        const lesson = Object.getOwnPropertyDescriptor(lessonsCollection, state.lesson);
        const decChapter = `chapter${(Number(state.chapter.slice(7)) - 1)}`;
        const findChapter = Object.getOwnPropertyDescriptor(lesson.value, decChapter);

        if (!findChapter) {
            const decLesson = `lesson${(Number(state.lesson.slice(6)) - 1)}`;
            const lesson = Object.getOwnPropertyDescriptor(lessonsCollection, decLesson);
            const lessonKeys = Object.keys(lesson.value)
            const findChapter = Object.getOwnPropertyDescriptor(lesson.value, lessonKeys[lessonKeys.length - 1]);

            return findChapter.value.url;
        }
        return findChapter.value.url;
    }

    const incrementChapter = () => {
        if (state.lesson === 'lesson13' && state.chapter === 'chapter15') return '#';

        const lesson = Object.getOwnPropertyDescriptor(lessonsCollection, state.lesson);
        const incChapter = `chapter${(Number(state.chapter.slice(7)) + 1)}`;
        const findChapter = Object.getOwnPropertyDescriptor(lesson.value, incChapter);

        if (!findChapter) {
            const icnLesson = `lesson${(Number(state.lesson.slice(6)) + 1)}`;
            const lesson = Object.getOwnPropertyDescriptor(lessonsCollection, icnLesson);
            const findChapter = Object.getOwnPropertyDescriptor(lesson.value, 'chapter1');

            return findChapter.value.url;
        }
        return findChapter.value.url;
    }

    const hideToggle = () => {
        blockWindow.current.classList.toggle(`${style.hide}`);
        showWindow.current.classList.toggle(`${style.show}`);
    }

    return (
        <>
            <div ref={showWindow} className={style.showWindowBox}>
                <div onClick={hideToggle} className={style.showWindow}>Show window</div>
            </div>

            <div ref={blockWindow} className={style.blockWindow}>
                <div className={style.boardBox} >

                    <div className={style.result}>
                        {props.isPassed ? <h2>Congratulation!</h2> : <h2>Try again?</h2>}
                        <div onClick={hideToggle} className={style.hideWindow}>Hide this window</div>
                    </div>

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
        </>
    )
}

export default FinishBoard;