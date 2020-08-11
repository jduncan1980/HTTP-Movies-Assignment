import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import theme from './theme';

require('typeface-raleway');
require('typeface-orbitron');

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Router>
			<App />
		</Router>
	</ThemeProvider>,
	document.getElementById('root')
);
