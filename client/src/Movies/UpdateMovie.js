import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import Form from './Form';

export default function UpdateMovie() {
	const initialState = {
		title: '',
		director: '',
		metascore: '',
		stars: [],
	};

	const [movie, setMovie] = useState(initialState);
	const { id } = useParams();
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.put(`http://localhost:5000/api/movies/${id}`, movie)
			.then((res) => {
				console.log('result', res.data);
				history.push(`/movies/${id}`);
			})
			.catch((err) => {
				alert(`Something Went Wrong! -- ${err}`);
			});
	};

	useEffect(() => {
		axios
			.get(`http://localhost:5000/api/movies/${id}`)
			.then((res) => {
				setMovie({ ...res.data });
			})
			.catch((err) => {
				alert(`Something Went Wrong! -- ${err}`);
			});
		console.log(history);
	}, []);

	return <Form handleSubmit={handleSubmit} movie={movie} setMovie={setMovie} />;
}
