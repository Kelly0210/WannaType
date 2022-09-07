import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import style from './Chapters.module.css';
import collapseArrow from '../../assets/img/collapseArrow.png';
import { textCollection } from "../../common/textCollection";
import { lessonsCollection } from '../../common/LessonsCollection';
import { generateLesson } from "../../common/generateLesson";

const Chapters = (props) => {
    // useEffect(() => {
    //     if (!props.generatedText) {
    //         switch (true) {
    //             case '/random-text': randomTextClick(); break;
    //             case '/random-exercise': randomExerciseClick(); break;
    //             default: lessonClick(); break;
    //         }
    //     }
    // }, [props.generatedText])

    useEffect(() => {
        if (!props.generatedText) {
            switch (true) {
                case '/random-text': randomTextClick(); break;
                case '/random-exercise': randomExerciseClick(); break;
                default: lessonClick(); break;
            }
        }
    }, [])

    const urlConvertor = (url) => {
        let blankForUnits = url + '.units';
        let blankForNumbers = url + '.numberOfUnits';

        let contentObject = blankForUnits.split('.').reduce((o, i) => o[i], lessonsCollection);
        let numbersObject = blankForNumbers.split('.').reduce((o, i) => o[i], lessonsCollection);

        return generateLesson(contentObject, numbersObject);
    }

    const lessonClick = () => {
        setTimeout(() => {
            let lessonUrl = window.location.pathname.replaceAll('/', '.').replaceAll('-', '');
            lessonUrl = lessonUrl.slice(1);

            props.generateText(urlConvertor(lessonUrl));
        }, 0)
    }

    const randomExerciseClick = () => {
        const random = () => {
            return Math.ceil(Math.random() * 12);
        }

        let randomExercise = `lesson${random()}.chapter${random()}`;
        props.generateText(urlConvertor(randomExercise));
    }

    //ALL GOOD
    const randomTextClick = () => {
        let randomText = textCollection[Math.floor(Math.random() * textCollection.length)];
        props.generateText(randomText);
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

    let createLesson = (object) => {
        let collection = [];

        Object.values(object).map(item => {
            return collection.push(<li><Link
                key={item.url}
                to={item.url}
                onClick={lessonClick}
                dangerouslySetInnerHTML={{ __html: item.title }}>
            </Link></li>)
        })

        return collection;
    }

    return (
        <>
            <img src={collapseArrow} className={style.collapseRight} onClick={collapseComponent} alt="collapse icon" id='collapseRight' />

            <nav id='entireComponent' className={style.chaptersContainer}>
                <img src={collapseArrow} className={style.collapseLeft} onClick={collapseComponent} alt="collapse icon" id='collapseLeft' />

                <ul>
                    <li><Link to='#' onClick={toggleList}>Lesson 1</Link></li>
                    <ul id='Lesson 1' className={style.innerUl}>
                        {createLesson(lessonsCollection.lesson1)}
                    </ul>

                    <li><Link to='#' onClick={toggleList}>Lesson 2</Link></li>
                    <ul id='Lesson 2' className={style.innerUl}>
                        {createLesson(lessonsCollection.lesson2)}
                    </ul>

                    <li><Link to='#' onClick={toggleList}>Lesson 3</Link></li>
                    <ul id='Lesson 3'>
                        {createLesson(lessonsCollection.lesson3)}
                    </ul>

                    <li><Link to='#' onClick={toggleList}>Lesson 4</Link></li>
                    <ul id='Lesson 4'>
                        {createLesson(lessonsCollection.lesson4)}
                    </ul>

                    <li><Link to='#' onClick={toggleList}>Lesson 5</Link></li>
                    <ul id='Lesson 5'>
                        {createLesson(lessonsCollection.lesson5)}
                    </ul>

                    <li><Link to='#' onClick={toggleList}>Lesson 6</Link></li>
                    <ul id='Lesson 6'>
                        {createLesson(lessonsCollection.lesson6)}
                    </ul>

                    <li><Link to='#' onClick={toggleList}>Lesson 7</Link></li>
                    <ul id='Lesson 7'>
                        {createLesson(lessonsCollection.lesson7)}
                    </ul>

                    <li><Link to='#' onClick={toggleList}>Lesson 8</Link></li>
                    <ul id='Lesson 8'>
                        {createLesson(lessonsCollection.lesson8)}
                    </ul>

                    <li><Link to='#' onClick={toggleList}>Lesson 9</Link></li>
                    <ul id='Lesson 9'>
                        {createLesson(lessonsCollection.lesson9)}
                    </ul>

                    <li><Link to='#' onClick={toggleList}>Lesson 10</Link></li>
                    <ul id='Lesson 10'>
                        {createLesson(lessonsCollection.lesson10)}
                    </ul>

                    <li><Link to='#' onClick={toggleList}>Lesson 11</Link></li>
                    <ul id='Lesson 11'>
                        {createLesson(lessonsCollection.lesson11)}
                    </ul>

                    <li><Link to='#' onClick={toggleList}>Lesson 12</Link></li>
                    <ul id='Lesson 12'>
                        {createLesson(lessonsCollection.lesson12)}
                    </ul>

                    <li><Link to='#' onClick={toggleList}>Lesson 13</Link></li>
                    <ul id='Lesson 13'>
                        {createLesson(lessonsCollection.lesson13)}
                    </ul>

                    <li><Link to='/random-exercise' onClick={randomExerciseClick}>Random Exercise</Link></li>
                    <li><Link to='/random-text' onClick={randomTextClick}>Random Text</Link></li>
                </ul>
            </nav >
        </>
    )
}

export default Chapters;