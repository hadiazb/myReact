import React from 'react';
import { Box, Img, Data, Subtitle, Title, Subsubtitle, Anchor } from './style';

const DEFAULT_IMG =
	'https://rickandmortyapi.com/api/character/avatar/21.jpeg';

export const Character = ({
	cover = DEFAULT_IMG,
	status = 'Status',
	species = 'Species',
	name = 'Name',
	location = 'Location',
	gender = 'Gender',
	pathOne = '#',
	pathTwo = '#',
}) => {
	return (
		<Box>
			<Img src={cover} />
			<Data>
				<Title>{name}</Title>
				<Subtitle>
					<Subsubtitle>
						{status}-{species}
					</Subsubtitle>
				</Subtitle>
				<Subtitle>
					<Subsubtitle>Last Location</Subsubtitle>
				</Subtitle>
				<Subtitle>
					<Anchor to={pathOne}>{location}</Anchor>
				</Subtitle>
				<Subtitle>
					<Subsubtitle>Gender</Subsubtitle>
				</Subtitle>
				<Subtitle>
					<Anchor to={pathTwo}>{gender}</Anchor>
				</Subtitle>
			</Data>
		</Box>
	);
};
