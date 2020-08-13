/** @jsx jsx */
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Flex, Heading, Text, jsx } from 'theme-ui';

function SavedList({ list }) {
	return (
		<React.Fragment>
			<Flex
				sx={{
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'space-between',
					bg: 'primary',
					color: 'muted',
					padding: '30px',
					position: 'fixed',
					width: '100%',
					zIndex: 2,
					// minHeight: '100px',
				}}
			>
				<Heading
					as='h3'
					variant='h3'
					sx={{ marginBottom: '1rem', display: 'inline-block' }}
				>
					Saved Movies:
				</Heading>
				<Flex
					sx={{
						alignItems: 'center',
						justifyContent: 'space-evenly',
						flexWrap: 'wrap',
					}}
				>
					{list.map((movie) => {
						return (
							<NavLink
								to={`/movies/${movie.id}`}
								key={movie.id}
								// activeClassName='saved-active'
								sx={{ variant: 'links.savedLink' }}
							>
								<Text>{movie.title}</Text>
							</NavLink>
						);
					})}
				</Flex>
			</Flex>
			<div sx={{ height: '10rem' }} />
			<Link sx={{ variant: 'links.homeLink', textAlign: 'center' }} to='/'>
				<Flex
					sx={{
						position: 'fixed',
						bottom: 2,
						right: 10,
						bg: 'accent',
						padding: '1rem',
						borderRadius: '.5rem',
						zIndex: 1,
					}}
				>
					Go
					<br />
					Home
				</Flex>
			</Link>
		</React.Fragment>
	);
}

export default SavedList;
