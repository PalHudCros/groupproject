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
      , showEvaluation: false
      , oldEnough: false
    };
  }

  handleChange( event, date ) {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let newDate = new Date( year, month, day );
    this.setState( { checkAge: !this.state.checkAge, date: newDate } );
  }

  formatDate( date ) {
    let formattedDate = date.toUTCString();
    formattedDate = formattedDate.slice(0,17);
    return formattedDate;
  }

  showEvaluation() {
    this.setState( { showEvaluation: true } );
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
              onChange={ this.handleChange.bind(this) }
              onShow={ this.showEvaluation.bind(this) }
              />
          </MuiThemeProvider>
          {
            !this.state.showEvaluation
            ?
            ""
            :
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
