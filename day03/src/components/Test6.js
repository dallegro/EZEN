import React, { useState } from 'react';

const Test6 = () => {
    const [ count , setCount ] = useState( 0 )

    const increase = ()  => {
        setCount ( count + 1 )
    }
    const decrease = ()  => {
        setCount( count - 1 )
    }

    const increase1 = ()  => {       
      
        setCount( prevCount => prevCount + 1)
        setCount( prevCount => prevCount + 1)
        setCount( prevCount => prevCount + 1)        
    }
    const decrease1 = ()  => {
         
        setCount( state => state - 1 )
        setCount( state => state - 1 )
    }

    const increase2  = ()  => {
        for( let i = 0 ; i<  5; i++ ){
            setCount( prevCount  => prevCount + 1)
        }
    }

    return (
        <div>
            <h1> count : {count} </h1>
            <p>
                <button onClick={increase}>증가</button>
                <button onClick={decrease}>감소</button>
            </p>
            <p>
                <button onClick={ increase1 }>2증가</button>
                <button onClick={ decrease1 }>2감소</button>
            </p>
            <p>
                <button onClick={ increase2 }>5증가</button>              
            </p>
        </div>
    );
};

export default Test6;