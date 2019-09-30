import React, {Component} from "react";

class Names extends Component {
	
   constructor(props){
      super(props);
      this.state = {
       names: [],
      }
   }
   
   componentDidMount(){

   fetch("/")
   .then(res=>res.json())
   .then((names)=> {this.setState({names}, ()=>console.log('here'));});
 
   }

   render(){
   	return (
      <div>
      <ul>
        { this.state.names.map((name)=>
          <li>{name.name} </li>
        )}
     </ul>
      </div>);
   }

}


export default Names;