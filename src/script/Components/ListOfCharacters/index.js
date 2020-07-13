import React, { useState, useEffect } from 'react';
import { Character } from '../Character/index';
import { List } from './style';

function useCharacterData() {
	const [character, setCharacter] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(function () {
		setLoading(true);
		fetch('https://rickandmortyapi.com/api/character/')
			.then((res) => res.json())
			.then((response) => {
				setCharacter(response.results);
				setLoading(false);
			})
			.catch((error) => console.error());
	}, []);
	return { character, loading };
}

export const ListOfCategory = () => {
	const { character, loading } = useCharacterData();
	return (
		<List>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				character.map((character) => (
					<li key={character.id}>
						<Character
							cover={character.image}
							status={character.status}
							species={character.species}
							name={character.name}
							location={character.origin.name}
							gender={character.gender}
							pathOne='#'
							pathTwo='#'
						/>
					</li>
				))
			)}
		</List>
	);
};
