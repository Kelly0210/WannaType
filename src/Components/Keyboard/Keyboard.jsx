import React from 'react';

const Keys = () => {
    for(let i = 0; i < 10; i++) {
        return <span>{i}</span>
    }
}
const Keyboard = () => {
    return (
        <div>
            <Keys/>
        </div>
        
    )
}

export default Keyboard;