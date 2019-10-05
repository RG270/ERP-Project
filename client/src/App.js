import React, {Component} from 'react';
import './App.css';
import Names from './components/Names/Names';
import SideBar from './components/SideBar/SideBar';
import NavBar from './components/NavBar/NavBar';
class App extends Component {
  render(){
    return (
    <div className = "App">
      
      <NavBar/>
      <SideBar/>
      <Names/>
    </div>
  );
}
}

export default App;
