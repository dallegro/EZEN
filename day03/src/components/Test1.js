import React from 'react';

const Test1Sub = (props) => {
    return (
        <div>
            <h4>이름: {props.name} ({typeof props.name})</h4>
            <h4>나이:{props.age} ({typeof props.age})</h4>
        </div>
    );
};

const Test1 = () => {
    const data1 = {name:'강아지' ,age:3 }
    const data2 = {name:'고양이', age:2 }

    return (
        <div>
            <Test1Sub 
                name="강호동" age={30}             
            />
            <Test1Sub  name="유재석" age={"20"} />
            <Test1Sub  name={data1.name} age={data1.age} />
            <Test1Sub name={data2.name} age={data2.age}/>
            <Test1Sub  {...data1} />
            <Test1Sub  {...data2} />
        </div>
    );
};

export default Test1;