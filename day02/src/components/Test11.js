import React, { Component } from 'react';

class Test11 extends Component {
    render() {
        const title ='언더커버'
        const arr =['지진희','김현주','허준호','정만식','이승준']
        return (
            <div>
                <h2> {title} </h2>
                <p>{arr[0]}</p>
                <p>{arr[1]}</p>
                <p>{arr[2]}</p>
                <p>{arr[3]}</p>
                <p>{arr[4]}</p>
                <hr/>
                {
                    arr.map( (item , index) => {
                        return (<p key={index}> {index}/{item}</p>)
                    })
                }
                <hr/>
                {
                    arr.map((item,index) => <p key={index}>
                        {index} /{ item }
                    </p>)
                }
                
            </div>
        );
    }
}

export default Test11;