/** @jsx jsx */
import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import { jsx, Button, Flex } from 'theme-ui';
import { MdNoteAdd } from 'react-icons/md';

function MovieList({ movies }) {
	return (
		<Flex sx={{ flexDirection: 'column' }}>
			{movies.map((movie) => (
				<Link
					sx={{ textDecoration: 'none' }}
					key={movie.id}
					to={`/movies/${movie.id}`}
				>
					<MovieCard movie={movie} />
				</Link>
			))}
			<Link
				to='/add-movie'
				sx={{ alignSelf: 'center', textDecoration: 'none', marginTop: '2rem' }}
			>
				<Button>
					<MdNoteAdd sx={{ fontSize: '2rem', marginRight: '10px' }} />
					Add Movie
				</Button>
			</Link>
		</Flex>
	);
}

export default MovieList;
