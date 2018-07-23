import React, { Component } from 'react'
import AdminActivities from './AdminActivities'
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
import AdminCreateActivity from './AdminCreateActivity'
import { connect } from 'react-redux'


class AdminActivitiesList extends Component {

  render(){
    const listOfFilteredActivities = this.props.calendar.filter(item => !item.assigned_child ? item : '')
    const listOfActivities =  listOfFilteredActivities.map(item =>
			<AdminActivities key={item._id} calendarItem={item} />
    )

    return(
      <div style={{ marginBottom: '3em', marginLeft: '2em'}}>

      <Row>
          <Col xs="6" className="child-list">
      {listOfActivities}

      </Col>
            <Col xs="6" >
            <AdminCreateActivity/>
            </Col>

        </Row>



      </div>
    )
  }
}
function mapStateToProps(state){
  return {child: state.childReducer,
    user: state.userReducer,
    calendar: state.calendarReducer
  }
}

export default connect(mapStateToProps)(AdminActivitiesList)
