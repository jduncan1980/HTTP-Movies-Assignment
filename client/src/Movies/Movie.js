/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MovieCard from './MovieCard';
import { MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { jsx, Button, Flex } from 'theme-ui';

function Movie({ addToSavedList, deleteMovie }) {
	const [movie, setMovie] = useState(null);
	const params = useParams();

	const fetchMovie = (id) => {
		axios
			.get(`http://localhost:5000/api/movies/${id}`)
			.then((res) => setMovie(res.data))
			.catch((err) => console.log(err.response));
	};

	const saveMovie = () => {
		addToSavedList(movie);
	};

	const handleDeleteMovie = () => {
		deleteMovie(params.id);
	};

	useEffect(() => {
		fetchMovie(params.id);
	}, [params.id]);

	if (!movie) {
		return <div>Loading movie information...</div>;
	}

	return (
		<React.Fragment>
			<Flex
				sx={{
					alignItems: 'center',
					justifyContent: 'space-between',
					marginY: '1rem',
					paddingX: '.25rem',
				}}
			>
				<Button
					sx={{
						fontSize: '2rem',
						bg: 'primary',
						padding: '.25rem .5rem',
						borderRadius: '10px',
					}}
					onClick={saveMovie}
				>
					Save
				</Button>
				<Button
					sx={{
						fontSize: '2rem',
						bg: 'primary',
						padding: '.25rem .5rem',
						borderRadius: '10px',
					}}
					onClick={handleDeleteMovie}
				>
					Delete
				</Button>
				<Link to={`/update-movie/${params.id}`}>
					<MdModeEdit sx={{ fontSize: '2rem' }} />
				</Link>
			</Flex>

			<MovieCard movie={movie} />
		</React.Fragment>
	);
}

export default Movie;
