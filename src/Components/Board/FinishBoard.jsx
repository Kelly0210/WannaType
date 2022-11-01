import React from 'react';
import style from './FinishBoard.module.css';
import reload from '../../assets/img/reload.png';
import boardArrow from '../../assets/img/boardArrow.png';
import { Link } from 'react-router-dom';
import { tipsCollection } from '../../common/tipsCollection';
import { lessonsCollection } from '../../common/LessonsCollection';

const FinishBoard = ({ lessonInfo, isPassed, ...props }) => {
    const blockWindow = React.createRef();
    const showWindow = React.createRef();

    let lessonString = '';
    let chapterString = '';

    const reloadLesson = (lessonString, chapterString) => {
        if (!lessonString || !chapterString) {
            lessonString = lessonInfo.lesson;
            chapterString = lessonInfo.chapter;
        }
        props.reloadLesson(lessonString, chapterString);
    }

    const randomTip = () => {
        return tipsCollection[Math.floor(Math.random() * tipsCollection.length)];
    }

    const decrementChapter = () => {
        // First chapter can't be decremented
        if (lessonInfo.lesson === 'lesson1' && lessonInfo.chapter === 'chapter1') return '#';

        const lesson = lessonsCollection[lessonInfo.lesson];
        const decChapter = `chapter${(Number(lessonInfo.chapter.slice(7)) - 1)}`;
        const findedChapter = lesson[decChapter];

        if (!findedChapter) {
            const decLesson = `lesson${(Number(lessonInfo.lesson.slice(6)) - 1)}`;
            const lesson = lessonsCollection[decLesson];
            //Find last chapter in decremented Lesson
            const lastChapter = Object.keys(lesson)[Object.keys(lesson).length - 1];

            lessonString = decLesson;
            chapterString = lastChapter;
            return lesson[lastChapter].url;
        }

        lessonString = lessonInfo.lesson;
        chapterString = decChapter
        return findedChapter.url;
    }

    const incrementChapter = () => {
        // Last chapter can't be incremented
        if (lessonInfo.lesson === 'lesson13' && lessonInfo.chapter === 'chapter15') return '#';

        const lesson = lessonsCollection[lessonInfo.lesson];
        const incChapter = `chapter${(Number(lessonInfo.chapter.slice(7)) + 1)}`;
        const findedChapter = lesson[incChapter];

        if (!findedChapter) {
            const icnLesson = `lesson${(Number(lessonInfo.lesson.slice(6)) + 1)}`;
            const lesson = lessonsCollection[icnLesson];

            lessonString = icnLesson;
            chapterString = 'chapter1';
            return lesson['chapter1'].url;
        }

        lessonString = lessonInfo.lesson;
        chapterString = incChapter;
        return findedChapter.url;
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
                        {isPassed ? <h2>Congratulation!</h2> : <h2>Try again?</h2>}
                        <div onClick={hideToggle} className={style.hideWindow}>Hide this window</div>
                    </div>

                    <img src={reload} onClick={() => reloadLesson()} className={style.reloadIcon} alt='reload icon' />

                    {lessonInfo.type === 'lesson' &&
                        <>
                            <Link to={decrementChapter()} onClick={() => reloadLesson(lessonString, chapterString)} className={style.arrowLeftLink}><img src={boardArrow} alt='arrow left' /></Link>
                            <Link to={incrementChapter()} onClick={() => reloadLesson(lessonString, chapterString)} className={style.arrowRightLink}><img src={boardArrow} alt='arrow right' /></Link>
                        </>
                    }
                    <div className={style.tips}>{randomTip()}</div>
                </div>
            </div>
        </>
    )
}

export default FinishBoard;