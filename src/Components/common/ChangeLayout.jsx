import React from 'react';
import style from './ChangeLayout.module.css';

const ChangeLayout = (props) => {
    const hideWindow = () => {
        props.layoutHandler(false);
    }

    return <div className={style.layoutBox}>
        Please change layout
        <br/>
        Right now we support only US layout
        <br/>
        <button onClick={hideWindow}>OK</button>
        </div>
        
}

export default ChangeLayout