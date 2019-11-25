import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import HomePage from './components/js/HomePage';
import NavBar from './components/js/NavBar';
import Company from './components/js/Company';
import Student from './components/js/Student';
import SignUp from './components/js/SignUp';
import './components/css/company.css';
class App extends Component {
  render(){
    return (
    <div className = "App">
      
      <Router>
      <NavBar/>
        <Route path = '/' exact component = {HomePage}/> 
        <Route path = '/company' component= {Company}></Route>
        <Route path = '/student' component = {Student}></Route>
        <Route path = '/signup' component = {SignUp}></Route>
       
        
      </Router>

      
     
    </div>
  );
}
}

export default App;
