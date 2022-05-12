import React from 'react';
import { Link } from 'react-router-dom';
import style from './FAQ.module.css';

const FAQ = () => {
    return (
        <div className={style.FAQcontainer}>

            <dl className={style.questionContainer}>
                <dt>Why exactly Wanna Type?</dt>
                <dl>Check <Link to='/about'>about</Link> project.</dl>
            </dl>

            <dl className={style.questionContainer}>
                <dt>Who is Wanna Type for?</dt>
                <dl>Wanna Type is for everyone who wants to develop touch typing skills.</dl>
            </dl>

            <dl className={style.questionContainer}>
                <dt>I can skip any lesson?</dt>
                <dl>Yes, you can skip any lesson if it seem boring to you. But to consolidate it is worth pass all the lessons.</dl>
            </dl>

            <dl className={style.questionContainer}>
                <dt>What is CPM?</dt>
                <dl>CPM - Characters Per Minute.</dl>
            </dl>

            <dl className={style.questionContainer}>
                <dt>What is WPM?</dt>
                <dl>WPM - Words Per Minute.</dl>
            </dl>

            <dl className={style.questionContainer}>
                <dt>How much charters in word from WPM?</dt>
                <dl>1 Word = 5 Characters</dl>
            </dl>

            <dl className={style.questionContainer}>
                <dt>How long the training will takes?</dt>
                <dl>Everything depends on you. It is important to practice every day for 20-60 min. And don't switch to old familiar typing.</dl>
            </dl>

            <dl className={style.questionContainer}>
                <dt>What other typing-resources I can try?</dt>
                <dl>You can also try <a href='https://www.ratatype.com/'>ratatype.com</a>, <a href='https://www.typingstudy.com/'>typingstudy.com</a> </dl>
            </dl>

        </div>
    )
}

export default FAQ;