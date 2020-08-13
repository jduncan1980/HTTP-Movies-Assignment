/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import MovieCard from './MovieCard';
import { MdModeEdit, MdDelete, MdSave } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { jsx, Button, Flex } from 'theme-ui';

function Movie({ addToSavedList }) {
	const [movie, setMovie] = useState(null);
	const params = useParams();
	const history = useHistory();

	const fetchMovie = (id) => {
		axios
			.get(`http://localhost:5000/api/movies/${id}`)
			.then((res) => setMovie(res.data))
			.catch((err) => alert(`Something Went Wrong! -- ${err}`));
	};

	const deleteMovie = (id) => {
		axios
			.delete(`http://localhost:5000/api/movies/${id}`)
			.then((res) => {
				console.log(res);
				history.push('/');
			})
			.catch((err) => {
				alert(`Something Went Wrong! -- ${err}`);
			});
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
			<MovieCard movie={movie} />
			<Flex
				sx={{
					alignItems: 'center',
					justifyContent: 'space-around',
					marginY: '1rem',
				}}
			>
				<Button onClick={saveMovie}>
					<MdSave sx={{ fontSize: '2rem', marginRight: '10px' }} />
					Save
				</Button>
				<Button onClick={handleDeleteMovie}>
					<MdDelete sx={{ fontSize: '2rem', marginRight: '10px' }} />
					Delete
				</Button>

				<Link sx={{ textDecoration: 'none' }} to={`/update-movie/${params.id}`}>
					<Button>
						<MdModeEdit sx={{ fontSize: '2rem', marginRight: '10px' }} />
						Edit
					</Button>
				</Link>
			</Flex>
		</React.Fragment>
	);
}

export default Movie;
