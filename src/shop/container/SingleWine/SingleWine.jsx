import './SingleWine.scss'

import React, { Component } from "react";
import { Link } from 'react-router';
import { connect } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class SingleWine extends Component{
  constructor(props){
    super(props)
    this.state = {
      currentWine: {},
      wines: {},
      iframe:{}
    }
  }

  componentWillMount(){
    if (this.props.wines.wines.length > 0) {
        const wines = this.props.wines.wines
        this.setState({wines:wines})
        const currentWine = this.props.wines.wines.filter(ele => ele.Id == this.props.params.wineId)[0];
        this.setState({currentWine: currentWine})
    }
  }

  componentWillReceiveProps(props) {
    this.setState({wines: props.wines.wines})
    const currentWine = props.wines.wines.filter(ele => ele.Id == props.params.wineId)[0];
    this.setState({currentWine: currentWine})



  }

  render(){
    return (
      <div className="container">
        <h1>{this.state.currentWine.Id}</h1>
        <div className="row">
          <MuiThemeProvider>
          <Card className='clearfix'>
            <CardHeader
              title={this.state.currentWine.Name}
            />

          <CardMedia>
            <div className="single-bottle-img">
              <img src={this.state.currentWine.BottleImage} style={{height:200}} />
            </div>
          </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
              <CardActions>
                <FlatButton label="Action2" />
              </CardActions>
          </Card>
          </MuiThemeProvider>
        </div>
      </div>
    )
  }
}

export default connect(state => ({wines: state.wines}))(SingleWine)
