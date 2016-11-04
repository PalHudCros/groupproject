import React, {Component} from 'react';
import {connect} from "react-redux";
import {getCategoryCounts} from "../../ducks/distributionDuck";

export class CategoryCount extends Component {
  constructor(props) {
    super(props);

    this.state = {
        categories: []
    };
  }

  componentWillMount() {
    this.props.dispatch(getCategoryCounts());    
  }

  componentWillReceiveProps(props) {
    const wineCategories = props.distribution.categories.map(category => (
        <div key = {category._id} className="col-xs-3">
            <div className="col-xs-8">{category.varietal}</div>
            <div className="col-xs-4">{category.qty}</div>
        </div>
    ))
    this.setState({categories: wineCategories});
  }

  mapCategories(categories) {
      
  }
  render() {
    return (
        <div className="row">
            {this.state.categories}
        </div>
    );

  }

}
export default connect(state => ( { inventory: state.inventory, distribution: state.distribution } ) )( CategoryCount );
