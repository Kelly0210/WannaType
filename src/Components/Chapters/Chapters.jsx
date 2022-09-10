/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";
import style from './Chapters.module.css';
import collapseArrow from '../../assets/img/collapseArrow.png';
import { textCollection } from "../../common/textCollection";
import { lessonsCollection } from '../../common/LessonsCollection';
import { generateLesson } from "../../common/generateLesson";

const Chapters = (props) => {
    const [lesson, setLessonInfo] = React.useState({
        lessonInfo: {
            type: '',
            units: [],
            numberOfUnits: 0
        },
        title: '',
        generatedText: ''
    });

    React.useEffect(() => {
        props.passGeneratedLesson(lesson);
    }, [lesson])

    const createLessonsCollection = (allLessons) => {
        let collection = [];
        let i = 0;

        Object.values(allLessons).map(lesson => collection.push(
            <React.Fragment key={`Lesson ${i}`}>
                <li onClick={toggleList} className={style.toggleList}>{`Lesson ${++i}`}</li>
                <ul id={`Lesson ${i}`} className={style.innerUl}>
                    {createChaptersCollection(lesson)}
                </ul>
            </React.Fragment>
        ))
        return collection;
    }

    const createChaptersCollection = (lesson) => {
        let collection = [];

        Object.values(lesson).map(chapter => collection.push(
            <li key={chapter.url}>
                <Link to={chapter.url}
                    onClick={() => lessonClick(chapter)}
                    dangerouslySetInnerHTML={{ __html: chapter.title }} />
            </li>
        ))
        return collection;
    }

    const lessonClick = (chapter) => {
        setLessonInfo({
            ...lesson, lessonInfo: {
                type: 'lesson',
                units: chapter.units,
                numberOfUnits: chapter.numberOfUnits,
            },
            title: chapter.title,
            generatedText: generateLesson(chapter.units, chapter.numberOfUnits)
        });
    }

    const randomTextClick = () => {
        let randomText = textCollection[Math.floor(Math.random() * textCollection.length)];

        setLessonInfo({
            ...lesson, lessonInfo: {
                type: 'random-text'
            },
            title: 'Random Text',
            generatedText: randomText
        });
    }

    const randomExerciseClick = () => {
        const lessonsKeys = Object.keys(lessonsCollection);
        const randomLesson = lessonsKeys[Math.floor(Math.random() * lessonsKeys.length)];
        const findLesson = Object.getOwnPropertyDescriptor(lessonsCollection, randomLesson);

        const chaptersKeys = Object.keys(findLesson.value);
        const randomChapter = chaptersKeys[Math.floor(Math.random() * chaptersKeys.length)];
        const findChapter = Object.getOwnPropertyDescriptor(findLesson.value, randomChapter);

        setLessonInfo({
            ...lesson, lessonInfo: {
                type: 'random-exercise',
                units: findChapter.value.units,
                numberOfUnits: findChapter.value.numberOfUnits
            },
            title: findChapter.value.title,
            generatedText: generateLesson(findChapter.value.units, findChapter.value.numberOfUnits)
        });
    }

    const toggleList = (event) => {
        let innerUl = document.getElementById(event.target.textContent);
        innerUl.classList.toggle(`${style.show}`);

        event.target.classList.toggle(`${style.active}`);
    }

    const collapseComponent = () => {
        let entireComponent = document.getElementById('entireComponent');
        entireComponent.classList.toggle(`${style.hide}`);

        let arrowRight = document.getElementById('collapseRight');
        arrowRight.classList.toggle(`${style.show}`);
    }

    return (
        <>
            <img src={collapseArrow} className={style.collapseRight} onClick={collapseComponent} alt="collapse icon" id='collapseRight' />

            <nav id='entireComponent' className={style.chaptersContainer}>
                <img src={collapseArrow} className={style.collapseLeft} onClick={collapseComponent} alt="collapse icon" id='collapseLeft' />
                <ul>
                    {createLessonsCollection(lessonsCollection)}
                    <li><Link to='/random-exercise' onClick={randomExerciseClick}>Random Exercise</Link></li>
                    <li><Link to='/random-text' onClick={randomTextClick}>Random Text</Link></li>
                </ul>
            </nav >
        </>
    )
}

export default Chapters;