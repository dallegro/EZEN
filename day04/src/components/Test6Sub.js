import React from 'react';

const Test6Sub = ({onDel,onAdd}) => {
    return (
        <div>
            <p>
                <button onClick={()=>onDel(1)}>삭제1</button>
                <button onClick={()=>onDel(2)}>삭제2</button>
            </p>
            <p>
                <button onClick={()=>onAdd('임시은')}>추가1</button>
                <button onClick={()=>onAdd('박소희')}>추가2</button>
            </p>
        </div>
    );
};

export default Test6Sub;