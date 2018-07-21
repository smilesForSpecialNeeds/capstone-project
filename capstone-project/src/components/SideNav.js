import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (<div className="SideNav">
      <p></p>
      <Nav vertical="vertical">
        <NavItem>
          <NavLink>Admin Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Logout</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Calendar</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Add Calendar Event</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Children</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Add Child</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Providers</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Add Provider</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Activities</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Add Activity</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Schedule</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Testimonials</NavLink>
        </NavItem>

      </Nav>

    </div>);
  }
}
