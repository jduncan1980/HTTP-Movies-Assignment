/** @jsx jsx */
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Flex, Heading, Text, jsx } from 'theme-ui';

function SavedList({ list }) {
	return (
		<Flex
			sx={{
				alignItems: 'center',
				justifyContent: 'space-between',
				flexWrap: 'wrap',
				bg: 'background',
				padding: '30px',
			}}
		>
			<Heading as='h3' variant='h3'>
				Saved Movies:
			</Heading>
			{list.map((movie) => {
				return (
					<NavLink
						to={`/movies/${movie.id}`}
						key={movie.id}
						activeClassName='saved-active'
						sx={{ variant: 'links.navLink' }}
					>
						<Text>{movie.title}</Text>
					</NavLink>
				);
			})}
			<Flex>
				<Link sx={{ variant: 'links.cardLink' }} to='/'>
					Home
				</Link>
			</Flex>
		</Flex>
	);
}

export default SavedList;
