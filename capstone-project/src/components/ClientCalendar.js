import React, { Component } from 'react'
import { connect } from 'react-redux'
import BigCalendar from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



BigCalendar.momentLocalizer(moment);


class ClientCalendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      selectedEvent: {}
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle = (...args) => {
    console.log('calendar', args[0])
    let theEvent = this.props.calendar.filter(event => event._id == args[0].id)[0]
    console.log('the event', theEvent)
    this.setState({
      modal: !this.state.modal,
      selectedEvent: theEvent
    });
  }
toggleClose = () => {
  this.setState({
    modal: !this.state.modal
  })
}





  consolidateEventData = (arr) => arr.map(event => {
    return   {
      'start': event.date,
      'end': event.date,
      'title': event.event_name,
      'id': event._id

    }
  })

  render(){

    let listOfActivities = this.props.activities.map(activity => activity)

    let listOfCalendars = this.props.calendar.filter(item => item.parent_name === this.props.user.name || !item.assigned_child)



    return(

      <div style={{height: '50em', padding: '3em'}}>

      <BigCalendar
        selectable
        popup events={this.consolidateEventData(listOfCalendars)}
        defaultDate={new Date()}
        defaultView="month"
        onSelectEvent={this.toggle}

   />
   <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
     <ModalHeader toggle={this.toggleClose}><strong>Schedule Event</strong></ModalHeader>
     <ModalBody>

      <h6><strong>Provider Name:</strong> {this.state.selectedEvent.event_name}</h6>
      <h6><strong>Pickup Time:</strong> {this.state.selectedEvent.pickup_time}</h6>
      <h6><strong>End Time:</strong> {this.state.selectedEvent.activities_end}</h6>
      <h6><strong>Pickup Address:</strong> {this.state.selectedEvent.pickup_address}</h6>
      <h6><strong>Dropoff Address:</strong> {this.state.selectedEvent.dropoff_address}</h6>
      <h6><strong>Assigned Client:</strong> {this.state.selectedEvent.assigned_child}</h6>
      <h6><strong>Hours:</strong> {this.state.selectedEvent.hours}</h6>
      <h6><strong>Hours Type:</strong> {this.state.selectedEvent.hours_type}</h6>
     </ModalBody>
   </Modal>

      </div>

    )
  }
}

function mapStateToProps(state){
  return {
    calendar: state.calendarReducer,
    user: state.authReducer,
    activities: state.activitiesReducer
  }
}

export default connect(mapStateToProps)(ClientCalendar)
