import React, { useState, useEffect } from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import axios from 'axios';
import { Container } from 'theme-ui';
import UpdateMovie from './Movies/UpdateMovie';
import AddMovie from './Movies/AddMovie';

const App = () => {
	const [savedList, setSavedList] = useState([]);
	const [movieList, setMovieList] = useState([]);

	const getMovieList = () => {
		axios
			.get('http://localhost:5000/api/movies')
			.then((res) => setMovieList(res.data))
			.catch((err) => console.log(err.response));
	};

	// Fixed addToSavedList func so movie can only be added once
	const addToSavedList = (movie) => {
		const saved = savedList.filter((saved) => saved.id === movie.id);
		if (saved.length === 0) {
			setSavedList([...savedList, movie]);
		}
	};

	useEffect(() => {
		getMovieList();
	});

	return (
		<React.Fragment>
			<SavedList list={savedList} />
			<Container>
				<Switch>
					<Route exact path='/'>
						<MovieList movies={movieList} />
					</Route>

					<Route path='/movies/:id'>
						<Movie addToSavedList={addToSavedList} />
					</Route>

					<Route path='/update-movie/:id'>
						<UpdateMovie />
					</Route>

					<Route path='/add-movie'>
						<AddMovie />
					</Route>
				</Switch>
			</Container>
		</React.Fragment>
	);
};

export default App;
