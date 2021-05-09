import React, { useState } from 'react';

const Test3 = () => {
     
    const [name, setName ] = useState('아무개')
    const [color, setColor] = useState('pink')

    const onName1 = ()  => {
        setName( '강호동' )
    }
    const onName2 =() =>{
        setName('유재석')
    }

    return (
        <div>
            <h3 style={{color: color }}>
                이름 : {name} / 색 : { color }
            </h3>
            <p>
                <button onClick={onName1}>강호동</button>
                <button onClick={onName2}>유재석</button>
                <button>이효리</button>
            </p>
            <p>
                <button onClick={() => setColor('lime') }>lime</button>
                <button onClick={() => setColor('tomato')}>tomato</button>
                <button onClick={() => setColor('skyblue')}>skyblue</button>
            </p>
        </div>
    );
};

export default Test3;

 