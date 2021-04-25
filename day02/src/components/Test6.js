import React, { Component } from 'react';
// 컴포넌트 분리 -> 부모컴포넌트에서 자식컴포넌트에 값을 전달할경우
// props처리한다  : 속성이름은 사용저 정의 ( 한글 가능하지만 사용 X )

class Sub extends Component {
    //class 
    render() {
        //js
        // 비구조할당 
        const {color, name, age , addr, sex, tel, done} = this.props 
        return (
            <div style={{backgroundColor: color,
            padding:20, width:400, color:'#fff', margin:40 }}>
                <h2>Sub는 자식 컴포넌트</h2>
                <ul>
                    <li>이름:{name}</li>
                    <li>나이:{age} </li>
                    <li>주소: {addr} </li>
                    <li>성별: {sex }</li>
                    <li>전화: {tel} </li>
                    <li>참여여부: 
                        {done ? '참여':'비참여'} </li>
                </ul>
            </div>
        );
    }
}

class Sub1 extends Component {
    render() {
        return (
            <div style={{backgroundColor: this.props.color,
            padding:20, width:400, color:'#fff' }}>
                <h2>Sub는 자식 컴포넌트</h2>
                <ul>
                    <li>이름:{this.props.name}</li>
                    <li>나이:{this.props.age} </li>
                    <li>주소: {this.props.addr} </li>
                    <li>성별: {this.props.sex }</li>
                    <li>전화: {this.props.tel} </li>
                    <li>참여여부: 
                        {this.props.done ? '참여':'비참여'} </li>
                </ul>
            </div>
        );
    }
}


class Test6 extends Component {
    render() {
        return (
            <div>
                <Sub
                   //속성=값  
                    name = '홍길동'
                    // {숫자, 논리값}
                    age = {20}
                    addr = '서울시'
                    tel ='010-0000-1111'
                    sex = '남자'
                    done = { true }
                    color='tomato'
                />
                <hr/>
                <Sub
                    name ="강호동"
                    age = { 30 }
                    color = 'green'
                    addr ='제주도'
                    tel ='010-2222-33330'
                    sex='남자'
                    done = {false}
                />
            </div>
        );
    }
}

// 기본값 Test6 - 밖으로 내보내는 기본이다 
export default Test6;