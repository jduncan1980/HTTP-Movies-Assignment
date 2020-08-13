import React, { useState } from 'react';
// import { Button, Label, Input, Flex } from 'theme-ui';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Form from './Form';

export default function UpdateMovieForm() {
	const initialState = {
		title: '',
		director: '',
		metascore: '',
		stars: [],
	};

	const [movie, setMovie] = useState(initialState);
	// const { id } = useParams();
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post(`http://localhost:5000/api/movies/`, movie)
			.then((res) => {
				console.log('result', res.data);
				history.push(`/`);
			})
			.catch((err) => {
				alert(`Something Went Wrong! -- ${err}`);
			});
	};

	return <Form handleSubmit={handleSubmit} movie={movie} setMovie={setMovie} />;
}
