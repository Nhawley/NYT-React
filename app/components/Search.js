var React = require('react');
var Router = require('react-router');

import SearchCard from './SearchCard';
import ResultsCard from './ResultsCard';
import Paper from 'material-ui/Paper';

var helpers = require('../utils/helpers');

const paperStyle={
	width: '65%'
};

var Search = React.createClass({
	getInitialState: function(){
		return {
			queryTerm: "",
			startYear: "",
			endYear: "",
			results: {}
		};
	},
	componentDidUpdate: function(prevProps, prevState) {
		console.log("UPDATING !!");
		console.log(this.state.queryTerm);
		console.log(this.state.startYear);
		console.log(this.state.endYear);

		console.log("Previous State", prevState);

		if (this.state.queryTerm != "" && (prevState.queryTerm != this.state.queryTerm || prevState.startYear != this.state.startYear || prevState.endYear != this.state.endYear)) {
			helpers.runQuery(this.state.queryTerm, this.state.startYear, this.state.endYear)
				.then(function (data) {
					if (data != this.state.results){
						this.setState({
							results: data
						});
					}
				}.bind(this));
		}

	},
	setQuery: function(newQuery, newStart, newEnd) {
		console.log("TEST WORKED!");
		this.setState({
			queryTerm: newQuery,
			startYear: newStart,
			endYear: newEnd 
		});
	},

	render: function(){
		return (
			<div>
				<div className='row'>

					<SearchCard className='col s12 m8 offset-m2' updateSearch={this.setQuery} />
				
				</div>

				<ResultsCard results={this.state.results} />

			</div>
		);
	}
});

module.exports = Search;