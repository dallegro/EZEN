import React, { useRef } from 'react';

const Test10 = () => {
    const colorRef = useRef(null)
    const onSelect = ()  => {
        const data = {
            color : colorRef.current.value 
        }
        
        const json = JSON.stringify( data , null, 5 )
        console.log( json )
    }
    return (
        <div>
            <h2>컬러 선택</h2>
            <select ref={colorRef}>
                <option vlaue='red'> red </option>
                <option vlaue='green'> green </option>
                <option vlaue='pink'> pink </option>
                <option value='skyblue'> skyblue </option>
                <option value='tomato'> tomato </option>
            </select>
            <button onClick={ onSelect }>선택</button>
        </div>
    );
};

export default Test10;