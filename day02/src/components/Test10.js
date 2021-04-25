import React, { Component } from 'react';
import './Test10.css'

class Test10 extends Component {
    // 클래스 붙이고 떼기 ? 상태값 isActive=true/false 
    state = {
        isActive: false 
    }

    add = () => {
        this.setState({
            isActive: true 
        })
    }
    remove = () => {
        this.setState({
            isActive: false 
        })
    }
    toggle = ()  => {
        const { isActive } = this.state 
        this.setState({
            // isActive: ! this.state.isActive
            isActive : !isActive
        })
    }

    render() {
        //비구조
        const { isActive } = this.state 

        return (
            <div className="Test10">
                <p className="test">지금은 연습중 입니다.</p>
                <p className="test on">지금은 연습중 입니다.</p>
                <p className="on1">지금은 연습중 입니다.</p>
                <hr/>
                {/* on만 isActive로 처리 : 템플릿 리터널 */}
                <p className={`test ${isActive ? 'on':''}`}>지금은 연습중 입니다.</p>
                <p className={isActive ? 'on':''}>지금은 연습중 입니다.</p>
                <p className={isActive ? 'on1':''}>지금은 연습중 입니다.</p>
                <br/>
                <br/>
                <button onClick={this.add}>addClass</button>
                <button onClick={this.remove}>removeClass</button>
                <button onClick={this.toggle}>toggleClass</button>
            </div>
        );
    }
}

export default Test10;