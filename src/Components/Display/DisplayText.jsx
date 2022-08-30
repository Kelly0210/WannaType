import React from "react";
import style from './Display.module.css';

const DisplayText = (props) => {

    const [generatedText, handler] = React.useState('');

    React.useEffect(() => {
        if (!props.value) {
            handler(props.generatedText)
        } else {
            handler(props.generatedText.slice(props.value.length));
        }
    }, [props])

    return (
        <span className={style.displayText}>
            <span>{props.value}</span>
            <span className={style.cursor} />
            <span className={style.unfinishedText}>{generatedText}</span>
        </span>
    )
}

export default DisplayText;