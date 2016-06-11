import React from 'react';
import Router from 'react-router';

// Material Components
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Drawer from './Drawer';
import Divider from 'material-ui/Divider';

// Icons
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import SvgIcon from 'material-ui/SvgIcon';
import FontIcon from 'material-ui/FontIcon';

const iconStyle={ 
    height: '100px', 
    width:'50px', 
    marginTop:'-30px',
    fill: '#303030'
}; 

const Newspaper = (props) => (
  <SvgIcon {...props} style={iconStyle} >
    <path d="M29,0H7C5.343,0,4,1.342,4,3v2H3C1.343,5,0,6.342,0,8v20c0,2.209,1.791,4,4,4h24
      c2.209,0,4-1.791,4-4V3C32,1.342,30.656,0,29,0z M30,28c0,1.102-0.898,2-2,2H4c-1.103,0-2-0.898-2-2V8c0-0.552,0.448-1,1-1h1v20
      c0,0.553,0.447,1,1,1s1-0.447,1-1V3c0-0.552,0.448-1,1-1h22c0.551,0,1,0.448,1,1V28z"/>
    <path d="M19.498,13.005h8c0.277,0,0.5-0.224,0.5-0.5s-0.223-0.5-0.5-0.5h-8c-0.275,0-0.5,0.224-0.5,0.5
      S19.223,13.005,19.498,13.005z"/>
    <path d="M19.498,10.005h8c0.277,0,0.5-0.224,0.5-0.5s-0.223-0.5-0.5-0.5h-8c-0.275,0-0.5,0.224-0.5,0.5
      S19.223,10.005,19.498,10.005z"/>
    <path d="M19.498,7.005h8c0.277,0,0.5-0.224,0.5-0.5s-0.223-0.5-0.5-0.5h-8c-0.275,0-0.5,0.224-0.5,0.5
      S19.223,7.005,19.498,7.005z"/>
    <path d="M16.5,27.004h-8c-0.276,0-0.5,0.225-0.5,0.5c0,0.277,0.224,0.5,0.5,0.5h8
      c0.275,0,0.5-0.223,0.5-0.5C17,27.229,16.776,27.004,16.5,27.004z"/>
    <path d="M16.5,24.004h-8c-0.276,0-0.5,0.225-0.5,0.5c0,0.277,0.224,0.5,0.5,0.5h8
      c0.275,0,0.5-0.223,0.5-0.5C17,24.229,16.776,24.004,16.5,24.004z"/>
    <path d="M16.5,21.004h-8c-0.276,0-0.5,0.225-0.5,0.5c0,0.277,0.224,0.5,0.5,0.5h8
      c0.275,0,0.5-0.223,0.5-0.5C17,21.229,16.776,21.004,16.5,21.004z"/>
    <path d="M27.5,27.004h-8c-0.277,0-0.5,0.225-0.5,0.5c0,0.277,0.223,0.5,0.5,0.5h8
      c0.275,0,0.5-0.223,0.5-0.5C28,27.229,27.775,27.004,27.5,27.004z"/>
    <path d="M27.5,24.004h-8c-0.277,0-0.5,0.225-0.5,0.5c0,0.277,0.223,0.5,0.5,0.5h8
      c0.275,0,0.5-0.223,0.5-0.5C28,24.229,27.775,24.004,27.5,24.004z"/>
    <path d="M27.5,21.004h-8c-0.277,0-0.5,0.225-0.5,0.5c0,0.277,0.223,0.5,0.5,0.5h8
      c0.275,0,0.5-0.223,0.5-0.5C28,21.229,27.775,21.004,27.5,21.004z"/>
    <path d="M27.5,15.004h-19c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h19c0.275,0,0.5-0.224,0.5-0.5
      S27.775,15.004,27.5,15.004z"/>
    <path d="M27.5,18.004h-19c-0.276,0-0.5,0.225-0.5,0.5c0,0.277,0.224,0.5,0.5,0.5h19
      c0.275,0,0.5-0.223,0.5-0.5C28,18.229,27.775,18.004,27.5,18.004z"/>
    <path d="M9,13h7c0.553,0,1-0.447,1-1V5.004c0-0.553-0.447-1-1-1H9c-0.553,0-1,0.447-1,1V12
      C8,12.552,8.447,13,9,13z M10,6h5v5h-5V6z"/>
  </SvgIcon>
);

const AppBarExampleIconMenu = () => (
  <AppBar
    title="NYT - React"
    titleStyle={{
      fontSize: '42px',
      paddingTop: '10px',
      paddingLeft: '7px'
    }}
    iconElementLeft={<IconButton><Newspaper /></IconButton>}
    iconElementRight={
      <div>
      <IconMenu
        iconButtonElement={
          <IconButton><ContentFilter /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem 
          primaryText="Search"
          leftIcon={<FontIcon className="material-icons">search</FontIcon>}
        />
        <Divider />
        <MenuItem 
          primaryText="Saved"
          leftIcon={<FontIcon className="material-icons">save</FontIcon>}
        />
        <Divider />
        <MenuItem 
          primaryText="Github"
          leftIcon={<FontIcon className="muidocs-icon-custom-github" />}
        />
      </IconMenu>
      
      <Drawer />

      </div>
    }
  />
);

export default AppBarExampleIconMenu;