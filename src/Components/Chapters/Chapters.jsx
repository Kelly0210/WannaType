import React from "react";
import { Link } from "react-router-dom";
import style from './Chapters.module.css';
import collapseLeft from '../../assets/img/collapseLeft.png';
import { tutorial } from '../common/Lessons'
import { generateLesson } from "../common/generateLesson";

class Chapters extends React.Component {

    constructor() {
        super()
        this.toggleList = this.toggleList.bind(this);
        this.testClick = this.testClick.bind(this);
    }

    toggleList(event) {
        let innerUl = document.getElementById(event.target.textContent);
        innerUl.classList.toggle(`${style.expend}`);
    }

    CollapseComponent() {
        let sub = document.getElementById('test');
        sub.classList.toggle(`${style.hide}`);
    }

    testClick(event) {

        let test = event.target.pathname.replaceAll('/', '.');
        let testTwo = test.replaceAll('-', '');
        let testThree = testTwo.slice(1);
        let testFour = testThree.split('.').reduce((o, i) => o[i], tutorial);
        let testFive = generateLesson(testFour, 50)

        this.props.testFunc(testFive)

    }

    render() {
        return (
            <nav id='test' className={style.chaptersContainer}>

                <img src={collapseLeft} className={style.collapseLeft} onClick={this.CollapseComponent} alt="collapse icon" />

                <ul>
                    <li><Link to='#' onClick={this.toggleList}>Lesson 1</Link></li>
                    <ul id='Lesson 1'>
                        <li><Link to='/lesson-1/chapter-1'>New keys - <kbd>f</kbd> and <kbd>j</kbd></Link></li>
                        <li><Link to='/lesson-1/chapter-2'>New keys - <kbd>f</kbd> and <kbd>j</kbd></Link></li>
                        <li><Link to='/lesson-1/chapter-3'>New keys - <kbd>f</kbd> and <kbd>j</kbd></Link></li>

                        <li><Link to='/lesson-1/chapter-4'>New keys - <kbd>d</kbd> and <kbd>k</kbd></Link></li>
                        <li><Link to='/lesson-1/chapter-5'>New keys - <kbd>d</kbd> and <kbd>k</kbd></Link></li>
                        <li><Link to='/lesson-1/chapter-6'>New keys - <kbd>d</kbd> and <kbd>k</kbd></Link></li>

                        <li><Link to='/lesson-1/chapter-7'>All keys</Link></li>
                        <li><Link to='/lesson-1/chapter-8'>All keys</Link></li>
                        <li><Link to='/lesson-1/chapter-9'>All keys</Link></li>
                    </ul>

                    <li><Link to='#' onClick={this.toggleList}>Lesson 2</Link></li>
                    <ul id='Lesson 2'>
                        <li><Link to='/lesson-2/chapter-1'>New keys - <kbd>s</kbd> and <kbd>l</kbd></Link></li>
                        <li><Link to='/lesson-2/chapter-2'>New keys - <kbd>s</kbd> and <kbd>l</kbd></Link></li>
                        <li><Link to='/lesson-2/chapter-3'>New keys - <kbd>s</kbd> and <kbd>l</kbd></Link></li>

                        <li><Link to='/lesson-2/chapter-4'>All keys</Link></li>
                        <li><Link to='/lesson-2/chapter-5'>All keys</Link></li>
                        <li><Link to='/lesson-2/chapter-6'>All keys</Link></li>

                        <li><Link to='/lesson-2/chapter-7'>New Keys - <kbd>a</kbd> and <kbd>;</kbd></Link></li>
                        <li><Link to='/lesson-2/chapter-8'>New Keys - <kbd>a</kbd> and <kbd>;</kbd></Link></li>
                        <li><Link to='/lesson-2/chapter-9'>New Keys - <kbd>a</kbd> and <kbd>;</kbd></Link></li>

                        <li><Link to='/lesson-2/chapter-10'>All keys</Link></li>
                        <li><Link to='/lesson-2/chapter-11'>All keys</Link></li>
                        <li><Link to='/lesson-2/chapter-12'>All keys</Link></li>
                    </ul>

                    <li><Link to='#' onClick={this.toggleList}>Lesson 3</Link></li>
                    <ul id='Lesson 3'>
                        <li><Link to='/lesson-3/chapter-1'>New keys - <kbd>g</kbd> and <kbd>h</kbd></Link></li>
                        <li><Link to='/lesson-3/chapter-2'>New keys - <kbd>g</kbd> and <kbd>h</kbd></Link></li>
                        <li><Link to='/lesson-3/chapter-3'>New keys - <kbd>g</kbd> and <kbd>h</kbd></Link></li>

                        <li><Link to='/lesson-3/chapter-4'>All keys</Link></li>
                        <li><Link to='/lesson-3/chapter-5'>All keys</Link></li>
                        <li><Link to='/lesson-3/chapter-6'>All keys</Link></li>

                        <li><Link to='/lesson-3/chapter-7'>Try Words</Link></li>
                        <li><Link to='/lesson-3/chapter-8'>Try Words</Link></li>
                        <li><Link to='/lesson-3/chapter-9'>Try Words</Link></li>
                    </ul>

                    <li><Link to='#' onClick={this.toggleList}>Lesson 4</Link></li>
                    <ul id='Lesson 4'>
                        <li><Link to='/lesson-4/chapter-1'>New keys - <kbd>r</kbd> and <kbd>u</kbd></Link></li>
                        <li><Link to='/lesson-4/chapter-2'>New keys - <kbd>r</kbd> and <kbd>u</kbd></Link></li>
                        <li><Link to='/lesson-4/chapter-3'>New keys - <kbd>r</kbd> and <kbd>u</kbd></Link></li>

                        <li><Link to='/lesson-4/chapter-4'>Homerow + r and u</Link></li>
                        <li><Link to='/lesson-4/chapter-5'>Homerow + r and u</Link></li>
                        <li><Link to='/lesson-4/chapter-6'>Homerow + r and u</Link></li>

                        <li><Link to='/lesson-4/chapter-7'>All keys</Link></li>
                        <li><Link to='/lesson-4/chapter-8'>All keys</Link></li>
                        <li><Link to='/lesson-4/chapter-9'>All keys</Link></li>

                        <li><Link to='/lesson-4/chapter-10'>Try Words</Link></li>
                    </ul>

                    <li><Link to='#' onClick={this.toggleList}>Lesson 5</Link></li>
                    <ul id='Lesson 5'>
                        <li><Link to='/lesson-5/chapter-1'>New keys - <kbd>t</kbd> and <kbd>y</kbd></Link></li>
                        <li><Link to='/lesson-5/chapter-2'>New keys - <kbd>t</kbd> and <kbd>y</kbd></Link></li>
                        <li><Link to='/lesson-5/chapter-3'>New keys - <kbd>t</kbd> and <kbd>y</kbd></Link></li>

                        <li><Link to='/lesson-5/chapter-4'>Homerow + Top Row</Link></li>
                        <li><Link to='/lesson-5/chapter-5'>Homerow + Top Row</Link></li>
                        <li><Link to='/lesson-5/chapter-6'>Homerow + Top Row</Link></li>

                        <li><Link to='/lesson-5/chapter-7'>All keys</Link></li>
                        <li><Link to='/lesson-5/chapter-8'>All keys</Link></li>
                        <li><Link to='/lesson-5/chapter-9'>All keys</Link></li>

                        <li><Link to='/lesson-5/chapter-10'>Try words</Link></li>
                    </ul>

                    <li><Link to='#' onClick={this.toggleList}>Lesson 6</Link></li>
                    <ul id='Lesson 6'>
                        <li><Link to='/lesson-6/chapter-1'>New keys - <kbd>e</kbd> and <kbd>i</kbd></Link></li>
                        <li><Link to='/lesson-6/chapter-2'>New keys - <kbd>e</kbd> and <kbd>i</kbd></Link></li>
                        <li><Link to='/lesson-6/chapter-3'>New keys - <kbd>e</kbd> and <kbd>i</kbd></Link></li>

                        <li><Link to='/lesson-6/chapter-4'>Homerow + Top Row</Link></li>
                        <li><Link to='/lesson-6/chapter-5'>Homerow + Top Row</Link></li>
                        <li><Link to='/lesson-6/chapter-6'>Homerow + Top Row</Link></li>

                        <li><Link to='/lesson-6/chapter-7'>All keys</Link></li>
                        <li><Link to='/lesson-6/chapter-8'>All keys</Link></li>
                        <li><Link to='/lesson-6/chapter-9'>All keys</Link></li>

                        <li><Link to='/lesson-6/chapter-10'>Try words</Link></li>
                    </ul>

                    <li><Link to='#' onClick={this.toggleList}>Lesson 7</Link></li>
                    <ul id='Lesson 7'>
                        <li><Link to='/lesson-7/chapter-1'>New keys - <kbd>w</kbd> and <kbd>o</kbd></Link></li>
                        <li><Link to='/lesson-7/chapter-2'>New keys - <kbd>w</kbd> and <kbd>o</kbd></Link></li>
                        <li><Link to='/lesson-7/chapter-3'>New keys - <kbd>w</kbd> and <kbd>o</kbd></Link></li>

                        <li><Link to='/lesson-7/chapter-4'>Homerow + Top Row</Link></li>
                        <li><Link to='/lesson-7/chapter-5'>Homerow + Top Row</Link></li>
                        <li><Link to='/lesson-7/chapter-6'>Homerow + Top Row</Link></li>

                        <li><Link to='/lesson-7/chapter-7'>All keys</Link></li>
                        <li><Link to='/lesson-7/chapter-8'>All keys</Link></li>
                        <li><Link to='/lesson-7/chapter-9'>All keys</Link></li>

                        <li><Link to='/lesson-7/chapter-10'>Try Words</Link></li>
                    </ul>

                    <li><Link to='#' onClick={this.toggleList}>Lesson 8</Link></li>
                    <ul id='Lesson 8'>
                        <li><Link to='/lesson-8/chapter-1'>New keys - <kbd>q</kbd> and <kbd>p</kbd></Link></li>
                        <li><Link to='/lesson-8/chapter-2'>New keys - q and p</Link></li>
                        <li><Link to='/lesson-8/chapter-3'>New keys - q and p</Link></li>

                        <li><Link to='/lesson-8/chapter-4'>Homerow + Top Row</Link></li>
                        <li><Link to='/lesson-8/chapter-5'>Homerow + Top Row</Link></li>
                        <li><Link to='/lesson-8/chapter-6'>Homerow + Top Row</Link></li>

                        <li><Link to='/lesson-8/chapter-7'>All keys</Link></li>
                        <li><Link to='/lesson-8/chapter-8'>All keys</Link></li>
                        <li><Link to='/lesson-8/chapter-9'>All keys</Link></li>

                        <li><Link to='/lesson-8/chapter-10'>Try Words</Link></li>
                    </ul>

                    <li><Link to='#' onClick={this.toggleList}>Lesson 9</Link></li>
                    <ul id='Lesson 9'>
                        <li><Link to='/lesson-9/chapter-1'>New keys <kbd>v</kbd> and <kbd>m</kbd></Link></li>
                        <li><Link to='/lesson-9/chapter-2'>New keys v and m</Link></li>
                        <li><Link to='/lesson-9/chapter-3'>New keys v and m</Link></li>

                        <li><Link to='/lesson-9/chapter-4'>Homerow + Bot Row</Link></li>
                        <li><Link to='/lesson-9/chapter-5'>Homerow + Bot Row</Link></li>
                        <li><Link to='/lesson-9/chapter-6'>Homerow + Bot Row</Link></li>

                        <li><Link to='/lesson-9/chapter-7'>All Rows</Link></li>
                        <li><Link to='/lesson-9/chapter-8'>All Rows</Link></li>
                        <li><Link to='/lesson-9/chapter-9'>All Rows</Link></li>

                        <li><Link to='/lesson-9/chapter-10'>All Rows + Moving</Link></li>
                        <li><Link to='/lesson-9/chapter-11'>All Rows + Moving</Link></li>
                        <li><Link to='/lesson-9/chapter-12'>All Rows + Moving</Link></li>

                        <li><Link to='/lesson-9/chapter-13'>All keys</Link></li>
                        <li><Link to='/lesson-9/chapter-14'>All keys</Link></li>
                        <li><Link to='/lesson-9/chapter-15'>All keys</Link></li>

                        <li><Link to='/lesson-9/chapter-16'>Try Words</Link></li>
                    </ul>

                    <li><Link to='#' onClick={this.toggleList}>Lesson 10</Link></li>
                    <ul id='Lesson 10'>
                        <li><Link to='/lesson-10/chapter-1'>New keys - <kbd>c</kbd> and <kbd>,</kbd></Link></li>
                        <li><Link to='/lesson-10/chapter-2'>New keys - c and ,</Link></li>
                        <li><Link to='/lesson-10/chapter-3'>New keys - c and ,</Link></li>

                        <li><Link to='/lesson-10/chapter-4'>Homerow + Bot Row</Link></li>
                        <li><Link to='/lesson-10/chapter-5'>Homerow + Bot Row</Link></li>
                        <li><Link to='/lesson-10/chapter-6'>Homerow + Bot Row</Link></li>

                        <li><Link to='/lesson-10/chapter-7'>All Rows</Link></li>
                        <li><Link to='/lesson-10/chapter-8'>All Rows</Link></li>
                        <li><Link to='/lesson-10/chapter-9'>All Rows</Link></li>

                        <li><Link to='/lesson-10/chapter-10'>All keys</Link></li>
                        <li><Link to='/lesson-10/chapter-11'>All keys</Link></li>
                        <li><Link to='/lesson-10/chapter-12'>All keys</Link></li>

                        <li><Link to='/lesson-10/chapter-13'>Try Words</Link></li>
                    </ul>

                    <li><Link to='#' onClick={this.toggleList}>Lesson 11</Link></li>
                    <ul id='Lesson 11'>
                        <li><Link to='/lesson-11/chapter-1'>New keys - <kbd>x</kbd> and <kbd>.</kbd></Link></li>
                        <li><Link to='/lesson-11/chapter-2'>New keys - x and .</Link></li>
                        <li><Link to='/lesson-11/chapter-3'>New keys - x and .</Link></li>

                        <li><Link to='/lesson-11/chapter-4'>Homerow + Bot Row</Link></li>
                        <li><Link to='/lesson-11/chapter-5'>Homerow + Bot Row</Link></li>
                        <li><Link to='/lesson-11/chapter-6'>Homerow + Bot Row</Link></li>

                        <li><Link to='/lesson-11/chapter-7'>All Rows</Link></li>
                        <li><Link to='/lesson-11/chapter-8'>All Rows</Link></li>
                        <li><Link to='/lesson-11/chapter-9'>All Rows</Link></li>

                        <li><Link to='/lesson-11/chapter-10'>All keys</Link></li>
                        <li><Link to='/lesson-11/chapter-11'>All keys</Link></li>
                        <li><Link to='/lesson-11/chapter-12'>All keys</Link></li>


                        <li><Link to='/lesson-11/chapter-13'>Try Words</Link></li>
                    </ul>

                    <li><Link to='#' onClick={this.toggleList}>Lesson 12</Link></li>
                    <ul id='Lesson 12'>
                        <li><Link to='/lesson-12/chapter-1'>New keys - <kbd>z</kbd> and <kbd>/</kbd></Link></li>
                        <li><Link to='/lesson-12/chapter-2'>New keys - z and /</Link></li>
                        <li><Link to='/lesson-12/chapter-3'>New keys - z and /</Link></li>

                        <li><Link to='/lesson-12/chapter-4'>Homerow + Bot Row</Link></li>
                        <li><Link to='/lesson-12/chapter-5'>Homerow + Bot Row</Link></li>
                        <li><Link to='/lesson-12/chapter-6'>Homerow + Bot Row</Link></li>

                        <li><Link to='/lesson-12/chapter-7'>All Rows</Link></li>
                        <li><Link to='/lesson-12/chapter-8'>All Rows</Link></li>
                        <li><Link to='/lesson-12/chapter-9'>All Rows</Link></li>

                        <li><Link to='/lesson-12/chapter-10'>All keys</Link></li>
                        <li><Link to='/lesson-9/chapter-11'>All keys</Link></li>
                        <li><Link to='/lesson-9/chapter-12'>All keys</Link></li>

                        <li><Link to='/lesson-9/chapter-13'>Try Words</Link></li>
                    </ul>

                    <li><Link to='/random-test'>Random Test</Link></li>
                    <li><Link to='/random-text'>Random Text</Link></li>

                    <li><Link to='/games'>Games</Link></li>

                </ul>
            </nav >
        )
    }
};

export default Chapters;