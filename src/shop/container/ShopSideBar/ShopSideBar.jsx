import './ShopSideBar.scss'
//Modules
import React, { Component } from 'react';
//Material-UI
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import RadioButton from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class ShopSideBar extends Component{
  constructor(props){
    super(props)
    this.state = {
      value: 0
    }
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
                <MenuItem value={1} primaryText="Never" />
                <MenuItem value={2} primaryText="Every Night" />
                <MenuItem value={3} primaryText="Weeknights" />
                <MenuItem value={4} primaryText="Weekends" />
                <MenuItem value={5} primaryText="Weekly" />
              </SelectField>
            </div>
            <div className="row category-container">
                <h2 className="category-title">Main Styles</h2>
                <Divider></Divider>
                <table>
                  <tbody className="col-xs-12">
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Barbera"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="White Wines"/></td>
                      <td className="col-xs-4" className="category-count">(23)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Rosé Wines"/></td>
                      <td className="col-xs-4" className="category-count">(23)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Sparkling Wines"/></td>
                      <td className="col-xs-4" className="category-count">(23)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Fortified Wines"/></td>
                      <td className="col-xs-4" className="category-count">(23)</td>
                    </tr>
                  </tbody>
                </table>
            </div>
            <div className="row category-container">
                <h2 className="category-title">Varietal</h2>
                <Divider></Divider>
                <table>
                  <tbody className="col-xs-12">
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Red Wine"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="White Wines"/></td>
                      <td className="col-xs-4" className="category-count">(23)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Rosé Wines"/></td>
                      <td className="col-xs-4" className="category-count">(23)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Sparkling Wines"/></td>
                      <td className="col-xs-4" className="category-count">(23)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Dessert, Sherry & Port"/></td>
                      <td className="col-xs-4" className="category-count">(23)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Saké"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Cabernet Sauvignon"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Chardonnay"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Sauvignon Blanc"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Pinot Noir"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Other Red Blends"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Sangiovese"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Syrah/Shiraz"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Rhône Blends"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Albarino"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Cabernet Franc"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Carmenere"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Chenin Blanc"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Dolcetto"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Gamay"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Gewurztraminer"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Grenche"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Gruner Veltliner"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Junmai"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Junmai-Daiginjo"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Junmai-Ginjo"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Madeira"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Malbec"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Merlot"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><RadioButton label="Albarino"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </Paper>
        </MuiThemeProvider>
      </div>

    )
  }
}

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
