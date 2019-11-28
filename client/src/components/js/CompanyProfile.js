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
        axios.get('/company/' + id + '/show')
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
              Type: {this.state.profile.type}<br/>
              Email: {this.state.profile.email}<br/>
              Mobile Number: {this.state.profile.mobNo}<br/>
              Website: {this.state.profile.website}<br/>
              Address: {this.state.profile.address}<br/>
              Package: {this.state.profile.package}<br/>

           </div>
        )
    }
}