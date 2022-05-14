import React from 'react';
import style from './About.module.css';

const About = () => {

    const randomColor = () => {
        let initialStyles = [
            `${style.firstBlock}`,
            `${style.secondBlock}`,
            `${style.thirdBlock}`,
            `${style.fourthBlock}`,
            `${style.fifthBlock}`,
            `${style.sixthBlock}`,
        ]

        return  initialStyles[Math.floor(Math.random() * initialStyles.length)];
    }

    return (
        <div className={style.aboutContainer}>

            <section className={style.about}>
                <h2>What key advantage of Wanna Type?</h2>
                <p className={style.randomizedString}>
                    Of course it's <span className={randomColor()}>R</span>
                    <span className={randomColor()}>A</span>
                    <span className={randomColor()}>N</span>
                    <span className={randomColor()}>D</span>
                    <span className={randomColor()}>O</span>
                    <span className={randomColor()}>M</span>
                    <span className={randomColor()}>I</span>
                    <span className={randomColor()}>Z</span>
                    <span className={randomColor()}>E</span>
                </p>
            </section>

        </div>
    )
}

export default About;