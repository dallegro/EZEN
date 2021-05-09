import React from 'react';
import PropTypes from 'prop-types';

const Test2Sub = ({name, color, age, addr, tel, sex, done }) => {
     return (
        <div style={{width:400, padding:20,border:`1px solid ${color}`, margin:10}}>
            <h2> {name} 신상명세서</h2>
            <ul>
                <li>이름 :{name} </li>
                <li>나이 :{age} </li>
                <li>주소 :{addr} </li>
                <li>전화 :{tel} </li>
                <li>성별 :{sex} </li>
                <li> 색 :{color } </li>
                <li> 확인/취소 :
                    {done ? '확인':'취소'}
                </li>
            </ul>
        </div>
    );
};

Test2Sub.propTypes = {
    name: PropTypes.string.isRequired ,
    age :PropTypes.number.isRequired ,
    addr :PropTypes.string,
    sex :PropTypes.string,
    tel:PropTypes.string,
    color:PropTypes.string,
    done:PropTypes.bool,
  };

   
  Test2Sub.defaultProps = {
    name: 'Stranger',
    age : 20,
    addr :'주소',
    color:'lime',
    done: true ,
    tel:'010-0000-0000',
    sex:'남/여'
  };

export default Test2Sub;

