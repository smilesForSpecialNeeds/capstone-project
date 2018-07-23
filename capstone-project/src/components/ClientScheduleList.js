import React, { Component } from 'react'
import ClientSchedule from './ClientSchedule'
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
import { connect } from 'react-redux'


class ClientScheduleList extends Component {

  render(){
      console.log('USER in Client Schedule List', this.props.user)

    const listOfCalendars =  this.props.calendar.map(item =>
      item.assigned_child && item.parent_name === this.props.user.name ?
			<ClientSchedule key={item._id} calendarItem={item} /> : ''
    )


    return(

      <div style={{ marginBottom: '3em', marginLeft: '2em'}}>

      <Row>
          <Col className="schedule-list" xs="6">
      {listOfCalendars}

      </Col>
            <Col xs="6" >

            </Col>

        </Row>



      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    calendar: state.calendarReducer,
    user: state.authReducer}
}

export default connect(mapStateToProps)(ClientScheduleList)
