// Dependencies
import React from 'react';
import dateFormat from 'dateformat';

// Material Components
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

let DateTimeFormat;
DateTimeFormat = global.Intl.DateTimeFormat;

const divStyle = {
	textAlign: 'center'
}

const butStyle = {
  margin: 12,
};

var SearchCard = React.createClass({

	getInitialState: function() {
		return {
			search: "",
			start: "",
			end: ""
		};
	},
	handleSubmit: function() {
		console.log("CLICK CLICK");
		this.props.updateSearch(this.state.search, this.state.start, this.state.end);
		return false;
	},
	handleTextChange: function(e) {
		console.log("Houston we have a CHANGE!");
        this.setState({
            search: e.target.value
        });
        console.log(e.target.value)
    },
	handleStartDateChange: function(e, date) {
		console.log("Houston we have a DATE CHANGE!");
		var freshDate = new Date(date);
		var cleanDate = dateFormat(freshDate, "yyyymmdd");
		this.setState({
            start: cleanDate,
            startDisplay: date,
        });
		console.log(cleanDate);
	},
	handleEndDateChange: function(e, date) {
		console.log("Houston we have a DATE CHANGE!");
		var freshDate = new Date(date);
		var cleanDate = dateFormat(freshDate, "yyyymmdd");
		this.setState({
            end: cleanDate,
            endDisplay: date,
        });
		console.log(date);
	},

	render: function(){
		return (
			<div style={divStyle}>
				<Paper zDepth={3}>
					<TextField
						  type="text"
					      hintText="Topic"
					      underlineShow={false}
					      fullWidth={true}
					      hintStyle={{
					      	position: 'relative',
					      	bottom: '-39px',
					      	fontSize: 'xx-large'
					      }}
					      inputStyle={{
					      	textAlign: 'center',
					      	fontSize: 'xx-large'
					      }}
					      id="search"
					      onChange={this.handleTextChange}
					      required={true}
					/><br />

					<DatePicker
						hintText="Start Date"
						autoOk={true}
						minDate={new Date (1980, 1)}
						maxDate={new Date (2016, 7)}
						value={this.state.value}
						id="start"
						formatDate={new DateTimeFormat('en-US', {
					        day: 'numeric',
					        month: 'long',
					        year: 'numeric',
						}).format}
						onChange={this.handleStartDateChange}
						required={true}
						value={this.state.startDisplay}
						textFieldStyle={{textAlign: 'center'}}
					/><br />
					
					<DatePicker
						hintText="End Date"
						autoOk={true}
						minDate={new Date (1980, 1)}
						maxDate={new Date (2016, 7)}
						value={this.state.value}
						id="end"
						formatDate={new DateTimeFormat('en-US', {
					        day: 'numeric',
					        month: 'long',
					        year: 'numeric',
						}).format}
						onChange={this.handleEndDateChange}
						required={true}
						value={this.state.endDisplay}
						textFieldStyle={{textAlign: 'center'}}
					/><br />

					<RaisedButton 
						label="Submit" 
						primary={true} 
						style={butStyle}
						onTouchTap={this.handleSubmit}
					/>
					
				</Paper>
			</div>
		);
	}
});

export default SearchCard;