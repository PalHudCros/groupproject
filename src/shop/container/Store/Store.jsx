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
          wine.labelImage = wine.Labels[0].Url;
          wine.bottleImage = wine.labelImage.substring(0, wine.labelImage.length-5) + "d.jpg";
          return (
            <WineStoreCard key={wine.Id} wineId={wine.Id} bottleImage={wine.bottleImage}></WineStoreCard>
          )
      });
      this.setState({wines: wines})
    }

  componentWillReceiveProps(props) {
      const wines = props.wines.wines.map((wine, ind)=> {
          wine.labelImage = wine.Labels[0].Url;
          wine.bottleImage = wine.labelImage.substring(0, wine.labelImage.length-5) + "d.jpg";
          return (
            <WineStoreCard key={wine.Id} wineId={wine.Id} bottleImage={wine.bottleImage}></WineStoreCard>
          )
      });
      this.setState({wines: wines})
  }

  render(){
    return (
      <div>
        {this.state.wines}
      </div>
    )
  }
}
export default connect(state => ( { wines: state.wines } ) )( Store );
