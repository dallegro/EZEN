import React, { Component } from 'react';

class Test7SubSub extends Component {
    render() {
        const { name , age, tel, color } = this.props 
        
        return (
            <div>
                <h2 style={{color:color}}>Test7SubSub</h2>
                <ul>
                    <li>이름: {name} </li>
                    <li>나이: {age} </li>
                    <li>전화: {tel} </li>
                </ul>
            </div>
        );
    }
}

export default Test7SubSub;