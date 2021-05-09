import React, { useState } from 'react';

const Test11 = () => {
    const [ color , setColor ] = useState('')
    const [text , setText] = useState('')

    const onSelect = ()  => {
        setColor( text )
    }
    const change = (e)  => {
        const { value } = e.target 
        setText( value )
    }

    return (
        <div>
            <h2 style={{color:color}}>컬러 선택-글자변경</h2>
            <select  onChange={ change }>
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

export default Test11;