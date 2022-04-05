import React from 'react';
import style from './StatusBar.module.css';
import heart from '../../assets/img/heart.png';
import emptyHeart from '../../assets/img/emptyHeart.png';

class StatusBar extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        switch (this.props.numberOfMistake) {
            case 1: document.getElementById('heart-1')?.remove(); break;
            case 2: document.getElementById('heart-2')?.remove(); break;
            case 3: document.getElementById('heart-3')?.remove(); break;
        }
    }

    render() {

        return (
            <div className={style.statusBox}>
                <img id='heart-1' src={heart} className={style.heart} />
                <img id='heart-2' src={heart} className={style.heart} />
                <img id='heart-3' src={heart} className={style.heart} />

                <span className={style.percentageBox}> Process: {this.props.percentage}%</span>
                <span className={style.cpmBox}> CPM: {this.props.cpm}</span>
            </div>
        )
    }
}

export default StatusBar;