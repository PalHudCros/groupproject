import React, {Component} from 'react';
import { Link } from 'react-router';
import {connect} from "react-redux";
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {sendWineToApiStage} from "../../ducks/distributionDuck";

export class APITable extends Component {
  constructor(props) {
    super(props);

    this.state = {
        wineList: []
    };
  }

  addWineToStage( wine ) {
    this.props.dispatch(sendWineToApiStage( wine ));
  }

  componentWillMount() {

  }

  componentWillReceiveProps(props) {
     const wineList = props.distribution.wines.map(wine => {
        wine.LabelImage = wine.Labels[0].Url;
        wine.BottleImage = wine.LabelImage.substring(0, wine.LabelImage.length-5) + "d.jpg";
        return (
          <div key={wine.Id} className="inventory-table-row-wrapper admin">
          <div className="row inventory-table-row admin">
              <div className="col-xs-2 inventory-table-column-image admin">
                <img src={wine.BottleImage} alt={ wine.Name }/>
              </div>
              <div className="col-xs-8 inventory-table-column-name admin">
                <h2>{wine.Name}</h2>
                <h3>{wine.Varietal.Name} {wine.Vintage}</h3>
              </div>
              <div className="col-xs-2 inventory-table-column-button admin">
                <FloatingActionButton style={{margin: 0}} onClick={this.addWineToStage.bind(this, wine)}>
                  <ContentAdd />
                </FloatingActionButton>
              </div>
          </div>
          <MuiThemeProvider>
            <Divider />
          </MuiThemeProvider>
        </div>
        );
      });
      this.setState({wineList: wineList})
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
              this.props.distribution.status === "Fetching API list"
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
export default connect(state => ( { distribution: state.distribution } ) )( APITable );
