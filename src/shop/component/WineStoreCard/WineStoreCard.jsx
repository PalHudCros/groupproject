import React from "react"

import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function WineStoreCard(props){
  return(
    <div className="col-lg-3 col-md-3 col-sm-4 col-xs-5" style={{padding:"10px"}}>
      <MuiThemeProvider>
        <Paper >
          <img src={props.bottleImage} alt="" style={{width:'100%', heigth:"200px!important"}}/>
        </Paper>
      </MuiThemeProvider>
    </div>
  )
}
