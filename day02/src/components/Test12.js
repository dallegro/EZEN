import React, { Component } from 'react';

class Test12 extends Component {
    render() {
        const title="언더커버 출연진"
        const data = [
            {no:1 , name:'지진희', age:40, addr:'서울',isActive:false},
            {no:2 , name:'김현주', age:35, addr:'부산',isActive:false},
            {no:3 , name:'허준호', age:45, addr:'경기',isActive:false},
            {no:4 , name:'정만식', age:36, addr:'전주',isActive:false},
            {no:5 , name:'이승준', age:38, addr:'경남',isActive:false},
        ]
        return (
            <div>
               <h1> { title } </h1> 
               <p>
                   {data[0].no} /
                   {data[0].name} /
                   {data[0].age} /
                   {data[0].addr} /
                   {data[0].isActive ? '참여':'미참여'}
               </p>
               <hr/>
               {
                data.map( item => {
                    return ( <p key={item.no}>
                        {item.no} / { item.name } /
                        {item.age } / { item.addr } /
                        {item.isActive ? '참여':'미참여'}
                    </p>)
                })   
               }
               <hr/>
               {
                   data.map( item => <p key={item.no}>
                       {item.no} / { item.name} / { item.age } /
                       {item.addr} /
                       {item.isActive ? '참여':'미참여'}
                   </p>)
               }
            </div>
        );
    }
}

export default Test12;