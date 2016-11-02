import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Hamburger from 'material-ui/svg-icons/navigation/menu';
import Avatar from 'material-ui/svg-icons/action/face';
import MenuItem from 'material-ui/MenuItem';

export default class ProfileMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    return (
      <div className="profilemenu-wrapper admin">
        <div className="hamburger-menu-wrapper admin">

      <IconMenu
        menuStyle={{background: "linear-gradient(to right, rgba( 242, 245, 247, 1), rgba( 235, 227, 225, 1))"}}
        iconButtonElement={<IconButton
          iconStyle={{width: 60, height: 60, color: "#727786"}}
          style={{width: 120, height: 120, padding: 0}}
                          >
          <Hamburger /><Avatar/></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        >
        <MenuItem primaryText="Settings" />
        <MenuItem primaryText="Back to Store Front" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    </div>
    </div>

    );
  }

}
