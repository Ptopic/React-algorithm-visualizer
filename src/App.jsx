import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Controller from './components/Controller';
import DisplayAlgo from './components/DisplayAlgo';
import Footer from './components/Footer';
import './index.css';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

function App() {
	const theme = createTheme({
		palette: {
			secondary: {
				main: '#EB212E',
			},
		},
	});
	return (
		<MuiThemeProvider theme={theme}>
			<div className="app-container">
				<Navbar />
				<Controller />
				<DisplayAlgo />
				<Footer />
			</div>
		</MuiThemeProvider>
	);
}

export default App;
