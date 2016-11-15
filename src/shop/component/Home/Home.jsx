import React from 'react';
import {Link} from "react-router";
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default function Home(props){
  return(
      <div className="home-wrapper shop">

        <div className="row shop">
          <div className="col-md-12 shop">
            <MuiThemeProvider>
              <Paper
                style={styles.jumbtron}
                zDepth={1}
                rounded={false}
                >
                <h1>Welcome</h1>
                <img src="" alt=""/>
              </Paper>
            </MuiThemeProvider>
          </div>
        </div>

          <div className="row shop">
            <div className="featured-span col-xs-12 col-sm-12 col-md-4 shop">
              <MuiThemeProvider>
              <Paper
                style={styles.card}
                zDepth={1}
                rounded={false}
                >
                <h2>Reds</h2>
                </Paper>
              </MuiThemeProvider>

            </div>
            <div className="featured-span col-xs-12 col-sm-12 col-md-4 shop">
              <MuiThemeProvider>
              <Paper
                style={styles.card}
                zDepth={1}
                rounded={false}
                >
                <h2>Whites</h2>
                </Paper>
              </MuiThemeProvider>

            </div>
            <div className="featured-span col-xs-12 col-sm-12 col-md-4 shop">
              <MuiThemeProvider>
              <Paper
                style={styles.card}
                zDepth={1}
                rounded={false}
                >
                <h2>Champagne</h2>
                </Paper>
              </MuiThemeProvider>
            </div>
          </div>
      </div>
  );
}

const styles = {

  jumbotron: {
    height: "200px"
  }
  , cards: {
    height: "100px"
    , marginTop: "20px"
  }

};
