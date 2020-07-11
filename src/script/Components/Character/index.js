import React from 'react';
import { Box, Img, Data, Subtitle, Title } from './style';

export const Character = () => {
	return (
		<Box>
			<Img src='https://rickandmortyapi.com/api/character/avatar/21.jpeg' />
			<Data>
				<Title>Name</Title>
				<Subtitle>
					<span>Status-Species</span>
				</Subtitle>
				<Subtitle>
					<span>Last known Location</span>
				</Subtitle>
				<Subtitle>
					<a href='#'>Location</a>
				</Subtitle>
				<Subtitle>
					<span>First seen in:</span>
				</Subtitle>
				<Subtitle>
					<a href='#'>Episode</a>
				</Subtitle>
			</Data>
		</Box>
	);
};
