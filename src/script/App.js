import React from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';
import { Header } from './Components/Header/index';
import { ListOfCategory } from './Components/ListOfCharacters/index';

export const App = () => {
	return (
		<div>
			<GlobalStyle />
			<Header />
			<ListOfCategory />
		</div>
	);
};
