import React, { useRef, useState } from 'react';

const Test14 = () => {
    const unameRef = useRef()
    
    const [ form , setForm] = useState({
        uname:'',
        pw:'',
        email:''
    })
    const {uname , pw , email} = form 
   

    const change = (e)  => {
        const { value , name} = e.target 
        setForm({ ...form, [name]: value})
    }

    const onReset = ()  => {
        setForm({
            uname:'', pw:'' , email:''
        })   
        unameRef.current.focus()
    }

    return (
        <div>
           <h2>input 여러개 관리</h2> 
           <p>
               <input type="text" onChange={ change } 
               value={uname} ref={ unameRef } name="uname" />

               <input type="text" onChange={ change } 
               value={pw} name="pw" />
               <input type="text" onChange={ change }
               value={email} name="email" />
               <button onClick={onReset}>초기화</button>
           </p>
           <h4>이름: {uname} </h4>
           <h4>비번: {pw} </h4>
           <h4>이메일: {email} </h4>
        </div>
    );
};

export default Test14;