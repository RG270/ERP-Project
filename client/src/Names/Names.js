import React, {Component} from "React";

class Names extends Component {
	
   constructor(props){
      super(props);
      this.state = {
       names: []
      }
   };
   
   componentDidMount(){

   fetch("/")
   .then(res=>res.json())
   .then((names)=> {this.setState({names: names});});
 
   };

   render(){


   	return (
      <ul>
         {this.state.names.map(name=>{
         	 <li>{name}</li>
         })
     }
     </ul>

     

   		);
   }

}


export default Names;