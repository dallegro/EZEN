import React, { Component  } from 'react';

class Test1 extends Component {
    render() {
        return (
            <>
                <h2>JSX문법</h2>
                <p>한줄이상일경우에는 div 묶어준다</p>
                <p>반드시 닫는 태그가 존재해야한다</p>
                <p>빈태그는  / 사용 </p>
                <input type="text" />
                <hr />
                <br />
            </>
        );
    }
}

export default Test1;