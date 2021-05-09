import React from 'react';

const Test16Name = ({name, onName}) => {
    return (
        <div>
            이름 : 
            <input type="text" value={name} 
            onChange = { onName } />
        </div>
    );
};

export default Test16Name;