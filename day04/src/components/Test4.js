import React, { useRef, useState } from 'react';

const Test4 = () => {
    const no = useRef(1)
    const idRef = useRef()

    const [data, setData] = useState([]) //데이터를 담을 공간
    const [form, setForm] = useState({
        userid: '',
        userpw: ''
    })
    
    /* 비구조할당 */
    const { userid, userpw } = form

    const onText = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name] : value
        })
    }
    /* const onAdd = () => {
        setData([
            ...data,
            {
                id: no.current++,
                userid: userid,
                userpw: userpw
            }
        ])
    } */
    
    const onAdd = () => {
        setData([
            ...data,
            {
                id: no.current++,
                userid,
                userpw
            }
        ])
        setForm({
            userid: '',
            userpw:''
        })
        idRef.current.focus()
    }
    return ( 
        <div>
            <input type="text" name="userid" onChange={onText} ref={idRef} value={userid}/>
            <input type="text" name="userpw" onChange={onText} ref={idRef} value={userpw}/>
            <button onClick={onAdd}>추가</button>

            {
                data.map(item => <p key={item.id}>
                    {item.id} / {item.userid} / {item.userpw}
                </p>)
            }
        </div>
    );
};

export default Test4;