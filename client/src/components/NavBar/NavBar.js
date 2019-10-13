import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';

export default class NavBar  extends Component{
   state = {activeItem:"Companies"};
   
    handleClick = (e, {name})=> this.setState({activeItem: name});

    render(){
       
       return(

           
                <Menu tabular style={{paddingLeft: "250px"}}>
               <Menu.Item
               name = "Companies"
               active = {this.state.activeItem==="Companies"}
               onClick = {this.handleClick}>
                Companies
                </Menu.Item>
                   
              <Menu.Item
              name = "Students"
              active = {this.state.activeItem==="Students"}
              onClick = {this.handleClick}>
                  Students
              </Menu.Item>

              <Menu.Item
              name= "Events"
              active = {this.state.activeItem==="Events"}
              onClick = {this.handleClick}>
                 Events
              </Menu.Item>

              <Menu.Item
              name= "Student login"
              active = {this.state.activeItem==="Student login"}
              onClick = {this.handleClick}>
                 Student login
                 </Menu.Item>

              <Menu.Item
              name= "Company login"
              active = {this.state.activeItem==="Company login"}
              onClick = {this.handleClick}>
                 Company login
              </Menu.Item>

              <Menu.Item
              name= "Admin login"
              active = {this.state.activeItem==="Admin login"}
              onClick = {this.handleClick}>
                 Admin login
              </Menu.Item>
           </Menu>
           
          
       )
    }
}