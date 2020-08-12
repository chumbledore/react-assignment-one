import React from 'react';

const char = (props) => {
    const style = {
        cursor: 'pointer'
    }

    return (
        <p onClick={props.click} style={style}>{props.char}</p>
    );
} 

export default char