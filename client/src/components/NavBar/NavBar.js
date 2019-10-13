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
           </Menu>
           
          
       )
    }
}