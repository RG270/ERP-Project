import React, {Component} from 'react';
import axios from 'axios';
import qs from 'qs';

export default class SignUp extends Component {
    constructor(){
        super();
       this.state = {
                 user: {
                     username: '',
                     password: '',
                     type: 'student'
                 }
       }
       this.onChangeUserName = this.onChangeUserName.bind(this);
       this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
       this.onChangeUserType = this.onChangeUserType.bind(this);
       this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeUserName(e){
        let user = this.state.user;
        user.username = e.target.value;
        this.setState({
            user: user
        });
    }
    onChangeUserType(e){
        let user = this.state.user;
        user.type = e.target.value;
        this.setState({
            user: user
        });
    }
    onChangeUserPassword(e){
        let user = this.state.user;
        user.password = e.target.value;
        this.setState({
            user: user
        }); 
    }
    onSubmit(e){
        e.preventDefault();
        let user = this.state.user;
        if (user.type ==='student'){
            axios.post('/signup/student', qs.stringify(user))
            .then(res=>alert(res.data))
            .catch(err=>alert("sorry we could not sign you up"));
        }
   }
    render(){
        return (
            <div className = "container" style = {{marginTop : "20px"}}>
                 <div ref = {this.formRef} className = "company-form"  >
                           
                           <form onSubmit = {this.onSubmit}>
                   <div className="form-group">
                       <label >User Name</label>
                       <input type="text" className="form-control"  placeholder="User Name" value={this.state.user.username} onChange = {this.onChangeUserName}/>
                   </div>
                   <div className = "form-group"> 
                   <label>
                       
                   Type:
                    <select onChange = {this.onChangeUserType} value = {this.state.user.type} className = "form-control">
                        <option value="student">Student</option>
                        <option value="company">Company</option>
                    </select>
                </label>
                </div> 
                   <div class="form-group">
                       <label>Type</label>
                       <input type="password" class="form-control"  placeholder="Password" value={this.state.user.password} onChange = {this.onChangeUserPassword}/>
                   </div>
                   <button type="submit" className="btn btn-primary" >Submit</button>
                   </form>
               </div>
   
            </div>
        )
    }

}