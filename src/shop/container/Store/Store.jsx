import React, { Component } from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";

import {getWines} from "../../ducks/wineDuck";
// import WineList from "../../container/WineList/WineList";
import WineStoreCard from '../../component/WineStoreCard/WineStoreCard'

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
            <WineStoreCard key={wine.Id} wineId={wine.Id} bottleImage={wine.BottleImage} Name={wine.Name}></WineStoreCard>
          )
      });
      this.setState({wines: wines})
    }

    componentDidMount() {
        const list = ReactDOM.findDOMNode(this.refs.list)
        list.addEventListener('scroll', () => {console.log("Scrolling")});
    }

    componentWillUnmount() {
        const list = ReactDOM.findDOMNode(this.refs.list)
        list.removeEventListener('scroll', this._handleScroll);
    }

    componentWillReceiveProps(props) {
      const wines = props.wines.wines.map((wine, ind)=> {
          return (
            <WineStoreCard key={wine.Id} wineId={wine.Id} bottleImage={wine.BottleImage} Name={wine.Name}></WineStoreCard>
          )
      });
      this.setState({wines: wines})
    }

  _handleScroll(e) {
      console.log("Scrolling!")
  }

  render(){
    return (
      <div>
        <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}} ref="list" onScroll={() => {console.log("Scrolling")}}>
          {this.state.wines}
        </div>
      </div>
    )
  }
}
export default connect(state => ( { wines: state.wines } ) )( Store );
