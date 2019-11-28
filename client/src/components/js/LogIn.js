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
            axios.post('/login/student', qs.stringify(user))
            .then(res=>{if (res.data === 'error'){alert("Invalid username or password");}
                      else {
                          this.props.onLogIn(res.data + '(' + user.type + ')');
                      }
                    }
            )
            .catch(err=>alert("Invalid username or password"));
        } else if (user.type === 'company'){
            axios.post('/login/company', qs.stringify(user))
            .then(res=>{if (res.data === 'error'){alert("Invalid username or password here");}
                      else {
                          this.props.onLogIn(res.data + '(' + user.type + ')');
                      }
                    })
            .catch(err=>alert("Invalid username or password"));
        } else {
            
        }
   }
    render(){
        return (
            <div class='container mt-5 text-white'>
                <div class="container m-auto card p-5 bg-dark" style = {{width : "450px", borderRadius : "10%"}}>
                    <div ref = {this.formRef} className = "company-form"  >
                        
                        <form onSubmit = {this.onSubmit}>
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" class="form-control"  placeholder="User Name" value={this.state.user.username} onChange = {this.onChangeUserName}/>
                            </div>
                            <div className = "form-group"> 
                                <label>Type:</label>
                                <select onChange = {this.onChangeUserType} class="form-control" value = {this.state.user.type}>
                                    <option value="student">Student</option>
                                    <option value="company">Company</option>
                                </select>
                            </div> 
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control"  placeholder="Password" value={this.state.user.password} onChange = {this.onChangeUserPassword}/>
                            </div>
                            <div class='mt-4'>
                                <button type="submit" class=" form-control btn btn-success" >Log In</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        )
    }

}