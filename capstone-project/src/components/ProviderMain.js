import React, { Component } from 'react'
import ProviderCalendar from './ProviderCalendar'
import ProviderMessageList from './ProviderMessageList'
import ProviderCreateMessage from './ProviderCreateMessage'
import ProviderScheduleList2 from './ProviderScheduleList2'
import ProviderChildList from './ProviderChildList'
import { userLogout } from '../redux/actions/auth'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Nav, NavItem, NavLink } from 'reactstrap';



class ProviderMain extends Component {

  state = {
		isToggle: false,
		isToggleCalendar: true,
		isToggleMessages: false,
    isToggleCreateMessage: false,
    isToggleViewSchedule: false,
    isToggleViewChild: false
	}
	handleSubmit = type => {
		let resultingState = {

			isToggleCalendar: false,
			isToggleMessages: false,
      isToggleCreateMessage: false,
      isToggleViewSchedule: false,
      isToggleViewChild: false
		}

		if (type == 'new_message') {
			resultingState.isToggleCreateMessage = true
		} else if (type == 'view_calendar') {
			resultingState.isToggleCalendar = true
		} else if (type == 'view_messages') {
			resultingState.isToggleMessages = true
    } else if (type == 'view_schedule') {
      resultingState.isToggleViewSchedule = true
    } else if (type == 'view_child') {
      resultingState.isToggleViewChild = true
		} else if (type == 'logout'){
      this.props.userLogout()
      this.props.history.push('/login')
    }

		this.setState(resultingState)
	}
  render(){
    return(
      <div >
      <div className="SideNav">
      <Nav vertical >
        <NavItem>

          <NavLink href="/provider"><strong>Provider Dashboard </strong></NavLink>
        </NavItem>
        <NavItem>

          <NavLink onClick={() => {
            this.handleSubmit('logout')}}><strong>Logout</strong></NavLink>
        </NavItem>

        <NavItem>
          <NavLink onClick={() => {
            this.handleSubmit('view_schedule')
          }}><strong>Schedule</strong></NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => {
            this.handleSubmit('view_child')
          }}><strong>Children</strong></NavLink>
        </NavItem>

        <NavItem>
          <NavLink
          onClick={() => {
            this.handleSubmit('view_messages')
          }}><strong>Messages</strong></NavLink>
        </NavItem>

        </Nav>

				</div>
				<div style={{paddingLeft: '27em'}}>
					{this.state.isToggleCalendar ? <ProviderCalendar/>  : null}
					{this.state.isToggleMessages ? <ProviderMessageList/> : null}
					{this.state.isToggleCreateMessage ? <ProviderCreateMessage/> : null}
          {this.state.isToggleViewSchedule ? <ProviderScheduleList2/> : null}
          {this.state.isToggleViewChild ? <ProviderChildList/> : null}
				</div>
      </div>
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
)(ProviderMain)
