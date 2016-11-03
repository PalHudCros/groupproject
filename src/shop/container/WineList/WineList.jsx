import WineStoreCard from "./"
//Modules
import React from "react";
import {connect} from "react-redux";
// Components/Containers
import WineStoreCard from "../../component/WineStoreCard/WineStoreCard"
//Async Action
import {getWines} from "../../ducks/wineDuck";

class WineList extends React.Component {
    constructor(props) {
        super();
        this.state = {
            wines: []
        }
    }

    componentWillMount() {
        this.props.dispatch(getWines())
    }
    componentWillReceiveProps(props) {
        const wines = props.wines.wines.map(wine=> {
            wine.labelImage = wine.Labels[0].Url;
            wine.bottleImage = wine.labelImage.substring(0, wine.labelImage.length-5) + "d.jpg";
            return (
                    <div key={wine.Id}>
                        <h2>{wine.Name}</h2>
                        <h3>{wine.Varietal.Name} {wine.Vintage}</h3>
                        <img src={wine.labelImage} alt=""/>
                        <img src={wine.bottleImage} alt=""/>
                        <h4>Vineyard: {wine.Vineyard.Name}</h4>
                        <img src={wine.Vineyard.ImageUrl} alt=""/>
                    </div>
            )
        });
        this.setState({wines: wines})
    }

    render() {

        return (
            <div>
                {this.state.wines}
            </div>
        )
    }
}

export default connect(state => ( { wines: state.wines } ) )( WineList );
