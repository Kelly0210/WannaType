import React from 'react';
import style from './StatusBar.module.css';

class StatusBar extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={style.statusBox}>
                <span>Number of mistakes: {this.props.numberOfMistake}</span>
                <span> Process: {this.props.percentage}%</span>
                <span> CPM: {this.props.cpm}</span>
            </div>
        )
    }
}

export default StatusBar;