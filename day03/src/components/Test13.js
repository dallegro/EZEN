import React, { useState } from 'react';
import './Test13.css'

const Test13 = () => {
    const [age , setAge] = useState(20)
    const [isColor , setIsColor] = useState(false)
    
    const onToggle =()=>{
        setIsColor( !isColor )
    }
    const onAge = ()  => {
        setAge( age + 1 )
    }
    return (
        <div className={`wrap  ${isColor ? 'tomato':'pink'}`}>
            <h2>background-color:
                {isColor ? 'tomato':'pink'}
            </h2>
            <h2>나이 : {age} </h2>
            <p>
                <button onClick={onToggle}>배경색바꾸기</button>
                <button onClick={onAge}>나이증가</button>
                <button onClick={() => setAge(age-1)}>나이감소</button>
            </p>
        </div>
    );
};

export default Test13;