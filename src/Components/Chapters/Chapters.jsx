import React from "react";
import { Link } from "react-router-dom";
import style from './Chapters.module.css';

class Chapters extends React.Component {

    constructor() {
        super()

        this.toggleList = this.toggleList.bind(this);
    }

    toggleList(event) {
        
        let innerUl = document.getElementById(event.target.textContent);

        if (innerUl.classList.contains(`${style.active}`)) {
            innerUl.classList.remove(`${style.active}`)
        } else {
            innerUl.classList.add(`${style.active}`)
        }
    }

    render() {
        return (
            <div className={style.chaptersContainer}>
                <ul>
                    <li><Link to='#' onClick={this.toggleList}>Lesson 1</Link></li>
                    <ul id='Lesson 1'>
                        <li><Link to='/lesson-1/chapter-1'>New keys - f and j</Link></li>
                        <li><Link to='/lesson-1/chapter-2'>Training - f and j</Link></li>
                        <li><Link to='/lesson-1/chapter-3'>Training - f and j</Link></li>

                        <li><Link to='/lesson-1/chapter-4'>New keys - d and k</Link></li>
                        <li><Link to='/lesson-1/chapter-5'>Training - d and k</Link></li>
                        <li><Link to='/lesson-1/chapter-6'>Training - d and k</Link></li>

                        <li><Link to='/lesson-1/chapter-7'>All keys</Link></li>
                        <li><Link to='/lesson-1/chapter-8'>All keys</Link></li>
                        <li><Link to='/lesson-1/chapter-9'>All keys</Link></li>
                    </ul>

                    <li><Link to='#' onClick={this.toggleList}>Lesson 2</Link></li>
                    <ul id='Lesson 2'>
                        <li><Link to='/lesson-2/chapter-1'>Chapter 1</Link></li>
                        <li><Link to='/lesson-2/chapter-2'>Chapter 2</Link></li>
                        <li><Link to='/lesson-2/chapter-3'>Chapter 3</Link></li>

                        <li><Link to='/lesson-2/chapter-4'>Chapter 4</Link></li>
                        <li><Link to='/lesson-2/chapter-5'>Chapter 5</Link></li>
                        <li><Link to='/lesson-2/chapter-6'>Chapter 6</Link></li>

                        <li><Link to='/lesson-2/chapter-7'>Chapter 7</Link></li>
                        <li><Link to='/lesson-2/chapter-8'>Chapter 8</Link></li>
                        <li><Link to='/lesson-2/chapter-9'>Chapter 9</Link></li>

                        <li><Link to='/lesson-2/chapter-10'>Chapter 10</Link></li>
                        <li><Link to='/lesson-2/chapter-11'>Chapter 11</Link></li>
                        <li><Link to='/lesson-2/chapter-12'>Chapter 12</Link></li>
                    </ul>

                    <li><Link to='#' onClick={this.toggleList}>Lesson 3</Link></li>
                    <ul id='Lesson 3'>
                        <li><Link to='/lesson-3/chapter-1'>Chapter 1</Link></li>
                        <li><Link to='/lesson-3/chapter-2'>Chapter 2</Link></li>
                        <li><Link to='/lesson-3/chapter-3'>Chapter 3</Link></li>

                        <li><Link to='/lesson-3/chapter-4'>Chapter 4</Link></li>
                        <li><Link to='/lesson-3/chapter-5'>Chapter 5</Link></li>
                        <li><Link to='/lesson-3/chapter-6'>Chapter 6</Link></li>

                        <li><Link to='/lesson-3/chapter-7'>Chapter 7</Link></li>
                        <li><Link to='/lesson-3/chapter-8'>Chapter 8</Link></li>
                        <li><Link to='/lesson-3/chapter-9'>Chapter 9</Link></li>
                    </ul>

                    <li><Link to='#' onClick={this.toggleList}>Lesson 4</Link></li>
                    <ul id='Lesson 4'>
                        <li><Link to='/lesson-4/chapter-1'>Chapter 1</Link></li>
                        <li><Link to='/lesson-4/chapter-2'>Chapter 2</Link></li>
                        <li><Link to='/lesson-4/chapter-3'>Chapter 3</Link></li>

                        <li><Link to='/lesson-4/chapter-4'>Chapter 4</Link></li>
                        <li><Link to='/lesson-4/chapter-5'>Chapter 5</Link></li>
                        <li><Link to='/lesson-4/chapter-6'>Chapter 6</Link></li>

                        <li><Link to='/lesson-4/chapter-7'>Chapter 7</Link></li>
                        <li><Link to='/lesson-4/chapter-8'>Chapter 8</Link></li>
                        <li><Link to='/lesson-4/chapter-9'>Chapter 9</Link></li>

                        <li><Link to='/lesson-4/chapter-10'>Chapter 10</Link></li>
                    </ul>

                    <li><Link to='#' onClick={this.toggleList}>Lesson 5</Link></li>
                    <ul id='Lesson 5'>
                        <li><Link to='/lesson-5/chapter-1'>Chapter 1</Link></li>
                        <li><Link to='/lesson-5/chapter-2'>Chapter 2</Link></li>
                        <li><Link to='/lesson-5/chapter-3'>Chapter 3</Link></li>

                        <li><Link to='/lesson-5/chapter-4'>Chapter 4</Link></li>
                        <li><Link to='/lesson-5/chapter-5'>Chapter 5</Link></li>
                        <li><Link to='/lesson-5/chapter-6'>Chapter 6</Link></li>

                        <li><Link to='/lesson-5/chapter-7'>Chapter 7</Link></li>
                        <li><Link to='/lesson-5/chapter-8'>Chapter 8</Link></li>
                        <li><Link to='/lesson-5/chapter-9'>Chapter 9</Link></li>

                        <li><Link to='/lesson-5/chapter-10'>Chapter 10</Link></li>
                    </ul>

                    <li><Link to='#' onClick={this.toggleList}>Lesson 6</Link></li>
                    <ul id='Lesson 6'>
                        <li><Link to='/lesson-6/chapter-1'>Chapter 1</Link></li>
                        <li><Link to='/lesson-6/chapter-2'>Chapter 2</Link></li>
                        <li><Link to='/lesson-6/chapter-3'>Chapter 3</Link></li>

                        <li><Link to='/lesson-6/chapter-4'>Chapter 4</Link></li>
                        <li><Link to='/lesson-6/chapter-5'>Chapter 5</Link></li>
                        <li><Link to='/lesson-6/chapter-6'>Chapter 6</Link></li>

                        <li><Link to='/lesson-6/chapter-7'>Chapter 7</Link></li>
                        <li><Link to='/lesson-6/chapter-8'>Chapter 8</Link></li>
                        <li><Link to='/lesson-6/chapter-9'>Chapter 9</Link></li>

                        <li><Link to='/lesson-6/chapter-10'>Chapter 10</Link></li>
                    </ul>

                    <li><Link to='#' onClick={this.toggleList}>Lesson 7</Link></li>
                    <ul id='Lesson 7'>
                        <li><Link to='/lesson-7/chapter-1'>Chapter 1</Link></li>
                        <li><Link to='/lesson-7/chapter-2'>Chapter 2</Link></li>
                        <li><Link to='/lesson-7/chapter-3'>Chapter 3</Link></li>

                        <li><Link to='/lesson-7/chapter-4'>Chapter 4</Link></li>
                        <li><Link to='/lesson-7/chapter-5'>Chapter 5</Link></li>
                        <li><Link to='/lesson-7/chapter-6'>Chapter 6</Link></li>

                        <li><Link to='/lesson-7/chapter-7'>Chapter 7</Link></li>
                        <li><Link to='/lesson-7/chapter-8'>Chapter 8</Link></li>
                        <li><Link to='/lesson-7/chapter-9'>Chapter 9</Link></li>

                        <li><Link to='/lesson-7/chapter-10'>Chapter 10</Link></li>
                    </ul>

                    <li><Link to='#' onClick={this.toggleList}>Lesson 8</Link></li>
                    <ul id='Lesson 8'>
                        <li><Link to='/lesson-8/chapter-1'>Chapter 1</Link></li>
                        <li><Link to='/lesson-8/chapter-2'>Chapter 2</Link></li>
                        <li><Link to='/lesson-8/chapter-3'>Chapter 3</Link></li>

                        <li><Link to='/lesson-8/chapter-4'>Chapter 4</Link></li>
                        <li><Link to='/lesson-8/chapter-5'>Chapter 5</Link></li>
                        <li><Link to='/lesson-8/chapter-6'>Chapter 6</Link></li>

                        <li><Link to='/lesson-8/chapter-7'>Chapter 7</Link></li>
                        <li><Link to='/lesson-8/chapter-8'>Chapter 8</Link></li>
                        <li><Link to='/lesson-8/chapter-9'>Chapter 9</Link></li>

                        <li><Link to='/lesson-8/chapter-10'>Chapter 10</Link></li>
                    </ul>

                    <li><Link to='#' onClick={this.toggleList}>Lesson 9</Link></li>
                    <ul id='Lesson 9'>
                        <li><Link to='/lesson-9/chapter-1'>Chapter 1</Link></li>
                        <li><Link to='/lesson-9/chapter-2'>Chapter 2</Link></li>
                        <li><Link to='/lesson-9/chapter-3'>Chapter 3</Link></li>

                        <li><Link to='/lesson-9/chapter-4'>Chapter 4</Link></li>
                        <li><Link to='/lesson-9/chapter-5'>Chapter 5</Link></li>
                        <li><Link to='/lesson-9/chapter-6'>Chapter 6</Link></li>

                        <li><Link to='/lesson-9/chapter-7'>Chapter 7</Link></li>
                        <li><Link to='/lesson-9/chapter-8'>Chapter 8</Link></li>
                        <li><Link to='/lesson-9/chapter-9'>Chapter 9</Link></li>

                        <li><Link to='/lesson-9/chapter-10'>Chapter 10</Link></li>
                        <li><Link to='/lesson-9/chapter-11'>Chapter 11</Link></li>
                        <li><Link to='/lesson-9/chapter-12'>Chapter 12</Link></li>

                        <li><Link to='/lesson-9/chapter-13'>Chapter 13</Link></li>
                        <li><Link to='/lesson-9/chapter-14'>Chapter 14</Link></li>
                        <li><Link to='/lesson-9/chapter-15'>Chapter 15</Link></li>

                        <li><Link to='/lesson-9/chapter-16'>Chapter 16</Link></li>
                    </ul>

                    <li><Link to='#' onClick={this.toggleList}>Lesson 10</Link></li>
                    <ul id='Lesson 10'>
                        <li><Link to='/lesson-10/chapter-1'>Chapter 1</Link></li>
                        <li><Link to='/lesson-10/chapter-2'>Chapter 2</Link></li>
                        <li><Link to='/lesson-10/chapter-3'>Chapter 3</Link></li>

                        <li><Link to='/lesson-10/chapter-4'>Chapter 4</Link></li>
                        <li><Link to='/lesson-10/chapter-5'>Chapter 5</Link></li>
                        <li><Link to='/lesson-10/chapter-6'>Chapter 6</Link></li>

                        <li><Link to='/lesson-10/chapter-7'>Chapter 7</Link></li>
                        <li><Link to='/lesson-10/chapter-8'>Chapter 8</Link></li>
                        <li><Link to='/lesson-10/chapter-9'>Chapter 9</Link></li>

                        <li><Link to='/lesson-10/chapter-10'>Chapter 10</Link></li>
                        <li><Link to='/lesson-10/chapter-11'>Chapter 11</Link></li>
                        <li><Link to='/lesson-10/chapter-12'>Chapter 12</Link></li>

                        <li><Link to='/lesson-10/chapter-13'>Chapter 13</Link></li>
                    </ul>

                    <li><Link to='#' onClick={this.toggleList}>Lesson 11</Link></li>
                    <ul id='Lesson 11'>
                        <li><Link to='/lesson-11/chapter-1'>Chapter 1</Link></li>
                        <li><Link to='/lesson-11/chapter-2'>Chapter 2</Link></li>
                        <li><Link to='/lesson-11/chapter-3'>Chapter 3</Link></li>

                        <li><Link to='/lesson-11/chapter-4'>Chapter 4</Link></li>
                        <li><Link to='/lesson-11/chapter-5'>Chapter 5</Link></li>
                        <li><Link to='/lesson-11/chapter-6'>Chapter 6</Link></li>

                        <li><Link to='/lesson-11/chapter-7'>Chapter 7</Link></li>
                        <li><Link to='/lesson-11/chapter-8'>Chapter 8</Link></li>
                        <li><Link to='/lesson-11/chapter-9'>Chapter 9</Link></li>

                        <li><Link to='/lesson-11/chapter-10'>Chapter 10</Link></li>
                        <li><Link to='/lesson-11/chapter-11'>Chapter 11</Link></li>
                        <li><Link to='/lesson-11/chapter-12'>Chapter 11</Link></li>


                        <li><Link to='/lesson-11/chapter-13'>Chapter 13</Link></li>
                    </ul>

                    <li><Link to='#' onClick={this.toggleList}>Lesson 12</Link></li>
                    <ul id='Lesson 12'>
                        <li><Link to='/lesson-12/chapter-1'>Chapter 1</Link></li>
                        <li><Link to='/lesson-12/chapter-2'>Chapter 2</Link></li>
                        <li><Link to='/lesson-12/chapter-3'>Chapter 3</Link></li>

                        <li><Link to='/lesson-12/chapter-4'>Chapter 4</Link></li>
                        <li><Link to='/lesson-12/chapter-5'>Chapter 5</Link></li>
                        <li><Link to='/lesson-12/chapter-6'>Chapter 6</Link></li>

                        <li><Link to='/lesson-12/chapter-7'>Chapter 7</Link></li>
                        <li><Link to='/lesson-12/chapter-8'>Chapter 8</Link></li>
                        <li><Link to='/lesson-12/chapter-9'>Chapter 9</Link></li>

                        <li><Link to='/lesson-12/chapter-10'>Chapter 10</Link></li>
                        <li><Link to='/lesson-9/chapter-11'>Chapter 11</Link></li>
                        <li><Link to='/lesson-9/chapter-12'>Chapter 12</Link></li>

                        <li><Link to='/lesson-9/chapter-13'>Chapter 13</Link></li>
                    </ul>

                    <li><Link to='/random-test'>Random Test</Link></li>
                    <li><Link to='/random-text'>Random Text</Link></li>

                    <li><Link to='/games'>Games</Link></li>

                </ul>
            </div >
        )
    }
};

export default Chapters;