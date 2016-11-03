import React, {Component} from 'react';
import {connect} from "react-redux";

class CategoryCount extends Component {
  constructor(props) {
    super(props);

    this.state = {
        categories: []
    };
  }

  componentWillMount() {
  }

  componentWillReceiveProps(props) {
  }

  render() {
    const categories = this.props.inventory.categories.map(category => (
        <div key = {category.id} className="col-xs-3">
            <div className="col-xs-8">{category.varietal}</div>
            <div className="col-xs-4">{category.qty}</div>
        </div>
    ))
    return (
        <div className="row">
            {categories};
        </div>
    );

  }

}
export default connect(state => ( { inventory: state.inventory } ) )( CategoryCount );
