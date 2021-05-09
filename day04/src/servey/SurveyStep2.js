import React from 'react';

const SurveyStep2 = ({occupation, email,sex,interests,onText, onNext,onPrev}) => {
    return (
        <>
        <p><label>직업</label> : 
        <input type="text"  name='occupation' value={occupation}onChange={onText}/>
     </p>
        <p><label>이메일</label> : 
        <input type="text"  name='email' value={email}onChange={onText}/>
     </p>
        <p><label>성별</label> : 
        <input type="text"  name='sex' value={sex}onChange={onText}/>
     </p>
        <p><label>관심분야</label> : 
        <input type="text"  name='interests' value={interests}onChange={onText}/>
    </p>
        <p><button onClick={onPrev}>이전</button><button onClick={onNext}>다음</button></p>
    </> );
};

export default SurveyStep2;