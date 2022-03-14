import React from "react";
import { Link } from "react-router-dom";
import style from './Chapters.module.css';

const Chapters = () => {

    return (
        <div className={style.chapters}>
            <ul>
                <li><Link to='/training/lesson-1' className={style.linkForTraning}>Chapter 1</Link></li>
                <li><Link to='/training' className={style.linkForTraning}>Chapter 2</Link></li>
                <li><Link to='/training' className={style.linkForTraning}>Chapter 3</Link></li>
                <li><Link to='/training' className={style.linkForTraning}>Chapter 4</Link></li>
                <li><Link to='/training' className={style.linkForTraning}>Chapter 5</Link></li>
                <li><Link to='/training' className={style.linkForTraning}>Chapter 6</Link></li>
                <li><Link to='/training' className={style.linkForTraning}>Chapter 7</Link></li>
                <li><Link to='/training' className={style.linkForTraning}>Chapter 8</Link></li>
                <li><Link to='/training' className={style.linkForTraning}>Chapter 9</Link></li>
                <li><Link to='/training' className={style.linkForTraning}>Chapter 10</Link></li>
                <li><Link to='/training/random-test' className={style.linkForTraning}>Random Test</Link></li>
                <li><Link to='/training/random-text' className={style.linkForTraning}>Random Text</Link></li>

                <li><Link to='/games' className={style.linkForTraning}>Games</Link></li>
            </ul>
        </div>
    )
};

export default Chapters;