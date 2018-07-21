import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import theImage from '../images/26457892_8rab.png'
import theImage2 from '../images/Smiles for Special Needs.jpg'

class TopNav extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render(){
    return(

      <Navbar style={{backgroundColor: '#1A97C6', height: '6em', fontSize: '1.2em'}} light expand="md">
          <NavbarBrand>
            <img className="logo" style={{}} src={theImage2}/>
          </NavbarBrand>


          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/"><strong>Home</strong></NavLink>
            </NavItem>
              <NavItem>
                <NavLink href="/about"><strong>About</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact"><strong>Contact</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/testimonial"><strong>Testimonials</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/services"><strong>Services</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/photos"><strong>Photo Gallery</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/calendar"><strong>Calendar</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/ourpeople"><strong>Our People</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/register"><strong>Registration</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login"><strong>Login</strong></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    )
  }
}
  export default TopNav
