import React from 'react';
/* rsc : 함수형 */
const Test16 = () => {
    //함수선언
    const msg ='안녕하세요 저는 김다슬 입니다. 지금은 리액트 연습중!'
    const message = (len) => {
        let str = ''
        if (msg.length > len) {
            str= msg.substr(0,len)+'...'
        }
        return (str)
    }
    return (
        <div>
            <h2>함수형 : 함수 - rsc</h2>
            <p>{message(16)}</p>
            <p>{message(29)}</p>
        </div>
    );
};

export default Test16;