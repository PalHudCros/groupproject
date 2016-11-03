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
            <div className="col-sm-4 col-xs-5 col-md-2 ctrlPnl-container shop">
              <ShopSideBar></ShopSideBar>
            </div>
            <div className="col-sm-8 col-xs-5 store-container shop" style={{width: '83%', paddingLeft:10, marginTop:10, overflowY:'scroll', height:'841px'}}>
              <Store></Store>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
