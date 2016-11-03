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
                      <td className="col-xs-8"><Checkbox label="Red Wine"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><Checkbox label="White Wines"/></td>
                      <td className="col-xs-4" className="category-count">(23)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><Checkbox label="Rosé Wines"/></td>
                      <td className="col-xs-4" className="category-count">(23)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><Checkbox label="Sparkling Wines"/></td>
                      <td className="col-xs-4" className="category-count">(23)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><Checkbox label="Fortified Wines"/></td>
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
                      <td className="col-xs-8"><Checkbox label="Red Wine"/></td>
                      <td className="col-xs-4" className="category-count">(2353)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><Checkbox label="White Wines"/></td>
                      <td className="col-xs-4" className="category-count">(23)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><Checkbox label="Rosé Wines"/></td>
                      <td className="col-xs-4" className="category-count">(23)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><Checkbox label="Sparkling Wines"/></td>
                      <td className="col-xs-4" className="category-count">(23)</td>
                    </tr>
                    <tr className="col-xs-12">
                      <td className="col-xs-8"><Checkbox label="Fortified Wines"/></td>
                      <td className="col-xs-4" className="category-count">(23)</td>
                    </tr>
                  </tbody>
                </table>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

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
  checkbox: {
    marginBottom: 16,
  },
};
