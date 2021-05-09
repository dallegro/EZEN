import React, { useState } from 'react';
import '../utils/css/reset.css'
import './style.css'
import movie from '../utils/api/movie';
import MovieList from './MovieList';

const Movie = () => {
    const [data, setData] = useState(movie)
    const onDel = (id) => {
        setData(data.filter(item => item.no !== id))
    }
    return (
        <div className="gallery">
            <MovieList data={data} onDel={onDel}/>
        </div>
    );
};

export default Movie;