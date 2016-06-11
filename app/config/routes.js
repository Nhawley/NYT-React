// Dependencies
import React from 'react';
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

//Components
import Main from '../components/Main';
import SearchCard from '../components/SearchCard';
import Saved from '../components/SearchCard';


module.exports = (

	<Route path="/" component={Main}>

		<Route path='Search' component={SearchCard} />
		{/* <Route path='/Saved' component={Saved} /> */}
		<Route path='Saved' component={Saved} />
		
		<IndexRoute component={SearchCard} />

	</Route>

);