import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';

const Container = styled.div`
	background-color: red;
`;

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Container>App</Container>
		</>
	);
};

export default App;
