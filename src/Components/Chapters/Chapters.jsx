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
            this.setState({ combinedStyle: `${style.chapters} ${style.hide}` });
        } else {
            this.setState(this.setState({ combinedStyle: `${style.chapters}` }))
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
                    <ul className={style.hide}>
                        <li><Link to='/lesson-2/chapter-1' className={style.linkForTraning}>Chapter 1</Link></li>
                        <li><Link to='/lesson-2/chapter-2' className={style.linkForTraning}>Chapter 2</Link></li>
                        <li><Link to='/lesson-2/chapter-3' className={style.linkForTraning}>Chapter 3</Link></li>

                        <li><Link to='/lesson-2/chapter-4' className={style.linkForTraning}>Chapter 4</Link></li>
                        <li><Link to='/lesson-2/chapter-5' className={style.linkForTraning}>Chapter 5</Link></li>
                        <li><Link to='/lesson-2/chapter-6' className={style.linkForTraning}>Chapter 6</Link></li>

                        <li><Link to='/lesson-2/chapter-7' className={style.linkForTraning}>Chapter 7</Link></li>
                        <li><Link to='/lesson-2/chapter-8' className={style.linkForTraning}>Chapter 8</Link></li>
                        <li><Link to='/lesson-2/chapter-9' className={style.linkForTraning}>Chapter 9</Link></li>

                        <li><Link to='/lesson-2/chapter-10' className={style.linkForTraning}>Chapter 10</Link></li>
                        <li><Link to='/lesson-2/chapter-11' className={style.linkForTraning}>Chapter 11</Link></li>
                        <li><Link to='/lesson-2/chapter-12' className={style.linkForTraning}>Chapter 12</Link></li>
                    </ul>

                    <li><Link to='#' className={style.linkForTraning}>Lesson 3</Link></li>
                    <ul className={style.hide}>
                        <li><Link to='/lesson-3/chapter-1' className={style.linkForTraning}>Chapter 1</Link></li>
                        <li><Link to='/lesson-3/chapter-2' className={style.linkForTraning}>Chapter 2</Link></li>
                        <li><Link to='/lesson-3/chapter-3' className={style.linkForTraning}>Chapter 3</Link></li>

                        <li><Link to='/lesson-3/chapter-4' className={style.linkForTraning}>Chapter 4</Link></li>
                        <li><Link to='/lesson-3/chapter-5' className={style.linkForTraning}>Chapter 5</Link></li>
                        <li><Link to='/lesson-3/chapter-6' className={style.linkForTraning}>Chapter 6</Link></li>

                        <li><Link to='/lesson-3/chapter-7' className={style.linkForTraning}>Chapter 7</Link></li>
                        <li><Link to='/lesson-3/chapter-8' className={style.linkForTraning}>Chapter 8</Link></li>
                        <li><Link to='/lesson-3/chapter-9' className={style.linkForTraning}>Chapter 9</Link></li>
                    </ul>

                    <li><Link to='#' className={style.linkForTraning}>Lesson 4</Link></li>
                    <ul className={style.hide}>
                        <li><Link to='/lesson-4/chapter-1' className={style.linkForTraning}>Chapter 1</Link></li>
                        <li><Link to='/lesson-4/chapter-2' className={style.linkForTraning}>Chapter 2</Link></li>
                        <li><Link to='/lesson-4/chapter-3' className={style.linkForTraning}>Chapter 3</Link></li>

                        <li><Link to='/lesson-4/chapter-4' className={style.linkForTraning}>Chapter 4</Link></li>
                        <li><Link to='/lesson-4/chapter-5' className={style.linkForTraning}>Chapter 5</Link></li>
                        <li><Link to='/lesson-4/chapter-6' className={style.linkForTraning}>Chapter 6</Link></li>

                        <li><Link to='/lesson-4/chapter-7' className={style.linkForTraning}>Chapter 7</Link></li>
                        <li><Link to='/lesson-4/chapter-8' className={style.linkForTraning}>Chapter 8</Link></li>
                        <li><Link to='/lesson-4/chapter-9' className={style.linkForTraning}>Chapter 9</Link></li>

                        <li><Link to='/lesson-4/chapter-10' className={style.linkForTraning}>Chapter 10</Link></li>
                    </ul>

                    <li><Link to='#' className={style.linkForTraning}>Lesson 5</Link></li>
                    <ul className={style.hide}>
                        <li><Link to='/lesson-5/chapter-1' className={style.linkForTraning}>Chapter 1</Link></li>
                        <li><Link to='/lesson-5/chapter-2' className={style.linkForTraning}>Chapter 2</Link></li>
                        <li><Link to='/lesson-5/chapter-3' className={style.linkForTraning}>Chapter 3</Link></li>

                        <li><Link to='/lesson-5/chapter-4' className={style.linkForTraning}>Chapter 4</Link></li>
                        <li><Link to='/lesson-5/chapter-5' className={style.linkForTraning}>Chapter 5</Link></li>
                        <li><Link to='/lesson-5/chapter-6' className={style.linkForTraning}>Chapter 6</Link></li>

                        <li><Link to='/lesson-5/chapter-7' className={style.linkForTraning}>Chapter 7</Link></li>
                        <li><Link to='/lesson-5/chapter-8' className={style.linkForTraning}>Chapter 8</Link></li>
                        <li><Link to='/lesson-5/chapter-9' className={style.linkForTraning}>Chapter 9</Link></li>

                        <li><Link to='/lesson-5/chapter-10' className={style.linkForTraning}>Chapter 10</Link></li>
                    </ul>

                    <li><Link to='#' className={style.linkForTraning}>Lesson 6</Link></li>
                    <ul className={style.hide}>
                        <li><Link to='/lesson-6/chapter-1' className={style.linkForTraning}>Chapter 1</Link></li>
                        <li><Link to='/lesson-6/chapter-2' className={style.linkForTraning}>Chapter 2</Link></li>
                        <li><Link to='/lesson-6/chapter-3' className={style.linkForTraning}>Chapter 3</Link></li>

                        <li><Link to='/lesson-6/chapter-4' className={style.linkForTraning}>Chapter 4</Link></li>
                        <li><Link to='/lesson-6/chapter-5' className={style.linkForTraning}>Chapter 5</Link></li>
                        <li><Link to='/lesson-6/chapter-6' className={style.linkForTraning}>Chapter 6</Link></li>

                        <li><Link to='/lesson-6/chapter-7' className={style.linkForTraning}>Chapter 7</Link></li>
                        <li><Link to='/lesson-6/chapter-8' className={style.linkForTraning}>Chapter 8</Link></li>
                        <li><Link to='/lesson-6/chapter-9' className={style.linkForTraning}>Chapter 9</Link></li>

                        <li><Link to='/lesson-6/chapter-10' className={style.linkForTraning}>Chapter 10</Link></li>
                    </ul>

                    <li><Link to='#' className={style.linkForTraning}>Lesson 7</Link></li>
                    <ul className={style.hide}>
                        <li><Link to='/lesson-7/chapter-1' className={style.linkForTraning}>Chapter 1</Link></li>
                        <li><Link to='/lesson-7/chapter-2' className={style.linkForTraning}>Chapter 2</Link></li>
                        <li><Link to='/lesson-7/chapter-3' className={style.linkForTraning}>Chapter 3</Link></li>

                        <li><Link to='/lesson-7/chapter-4' className={style.linkForTraning}>Chapter 4</Link></li>
                        <li><Link to='/lesson-7/chapter-5' className={style.linkForTraning}>Chapter 5</Link></li>
                        <li><Link to='/lesson-7/chapter-6' className={style.linkForTraning}>Chapter 6</Link></li>

                        <li><Link to='/lesson-7/chapter-7' className={style.linkForTraning}>Chapter 7</Link></li>
                        <li><Link to='/lesson-7/chapter-8' className={style.linkForTraning}>Chapter 8</Link></li>
                        <li><Link to='/lesson-7/chapter-9' className={style.linkForTraning}>Chapter 9</Link></li>

                        <li><Link to='/lesson-7/chapter-10' className={style.linkForTraning}>Chapter 10</Link></li>
                    </ul>

                    <li><Link to='#' className={style.linkForTraning}>Lesson 8</Link></li>
                    <ul className={style.hide}>
                        <li><Link to='/lesson-8/chapter-1' className={style.linkForTraning}>Chapter 1</Link></li>
                        <li><Link to='/lesson-8/chapter-2' className={style.linkForTraning}>Chapter 2</Link></li>
                        <li><Link to='/lesson-8/chapter-3' className={style.linkForTraning}>Chapter 3</Link></li>

                        <li><Link to='/lesson-8/chapter-4' className={style.linkForTraning}>Chapter 4</Link></li>
                        <li><Link to='/lesson-8/chapter-5' className={style.linkForTraning}>Chapter 5</Link></li>
                        <li><Link to='/lesson-8/chapter-6' className={style.linkForTraning}>Chapter 6</Link></li>

                        <li><Link to='/lesson-8/chapter-7' className={style.linkForTraning}>Chapter 7</Link></li>
                        <li><Link to='/lesson-8/chapter-8' className={style.linkForTraning}>Chapter 8</Link></li>
                        <li><Link to='/lesson-8/chapter-9' className={style.linkForTraning}>Chapter 9</Link></li>

                        <li><Link to='/lesson-8/chapter-10' className={style.linkForTraning}>Chapter 10</Link></li>
                    </ul>

                    <li><Link to='#' className={style.linkForTraning}>Lesson 9</Link></li>
                    <ul className={style.hide}>
                        <li><Link to='/lesson-9/chapter-1' className={style.linkForTraning}>Chapter 1</Link></li>
                        <li><Link to='/lesson-9/chapter-2' className={style.linkForTraning}>Chapter 2</Link></li>
                        <li><Link to='/lesson-9/chapter-3' className={style.linkForTraning}>Chapter 3</Link></li>

                        <li><Link to='/lesson-9/chapter-4' className={style.linkForTraning}>Chapter 4</Link></li>
                        <li><Link to='/lesson-9/chapter-5' className={style.linkForTraning}>Chapter 5</Link></li>
                        <li><Link to='/lesson-9/chapter-6' className={style.linkForTraning}>Chapter 6</Link></li>

                        <li><Link to='/lesson-9/chapter-7' className={style.linkForTraning}>Chapter 7</Link></li>
                        <li><Link to='/lesson-9/chapter-8' className={style.linkForTraning}>Chapter 8</Link></li>
                        <li><Link to='/lesson-9/chapter-9' className={style.linkForTraning}>Chapter 9</Link></li>

                        <li><Link to='/lesson-9/chapter-10' className={style.linkForTraning}>Chapter 10</Link></li>
                        <li><Link to='/lesson-9/chapter-11' className={style.linkForTraning}>Chapter 11</Link></li>
                        <li><Link to='/lesson-9/chapter-12' className={style.linkForTraning}>Chapter 12</Link></li>

                        <li><Link to='/lesson-9/chapter-13' className={style.linkForTraning}>Chapter 13</Link></li>
                        <li><Link to='/lesson-9/chapter-14' className={style.linkForTraning}>Chapter 14</Link></li>
                        <li><Link to='/lesson-9/chapter-15' className={style.linkForTraning}>Chapter 15</Link></li>

                        <li><Link to='/lesson-9/chapter-16' className={style.linkForTraning}>Chapter 16</Link></li>
                    </ul>

                    <li><Link to='#' className={style.linkForTraning}>Lesson 10</Link></li>
                    <ul className={style.hide}>
                        <li><Link to='/lesson-10/chapter-1' className={style.linkForTraning}>Chapter 1</Link></li>
                        <li><Link to='/lesson-10/chapter-2' className={style.linkForTraning}>Chapter 2</Link></li>
                        <li><Link to='/lesson-10/chapter-3' className={style.linkForTraning}>Chapter 3</Link></li>

                        <li><Link to='/lesson-10/chapter-4' className={style.linkForTraning}>Chapter 4</Link></li>
                        <li><Link to='/lesson-10/chapter-5' className={style.linkForTraning}>Chapter 5</Link></li>
                        <li><Link to='/lesson-10/chapter-6' className={style.linkForTraning}>Chapter 6</Link></li>

                        <li><Link to='/lesson-10/chapter-7' className={style.linkForTraning}>Chapter 7</Link></li>
                        <li><Link to='/lesson-10/chapter-8' className={style.linkForTraning}>Chapter 8</Link></li>
                        <li><Link to='/lesson-10/chapter-9' className={style.linkForTraning}>Chapter 9</Link></li>

                        <li><Link to='/lesson-10/chapter-10' className={style.linkForTraning}>Chapter 10</Link></li>
                        <li><Link to='/lesson-10/chapter-11' className={style.linkForTraning}>Chapter 11</Link></li>
                        <li><Link to='/lesson-10/chapter-12' className={style.linkForTraning}>Chapter 12</Link></li>

                        <li><Link to='/lesson-10/chapter-13' className={style.linkForTraning}>Chapter 13</Link></li>
                    </ul>

                    <li><Link to='#' className={style.linkForTraning}>Lesson 11</Link></li>
                    <ul className={style.hide}>
                        <li><Link to='/lesson-11/chapter-1' className={style.linkForTraning}>Chapter 1</Link></li>
                        <li><Link to='/lesson-11/chapter-2' className={style.linkForTraning}>Chapter 2</Link></li>
                        <li><Link to='/lesson-11/chapter-3' className={style.linkForTraning}>Chapter 3</Link></li>

                        <li><Link to='/lesson-11/chapter-4' className={style.linkForTraning}>Chapter 4</Link></li>
                        <li><Link to='/lesson-11/chapter-5' className={style.linkForTraning}>Chapter 5</Link></li>
                        <li><Link to='/lesson-11/chapter-6' className={style.linkForTraning}>Chapter 6</Link></li>

                        <li><Link to='/lesson-11/chapter-7' className={style.linkForTraning}>Chapter 7</Link></li>
                        <li><Link to='/lesson-11/chapter-8' className={style.linkForTraning}>Chapter 8</Link></li>
                        <li><Link to='/lesson-11/chapter-9' className={style.linkForTraning}>Chapter 9</Link></li>

                        <li><Link to='/lesson-11/chapter-10' className={style.linkForTraning}>Chapter 10</Link></li>
                        <li><Link to='/lesson-11/chapter-11' className={style.linkForTraning}>Chapter 11</Link></li>
                        <li><Link to='/lesson-11/chapter-12' className={style.linkForTraning}>Chapter 11</Link></li>


                        <li><Link to='/lesson-11/chapter-13' className={style.linkForTraning}>Chapter 13</Link></li>
                    </ul>

                    <li><Link to='#' className={style.linkForTraning}>Lesson 12</Link></li>
                    <ul className={style.hide}>
                        <li><Link to='/lesson-12/chapter-1' className={style.linkForTraning}>Chapter 1</Link></li>
                        <li><Link to='/lesson-12/chapter-2' className={style.linkForTraning}>Chapter 2</Link></li>
                        <li><Link to='/lesson-12/chapter-3' className={style.linkForTraning}>Chapter 3</Link></li>

                        <li><Link to='/lesson-12/chapter-4' className={style.linkForTraning}>Chapter 4</Link></li>
                        <li><Link to='/lesson-12/chapter-5' className={style.linkForTraning}>Chapter 5</Link></li>
                        <li><Link to='/lesson-12/chapter-6' className={style.linkForTraning}>Chapter 6</Link></li>

                        <li><Link to='/lesson-12/chapter-7' className={style.linkForTraning}>Chapter 7</Link></li>
                        <li><Link to='/lesson-12/chapter-8' className={style.linkForTraning}>Chapter 8</Link></li>
                        <li><Link to='/lesson-12/chapter-9' className={style.linkForTraning}>Chapter 9</Link></li>

                        <li><Link to='/lesson-12/chapter-10' className={style.linkForTraning}>Chapter 10</Link></li>
                        <li><Link to='/lesson-9/chapter-11' className={style.linkForTraning}>Chapter 11</Link></li>
                        <li><Link to='/lesson-9/chapter-12' className={style.linkForTraning}>Chapter 12</Link></li>

                        <li><Link to='/lesson-9/chapter-13' className={style.linkForTraning}>Chapter 13</Link></li>
                    </ul>

                    <li><Link to='/random-test' className={style.linkForTraning}>Random Test</Link></li>
                    <li><Link to='/random-text' className={style.linkForTraning}>Random Text</Link></li>

                    <li><Link to='/games' className={style.linkForTraning}>Games</Link></li>

                </ul>
            </div >
        )
    }
};

export default Chapters;