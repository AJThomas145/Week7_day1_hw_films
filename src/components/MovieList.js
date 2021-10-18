import React from 'react';
import Movie from './Movie';

const MovieList  = ({movies}) => {
    
    const movieComponents = movies.map((movie) => {
        return <Movie name={movie.name} url={movie.url} key={movie.id}/>
    })

    return (
        <>
            {movieComponents}
        </>
    )
}

export default MovieList;