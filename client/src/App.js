import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import HomePage from './components/js/HomePage';
import NavBar from './components/js/NavBar';
import Company from './components/js/Company';
import Student from './components/js/Student';
import SignUp from './components/js/SignUp';
import LogIn from './components/js/LogIn';
import StudentProfile from './components/js/StudentProfile';
import CompanyProfile from './components/js/CompanyProfile';
import './components/css/company.css';
import axios from 'axios';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      username: ''
    }
    this.onLogIn = this.onLogIn.bind(this);
    this.onLogOut = this.onLogOut.bind(this);
  }
  onLogIn(username) {
    this.setState({isLoggedIn: true, username: username});
  }
  onLogOut(){
    this.setState({isLoggedIn: false, username: ''});
  }
  componentDidMount(){
    axios.get('/loginStatus')
    .then(res=>{
      let data = res.data;
     
      this.setState({
        isLoggedIn : data.isLoggedIn,
        username: data.username
      });
    });
  }
  render(){
    return (
    <div className = "App">
      
      <Router>
        <NavBar isLoggedIn = {this.state.isLoggedIn} onLogOut = {this.onLogOut} username = {this.state.username} />
        <Route path = '/' exact component = {HomePage}/> 
        <Route exact path = '/company' component= {Company}></Route>
        <Route path = '/student/:id/show' render  = {(props)=><StudentProfile {...props} />}/>
        <Route path = '/company/:id/show' render  = {(props)=><CompanyProfile {...props} />}/>
        <Route exact path = '/student' component = {Student}></Route>
        <Route path = '/signup'  render = {(props)=> <SignUp {...props} onLogIn = {this.onLogIn} onLogOut = {this.onLogOut} />}></Route>
        <Route path = '/login'  render = {(props)=> <LogIn {...props} onLogIn = {this.onLogIn} onLogOut = {this.onLogOut} />}></Route>
        
        
      </Router>

      
     
    </div>
  );
}
}

export default App;
