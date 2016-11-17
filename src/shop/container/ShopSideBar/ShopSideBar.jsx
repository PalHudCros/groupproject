import './ShopSideBar.scss'
//Modules
import React, { Component } from 'react';
//Material-UI
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {connect} from 'react-redux'
import {getCategoryCounts, getWines} from '../../ducks/wineDuck';

class ShopSideBar extends Component{
  constructor(props){
    super(props)
    this.state = { 
      value: 0
    }
  }
  componentWillMount() {
    this.props.dispatch(getCategoryCounts());
  }
  searchWines(varietal) {
    this.props.dispatch(getWines(varietal))
  }
  handleChange(event, index, value){
      this.setState({value});
  }

  render(){
    return(
      <div>
        <MuiThemeProvider>
          <Paper style={style} rounded={false} zDepth={1}>
            <div className="row select-container">
              <SelectField
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                style={{width:'100%'}}
              >
                <MenuItem value={0} primaryText="Sort" />
                <MenuItem value={1} primaryText="Popularity" />
                <MenuItem value={2} primaryText="Max Price" />
                <MenuItem value={3} primaryText="Min Price" />
              </SelectField>
            </div>
            <div className="row category-container">
                <h2 className="category-title">Main Styles</h2>
                <Divider></Divider>
                <table>
                  <tbody className="col-xs-12">
                  {this.props.wines.categories.map((category, index) => (
                    <tr key={category._id} className="col-xs-12">
                      <td className="col-xs-8">
                        <Checkbox onTouchTap={this.searchWines.bind(this, category)} label={category.varietal}/>
                      </td>
                      <td className="col-xs-4" className="category-count">({category.qty})</td>
                    </tr>
                  ))}                  
                  </tbody>
                </table>
            </div>
          </Paper>
        </MuiThemeProvider>
      </div>

    )
  }
}
export default connect(state => ({wines: state.wines}))(ShopSideBar)
const style = {
  height: '100%',
  marginTop:20,
  width:'100%',
  marginRigth:5,
  textAlign: 'center',
  display: 'inline-block',
};
const styles = {
  block: {
    maxWidth: 250,
  },
  RadioButton: {
    marginBottom: 16,
  },
};
