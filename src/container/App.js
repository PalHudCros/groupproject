import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import MyAwesomeReactComponent from "../component/MyAwesomeReactComponent";
import Nav from "./Nav"

export default function App(){
  return (
    <div>

    <MuiThemeProvider>
      <MyAwesomeReactComponent>
      </MyAwesomeReactComponent>
    </MuiThemeProvider>
    </div>
  )
}
