import React, {Component} from "react";
import './Names.css';
class Names extends Component{

 constructor(props){
    super(props);
    this.state = {
       names: [],
    }
 }
  componentDidMount(){
     fetch("http://localhost:3001/")
     .then(res=>res.json())
     .then(names => this.setState({names},));
  }
   render(){
      return (
         <div className = 'names'>
         <ul >
           { this.state.names.map((name)=>
             <li>{name.name} </li>
           )}
        </ul>
         </div>);
      }
   
   }



export default Names;