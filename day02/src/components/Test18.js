import React, { useState } from 'react';

const Test18 = () => {
    /* 
    클래스는? 
    - 선언 : state  = {변수(key) : 초기값}
    - 변경 : this.setState({변수(key) : 초기값})
    */
    //const [state, setState]=useState(초기값)
    const[name,setName]= useState('김다슬')
    return (
        <div>
            <h1>값 출력 : {name}</h1>
        </div>
    );
};

export default Test18;