import React from 'react';
import { Link } from 'react-router-dom';
import style from './Home.module.css';

const Home = () => {
    return (
        <div className={style.homeContainer}>
            <p>Hello this is Home page!</p>
            <p>Start <Link to='/training/lesson-1/chapter-1' className={style.linkHome}>typing</Link></p>
            </div>
    )
}

export default Home;