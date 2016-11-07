import './Shop.scss'

//Modules
import React, {Component} from 'react';

//Material-UI
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

//Components
import Store from '../../container/Store/Store.jsx';
import ShopSideBar from '../../container/ShopSideBar/ShopSideBar'



export default class Shop extends Component {
  constructor(props){
    super(props)

  }

  render(){
    return(
      <div>
        <div className="container shop">
          <div className="row shop">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 ctrlPnl-container shop" style={{maxWidth:241}}>
              <ShopSideBar></ShopSideBar>
            </div>
            <div className="col-xs-9 col-sm-8 col-md-9 col-lg-9 store-container shop" style={{paddingLeft:10, marginTop:10, overflowY:'scroll', height:'841px'}}>
              <Store></Store>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
