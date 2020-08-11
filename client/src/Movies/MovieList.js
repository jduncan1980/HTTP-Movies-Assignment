/** @jsx jsx */
import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import { jsx } from 'theme-ui';

function MovieList({ movies }) {
	return (
		<div className='movie-list'>
			{movies.map((movie) => (
				<Link
					sx={{ textDecoration: 'none' }}
					key={movie.id}
					to={`/movies/${movie.id}`}
				>
					<MovieCard movie={movie} />
				</Link>
			))}
		</div>
	);
}

export default MovieList;
