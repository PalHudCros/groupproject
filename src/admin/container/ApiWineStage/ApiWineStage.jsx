import React, {Component} from 'react';
import {connect} from "react-redux";
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class ApiWineStage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wines: []
    };
  }

  checkStagedWines( context ) {
    let props;

    if ( context ) {
      props = context;
    } else {
      props = this.props;
    }

    const stagedWines = props.distribution.stagedWines.map(wine => {
      wine.LabelImage = wine.Labels[0].Url;
      wine.BottleImage = wine.LabelImage.substring(0, wine.LabelImage.length-5) + "d.jpg";

      return (

        <div key={ wine.Id } className="row stage-wine-row admin">
          <div className="stage-wine-image admin">

            <img height="100%" src={ wine.BottleImage } alt={ wine.Name} />
          </div>
          <div className="stage-wine-name admin">

              <h2>{ wine.Name }</h2>
          </div>
          <div className="stage-wine-varietal-vintage admin">
            <h3>{ wine.Varietal.Name } ({ wine.Vintage })</h3>
          </div>
          <div className="stage-wine-qty admin">
            01
          </div>
          <div className="stage-wine-remove-button admin">
            -
          </div>
        </div>

      )});
      this.setState( {wines: stagedWines });
  }

  componentWillMount() {
    if ( this.props.distribution.stagedWines[0] ) {
      this.checkStagedWines();
    }
  }

  componentWillReceiveProps(props) {
    this.checkStagedWines(props);
  }

  render() {
    return (
        <div className="api-wines-stage-wrapper admin">
          <div className="stage-title-wrapper admin">
            <h1>Vineyard Purchase Order</h1>
          </div>

          <div className="stage-list-wrapper admin">

              { this.state.wines }

          </div>

        </div>
    );

  }

}

export default connect(state => ( { distribution: state.distribution } ) )( ApiWineStage );
