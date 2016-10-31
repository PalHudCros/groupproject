import "./Admin.scss";
import React from "react";
import Navbar from '../Navbar/Navbar.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import AdminContent from '../AdminContent/AdminContent.jsx';
import Footer from '../Footer/Footer.jsx';
import { Link } from "react-router";

export default class Admin extends React.Component {
  render() {
    return(
      <div>

        <div className="container-fluid admin">

          <Navbar></Navbar>

          <div className="row sidebar-admincontent-wrapper admin">
            <Sidebar></Sidebar>
            <AdminContent></AdminContent>
          </div>

          <Footer></Footer>

        </div>


      </div>
    );
  }
}
