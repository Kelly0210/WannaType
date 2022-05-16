import React from "react";
import { Link } from "react-router-dom";
import style from './Chapters.module.css';
import collapseArrow from '../../assets/img/collapseArrow.png';
import { textCollection } from "../common/textCollection";
import { lessonsCollection } from '../common/lessonsCollection';
import { generateLesson } from "../common/generateLesson";

const Chapters = (props) => {

    const lessonClick = (event) => {
        let stepOne = window.location.pathname.replaceAll('/', '.').replaceAll('-', '');
        let stepTwo = stepOne.slice(1);
        // event.target.classList.add(`${style.active}`)
        
        let blankForUnits = stepTwo + '.units';
        let blankForNumbers = stepTwo + '.numberOfUnits';

        let contentObject = blankForUnits.split('.').reduce((o, i) => o[i], lessonsCollection);
        let numbersObject = blankForNumbers.split('.').reduce((o, i) => o[i], lessonsCollection);

        let stepThree = generateLesson(contentObject, numbersObject);
        props.generateText(stepThree);
    }

    const CollapseComponent = () => {
        let entireComponent = document.getElementById('entireComponent');
        entireComponent.classList.toggle(`${style.hide}`);
        
        let arrowRight = document.getElementById('collapseRight');
        arrowRight.classList.toggle(`${style.show}`);
    }

    const toggleList = (event) => {
        let innerUl = document.getElementById(event.target.textContent);
        innerUl.classList.toggle(`${style.show}`);

        event.target.classList.toggle(`${style.active}`);
    }

    const randomTextClick = () => {
        let randomText = textCollection[Math.floor(Math.random() * textCollection.length)];
        props.generateText(randomText);
    }

    const randomExerciseClick = () => {
        let obj = lessonsCollection.lesson1.chapter1;
    }

    // if(!props.generatedText) {
    //     lessonClick();
    // }

    return (
        <>
            <img src={collapseArrow} className={style.collapseRight} onClick={CollapseComponent} alt="collapse icon" id='collapseRight' />

            <nav id='entireComponent' className={style.chaptersContainer}>
                <img src={collapseArrow} className={style.collapseLeft} onClick={CollapseComponent} alt="collapse icon" id='collapseLeft' />
                <ul>
                    <li><Link to='#' onClick={toggleList}>Lesson 1</Link></li>
                    <ul id='Lesson 1' className={style.innerUl}>
                        <li><Link to='/lesson-1/chapter-1' onClick={lessonClick}>New keys - <kbd>f</kbd> and <kbd>j</kbd></Link></li>
                        <li><Link to='/lesson-1/chapter-2' onClick={lessonClick}>New keys - <kbd>f</kbd> and <kbd>j</kbd></Link></li>
                        <li><Link to='/lesson-1/chapter-3' onClick={lessonClick}>New keys - <kbd>f</kbd> and <kbd>j</kbd></Link></li>

                        <li><Link to='/lesson-1/chapter-4' onClick={lessonClick}>New keys - <kbd>d</kbd> and <kbd>k</kbd></Link></li>
                        <li><Link to='/lesson-1/chapter-5' onClick={lessonClick}>New keys - <kbd>d</kbd> and <kbd>k</kbd></Link></li>
                        <li><Link to='/lesson-1/chapter-6' onClick={lessonClick}>New keys - <kbd>d</kbd> and <kbd>k</kbd></Link></li>

                        <li><Link to='/lesson-1/chapter-7' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-1/chapter-8' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-1/chapter-9' onClick={lessonClick}>All keys</Link></li>
                    </ul>

                    <li><Link to='#' onClick={toggleList}>Lesson 2</Link></li>
                    <ul id='Lesson 2' className={style.innerUl}>
                        <li><Link to='/lesson-2/chapter-1' onClick={lessonClick}>New keys - <kbd>s</kbd> and <kbd>l</kbd></Link></li>
                        <li><Link to='/lesson-2/chapter-2' onClick={lessonClick}>New keys - <kbd>s</kbd> and <kbd>l</kbd></Link></li>
                        <li><Link to='/lesson-2/chapter-3' onClick={lessonClick}>New keys - <kbd>s</kbd> and <kbd>l</kbd></Link></li>

                        <li><Link to='/lesson-2/chapter-4' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-2/chapter-5' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-2/chapter-6' onClick={lessonClick}>All keys</Link></li>

                        <li><Link to='/lesson-2/chapter-7' onClick={lessonClick}>New Keys - <kbd>a</kbd> and <kbd>;</kbd></Link></li>
                        <li><Link to='/lesson-2/chapter-8' onClick={lessonClick}>New Keys - <kbd>a</kbd> and <kbd>;</kbd></Link></li>
                        <li><Link to='/lesson-2/chapter-9' onClick={lessonClick}>New Keys - <kbd>a</kbd> and <kbd>;</kbd></Link></li>

                        <li><Link to='/lesson-2/chapter-10' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-2/chapter-11' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-2/chapter-12' onClick={lessonClick}>All keys</Link></li>
                    </ul>

                    <li><Link to='#' onClick={toggleList}>Lesson 3</Link></li>
                    <ul id='Lesson 3'>
                        <li><Link to='/lesson-3/chapter-1' onClick={lessonClick}>New keys - <kbd>g</kbd> and <kbd>h</kbd></Link></li>
                        <li><Link to='/lesson-3/chapter-2' onClick={lessonClick}>New keys - <kbd>g</kbd> and <kbd>h</kbd></Link></li>
                        <li><Link to='/lesson-3/chapter-3' onClick={lessonClick}>New keys - <kbd>g</kbd> and <kbd>h</kbd></Link></li>

                        <li><Link to='/lesson-3/chapter-4' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-3/chapter-5' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-3/chapter-6' onClick={lessonClick}>All keys</Link></li>

                        <li><Link to='/lesson-3/chapter-7' onClick={lessonClick}>Try Words</Link></li>
                        <li><Link to='/lesson-3/chapter-8' onClick={lessonClick}>Try Words</Link></li>
                        <li><Link to='/lesson-3/chapter-9' onClick={lessonClick}>Try Words</Link></li>
                    </ul>

                    <li><Link to='#' onClick={toggleList}>Lesson 4</Link></li>
                    <ul id='Lesson 4'>
                        <li><Link to='/lesson-4/chapter-1' onClick={lessonClick}>New keys - <kbd>r</kbd> and <kbd>u</kbd></Link></li>
                        <li><Link to='/lesson-4/chapter-2' onClick={lessonClick}>New keys - <kbd>r</kbd> and <kbd>u</kbd></Link></li>
                        <li><Link to='/lesson-4/chapter-3' onClick={lessonClick}>New keys - <kbd>r</kbd> and <kbd>u</kbd></Link></li>

                        <li><Link to='/lesson-4/chapter-4' onClick={lessonClick}>Homerow + Top Row</Link></li>
                        <li><Link to='/lesson-4/chapter-5' onClick={lessonClick}>Homerow + Top Row</Link></li>
                        <li><Link to='/lesson-4/chapter-6' onClick={lessonClick}>Homerow + Top Row</Link></li>

                        <li><Link to='/lesson-4/chapter-7' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-4/chapter-8' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-4/chapter-9' onClick={lessonClick}>All keys</Link></li>

                        <li><Link to='/lesson-4/chapter-10' onClick={lessonClick}>Try Words</Link></li>
                        <li><Link to='/lesson-4/chapter-11' onClick={lessonClick}>Try Words</Link></li>
                        <li><Link to='/lesson-4/chapter-12' onClick={lessonClick}>Try Words</Link></li>
                    </ul>

                    <li><Link to='#' onClick={toggleList}>Lesson 5</Link></li>
                    <ul id='Lesson 5'>
                        <li><Link to='/lesson-5/chapter-1' onClick={lessonClick}>New keys - <kbd>t</kbd> and <kbd>y</kbd></Link></li>
                        <li><Link to='/lesson-5/chapter-2' onClick={lessonClick}>New keys - <kbd>t</kbd> and <kbd>y</kbd></Link></li>
                        <li><Link to='/lesson-5/chapter-3' onClick={lessonClick}>New keys - <kbd>t</kbd> and <kbd>y</kbd></Link></li>

                        <li><Link to='/lesson-5/chapter-4' onClick={lessonClick}>Homerow + Top Row</Link></li>
                        <li><Link to='/lesson-5/chapter-5' onClick={lessonClick}>Homerow + Top Row</Link></li>
                        <li><Link to='/lesson-5/chapter-6' onClick={lessonClick}>Homerow + Top Row</Link></li>

                        <li><Link to='/lesson-5/chapter-7' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-5/chapter-8' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-5/chapter-9' onClick={lessonClick}>All keys</Link></li>

                        <li><Link to='/lesson-5/chapter-10' onClick={lessonClick}>Try Words</Link></li>
                        <li><Link to='/lesson-5/chapter-11' onClick={lessonClick}>Try Words</Link></li>
                        <li><Link to='/lesson-5/chapter-12' onClick={lessonClick}>Try Words</Link></li>
                    </ul>

                    <li><Link to='#' onClick={toggleList}>Lesson 6</Link></li>
                    <ul id='Lesson 6'>
                        <li><Link to='/lesson-6/chapter-1' onClick={lessonClick}>New keys - <kbd>e</kbd> and <kbd>i</kbd></Link></li>
                        <li><Link to='/lesson-6/chapter-2' onClick={lessonClick}>New keys - <kbd>e</kbd> and <kbd>i</kbd></Link></li>
                        <li><Link to='/lesson-6/chapter-3' onClick={lessonClick}>New keys - <kbd>e</kbd> and <kbd>i</kbd></Link></li>

                        <li><Link to='/lesson-6/chapter-4' onClick={lessonClick}>Homerow + Top Row</Link></li>
                        <li><Link to='/lesson-6/chapter-5' onClick={lessonClick}>Homerow + Top Row</Link></li>
                        <li><Link to='/lesson-6/chapter-6' onClick={lessonClick}>Homerow + Top Row</Link></li>

                        <li><Link to='/lesson-6/chapter-7' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-6/chapter-8' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-6/chapter-9' onClick={lessonClick}>All keys</Link></li>

                        <li><Link to='/lesson-6/chapter-10' onClick={lessonClick}>Try Words</Link></li>
                        <li><Link to='/lesson-6/chapter-11' onClick={lessonClick}>Try Words</Link></li>
                        <li><Link to='/lesson-6/chapter-12' onClick={lessonClick}>Try Words</Link></li>
                    </ul>

                    <li><Link to='#' onClick={toggleList}>Lesson 7</Link></li>
                    <ul id='Lesson 7'>
                        <li><Link to='/lesson-7/chapter-1' onClick={lessonClick}>New keys - <kbd>w</kbd> and <kbd>o</kbd></Link></li>
                        <li><Link to='/lesson-7/chapter-2' onClick={lessonClick}>New keys - <kbd>w</kbd> and <kbd>o</kbd></Link></li>
                        <li><Link to='/lesson-7/chapter-3' onClick={lessonClick}>New keys - <kbd>w</kbd> and <kbd>o</kbd></Link></li>

                        <li><Link to='/lesson-7/chapter-4' onClick={lessonClick}>Homerow + Top Row</Link></li>
                        <li><Link to='/lesson-7/chapter-5' onClick={lessonClick}>Homerow + Top Row</Link></li>
                        <li><Link to='/lesson-7/chapter-6' onClick={lessonClick}>Homerow + Top Row</Link></li>

                        <li><Link to='/lesson-7/chapter-7' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-7/chapter-8' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-7/chapter-9' onClick={lessonClick}>All keys</Link></li>

                        <li><Link to='/lesson-7/chapter-10' onClick={lessonClick}>Try Words</Link></li>
                        <li><Link to='/lesson-7/chapter-11' onClick={lessonClick}>Try Words</Link></li>
                        <li><Link to='/lesson-7/chapter-12' onClick={lessonClick}>Try Words</Link></li>

                    </ul>

                    <li><Link to='#' onClick={toggleList}>Lesson 8</Link></li>
                    <ul id='Lesson 8'>
                        <li><Link to='/lesson-8/chapter-1' onClick={lessonClick}>New keys - <kbd>q</kbd> and <kbd>p</kbd></Link></li>
                        <li><Link to='/lesson-8/chapter-2' onClick={lessonClick}>New keys - <kbd>q</kbd> and <kbd>p</kbd></Link></li>
                        <li><Link to='/lesson-8/chapter-3' onClick={lessonClick}>New keys - <kbd>q</kbd> and <kbd>p</kbd></Link></li>

                        <li><Link to='/lesson-8/chapter-4' onClick={lessonClick}>Homerow + Top Row</Link></li>
                        <li><Link to='/lesson-8/chapter-5' onClick={lessonClick}>Homerow + Top Row</Link></li>
                        <li><Link to='/lesson-8/chapter-6' onClick={lessonClick}>Homerow + Top Row</Link></li>

                        <li><Link to='/lesson-8/chapter-7' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-8/chapter-8' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-8/chapter-9' onClick={lessonClick}>All keys</Link></li>

                        <li><Link to='/lesson-8/chapter-10' onClick={lessonClick}>Try Words</Link></li>
                        <li><Link to='/lesson-8/chapter-11' onClick={lessonClick}>Try Words</Link></li>
                        <li><Link to='/lesson-8/chapter-12' onClick={lessonClick}>Try Words</Link></li>
                    </ul>

                    <li><Link to='#' onClick={toggleList}>Lesson 9</Link></li>
                    <ul id='Lesson 9'>
                        <li><Link to='/lesson-9/chapter-1' onClick={lessonClick}>New keys <kbd>v</kbd> and <kbd>m</kbd></Link></li>
                        <li><Link to='/lesson-9/chapter-2' onClick={lessonClick}>New keys <kbd>v</kbd> and <kbd>m</kbd></Link></li>
                        <li><Link to='/lesson-9/chapter-3' onClick={lessonClick}>New keys <kbd>v</kbd> and <kbd>m</kbd></Link></li>

                        <li><Link to='/lesson-9/chapter-4' onClick={lessonClick}>Homerow + Bot Row</Link></li>
                        <li><Link to='/lesson-9/chapter-5' onClick={lessonClick}>Homerow + Bot Row</Link></li>
                        <li><Link to='/lesson-9/chapter-6' onClick={lessonClick}>Homerow + Bot Row</Link></li>

                        <li><Link to='/lesson-9/chapter-7' onClick={lessonClick}>All Rows</Link></li>
                        <li><Link to='/lesson-9/chapter-8' onClick={lessonClick}>All Rows</Link></li>
                        <li><Link to='/lesson-9/chapter-9' onClick={lessonClick}>All Rows</Link></li>

                        <li><Link to='/lesson-9/chapter-10' onClick={lessonClick}>All Rows + Moving</Link></li>
                        <li><Link to='/lesson-9/chapter-11' onClick={lessonClick}>All Rows + Moving</Link></li>
                        <li><Link to='/lesson-9/chapter-12' onClick={lessonClick}>All Rows + Moving</Link></li>

                        <li><Link to='/lesson-9/chapter-13' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-9/chapter-14' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-9/chapter-15' onClick={lessonClick}>All keys</Link></li>

                        <li><Link to='/lesson-9/chapter-16' onClick={lessonClick}>Try Words</Link></li>
                        <li><Link to='/lesson-9/chapter-17' onClick={lessonClick}>Try Words</Link></li>
                        <li><Link to='/lesson-9/chapter-18' onClick={lessonClick}>Try Words</Link></li>
                    </ul>

                    <li><Link to='#' onClick={toggleList}>Lesson 10</Link></li>
                    <ul id='Lesson 10'>
                        <li><Link to='/lesson-10/chapter-1' onClick={lessonClick}>New keys - <kbd>b</kbd> and <kbd>n</kbd></Link></li>
                        <li><Link to='/lesson-10/chapter-2' onClick={lessonClick}>New keys - <kbd>b</kbd> and <kbd>n</kbd></Link></li>
                        <li><Link to='/lesson-10/chapter-3' onClick={lessonClick}>New keys - <kbd>b</kbd> and <kbd>n</kbd></Link></li>

                        <li><Link to='/lesson-10/chapter-4' onClick={lessonClick}>Homerow + Bot Row</Link></li>
                        <li><Link to='/lesson-10/chapter-5' onClick={lessonClick}>Homerow + Bot Row</Link></li>
                        <li><Link to='/lesson-10/chapter-6' onClick={lessonClick}>Homerow + Bot Row</Link></li>

                        <li><Link to='/lesson-10/chapter-7' onClick={lessonClick}>All Rows</Link></li>
                        <li><Link to='/lesson-10/chapter-8' onClick={lessonClick}>All Rows</Link></li>
                        <li><Link to='/lesson-10/chapter-9' onClick={lessonClick}>All Rows</Link></li>

                        <li><Link to='/lesson-10/chapter-10' onClick={lessonClick}>All Rows + Moving</Link></li>
                        <li><Link to='/lesson-10/chapter-11' onClick={lessonClick}>All Rows + Moving</Link></li>
                        <li><Link to='/lesson-10/chapter-12' onClick={lessonClick}>All Rows + Moving</Link></li>

                        <li><Link to='/lesson-10/chapter-13' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-10/chapter-14' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-10/chapter-15' onClick={lessonClick}>All keys</Link></li>

                        <li><Link to='/lesson-10/chapter-16' onClick={lessonClick}>Try Words</Link></li>
                        <li><Link to='/lesson-10/chapter-17' onClick={lessonClick}>Try Words</Link></li>
                        <li><Link to='/lesson-10/chapter-18' onClick={lessonClick}>Try Words</Link></li>
                    </ul>

                    <li><Link to='#' onClick={toggleList}>Lesson 11</Link></li>
                    <ul id='Lesson 11'>
                        <li><Link to='/lesson-11/chapter-1' onClick={lessonClick}>New keys - <kbd>c</kbd> and <kbd>,</kbd></Link></li>
                        <li><Link to='/lesson-11/chapter-2' onClick={lessonClick}>New keys - <kbd>c</kbd> and <kbd>,</kbd></Link></li>
                        <li><Link to='/lesson-11/chapter-3' onClick={lessonClick}>New keys - <kbd>c</kbd> and <kbd>,</kbd></Link></li>

                        <li><Link to='/lesson-11/chapter-4' onClick={lessonClick}>Homerow + Bot Row</Link></li>
                        <li><Link to='/lesson-11/chapter-5' onClick={lessonClick}>Homerow + Bot Row</Link></li>
                        <li><Link to='/lesson-11/chapter-6' onClick={lessonClick}>Homerow + Bot Row</Link></li>

                        <li><Link to='/lesson-11/chapter-7' onClick={lessonClick}>All Rows</Link></li>
                        <li><Link to='/lesson-11/chapter-8' onClick={lessonClick}>All Rows</Link></li>
                        <li><Link to='/lesson-11/chapter-9' onClick={lessonClick}>All Rows</Link></li>

                        <li><Link to='/lesson-11/chapter-10' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-11/chapter-11' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-11/chapter-12' onClick={lessonClick}>All keys</Link></li>

                        <li><Link to='/lesson-11/chapter-13' onClick={lessonClick}>Try Words</Link></li>
                        <li><Link to='/lesson-11/chapter-14' onClick={lessonClick}>Try Words</Link></li>
                        <li><Link to='/lesson-11/chapter-15' onClick={lessonClick}>Try Words</Link></li>
                    </ul>

                    <li><Link to='#' onClick={toggleList}>Lesson 12</Link></li>
                    <ul id='Lesson 12'>
                        <li><Link to='/lesson-12/chapter-1' onClick={lessonClick}>New keys - <kbd>x</kbd> and <kbd>.</kbd></Link></li>
                        <li><Link to='/lesson-12/chapter-2' onClick={lessonClick}>New keys - <kbd>x</kbd> and <kbd>.</kbd></Link></li>
                        <li><Link to='/lesson-12/chapter-3' onClick={lessonClick}>New keys - <kbd>x</kbd> and <kbd>.</kbd></Link></li>

                        <li><Link to='/lesson-12/chapter-4' onClick={lessonClick}>Homerow + Bot Row</Link></li>
                        <li><Link to='/lesson-12/chapter-5' onClick={lessonClick}>Homerow + Bot Row</Link></li>
                        <li><Link to='/lesson-12/chapter-6' onClick={lessonClick}>Homerow + Bot Row</Link></li>

                        <li><Link to='/lesson-12/chapter-7' onClick={lessonClick}>All Rows</Link></li>
                        <li><Link to='/lesson-12/chapter-8' onClick={lessonClick}>All Rows</Link></li>
                        <li><Link to='/lesson-12/chapter-9' onClick={lessonClick}>All Rows</Link></li>

                        <li><Link to='/lesson-12/chapter-10' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-12/chapter-11' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-12/chapter-12' onClick={lessonClick}>All keys</Link></li>

                        <li><Link to='/lesson-12/chapter-13' onClick={lessonClick}>Try Words</Link></li>
                        <li><Link to='/lesson-12/chapter-14' onClick={lessonClick}>Try Words</Link></li>
                        <li><Link to='/lesson-12/chapter-15' onClick={lessonClick}>Try Words</Link></li>
                    </ul>

                    <li><Link to='#' onClick={toggleList}>Lesson 13</Link></li>
                    <ul id='Lesson 13'>
                        <li><Link to='/lesson-13/chapter-1' onClick={lessonClick}>New keys - <kbd>z</kbd> and <kbd>'</kbd></Link></li>
                        <li><Link to='/lesson-13/chapter-2' onClick={lessonClick}>New keys - <kbd>z</kbd> and <kbd>'</kbd></Link></li>
                        <li><Link to='/lesson-13/chapter-3' onClick={lessonClick}>New keys - <kbd>z</kbd> and <kbd>'</kbd></Link></li>

                        <li><Link to='/lesson-13/chapter-4' onClick={lessonClick}>Homerow + Bot Row</Link></li>
                        <li><Link to='/lesson-13/chapter-5' onClick={lessonClick}>Homerow + Bot Row</Link></li>
                        <li><Link to='/lesson-13/chapter-6' onClick={lessonClick}>Homerow + Bot Row</Link></li>

                        <li><Link to='/lesson-13/chapter-7' onClick={lessonClick}>All Rows</Link></li>
                        <li><Link to='/lesson-13/chapter-8' onClick={lessonClick}>All Rows</Link></li>
                        <li><Link to='/lesson-13/chapter-9' onClick={lessonClick}>All Rows</Link></li>

                        <li><Link to='/lesson-13/chapter-10' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-13/chapter-11' onClick={lessonClick}>All keys</Link></li>
                        <li><Link to='/lesson-13/chapter-12' onClick={lessonClick}>All keys</Link></li>

                        <li><Link to='/lesson-13/chapter-13' onClick={lessonClick}>Try Words</Link></li>
                        <li><Link to='/lesson-13/chapter-14' onClick={lessonClick}>Try Words</Link></li>
                        <li><Link to='/lesson-13/chapter-15' onClick={lessonClick}>Try Words</Link></li>
                    </ul>

                    <li><Link to='/random-test' onClick={randomExerciseClick}>Random Exercise</Link></li>
                    <li><Link to='/random-text' onClick={randomTextClick}>Random Text</Link></li>

                </ul>
            </nav >
        </>
    )
}

export default Chapters;