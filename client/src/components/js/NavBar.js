import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class NavBar extends Component {
  constructor(props){
      super(props);

  }   


  render(){
      return(
          <nav className = "navbar navbar-dark bg-dark navbar-expand-lg">
              <Link to='/' className = "navbar-brand">ERP Platform</Link>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
              <div className = "collapse navbar-collapse" id = "myNavbar">
                  <ul className = "navbar-nav nav">
                      <li className = "navbar-item">
                          <Link to='/company' className = "nav-link">Companies</Link>
                      </li>
                      <li className = "navbar-item">
                          <Link to='/student' className="nav-link"> Students</Link>
                      </li>
                      <li className = "navbar-item">
                          <Link to='/admin' className = "nav-link">Admininstrators</Link>
                      </li>
                  </ul>
              </div>
          </nav>
      )
  }
}