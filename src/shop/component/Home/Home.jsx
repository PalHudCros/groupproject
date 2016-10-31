import "./Home.scss";
import React from 'react';
import {Link} from "react-router";
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default function Home(props){
  return(
    <div className="container-fluid">
      <div className="container">

        <div className="row">
          <MuiThemeProvider>
            <Paper className="col-xs-12" style={style} zDepth={1} rounded={false}/>
          </MuiThemeProvider>
        </div>

        <MuiThemeProvider>
          <div className="row">
              <Paper className="featured-span col-xs-12 col-sm-12 col-md-4" style={style} zDepth={1} rounded={false}>first</Paper>
              <Paper className="featured-span col-xs-12 col-sm-12 col-md-4" style={style} zDepth={1} rounded={false}>second</Paper>
              <Paper className="featured-span col-xs-12 col-sm-12 col-md-4" style={style} zDepth={1} rounded={false}>third</Paper>
          </div>
        </MuiThemeProvider>
      </div>
      <footer style={{marginTop:20,backgroundColor:'#e8e8e8'}}>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </footer>
    </div>
  );
}

const style = {
  height: 100,
  marginTop:20,
  textAlign: 'center',
  display: 'inline-block',
};
