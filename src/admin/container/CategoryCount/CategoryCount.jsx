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
    const categories = props.inventory.categories.map(category => (
        <div key = {category.id} className="col-xs-3">
            <div className="col-xs-8">{category.varietal}</div>
            <div className="col-xs-4">{category.qty}</div>
        </div>
    ))
    this.setState({categories: categories});
  }

  render() {
    return (
        <div className="row">
            {this.state.categories};
        </div>
    );

  }

}
export default connect(state => ( { inventory: state.inventory } ) )( CategoryCount );
