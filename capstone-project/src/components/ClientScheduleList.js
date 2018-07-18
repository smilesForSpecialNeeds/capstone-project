import React, { Component } from 'react'
import ClientSchedule from './ClientSchedule'
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
import { connect } from 'react-redux'


class ClientScheduleList extends Component {

  render(){
    console.log('props in admin child list',this.props)
    const listOfCalendars =  this.props.calendar.map(item =>
			<ClientSchedule key={item._id} calendarItem={item} />
    )

    return(
      <div style={{ marginBottom: '3em', marginLeft: '2em'}}>

      <Row>
          <Col xs="6">
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
  return {calendar: state.calendarReducer, user: state.userReducer}
}

export default connect(mapStateToProps)(ClientScheduleList)
