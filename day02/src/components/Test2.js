import React, { Component } from 'react';

class Test2 extends Component {
    render() {
        //js영역 
        const title="신상명세서"
        const name="홍길동"
        const age = 20
        const addr ="서울"
        const tel ="010-0000-1111"
        const sex ="남자"
        return (
            <div>
                <h1> {title} </h1>
                <ul>
                    <li>이름: {name} </li>
                    <li>나이: {age} </li>
                    <li>주소: {addr} </li>
                    <li>전화: {tel} </li>
                    <li>성별: {sex} </li>
                </ul>
                //한줄 주석입니다. 
                /* 여러줄 주석 */
                {/* 주석처리 */}
                {/* 설명달아주기 */}
                <p
                    //{} 자바스크립트 출력할경우
                    /*
                        여러줄의 주석처리 입니다.
                    */
                >
                    나는 {name} 입니다.
                </p>
            </div>
        );
    }
}

export default Test2;