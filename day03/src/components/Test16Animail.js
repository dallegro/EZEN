import React from 'react';

const Test16Animail = ({ani, onAni}) => {
    return (
        <div>
            <label>좋아하는동물:</label>
            <input type="text" value={ani} 
            onChange={ onAni } />
        </div>
    );
};

export default Test16Animail;