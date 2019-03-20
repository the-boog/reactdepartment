import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = () => (
  <Menu style={
    {backgroundColor: "navy"}
    }>
    <Menu.Item as={Link} to="/" style={{color: "white"}}>
      Departments
    </Menu.Item>
    <Menu.Item as={Link} to="/" style={{color: "white"}}>
      This Button will resolve all Bugs Immediately
    </Menu.Item>
  </Menu>
)
  
export default Navbar;