import React from 'react';
import style from './CustomTextArea.module.css';

const CustomTextArea = () => {

    return (
        <div className={style.container}>
        <textarea autoFocus></textarea>
        </div>
    )
}

export default CustomTextArea