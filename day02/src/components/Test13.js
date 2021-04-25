import React, { Component } from 'react';
import './Test13.css'

class Test13 extends Component {
    state = {
        data:[
            {no:1,name:'지진희',age:40,addr:'서울', isActive:false},
            {no:2,name:'김현주',age:30,addr:'강원', isActive:false},
            {no:3,name:'허준호',age:45,addr:'제주', isActive:false},
            {no:4,name:'정만식',age:42,addr:'경기', isActive:true},
            {no:5,name:'이승준',age:40,addr:'부산', isActive:false},
            {no:6,name:'권해효',age:46,addr:'울산', isActive:true},
            {no:7,name:'한고은',age:38,addr:'경남', isActive:false},
            {no:8,name:'연우진',age:30,addr:'전남', isActive:true},
            {no:9,name:'한선화',age:26,addr:'포항', isActive:false},
            {no:10,name:'유선호',age:20,addr:'서울', isActive:true},
        ]
    }
    render() {
        const { data } = this.state 
        return (
            <div className="Test13">
                <h2>언더커버 출연진</h2>
                <table>
                    <colgroup>
                        <col className="w1" />
                        <col className="w2" />
                        <col className="w3" />
                        <col className="w4" />
                        <col className="w5" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>이름</th>
                            <th>나이</th>
                            <th>주소</th>
                            <th>참여여부</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>유재석</td>
                            <td>20</td>
                            <td>서울</td>
                            <td>참여</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Test13;