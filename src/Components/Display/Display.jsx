import React from "react";
import style from './Display.module.css';

class Display extends React.Component {

    componentDidUpdate = () => {
            let leftText = document.getElementById('leftText');
            let finishText = document.getElementById('finishText');
    
            finishText.textContent += leftText.textContent[0];
            leftText.textContent = leftText.textContent.slice(1);
            console.log(finishText.textContent)
    }

    render = () => {
        return (
            <span className={style.displayText}>
                <span id='finishText' className={style.cursor} />
                <span id='leftText' className={style.unfinishedText}>{this.props.generatedText}</span>
            </span>
        )
    }
}

export default Display