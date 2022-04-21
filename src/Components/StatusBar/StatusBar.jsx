import React from 'react';
import style from './StatusBar.module.css';
import heart from '../../assets/img/heart.png';
import emptyHeart from '../../assets/img/emptyHeart.png';

class StatusBar extends React.Component {

    componentDidUpdate() {
        switch (this.props.numberOfMistake) {
            case 1: document.getElementById('heart-1').src = emptyHeart; break;
            case 2: document.getElementById('heart-2').src = emptyHeart; break;
            case 3: document.getElementById('heart-3').src = emptyHeart; break;
            default:;
        }
    }

    render() {

        return (
            <div className={style.statusBox}>
                <span className={style.heartsBox}>
                <img id='heart-3' src={heart} alt='heart icon' className={style.heart} />
                <img id='heart-2' src={heart} alt='heart icon' className={style.heart} />
                <img id='heart-1' src={heart} alt='heart icon' className={style.heart} />
                </span>

                <span className={style.percentageBox}> Progress: {this.props.percentage}%</span>
                <span className={style.cpmBox}> CPM: {this.props.cpm}</span>
            </div>
        )
    }
}

export default StatusBar;