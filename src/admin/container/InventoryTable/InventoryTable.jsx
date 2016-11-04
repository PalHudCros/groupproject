import React, {Component} from 'react';
import { Link } from 'react-router';
import {connect} from "react-redux";
import CircularProgress from 'material-ui/CircularProgress';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {getWinesFromAPI, addWineToDistribution} from "../../ducks/distributionDuck";


class InventoryTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
        wineList: []
    };
  }

  componentWillMount() {
    this.props.dispatch(getWinesFromAPI());
  }

  componentWillReceiveProps(props) {
     const wineList = props.distribution.wines.map(wine => {
        wine.LabelImage = wine.Labels[0].Url;
        wine.BottleImage = wine.LabelImage.substring(0, wine.LabelImage.length-5) + "d.jpg";
        return (
          <div key={wine.Id} className="row inventory-row admin">
              <div className="col-xs-4">
                <img height="150" src={wine.BottleImage} alt=""/>
              </div>
              <div className="col-xs-4">
                <h2>{wine.Name}</h2>
                <h3>{wine.Varietal.Name} {wine.Vintage}</h3>
              </div>
              <div className="col-xs-4">
                <FloatingActionButton style={{margin: 0}} onClick={this.addItemToInventory.bind(this, wine)}>
                  <ContentAdd />
                </FloatingActionButton>
              </div>
          </div>
      )});
      this.setState({wineList: wineList})
  }

  addItemToInventory(wine) {
    this.props.dispatch(addWineToDistribution(wine));
  }

  render() {
    return (
      <div className="inventory-table-wrapper admin">
        <div className="row inventory-filters-wrapper admin">
          <div className="col-xs-3 admin">
            <p>Filter by Smell</p>
          </div>
          <div className="col-xs-3 admin">
            <p>Filter by Usefulness</p>
          </div>
          <div className="col-xs-3 admin">
            <p>Filter by Strangeity</p>
          </div>
          <div className="col-xs-3 admin">
            <p>Filter by Potency of Corruption</p>
          </div>
        </div>
        <div className="inventory-rows-wrapper admin">
            {
              this.props.distribution.status === "Fetching Distribution List"
              ?
              <div className="progress-container">
                <CircularProgress size={80} thickness={5} />
              </div>
              :
              this.state.wineList
            }
        </div>
      </div>
    );

  }

}
export default connect(state => ( { inventory: state.inventory, distribution: state.distribution } ) )( InventoryTable );
