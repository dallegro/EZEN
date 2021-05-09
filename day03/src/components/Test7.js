import React from 'react';

const Test7 = () => {    
    const click = (e) => {
        console.log( e.target )
        console.log( e.currentTarget )
        
         
    }
    return (
        <div>
            <button onClick={ click }>
                <span>확인</span> <br/>
                <b>클릭</b>
            </button>
        </div>
    );
};

export default Test7;