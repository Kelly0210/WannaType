import React from "react";
import { Link } from "react-router-dom";
import style from './Chapters.module.css';

const Chapters = () => {
    return (
        <div className={style.chapters}>
            <ul>
                <li>
                    <Link to='/training'>Chapter 1</Link>
                </li>
                <li>
                    <a href='/chapter2'>Chapter 2</a>
                </li>
                <li>Chapter 3</li>
                <li>Chapter 4</li>
                <li>Chapter 5</li>
                <li>Random Test</li>
                <li>Random Text</li>
            </ul>
        </div>
    )
};

export default Chapters;