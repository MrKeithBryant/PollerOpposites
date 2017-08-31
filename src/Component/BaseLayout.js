import React from 'react';
import Homepage from './Homepage';
import Rewards from './Rewards';
import AboutUs from './AboutUs';
import { Link } from 'react-router-dom';
import { Button, Navbar, NavbarBrand, NavItem, NavbarToggler, NavLink, Nav } from 'reactstrap';

export default class BaseLayout extends React.Component {
  render () {
    return (
      <div>
        <Navbar id='navcolor' color="faded" light toggleable>
          <NavbarBrand href="/">Homepage</NavbarBrand>
          <NavbarToggler right onClick={this.toggle} />
            <Nav className="ml-auto">
              <NavItem>
                <NavLink><Link to="/Rewards">Rewards</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to='/AboutUs'>About Us</Link></NavLink>
              </NavItem>
            </Nav>
        </Navbar>
        <div className='home'>
          problematic div
          {this.props.children}
        </div>
        <footer className='foot'>
          copyright 2017
        </footer>
      </div>
    )
  }
}
