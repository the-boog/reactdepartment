import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = () => (
  <Menu>
    <Menu.Item as={Link} to="/">
      Departments
    </Menu.Item>
    <Menu.Item as={Link} to="/">
      New Department
    </Menu.Item>
  </Menu>
  
)

export default Navbar;