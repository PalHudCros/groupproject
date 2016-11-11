import React, { Component } from "react";
import {connect} from "react-redux";

import {getWines} from "../../ducks/wineDuck";
// import WineList from "../../container/WineList/WineList";
import WineStoreCard from '../../Component/WineStoreCard/WineStoreCard'

class Store extends Component{
  constructor(props){
    super(props)
    this.state = {
      wines: []
    }
  }

  componentWillMount() {
      const wines = this.props.wines.wines.map((wine, ind)=> {
          return (
            <WineStoreCard key={wine.Id} wineId={wine.Id} bottleImage={wine.BottleImage}></WineStoreCard>
          )
      });
      this.setState({wines: wines})
    }

  componentWillReceiveProps(props) {
      const wines = props.wines.wines.map((wine, ind)=> {
          return (
            <WineStoreCard key={wine.Id} wineId={wine.Id} bottleImage={wine.BottleImage}></WineStoreCard>
          )
      });
      this.setState({wines: wines})
  }

  render(){
    return (
      <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
        {this.state.wines}
      </div>
    )
  }
}
export default connect(state => ( { wines: state.wines } ) )( Store );
