import React, { Component } from 'react';

class Test5 extends Component {
    // class 영역 
    render() {
        //js
        const done1 = true 
        const done2 = false 
        const done3 = undefined
        return (
            <div>
                <h2>논리값 : { done1 } 출력안됨 </h2>
                <p>
                    {/* 삼항연산자 */}
                    {done1 === true ? <button>로그인</button>:<button>로그아웃</button>}
                </p>
                <p>
                    {done1 ? <button>로그인</button>:<button>로그아웃</button>}
                </p>
                <p>
                    {done1 && <button>로그인</button>}
                </p>
                <p>
                    {done2 || <button>로그아웃</button>}
                </p>
                <p>
                    {done3 || <button>로그아웃</button>}
                </p>
            </div>
        );
    }
}

export default Test5;