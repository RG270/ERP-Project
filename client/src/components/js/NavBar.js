import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
export default class NavBar extends Component {
  constructor(props){
      super(props);
      this.onLogOut = this.onLogOut.bind(this);
  }   
  onLogOut(){
      axios.post('/logout')
      .then(res=>{
          if (res.data === 'error'){
            alert('error logging you out');
          } else {
              alert('you have been successfully logged out');
              this.props.onLogOut();
          }
          
      });
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
                  <ul className = "navbar-nav mr-auto">
                      <li className = "navbar-item">
                          <Link to='/company' className = "nav-link">Companies</Link>
                      </li>
                      <li className = "navbar-item">
                          <Link to='/student' className="nav-link"> Students</Link>
                      </li>
                      { this.props.isLoggedIn?
                      (<li className = "navbar-item">
                          <a className = "nav-link">{this.props.username }</a>
                      </li>):
                      (
                        <li className = "navbar-item">
                            <Link to  = '/signup' className = "nav-link">Sign Up</Link>
                        </li>
                      )
                       }
                      { !this.props.isLoggedIn ?
                      (<li className = "navbar-item">
                          <Link to = '/login' className = "nav-link">Log in</Link>
                      </li>) : 
                      (
                        <li className = "navbar-item">
                        <a href = "#" className = "nav-link" onClick  = {this.onLogOut}>Log Out</a>
                         </li>
                      )
                        }
                     
                      
                  </ul>
              </div>
          </nav>
      )
  }
}