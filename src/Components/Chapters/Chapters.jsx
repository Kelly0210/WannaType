import React from "react";
import { Link } from "react-router-dom";
import style from './Chapters.module.css';

class Chapters extends React.Component {

    constructor() {
        super()
        this.state = {
            combinedStyle: `${style.chapters}`
        }

    this.callMe = this.callMe.bind(this);
    }

    callMe = () => {
        if (this.state.combinedStyle === `${style.chapters}`) {
            this.setState({combinedStyle: `${style.chapters} ${style.hide}`});
        } else {
            this.setState(this.setState({combinedStyle: `${style.chapters}`}))
        }
        
    }

    render() {
        return (
            <div className={style.chaptersContainer}>
                <ul>
                    <li><Link to='#' onClick={this.callMe} className={style.linkForTraning}>Lesson 1</Link></li>
                    <ul className={this.state.combinedStyle}>
                        <li><Link to='/lesson-1/chapter-1' className={style.linkForTraning}>New keys - f and j</Link></li>
                        <li><Link to='/lesson-1/chapter-2' className={style.linkForTraning}>Training - f and j</Link></li>
                        <li><Link to='/lesson-1/chapter-3' className={style.linkForTraning}>Training - f and j</Link></li>

                        <li><Link to='/lesson-1/chapter-4' className={style.linkForTraning}>New keys - d and k</Link></li>
                        <li><Link to='/lesson-1/chapter-5' className={style.linkForTraning}>Training - d and k</Link></li>
                        <li><Link to='/lesson-1/chapter-6' className={style.linkForTraning}>Training - d and k</Link></li>

                        <li><Link to='/lesson-1/chapter-7' className={style.linkForTraning}>All keys</Link></li>
                        <li><Link to='/lesson-1/chapter-8' className={style.linkForTraning}>All keys</Link></li>
                        <li><Link to='/lesson-1/chapter-9' className={style.linkForTraning}>All keys</Link></li>
                    </ul>
                    <li><Link to='#' className={style.linkForTraning}>Lesson 2</Link></li>
                    <li><Link to='#' className={style.linkForTraning}>Lesson 3</Link></li>
                    <li><Link to='#' className={style.linkForTraning}>Lesson 4</Link></li>
                    <li><Link to='#' className={style.linkForTraning}>Lesson 5</Link></li>
                    <li><Link to='#' className={style.linkForTraning}>Lesson 6</Link></li>
                    <li><Link to='#' className={style.linkForTraning}>Lesson 7</Link></li>
                    <li><Link to='#' className={style.linkForTraning}>Lesson 8</Link></li>
                    <li><Link to='#' className={style.linkForTraning}>Lesson 9</Link></li>
                    <li><Link to='#' className={style.linkForTraning}>Lesson 10</Link></li>
                    <li><Link to='#' className={style.linkForTraning}>Lesson 10</Link></li>
                    <li><Link to='#' className={style.linkForTraning}>Lesson 10</Link></li>

                    {/* <li><Link to='/training/random-test' className={style.linkForTraning}>Random Test</Link></li>
                <li><Link to='/training/random-text' className={style.linkForTraning}>Random Text</Link></li> */}

                    <li><Link to='/games' className={style.linkForTraning}>Games</Link></li>

                    <li><Link to='/lesson-1/chapter-1' className={style.linkForTraning}>test link</Link></li>

                </ul>
            </div>
        )
    }
};

export default Chapters;