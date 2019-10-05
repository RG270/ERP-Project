import './SideBar.css';
import React from 'react';
import { Menu } from 'semantic-ui-react';
function SideBar(){
    const  a = ["one", "two", "three", "four", "five"];
    return (
      <Menu vertical style={{marginLeft: "10px"}}>
           {
                a.map((item)=>(
                    <Menu.Item>{item}</Menu.Item>
                ))
           }
       
      </Menu>
      
    )
     


}

export default SideBar;