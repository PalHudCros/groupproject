import React, {Component} from 'react';
import {Link} from "react-router";

export default class ProfileMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    return (
      <div>
        <AutoComplete
          floatingLabelText="Search Inventory"
          filter={AutoComplete.fuzzyFilter}
          dataSource={fruit}
          maxSearchResults={5}
        />
      </div>

    );
  }

}
