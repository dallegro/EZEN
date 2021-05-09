import React, { useState } from 'react';

const Test4 = () => {
    const [bgcolor, setBgcolor] = useState('pink')

    const onColor = ()  => {
      
        setBgcolor( bgcolor === 'pink' ? 'tomato':'pink' )
    }

    return (
        <div>
            <p>문제:h2를 클릭시 배경식 pink-tomato</p>
            <h2 style={{width:350, padding:50, border:'1px solid #000', cursor:'pointer', backgroundColor:bgcolor }}
            onClick={ onColor }
            >
                배경색 바꾸기 : {bgcolor}
            </h2>
        </div>
    );
};

export default Test4;