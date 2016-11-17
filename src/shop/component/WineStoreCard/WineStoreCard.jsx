import React from "react";
import { Link } from "react-router";

import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default function WineStoreCard(props){
  console.log(props);
  return(
    <div className="col-lg-3 col-md-3 col-sm-4 col-xs-5" style={{padding:"10px"}}>
      <MuiThemeProvider>
        <Paper style={{display:'flex', justifyContent:"center"}}>
          <img src={props.bottleImage} alt="" style={{height:200}}/>
          <Link to={`/${props.wineId}`}>{props.Name}</Link>
        </Paper>
      </MuiThemeProvider>
    </div>
  )
}
