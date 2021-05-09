import React, { useRef, useState } from 'react';

const Test3 = () => {
    //고유번호
    const no = useRef(1)
    const [data, setData] = useState([])
    const names= '김다슬, 김다예, 성현경, 지현정, 김두부, 지콩, 임시은, 박소희, 하나연, 김민지, 천다슬, 김연주'.split(',')  
    
    const onAdd = () => {
        const ran = Math.floor(Math.random() * names.length)
        setData([
            ...data,
            {
                id: no.current++,
                text:names[ran]
            }
        ])
    }
    
    //{id}
    return (
        <div>
         <h2>고유번호</h2>   
        <button onClick={onAdd}>추가</button>
            <ul>
                {data.map(item => <li key={item.id}>
                    {item.id} / {item.text}
                </li>)}
        </ul>
        </div>
    );
};

export default Test3;