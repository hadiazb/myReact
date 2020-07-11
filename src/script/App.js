import React from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';
import { Header } from './Components/Header/index';
import { Character } from './Components/Character/index';

export const App = () => {
	return (
		<div>
			<GlobalStyle />
			<Header />
			<Character />
			<Character />
			<Character />
			<Character />
			<Character />
		</div>
	);
};
