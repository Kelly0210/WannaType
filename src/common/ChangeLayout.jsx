import React from 'react';
import style from './ChangeLayout.module.css';

const ChangeLayout = (props) => {
    const hideWindow = () => {
        props.layoutHandler(false);
    }

    return <div className={style.layoutBox}>
        <span>Please change layout</span>
        <br/>
        <span>Right now we support only US layout</span>
        <br/> 
        <button onClick={hideWindow}>Got it!</button>
        </div>
        
}

export default ChangeLayout