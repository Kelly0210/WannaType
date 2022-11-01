/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";
import style from './Chapters.module.css';
import collapseArrow from '../../assets/img/collapseArrow.png';
import { textCollection } from "../../common/textCollection";
import { lessonsCollection } from '../../common/LessonsCollection';
import { generateLesson } from "../../common/generateLesson";

const Chapters = (props) => {
    const entireComponent = React.createRef();
    const collapseIcon = React.createRef();

    const createLessonsCollection = (allLessons) => {
        let collection = [];

        Object.values(allLessons).map((lesson, i) => collection.push(
            <React.Fragment key={`Lesson ${i}`}>
                <li onClick={toggleList} className={style.toggleList}>{`Lesson ${++i}`}</li>
                <ul id={`Lesson ${i}`} className={style.innerUl}>
                    {createChaptersCollection(lesson, `lesson${i}`)}
                </ul>
            </React.Fragment>
        ))
        return collection;
    }

    const createChaptersCollection = (lesson, lessonNumber) => {
        let collection = [];

        Object.values(lesson).map((chapter, i) => collection.push(
            <li key={chapter.url}>
                <Link to={chapter.url}
                    onClick={() => lessonClick(chapter, lessonNumber, `chapter${++i}`)}
                    dangerouslySetInnerHTML={{ __html: chapter.title }} />
            </li>
        ))
        return collection;
    }

    const lessonClick = (chapter, lessonNumber, chapterNumber) => {
        props.passGeneratedLesson({
            lessonInfo: {
                type: 'lesson',
                units: chapter.units,
                numberOfUnits: chapter.numberOfUnits,
                lesson: lessonNumber,
                chapter: chapterNumber,
            },
            title: chapter.title,
            generatedText: generateLesson(chapter.units, chapter.numberOfUnits)
        });
    }

    const randomTextClick = () => {
        let randomText = textCollection[Math.floor(Math.random() * textCollection.length)];

        props.passGeneratedLesson({
            lessonInfo: {
                type: 'random-text'
            },
            title: 'Random Text',
            generatedText: randomText
        });
    }

    const randomExerciseClick = () => {
        const allLessons = Object.keys(lessonsCollection);
        const randomLesson = allLessons[Math.floor(Math.random() * allLessons.length)];
        const foundLesson = lessonsCollection[randomLesson];

        const allChapters = Object.keys(foundLesson);
        const randomChapter = allChapters[Math.floor(Math.random() * allChapters.length)];
        const foundChapter = foundLesson[randomChapter];

        props.passGeneratedLesson({
            lessonInfo: {
                type: 'random-exercise',
                units: foundChapter.units,
                numberOfUnits: foundChapter.numberOfUnits
            },
            title: foundChapter.title,
            generatedText: generateLesson(foundChapter.units, foundChapter.numberOfUnits)
        });
    }

    const toggleList = (event) => {
        let innerUl = document.getElementById(event.target.textContent);
        innerUl.classList.toggle(`${style.show}`);

        event.target.classList.toggle(`${style.active}`);
    }

    const collapseComponent = () => {
        entireComponent.current.classList.toggle(`${style.hide}`);
        collapseIcon.current.classList.toggle(`${style.show}`);
    }

    return (
        <>
            <img src={collapseArrow} className={style.collapseRight} onClick={collapseComponent} alt="collapse icon" ref={collapseIcon} />

            <nav ref={entireComponent} className={style.chaptersContainer}>
                <img src={collapseArrow} className={style.collapseLeft} onClick={collapseComponent} alt="collapse icon" />
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