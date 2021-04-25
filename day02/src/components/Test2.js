import React, { Component } from 'react';

class Test2 extends Component {
    render() {
        //js영역
        const title = "신상명세서"
        const name = "김다슬"
        const age = "27"
        const addr = "용인"
        const tel = "010-7704-4040"
        const sex = "여자"
        return (
            <div>
                <h1>{title}</h1>

                <ul>
                    <li>이름: {name}</li>
                    <li>나이: {age}</li>
                    <li>주소: {addr}</li>
                    <li>전화: {tel}</li>
                    <li>성별: {sex}</li>
                </ul>
                //한줄 주석입니다
                /*여러줄 주석*/
                {/* 주석처리 */}
                {/* 설명달아주기 */}
                <p
                
                    //태그안에 주석 가능
                    //{}자바스크립트 출력할경우
                    /* 
                        여러줄의 주석처리 입니다.
                    */
                >

                    나는 {name}입니다.
                </p>
                
            </div>
        );
    }
}

export default Test2;