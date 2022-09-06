import React from 'react';
import style from './StatusBar.module.css';
import heart from '../../assets/img/heart.png';
import emptyHeart from '../../assets/img/emptyHeart.png';

const StatusBar = ({ numberOfMistakes, percentage, CPM }) => {
    let heartsCollection = [];

    const calculateHearts = () => {
        heartsCollection = [];
        for (let i = 0; i < 4 - numberOfMistakes; i++) {
            heartsCollection.push(<img key={`full-${i}`} src={heart} alt='heart' className={style.heart} />)
        }
        for (let i = 0; i < numberOfMistakes - 1; i++) {
            heartsCollection.push(<img key={`empty-${i}`} src={emptyHeart} alt='empty heart' className={style.heart} />)
        }
    }
    calculateHearts();

    return (
        <div className={style.statusBox}>
            <span className={style.heartsBox}>{heartsCollection}</span>
            <span className={style.percentageBox}>Progress: {percentage}%</span>
            <span className={style.cpmBox}>CPM: {CPM}</span>
        </div>
    )

}

export default StatusBar;