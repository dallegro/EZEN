import React from 'react';

const MovieItem = ({item,onDel}) => {
    const {no, poster, title, date, actor, director} = item
    return (
            <article>
                <div className="left">
                    <img src={poster} alt={title} />
                </div>
                <div className="right">
                    <h3>{title}</h3>
                    <ul>
                    <li>출연진 : {actor}</li>
                    <li>감독 :{director}</li>
                    <li>개봉일 :{date}</li>
                    </ul>
                    <button onClick={()=>onDel(no)}>삭제</button>
                </div>
            </article> 
    );
};

export default MovieItem;