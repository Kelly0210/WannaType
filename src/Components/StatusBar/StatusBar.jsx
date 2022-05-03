import React from 'react';
import style from './StatusBar.module.css';
import heart from '../../assets/img/heart.png';
import emptyHeart from '../../assets/img/emptyHeart.png';

class StatusBar extends React.Component {

    componentDidUpdate = () => {
        if (this.props.mistakeHappened) {
            let index = this.props.numberOfMistake;
            document.getElementById(`heart-${index}`).src = emptyHeart;
        }

        if (this.props.numberOfMistake === 0) {
            let allHearts = document.getElementsByClassName(`${style.heart}`);

            for (let i = 1; i < allHearts.length + 1; i++) {
                document.getElementById(`heart-${i}`).src = heart;
            }
        }
    }

    render = () => {
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