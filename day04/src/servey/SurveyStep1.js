import React from 'react';

const SurveyStep1 = ({username, age, addr, tel,onText, onNext}) => {
    return (
        <>
            <p><label>이름</label> : 
            <input type="text" name='username' value={username}
                    onChange={onText}/>
         </p>
            <p><label>나이</label> : 
            <input type="text"  name='age' value={age}onChange={onText}/>
         </p>
            <p><label>주소</label> : 
            <input type="text"  name='addr' value={addr}onChange={onText}/>
         </p>
            <p><label>연락처</label> : 
            <input type="text"  name='tel' value={tel}onChange={onText}/>
        </p>
            <p><button onClick={onNext} >다음</button></p>
        </>
    );
};

export default SurveyStep1;