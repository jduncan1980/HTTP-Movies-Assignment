/** @jsx jsx */
// import React from 'react';
import { jsx, Card, Text, Heading, Flex } from 'theme-ui';

const MovieCard = (props) => {
	const { title, director, metascore, stars } = props.movie;
	return (
		<Card sx={{ position: 'relative' }}>
			<Flex variant='cardInfo'>
				<Heading variant='cardHeading'>{title}</Heading>
				<Text variant='cardText'>
					Directed by <em>{director}</em>
				</Text>
				<Text variant='cardText'>
					Metascore: <strong>{metascore}</strong>
				</Text>
			</Flex>
			<Flex variant='cardInfo' sx={{ marginTop: ['1rem', null, 0] }}>
				<Heading variant='cardHeading'>Starring:</Heading>
				{stars.map((star) => (
					<Text key={star}>{star}</Text>
				))}
			</Flex>
		</Card>
	);
};

export default MovieCard;
