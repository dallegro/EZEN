import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({data,onDel}) => {
    return (
        <>
            {
                data.map(item => <MovieItem key={item.no} item={item}
                    onDel={onDel}/>)
            }
        </>
    );
};

export default MovieList;