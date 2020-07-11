import styled from 'styled-components';

export const Box = styled.div`
	min-width: 280px;
	max-width: 400px;
	height: 150px;
	margin: 20px auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 10px;
	overflow: hidden;
	background-color: hsla(0, 0%, 0%, 0.8);
	color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 20px hsla(0, 0%, 0%, 1);
`;

export const Img = styled.img`
	width: 47%;
`;

export const Data = styled.div`
	margin: 5px;
  width: 70%;
  height: 90%;
`;

export const Subtitle = styled.h4`
	margin: 5px;
  font-size: .8em;
  color: rgba(255, 255, 255, 0.8);
`;

export const Title = styled.h4`
	margin: 8px 10px;
  font-size: 1.4em;
`;