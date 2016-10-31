import "./Admin.scss";
import React from "react";
import Navbar from '../Navbar/Navbar.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import AdminContent from '../AdminContent/AdminContent.jsx';
import { Link } from "react-router";

export default class Admin extends React.Component {
  render() {
    return(
      <div>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <AdminContent></AdminContent>

      </div>
    );
  }
}
