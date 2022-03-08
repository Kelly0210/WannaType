import React from "react";
import style from './Chapters.module.css';

const Chapters = () => {
    return (
        <div className={style.chapters}>
            <ul>
                <li>Chapter 1</li>
                <li>Chapter 2</li>
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