import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default class StudentProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
             profile: {}
        }
    }

    componentDidMount(){
        
        let id = this.props.match.params.id.toString();
       // alert("id is " + id);
        axios.get('/student/' + id + '/show')
        .then(res => {
           this.setState({
               profile: res.data[0]
           });
        
        })
        .catch(err=>alert("sorry we are unable to fetch the profile please try again later"));
    }

    render(){
        return (
           <div className = "container">
              Name: {this.state.profile.name}<br/>
              Roll Number: {this.state.profile.rollNo}<br/>
              CGPA : {this.state.profile.cgpa}<br/>   
              Email: {this.state.profile.email}<br/>
              Mobile Number: {this.state.profile.mobNo}<br/>

           </div>
        )
    }
}