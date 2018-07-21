import React, {Component} from 'react'
import ProviderSchedule from './ProviderSchedule'
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row
} from 'reactstrap';
import {connect} from 'react-redux'
import AdminCreateCalendar from './AdminCreateCalendar'

class ProviderScheduleList extends Component {
  render() {
    const listOfCalendars = this.props.calendar.map(
      item => item.assigned_child
      ? <ProviderSchedule key={item.id} calendarItem={item}/>
      : '')

    return (<div style={{
        marginBottom: '3em'
      }}>

      <Row>
        <Col className="schedule-list" xs="5">
          {listOfCalendars}
        </Col>
        <Col xs="6" style={{
          padding: '0'
        }}>
          <AdminCreateCalendar/>
        </Col>
      </Row>
    </div>)
  }
}
function mapStateToProps(state) {
  return {calendar: state.calendarReducer, user: state.userReducer}
}

export default connect(mapStateToProps)(ProviderScheduleList)
