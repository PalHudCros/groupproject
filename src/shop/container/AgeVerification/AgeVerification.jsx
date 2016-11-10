import React, {Component} from 'react';
import {connect} from "react-redux";
import DatePicker from 'material-ui/DatePicker';
import CircularProgress from 'material-ui/CircularProgress';
import {setUserToOfAge} from "../../ducks/userDuck";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let nowPrep = new Date();
let dayPrep = nowPrep.getDate();
let monthPrep = nowPrep.getMonth();
let yearPrep = nowPrep.getFullYear();
nowPrep = new Date( yearPrep, monthPrep, dayPrep );
const now = nowPrep;

// 662,688,000,000ms is 21 years, but needed 662,752,800,000ms to make modal work, added 18 hours.

export class AgeVerification extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      date: now
      , showEvaluation: false
    };
  }

  handleChange( event, date ) {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let newDate = new Date( year, month, day );
    this.setState( { date: newDate, showEvaluation: true } );
    setTimeout( () => {
      if ( now.getTime() - this.state.date.getTime() >= 662752800000 ) {
        setTimeout( () => {
          $(".shop-wrapper.shop").removeClass("blur");
          $(".age-verification-wrapper.shop").css("opacity", "0");
          setTimeout( () => {
            $(".age-verification-wrapper.shop").css("display", "none");
          }, 700 );
        }, 700);
        this.props.dispatch( setUserToOfAge());
      }
    }, 50);
  }

  handleShow() {
    if ( this.state.showEvaluation === true ) {
      this.setState( { showEvaluation: false } );
    }
  }

  formatDate( date ) {
    let formattedDate = date.toUTCString();
    formattedDate = formattedDate.slice(0,17);
    return formattedDate;
  }

  componentWillReceiveProps() {
  }


  render() {

    return (
      <div className="age-verification-wrapper shop">
        <div className="age-verification-box shop">
          <div className="age-verification-logo shop"><h1>LOGO</h1></div>
          <h1>Please provide your age</h1>
          <MuiThemeProvider>
            <DatePicker
              hintText="Click here!"
              value={ this.state.date }
              formatDate={ this.formatDate.bind(this) }
              maxDate={ now }
              onChange={ this.handleChange.bind(this) }
              onShow={ this.handleShow.bind(this) }
              />
          </MuiThemeProvider>
          {
            !this.state.showEvaluation
            ?
            ""
            :
            now.getTime() - this.state.date.getTime() >= 662752800000
            ?
            <h2>Age verified, welcome!</h2>
            :
            <h3>Sorry, you're too young.</h3>
          }
        </div>
      </div>
    );
  }

}

export default connect( state => {
  return { user: state.user }
} )(AgeVerification);
