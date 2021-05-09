import React, { useRef, useState } from 'react';
import Test6Sub from './Test6Sub';

const Test6 = () => {
    const no = useRef(7) //추가할거니까
    const [data, setData] = useState([
        {id:1, name: '김다슬'},
        {id:2, name: '지현정'},
        {id:3, name: '김다예'},
        {id:4, name: '성현경'},
        {id:5, name: '지콩이'},
        {id:6, name: '김두부'}
    ])

    const onDel = (num) => {
        setData(data.filter(item=>item.id !==num))
    }

    const onAdd = (text) => {
        //이름추가
        setData([
            ...data,
            {
                id: no.current++,
                name:text
            }
        ])
    }

    return (
        <div>
            {
                data.map(item => <p key={item.id}>
                    {item.id} / {item.name}
                </p>)
            }
            <hr />
            <Test6Sub onDel={onDel} onAdd={onAdd}/>
        </div>
    );
};

export default Test6;