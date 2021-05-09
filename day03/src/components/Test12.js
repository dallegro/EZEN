import React, { useState } from 'react';

const Test12 = () => {
    const [check , setCheck] = useState(false)
    
   
    const handleChange = (e) => {
        const { checked } = e.target  
        setCheck( checked )
    }

    const click = () => {
        alert( `checked ${check}`)
    }

    return (
        <div>
            <input type="checkbox" checked={check} 
            onChange={ handleChange } />
            체크박스 
            <button onClick={click}>확인</button>

           { check && <div style={{width:300,height:200,background:'tomato', marginTop:50}}></div>
           }
        </div>
    );
};

export default Test12;