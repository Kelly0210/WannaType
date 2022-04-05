import React from "react";
import { Link } from "react-router-dom";
import style from './Chapters.module.css';

const Chapters = () => {

    let combinedStyle = `${style.chapters}`;

    const callMe= () => {
        return combinedStyle = `${style.chapters} ${style.hide}`;
    }

    return (
        <div className={style.chaptersContainer}>
            <ul>
                <li onClick={callMe}>Lesson 1</li>
                <ul className={combinedStyle}>
                    <li><Link to='/training/lesson-1/chapter-1' className={style.linkForTraning}>New keys - f and j</Link></li>
                    <li><Link to='/training/lesson-1/chapter-2' className={style.linkForTraning}>Training - f and j</Link></li>
                    <li><Link to='/training/lesson-1/chapter-3' className={style.linkForTraning}>Training - f and j</Link></li>

                    <li><Link to='/training/lesson-1/chapter-4' className={style.linkForTraning}>New keys - d and k</Link></li>
                    <li><Link to='/training/lesson-1/chapter-5' className={style.linkForTraning}>Training - d and k</Link></li>
                    <li><Link to='/training/lesson-1/chapter-6' className={style.linkForTraning}>Training - d and k</Link></li>

                    <li><Link to='/training/lesson-1/chapter-7' className={style.linkForTraning}>All keys</Link></li>
                    <li><Link to='/training/lesson-1/chapter-8' className={style.linkForTraning}>All keys</Link></li>
                    <li><Link to='/training/lesson-1/chapter-9' className={style.linkForTraning}>All keys</Link></li>
                </ul>
                {/* <li><Link to='/training' className={style.linkForTraning}>Lesson 2</Link></li>
                <li><Link to='/training' className={style.linkForTraning}>Lesson 3</Link></li>
                <li><Link to='/training' className={style.linkForTraning}>Lesson 4</Link></li>
                <li><Link to='/training' className={style.linkForTraning}>Lesson 5</Link></li>
                <li><Link to='/training' className={style.linkForTraning}>Lesson 6</Link></li>
                <li><Link to='/training' className={style.linkForTraning}>Lesson 7</Link></li>
                <li><Link to='/training' className={style.linkForTraning}>Lesson 8</Link></li>
                <li><Link to='/training' className={style.linkForTraning}>Lesson 9</Link></li>
                <li><Link to='/training' className={style.linkForTraning}>Lesson 10</Link></li> */}
                {/* <li><Link to='/training/random-test' className={style.linkForTraning}>Random Test</Link></li>
                <li><Link to='/training/random-text' className={style.linkForTraning}>Random Text</Link></li> */}

                <li><Link to='/games' className={style.linkForTraning}>Games</Link></li>
            </ul>
        </div>
    )
};

export default Chapters;