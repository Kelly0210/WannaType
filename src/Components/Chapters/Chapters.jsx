import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import style from './Chapters.module.css';
import collapseArrow from '../../assets/img/collapseArrow.png';
import { textCollection } from "../../common/textCollection";
import { lessonsCollection } from '../../common/LessonsCollection';
import { generateLesson } from "../../common/generateLesson";

const Chapters = (props) => {
    const [units, setUnits] = React.useState('');
    const [numberOfUnits, setNumberOfUnits] = React.useState('');

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

    const createChaptersCollection = (object) => {
        let collection = [];

        Object.values(object).map(chapter => collection.push(
            <li key={chapter.url}>
                <Link to={chapter.url}
                    onClick={() => lessonClick(chapter.units, chapter.numberOfUnits)}
                    dangerouslySetInnerHTML={{ __html: chapter.title }} />
            </li>
        ))
        return collection;
    }

    const lessonClick = (units, numberOfUnits) => {
        setUnits(units);
        setNumberOfUnits(numberOfUnits);
        props.passGeneratedText(generateLesson(units, numberOfUnits));
    }

    const randomTextClick = () => {
        let randomText = textCollection[Math.floor(Math.random() * textCollection.length)];
        props.passGeneratedText(randomText);
    }

    const randomExerciseClick = () => {
        const lessonsKeys = Object.keys(lessonsCollection);
        const randomLesson = lessonsKeys[Math.floor(Math.random() * lessonsKeys.length)];
        const findLesson = Object.getOwnPropertyDescriptor(lessonsCollection, randomLesson);

        const chaptersKeys = Object.keys(findLesson.value);
        const randomChapter = chaptersKeys[Math.floor(Math.random() * chaptersKeys.length)];
        const findChapter = Object.getOwnPropertyDescriptor(findLesson.value, randomChapter);

        setUnits(findChapter.value.units);
        setNumberOfUnits(findChapter.value.numberOfUnits);
        props.passGeneratedText(generateLesson(findChapter.value.units, findChapter.value.numberOfUnits));
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