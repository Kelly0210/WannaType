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
            `${style.sixthBlock}`
        ]
        return initialStyles[Math.floor(Math.random() * initialStyles.length)];
    }

    return (
        <div className={style.aboutContainer}>

            <section className={style.aboutSection}>
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

            </section >

            <section className={style.aboutSection}>
                <p>Wanna Type is a resource for those who want to learn how to type faster.</p>
                <p>The resource offers a system of lessons where words and symbols are random every time.</p>
                <p>This improves the memorization of characters and does not sharpen you for specific lines.</p>
                <p>And you may also learn new words. Have fun! :)</p>
            </section>

        </div>
    )
}

export default About;