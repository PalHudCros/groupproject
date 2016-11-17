import './About.scss'

import React from 'react'
import { connect } from 'react-redux'

import reactIcon from './../../images/react.png'
import reduxIcon from './../../images/redux.png'
import nodeIcon from './../../images/nodejs.png'
import expressIcon from './../../images/expressjs.png'
import mongoDBIcon from './../../images/MongoDB.png'
import sassIcon from './../../images/sass.png'
import googlemapsapiIcon from './../../images/googlemapsapi.jpeg'
import webpackIcon from './../../images/webpack.jpeg'
import socketIcon from './../../images/socket.png'
import driverView from './../../images/driverView.png'
import adminView from './../../images/adminView.png'
import shopView from  './../../images/shopView.png'

function About(props){
  return(
    <div className="container">
      <div className="col-sm-12">
      <div className="row">
          <div className="project-header">
            <div className="project-title">The Project</div>
          </div>
          <div className="project-body">
            <div className="project-parse">Fero Vino is the best solution to enabling wine enthusiast to explore new and familiary wines from the comfort of ones home.
            </div>
            <div className="row the-project">
              <div className="col-sm-12">
                <div className="col-sm-4">
                  <div className="shop-section">
                    <div><a href="https://www.ferovino.com">Shop</a></div>
                    <div className="image">
                      <img src={shopView} className="sub-images" alt=""/>
                    </div>
                    <ul>
                      <li>Search</li>
                      <li>Cart</li>
                      <li>Checkout</li>
                      <li>Watch for Delivery Progress</li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="admin-section">
                    <div><a href="https://admin.ferovino.com">Admin</a></div>
                    <div className="image">
                      <img src={adminView} className="sub-images" alt=""/>
                    </div>
                    <ul>
                      <li>Manage Inventory</li>
                      <li>Create Driver</li>
                      <li>Send Driver on Delivery</li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="driver-section">
                    <div><a href="https://driver.ferovino.com">Driver</a></div>
                    <div className="image">
                      <img src={driverView} className="sub-images" alt=""/>
                    </div>
                    <ul>
                      <li>Get Directions</li>
                      <li>View Relevant Orders</li>
                      <li>Update Delivery Status</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>


      <div className="row">
        <div className="col-sm-12">
          <div className="stack-header">
            A React/Redux ecommerce application broken up into three subdomains, each domain supporting shopping, delivery, and administration.
            The managed data flows across multiple components with Redux, handling asynconous actions with Redux Thunk middleware.
            Ferovino provides realtime updates on orders and deliveries through Socket.io. Leveraged MongoDB’s aggregation pipeline to track inventory status
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="team-header">
            <div>The Team</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
            <div className="team-body">
              <div className="teammate col-sm-4">
                <div className="avatar-circle ava-jj"></div>
                <div className="teammate-body">
                  Etsy plaid fashion axe hexagon venmo, literally paleo XOXO. Plaid pour-over kogi butcher. Taxidermy PBR&B keytar cray vape. Kale chips freegan put a bird on it vegan fap meggings fanny pack, wolf four dollar toast occupy kombucha glossier four loko. Pabst jean shorts cornhole tumblr small batch. Single-origin coffee everyday carry shabby chic keffiyeh. Actually salvia kinfolk, pabst venmo aesthetic unicorn church-key paleo.
                </div>
                <div className="teammate-name">JJ Crossman <br/> Full Stack Developer</div>
              </div>
              <div className="teammate col-sm-4">
                <div className="avatar-circle ava-brian"></div>
                  <div className="teammate-body">
                    Etsy plaid fashion axe hexagon venmo, literally paleo XOXO. Plaid pour-over kogi butcher. Taxidermy PBR&B keytar cray vape. Kale chips freegan put a bird on it vegan fap meggings fanny pack, wolf four dollar toast occupy kombucha glossier four loko. Pabst jean shorts cornhole tumblr small batch. Single-origin coffee everyday carry shabby chic keffiyeh. Actually salvia kinfolk, pabst venmo aesthetic unicorn church-key paleo.
                  </div>
                  <div className="teammate-name">Brian Hudson <br/> Full Stack Developer</div>
              </div>
              <div className="teammate col-sm-4">
                <div className="avatar-circle ava-joe"></div>
                  <div className="teammate-body">
                    Etsy plaid fashion axe hexagon venmo, literally paleo XOXO. Plaid pour-over kogi butcher. Taxidermy PBR&B keytar cray vape. Kale chips freegan put a bird on it vegan fap meggings fanny pack, wolf four dollar toast occupy kombucha glossier four loko. Pabst jean shorts cornhole tumblr small batch. Single-origin coffee everyday carry shabby chic keffiyeh. Actually salvia kinfolk, pabst venmo aesthetic unicorn church-key paleo.
                  </div>
                  <div className="teammate-name">Joseph Palacio <br/> Full Stack Developer</div>
              </div>
            </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="project-header">
            <div className="project-title">The Stack</div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <img src={reactIcon} alt="" className="stack-image"/>
            </div>
            <div className="col-sm-4">
              <img src={reduxIcon} alt="" className="stack-image"/>
            </div>
            <div className="col-sm-4">
              <img src={nodeIcon} alt="" className="stack-image"/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <img src={expressIcon} alt="" className="stack-image"/>
            </div>
            <div className="col-sm-4">
              <img src={mongoDBIcon} alt="" className="stack-image"/>
            </div>
            <div className="col-sm-4">
              <img src={sassIcon} alt="" className="stack-image"/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <img src={socketIcon} alt="" className="stack-image"/>
            </div>
            <div className="col-sm-4">
              <img src={webpackIcon} alt="" className="stack-image"/>
            </div>
            <div className="col-sm-4">
              <img src={googlemapsapiIcon} alt="" className="stack-image"/>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default connect(state => ({user:state.user}))(About)
