import React, { useEffect, useState } from 'react';
import { Button, Label, Input, Flex } from 'theme-ui';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function UpdateMovieForm() {
	const initialState = {
		title: '',
		director: '',
		metascore: '',
		stars: [],
	};

	const [movie, setMovie] = useState(initialState);
	const { id } = useParams();
	const history = useHistory();

	const handleChange = (e) => {
		e.persist();
		setMovie({ ...movie, [e.target.name]: e.target.value });
	};

	const handleStarsChange = (e) => {
		e.persist();
		setMovie({ ...movie, stars: e.target.value.split(',') });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.put(`http://localhost:5000/api/movies/${id}`, movie)
			.then((res) => {
				console.log('result', res.data);
				history.push(`/movies/${id}`);
			})
			.catch((err) => {
				console.log('error', err);
			});
	};

	useEffect(() => {
		axios.get(`http://localhost:5000/api/movies/${id}`).then((res) => {
			setMovie({ ...res.data });
		});
	}, []);

	return (
		<Flex
			onSubmit={handleSubmit}
			as='form'
			sx={{
				flexDirection: 'column',
				alignItems: 'center',
				minWidth: ['90%', null, '60%'],
				bg: 'primary',
				padding: '40px',
				marginBottom: '100px',
				borderRadius: '10px',
				marginTop: '50px',
				color: 'white',
				boxShadow: '10px 10px 48px 0px rgba(0,0,0,0.5)',
			}}
		>
			<Label htmlFor='title'>Movie Title:</Label>
			<Input
				value={movie.title}
				onChange={handleChange}
				name='title'
				id='title'
			/>

			<Label htmlFor='director'>Movie Director:</Label>
			<Input
				value={movie.director}
				onChange={handleChange}
				name='director'
				id='director'
			/>

			<Label htmlFor='metascore'>Movie Score:</Label>
			<Input
				value={movie.metascore}
				onChange={handleChange}
				name='metascore'
				id='metascore'
			/>

			<Label htmlFor='stars'>Movie Stars:</Label>
			<Input
				value={movie.stars.toString()}
				onChange={handleStarsChange}
				name='stars'
				id='stars'
			/>

			<Button
				type='submit'
				sx={{
					bg: 'secondary',
					marginTop: '30px',
					cursor: 'pointer',
					fontSize: 2,
					transition: 'all .25s ease',
					boxShadow: '2px 2px 1px 1px rgba(232,216,232,0.25)',

					'&:hover': {
						transform: 'scale(1.1)',
					},
					'&:active:': {
						boxShadow: 'none',
					},
					'&:disabled': {
						bg: 'gray',
					},
				}}
			>
				Submit
			</Button>
		</Flex>
	);
}
