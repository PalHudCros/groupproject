import React from "react";
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default function Confirmation(props) {
    console.log(props);
    return (
        <div>
            {props.order}
        </div>
    )
}