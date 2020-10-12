import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import App from './App';
import * as serviceWorker from './serviceWorker';

const options = {
	position: positions.TOP_CENTER,
	timeout: 2000,
	offset: '30px'
};

ReactDOM.render(
	<BrowserRouter>	
		<AlertProvider template={AlertTemplate} {...options}>
			<App />
	</AlertProvider>
	</BrowserRouter>,
	document.getElementById('root'),
);

serviceWorker.unregister();
