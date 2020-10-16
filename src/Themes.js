import {createGlobalStyle} from 'styled-components';

export const lightTheme = {
  body: '#fff',
  fontColor: '#2b3945',
};

export const darkTheme = {
  body: '#2b3945',
  fontColor: '#fff',
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${props => props.theme.body};
	}
`;
