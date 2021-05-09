import React, { useRef } from 'react';

const Test9 = () => {
    const idRef = useRef(null)
    const pwRef = useRef(null) 

    const click = ()  => {
        const data = {
            id : idRef.current.value , 
            pw : pwRef.current.value  
        }
        const json = JSON.stringify( data, null , 5 )
        console.log( json  )
         
    }

    return (
        <div>
             
            <input type="text"  ref={ idRef } />
            <input type="text"  ref={ pwRef } />
            <button onClick={ click }>확인</button>
        </div>
    );
};

export default Test9;

 