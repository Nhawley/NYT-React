import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

var helpers = require('../utils/helpers');

const paperStyle={
  width: '65%'
};

class CardExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: "",
      pubdate: "",
      expanded: false,
    };
  }

  handleExpandChange(expanded){
    this.setState({expanded: expanded});
  }

  handleToggle(event, toggle){
    this.setState({expanded: toggle});
  }

  handleExpand(){
    this.setState({expanded: true});
  }

  handleReduce(){
    this.setState({expanded: false});
  }

  handleClick(item, event){
    console.log("CLICKED!");
    console.log(item);

  helpers.postSaved(item.headline.main, item.pub_date, item.web_url)
      .then(function(data) {
        console.log(item.web_url);
      }.bind(this));
  }

  render() {
    if(!this.props.results.hasOwnProperty('docs')) {
      return(
        <div className='row'>
        <AppBar
          title="Enter search terms to begin..."
          showMenuIconButton={false}
          style={paperStyle}
          className='col s12 m8 offset-m2 center-align'
        />
        </div>
      )
    } else {
      var articles = this.props.results.docs.map(function (article, index) {
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
              label="Save"
              labelPosition="after"
              icon={<FontIcon className="material-icons">save</FontIcon>} 
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

    return(

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
};

export default CardExampleControlled;
