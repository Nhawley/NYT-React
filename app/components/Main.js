// Dependencies
import React from 'react';

// Material UI
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components 
import AppBar from './AppBar';
import Search from './Search';
import ResultsCard from './ResultsCard';

// Making things clickable/touchable
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

// DarkTheme
const darkMuiTheme = getMuiTheme(darkBaseTheme);

const Main = () => (

	<MuiThemeProvider muiTheme={darkMuiTheme}>

		<div>

			<AppBar />

			<Search />
			
		</div>

	</MuiThemeProvider>

);

export default Main;
