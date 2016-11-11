import React from "react";
import { Link } from "react-router";

import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default function WineStoreCard(props){
  return (
    <div className="col-lg-3 col-md-3 col-sm-4 col-xs-5" style={{padding:"10px"}}>
      <MuiThemeProvider>
        <Paper
          style={{display:'flex', justifyContent:"center"}}
          zDepth={1}
          >
          <img src={props.wine.bottleImage} alt={props.wine.Name} style={{height:200}}/>
          <Link to={`/shop/${props.wine.Id}`}>
            <h2>{props.wine.Name}</h2>
            <p>{props.wine.Retail.Price}</p>
          </Link>
        </Paper>
      </MuiThemeProvider>
    </div>
  );
}
