import React, { Component } from 'react'
import Test7Sub from './Test7Sub'

export default class Test7 extends Component {
    render() {
        return (
            <div>
                <h1>Test7.js 메인</h1>
                <hr/>
            <Test7Sub
                //속성 - 사용자정의 = 전달하는 값 {숫자, 논리값}
                title='신상명세서'
                name = '이효리'
                age={30}
                addr = '제주도'
                tel='010-7704-4040'
                color='skyblue'
                done={true}
                />
        </div>

        )
    }
}
