import React, { Component } from 'react';

class Test3 extends Component {
    render() {
        //js처리
        const style1 = {
            backgroundColor: "pink", fontSize: 30,
            textIndent: 20, lineHeight: '60px', color: 'green'
        }
        const style2 = {
            fontSize: 20, height: 40, border: '1px solid #000',
            textAlign: 'center', lineHeight: '40px'
        }
        const style3 = {
            fontSize: 50, height: 90, border: '1px solid #000',
            textAlign: 'center', lineHeight: '90px'
        }
        
        return (
           
            <div>
            <h2 style={style1}>스타일</h2>
                <h2 style={style2}>스타일</h2>
            <h2 style={style3}>스타일</h2>    
            <p style={style1}>지금은 스타일 연습입니다.</p>    
            </div>
        );
    }
}

export default Test3;