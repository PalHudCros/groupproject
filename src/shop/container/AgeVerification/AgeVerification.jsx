import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let nowPrep = new Date();
let dayPrep = nowPrep.getDate();
let monthPrep = nowPrep.getMonth();
let yearPrep = nowPrep.getFullYear();
nowPrep = new Date( yearPrep, monthPrep, dayPrep );
const now = nowPrep;

export default class AgeCheck extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      date: now
    };
  }

  handleChange( event, date ) {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let newDate = new Date( year, month, day );
    this.setState( { date: newDate } );
  }

  formatDate( date ) {
    let formattedDate = date.toUTCString();
    formattedDate = formattedDate.slice(0,17);
    console.log( formattedDate );
    return formattedDate;
  }

  verifyAge() {

  }

  render() {

    return (
      <div className="age-verification-wrapper shop">
        <div className="age-verification-box shop">
          <h1>Please enter your age</h1>
          <MuiThemeProvider>
            <DatePicker
              hintText="Click here!"
              value={ this.state.date }
              formatDate={ this.formatDate.bind(this) }
              maxDate={ now }
              autoOk={ true }
              onChange={ this.handleChange.bind(this) }
              onDismiss={ this.verifyAge.bind(this) }
              />
          </MuiThemeProvider>
          {
            now.getTime() - this.state.date.getTime() >= 662752800000
            ?
            <p>Age verified, welcome!</p>
            :
            <p>You're too young kid, go home!</p>
            /*<MuiThemeProvider>
              <CircularProgress>
              </CircularProgress>
            </MuiThemeProvider>*/
          }
        </div>
      </div>
    );
  }

}
