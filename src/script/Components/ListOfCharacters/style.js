import { Component } from 'react';
import styled from 'styled-components';

export const List = styled.ul`
	border: 1px solid black;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 190px;
  grid-gap: 20px;
  background-color: rgba(0, 0, 0, .5);
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;
