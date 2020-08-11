import React, { useState, useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import axios from 'axios';
import { Container } from 'theme-ui';
import UpdateMovieForm from './Movies/UpdateMovieForm';

const App = () => {
	const [savedList, setSavedList] = useState([]);
	const [movieList, setMovieList] = useState([]);
	const history = useHistory();

	const getMovieList = () => {
		axios
			.get('http://localhost:5000/api/movies')
			.then((res) => setMovieList(res.data))
			.catch((err) => console.log(err.response));
	};

	const deleteMovie = (id) => {
		axios.delete(`http://localhost:5000/api/movies/${id}`).then((res) => {
			console.log(res);
			history.push('/');
		});
	};

	const addToSavedList = (movie) => {
		setSavedList([...savedList, movie]);
	};

	useEffect(() => {
		getMovieList();
	});

	return (
		<Container>
			<SavedList list={savedList} />

			<Route exact path='/'>
				<MovieList movies={movieList} />
			</Route>

			<Route path='/movies/:id'>
				<Movie addToSavedList={addToSavedList} deleteMovie={deleteMovie} />
			</Route>
			<Route path='/update-movie/:id'>
				<UpdateMovieForm />
			</Route>
		</Container>
	);
};

export default App;
