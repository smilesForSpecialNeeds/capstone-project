import React, {Component} from 'react'
import AdminCalendar from './AdminCalendar'
import AdminMessageList from './AdminMessageList'
import AdminCreateMessage from './ProviderCreateMessage'
import AdminEditCalendar from './AdminEditCalendar'
import AdminChildList from './AdminChildList'
import AdminCreateCalendar from './AdminCreateCalendar'
import AdminCreateChild from './AdminCreateChild'
import AdminCreateProvider from './AdminCreateProvider'
import ProviderScheduleList from './ProviderScheduleList'
import AdminProviderList from './AdminProviderList'
import AdminTestimonialList from './AdminTestimonialList'
import AdminActivitiesList from './AdminActivitiesList'
import {userLogout} from '../redux/actions/auth'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Nav, NavItem, NavLink, Row, Col} from 'reactstrap';

class AdminMain extends Component {

  state = {

    isToggleCalendar: true,
    isToggleMessages: false,
    isToggleCreateMessage: false,
    isToggleViewSchedule: false,
    isToggleViewChild: false,
    isToggleViewProvider: false,
    isToggleNewChild: false,
    isToggleNewProvider: false,
    isToggleNewCalendar: false,
    isToggleNewActivity: false,
    isToggleViewTestimonial: false,
    isToggleViewActivity: false

  }
  handleSubmit = type => {
    let resultingState = {

      isToggleCalendar: false,
      isToggleMessages: false,
      isToggleCreateMessage: false,
      isToggleViewSchedule: false,
      isToggleViewChild: false,
      isToggleViewProvider: false,
      isToggleNewChild: false,
      isToggleNewProvider: false,
      isToggleNewCalendar: false,
      isToggleNewActivity: false,
      isToggleViewTestimonial: false,
      isToggleViewActivity: false

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
    } else if (type == 'view_provider') {
      resultingState.isToggleViewProvider = true
    } else if (type == 'new_child') {
      resultingState.isToggleNewChild = true
    } else if (type == 'new_provider') {
      resultingState.isToggleNewProvider = true
    } else if (type == 'new_calendar') {
      resultingState.isToggleNewCalendar = true
    } else if (type == 'view_testimonial') {
      resultingState.isToggleViewTestimonial = true
    } else if (type == 'view_activity') {
      resultingState.isToggleViewActivity = true
    } else if (type == 'logout') {
      this.props.userLogout()
      this.props.history.push('/login')
    }

    this.setState(resultingState)
  }
  render() {
    return (<Row>

      <Col className="SideNav" xs="3">

        <Nav vertical="vertical" style={{
            height: '100vh'
          }}>
          <NavItem>
            <NavLink href="/admin">
              <strong>Admin Dashboard</strong>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => {
                this.handleSubmit('logout')
              }}>
              <strong>Logout</strong>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink onClick={() => {
                this.handleSubmit('view_child')
              }}>
              <strong>Children</strong>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink onClick={() => {
                this.handleSubmit('view_provider')
              }}>
              <strong>Providers</strong>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink onClick={() => {
                this.handleSubmit('view_activity')
              }}>
              <strong>Activities</strong>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink onClick={() => {
                this.handleSubmit('view_messages')
              }}>
              <strong>Messages</strong>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink onClick={() => {
                this.handleSubmit('view_schedule')
              }}>
              <strong>Schedule</strong>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => {
                this.handleSubmit('view_testimonial')
              }}>
              <strong>Testimonials</strong>
            </NavLink>
          </NavItem>

        </Nav>
      </Col>

      <Col xs="8" style={{
          padding: 0
        }}>
        {
          this.state.isToggleCalendar
            ? <AdminCalendar/>
            : null
        }
        {
          this.state.isToggleMessages
            ? <AdminMessageList/>
            : null
        }
        {
          this.state.isToggleCreateMessage
            ? <AdminCreateMessage/>
            : null
        }
        {
          this.state.isToggleViewSchedule
            ? <ProviderScheduleList/>
            : null
        }
        {
          this.state.isToggleViewChild
            ? <AdminChildList/>
            : null
        }
        {
          this.state.isToggleViewProvider
            ? <AdminProviderList/>
            : null
        }
        {
          this.state.isToggleViewTestimonial
            ? <AdminTestimonialList/>
            : null
        }
        {
          this.state.isToggleViewActivity
            ? <AdminActivitiesList/>
            : null
        }
        {
          this.state.isToggleNewChild
            ? <AdminCreateChild/>
            : null
        }
        {
          this.state.isToggleNewCalendar
            ? <AdminCreateCalendar/>
            : null
        }
        {
          this.state.isToggleNewProvider
            ? <AdminCreateProvider/>
            : null
        }

      </Col>

    </Row>)
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  userLogout

}, dispatch)

export default connect(null, mapDispatchToProps)(AdminMain)
