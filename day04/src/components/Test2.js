import React, { useState } from 'react';

const Test2 = () => {
    const [data, setData] = useState([])
    //[{id:1, text:'문자'},{id:2, text:'문자'}]

    const onAdd = () => {
        const newData = { id: data.length, text: '지현정' + Math.floor(Math.random() * 10) }
        setData([...data, newData])
    }
    const onAdd3 = () => {
        setData([
            ...data,
            {
                id: data.length,
                text:'김두부' +Math.floor(Math.random()*10)
            }
        ])
    }
    const onAdd2 = () => {
        const newData = data.concat({ id:data.length, text: '김다슬' + Math.floor(Math.random() * 10)})
        setData(newData)
    }
    const onAdd1 = () => {
        setData( data.concat({id: data.length , text:'지현경'+Math.floor(Math.random()*10)}))
    }
    return (
        <div>
            <h2>데이터 추가</h2>
            <p><button onClick={onAdd}>추가</button></p>
            <ul>
                {/* {data.map((item, index) => <li key={index}>
                    {item.id} / {item.text}
                </li>)} */} {/* 이 구조는 단순하게 화면에 출력만 할때 씀(사실 잘 안씀, 데이터를 삭제, 수정, 이동이 어려움) */}

                {data.map((item) => <li key={item.id}>
                    {item.id} / {item.text}
                </li>)}
            </ul>
        </div>
    );
};

export default Test2;