/** @jsx jsx */
import React from 'react';
import { jsx, Card, Text, Heading, Flex } from 'theme-ui';

const MovieCard = (props) => {
	const { title, director, metascore, stars, id } = props.movie;
	return (
		<Card sx={{ position: 'relative' }}>
			<Heading>{title}</Heading>
			<Text>
				Director: <em>{director}</em>
			</Text>
			<Text>
				Metascore: <strong>{metascore}</strong>
			</Text>
			<Heading>Actors</Heading>
			{stars.map((star) => (
				<Text key={star}>{star}</Text>
			))}
			{/* <Link to={`/update-movie/${id}`}>
				<MdModeEdit sx={{ position: 'absolute', top: 10, right: 20 }} />
			</Link> */}
		</Card>
	);
};

export default MovieCard;
