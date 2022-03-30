import React from 'react';
import style from './StatusBar.module.css';

class StatusBar extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={style.statusBox}>
                Number of mistakes: {this.props.numberOfMistake}
            </div>
        )
    }
}

export default StatusBar;