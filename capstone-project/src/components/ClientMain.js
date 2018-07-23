import React, { Component } from 'react'
import ClientCalendar from './ClientCalendar'
import ClientScheduleList from './ClientScheduleList'
import ClientMessageList from './ClientMessageList'
import ClientCreateMessage from './ClientCreateMessage'
import ClientTestimonialList from './ClientTestimonialList'
import ClientAddTestimonial from './ClientAddTestimonial'
import { userLogout } from '../redux/actions/auth'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Nav, NavItem, NavLink, Row, Col } from 'reactstrap';



class ClientMain extends Component {

  state = {

		isToggleCalendar:true,
		isToggleMessages: false,
    isToggleCreateMessage: false,
    isToggleViewSchedule: false,
    isToggleViewTestimonial: false,
    isToggleNewTestimonail: false
	}
	handleSubmit = type => {
		let resultingState = {

			isToggleCalendar: false,
			isToggleMessages: false,
      isToggleCreateMessage: false,
      isToggleViewSchedule: false,
      isToggleViewTestimonial: false,
      isToggleNewTestimonail: false
		}

		if (type == 'new_message') {
			resultingState.isToggleCreateMessage = true
		} else if (type == 'view_calendar') {
			resultingState.isToggleCalendar = true
		} else if (type == 'view_messages') {
			resultingState.isToggleMessages = true
    } else if (type == 'view_schedule') {
      resultingState.isToggleViewSchedule = true
    } else if (type == 'new_testimonial') {
      resultingState.isToggleNewTestimonail = true
    } else if (type == 'view_testimonial') {
      resultingState.isToggleViewTestimonial = true
		} else if (type == 'logout'){
      this.props.userLogout()
      this.props.history.push('/login')
    }

		this.setState(resultingState)
	}
  render(){
    return(
      <Row>

      <Col className="SideNav" xs="3">
      <Nav vertical style={{height: '100vh'}}>
        <NavItem>

          <NavLink href="/client">Client Dashboard </NavLink>
        </NavItem>
        <NavItem>

          <NavLink onClick={() => {
            this.handleSubmit('logout')}}>Logout</NavLink>
        </NavItem>

        <NavItem>
          <NavLink onClick={() => {
            this.handleSubmit('view_messages')
          }}>Messages</NavLink>
        </NavItem>

        <NavItem>
          <NavLink onClick={() => {
            this.handleSubmit('view_testimonial')
          }}>Testimonials</NavLink>
        </NavItem>

        <NavItem>
          <NavLink onClick={() => {
            this.handleSubmit('view_schedule')
          }}>Schedule</NavLink>
        </NavItem>
        </Nav>

        </Col>


          <Col xs="8" style={{padding: 0}}>
					{this.state.isToggleCalendar ? <ClientCalendar/>  : null}
					{this.state.isToggleMessages ? <ClientMessageList/> : null}
					{this.state.isToggleCreateMessage ? <ClientCreateMessage/> : null}
          {this.state.isToggleViewSchedule ? <ClientScheduleList/> : null}
          {this.state.isToggleViewTestimonial ? <ClientTestimonialList/> : null}
          {this.state.isToggleNewTestimonail ? <ClientAddTestimonial/> : null}


          </Col>

      </Row>
    )
  }
}
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			userLogout

		},
		dispatch
	)

export default connect(
	null,
	mapDispatchToProps
)(ClientMain)
