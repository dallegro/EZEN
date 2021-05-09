import React, { useState } from 'react';

const Test1 = () => {
    const [inputs, setInputs] = useState({
        name: '',
        age: ''
    })
    const change1 = (e) => {
        const { value,name } = e.target
        setInputs({
            ...inputs,
            [name]:value
        })
    }
    const change = (e) => {
        const { value,name } = e.target
        setInputs({
            ...inputs,
            [name]:value
        })
    }
    return (
        <div>
        <p>이름 : <input type="text" onChange={change} name="name"/></p>
        <p>나이 : <input type="text" onChange={change} name="age"/></p>
        </div>
    );
};

export default Test1;