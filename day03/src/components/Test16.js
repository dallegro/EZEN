import React, { useState } from 'react';
import Test16Animail from './Test16Animail';
import Test16Display from './Test16Display';
import Test16Name from './Test16Name';

const Test16 = () => {
    const [name , setName] = useState('')
    const [ani, setAni] =useState('')

    const onName = (e) => {
        const { value } = e.target 
        setName( value )
    }
    
    const onAni = (e)  => {
        const {value} = e.target 
        setAni( value )
    }

    return (
        <div>
            <Test16Name  name={name} onName={onName} />
            <hr/>
            <Test16Animail ani={ani} onAni={onAni} />
            <hr />
            <Test16Display name={name} ani={ani} />
        </div>
    );
};

export default Test16;