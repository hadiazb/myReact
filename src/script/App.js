import React from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';
import { Header } from './Components/Header/index';

export const App = () => {
	return (
		<div>
      <GlobalStyle />
      <Header />
		</div>
	);
};
