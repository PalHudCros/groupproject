import React, { Component } from "react";
import { Link } from 'react-router';
import { connect } from 'react-redux'

class SingleWine extends Component{
  constructor(props){
    super(props)
    this.state = {
      currentWine: {},
      wines: {}
    }
    console.log(props)
  }
  componentWillMount(){
    const wines = this.props.wines.wines
    console.log(wines)//wine is still fetching...
    this.setState({wines:wines})
    const currentWine = this.props.wines.wines.filter(ele => ele.Id == this.props.params.wineId)[0];
    console.log(currentWine)//undefined when reload
    this.setState({currentWine: currentWine})

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
          <div>
              <h2>
                    Wine Id: {this.state.currentWine.Id}
              </h2>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({wines: state.wines}))(SingleWine)
