// Dependencies
import React from 'react';
var Router = require('react-router');

var helpers = require('../utils/helpers');

var Search = React.createClass({

	getInitialState: function() {
		return {
			savedArticles: ""
		};
	},

	componentDidMount: function() {

		helpers.getSaved().then(function (articleData) {
			this.setState({
				savedArticles: articleData.data
			});
			console.log("saved results", articleData.data);
		}.bind(this));
	},

	// /*This code handles the sending of the search terms to the parent Search component*/
	handleClick: function(item, event) {
		console.log("CLICKED");
		console.log(item);

		helpers.deleteSaved(item.title, item.date, item.url).then(function (data) {

			// Get the revised list!
			helpers.getSaved().then(function (articleData) {
				this.setState({
				savedArticles: articleData.data
				});
				console.log("saved results", articleData.data);
			}.bind(this));
		}.bind(this));
	},

	render: function() {

		if (this.state.savedArticles == "") {
	      return(
	        <div className='row'>
	        <AppBar
	          title="Save a couple artciles..."
	          showMenuIconButton={false}
	          style={paperStyle}
	          className='col s12 m8 offset-m2 center-align'
	        />
	        </div>
	      );
		} else {
	      var articles = this.props.savedArticles.map(function (article, index) {
	        return (
	          <div key={index}>
	          <Paper zDepth={4} transitionEnabled={true}>
	          <Card expanded={this.state.expanded} onExpandChange={this.handleToggle.bind(this)} id={article._id} >
	          <CardHeader
	          title={article.headline.main}
	          subtitle={article.byline.original}
	          avatar={"https://static01.nyt.com/" + article.multimedia[2].url}
	          actAsExpander={true}
	          showExpandableButton={true}
	          />
	          <CardTitle style={{textAlign: 'center'}} title={article.headline.print_headline} expandable={true} />
	            <CardText style={{textAlign: 'center'}} expandable={true} >{article.lead_paragraph}</CardText>
	            <CardActions>
	              <FlatButton
	              secondary={true} 
	              label="Delete"
	              labelPosition="after"
	              icon={<FontIcon className="material-icons">remove</FontIcon>} 
	              onTouchTap={this.handleClick.bind(this, article)}
	              />
	              <FlatButton 
	              secondary={true}
	              label="Read More"
	              labelPosition="before"
	              linkButton={true}
	              target="_blank" 
	              href={article.web_url}
	              icon={<FontIcon className="material-icons">chrome_reader_mode</FontIcon>}
	              style={{float: 'right'}}
	              />
	            </CardActions>
	          <Divider />
	          </Card>
	          </Paper>
	          </div>
	          );
	        }.bind(this));
		}

		return (
		    <div style={paperStyle} className='row'>

		      <AppBar
		        title="Results"
		        showMenuIconButton={false}
		        className='col s12 center-align'
		        style={{zIndex: '600'}}
		      />

		      <Paper zDepth={3} className='col s12'>
		        <ul className="list-group">
		        {articles}
		        </ul>
		      </Paper>

		    </div>
		);
	}
});


export default Search;

