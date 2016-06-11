import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MobileTearSheet from './/MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';


const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Read More</MenuItem>
    <MenuItem style={{color: 'rgb(160, 0, 0)'}}>Remove
      <FontIcon 
        className="material-icons" 
        style={{color: 'rgb(134, 0, 0)', paddingLeft: '15px'}}
      >delete</FontIcon>
    </MenuItem>
  </IconMenu>
);

const ListExampleMessages = () => (
  <div>
    <MobileTearSheet>
      <List>
        <Subheader>Saved Articles</Subheader>
        <ListItem
          leftAvatar={<Avatar src="https://static01.nyt.com/images/2016/06/10/sports/10powell-web/10powell-web-thumbStandard.jpg" />}
          rightIconButton={rightIconMenu}
          primaryText="LeBron James Leaps to Life, and the Cavs Have Hope"
          secondaryText={
            <p>
              <span style={{color: '#bdbdbd'}}>Brunch this weekend?</span><br />
              James hit jump shots, tossed down shake-and-bakes and grabbed rebounds. The Cavaliers dominated the Warriors in Game 3 of the N.B.A. finals.
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src="https://static01.nyt.com/images/2016/06/10/sports/10powell-web/10powell-web-thumbStandard.jpg" />}
          rightIconButton={rightIconMenu}
          primaryText="LeBron James Leaps to Life, and the Cavs Have Hope"
          secondaryText={
            <p>
              <span style={{color: '#bdbdbd'}}>Summer BBQ</span><br />
              James hit jump shots, tossed down shake-and-bakes and grabbed rebounds. The Cavaliers dominated the Warriors in Game 3 of the N.B.A. finals.
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src="https://static01.nyt.com/images/2016/06/10/sports/10powell-web/10powell-web-thumbStandard.jpg" />}
          rightIconButton={rightIconMenu}
          primaryText="LeBron James Leaps to Life, and the Cavs Have Hope"
          secondaryText={
            <p>
              <span style={{color: '#bdbdbd'}}>Oui oui</span><br />
              James hit jump shots, tossed down shake-and-bakes and grabbed rebounds. The Cavaliers dominated the Warriors in Game 3 of the N.B.A. finals.
            </p>
          }
          secondaryTextLines={2}
        />
      </List>
    </MobileTearSheet>
  </div>
);


class DrawerOpenRightExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div>
        <RaisedButton
          label="Saved"
          onTouchTap={this.handleToggle.bind(this)}
          icon={<FontIcon className="material-icons">menu</FontIcon>}
        />
        <Drawer width={400} openSecondary={true} open={this.state.open} >
          <RaisedButton
          label=""
          onTouchTap={this.handleToggle.bind(this)}
          icon={<FontIcon className="material-icons">menu</FontIcon>}
          />
          <ListExampleMessages />
        </Drawer>
      </div>
    );
  }
}

export default DrawerOpenRightExample;

