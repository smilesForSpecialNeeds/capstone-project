import React, { Component } from 'react'
import ProviderSchedule2 from './ProviderSchedule2'

import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
import { connect } from 'react-redux'



class ProviderScheduleList2 extends Component {
  render(){
    console.log('user props', this.props.user)
    const listOfCalendars =  this.props.calendar.map(item =>
			item.assigned_child && item.event_name === this.props.user.name ? <ProviderSchedule2 key={item.id} calendarItem={item} /> : ''
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

export default connect(mapStateToProps)(ProviderScheduleList2)
