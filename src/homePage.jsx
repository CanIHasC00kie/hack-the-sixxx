import React, { Component } from 'react';
import './button.css'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import * as FaIcons from "react-icons/fa";






class HomePage extends Component {

    
   
    render() {
        
        return (
<div>
<ProSidebar>
  <Menu iconShape="square">
    <MenuItem >Dashboard</MenuItem>
    
      <MenuItem>Profile</MenuItem>

      <MenuItem>Settings</MenuItem>

      <MenuItem>Food you're giving away</MenuItem>

      <MenuItem>Food you're looking for</MenuItem>
      
      <MenuItem>Home</MenuItem>
    
  </Menu>
</ProSidebar>   
      <div className="PageButton">
        
         
 

        <div className="d-grid gap-2">
            
        <button variant="primary" size="sm">
          I have food to give
        </button>
        <button variant="secondary" size="sm">
          I am looking for food

        </button>
      </div>
      </div>
      </div>);
    }

}

export default HomePage;