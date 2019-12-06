import React from 'react';
import Movie from "../Movie/Movie";

const Movies = (props) => {
    const movies = props.movies.map(movie=>(
        <Movie
            movieName={movie.name}
            key={movie.id}
            deleteMovie={()=>props.deleteMovie(movie.id)}
            onChange={(e)=>props.changeMovieName(e, movie.id)}
        />
    ));
    return (
        <ul className='Movies'>
            {movies}
        </ul>

    );
};

export default Movies;