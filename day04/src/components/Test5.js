import React, { useRef, useState } from 'react';

const Test5 = () => {
    const no = useRef(1)
    //고유값
    const textRef = useRef()
    
    const [data, setData] = useState([])
    const [text, setText] = useState('')

    const onText = (e) => {
        const {value} = e.target
        setText(value)
    }
    const onAdd = (e) => {
        e.preventDefault()
        
        setData([
            ...data,
            {
                id: no.current++,
                text
            }
        ])
        setText('')
        textRef.current.focus()
    }
    return (
        <div>
            <form onSubmit={onAdd}>
                <input type="text" value={text} onChange={onText} ref={textRef}/>
                <button>추가</button>
            </form>
            {
                data.map(item => <p key={item.id}>
                    {item.id} / {item.text}
                </p>)
            }
        </div>
    );
};

export default Test5;