import React from 'react';

const validation = (props) => {
    if (props.length < 5) {
        return (
            <p>Text too short</p>
        );
    } else if (props.length > 15) {
        return (
            <p>Text too long</p>
        )
    } else {
        return (
            <p></p>
        );
    }


    
}

export default validation