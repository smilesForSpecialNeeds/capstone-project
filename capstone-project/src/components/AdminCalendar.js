import React, { Component } from 'react'
import { connect } from 'react-redux'
import BigCalendar from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



BigCalendar.momentLocalizer(moment);


class AdminCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      selectedEvent: {}
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(...args) {
    console.log('calendar', args[0])
    let theEvent = this.props.calendar.filter(event => event._id == args[0].id)[0]
    console.log('the event', theEvent)
    this.setState({
      modal: !this.state.modal,
      selectedEvent: theEvent
    });
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
    let listOfCalendars = this.props.calendar.map(item => item)
    console.log(listOfCalendars)
    return(

      <div style={{height: '40em', marginLeft: '5em', marginTop: '2em'}}>

      <BigCalendar
        selectable
        popup events={this.consolidateEventData(listOfCalendars)}
        defaultDate={new Date()}
        defaultView="month"
        onSelectEvent={this.toggle}
   />
   <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
     <ModalHeader toggle={this.toggle}>Test</ModalHeader>
     <ModalBody>
      <h5>Scheduled Event: {this.state.selectedEvent.assigned_child}</h5>
     </ModalBody>
     <ModalFooter>
       <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
       <Button color="secondary" onClick={this.toggle}>Cancel</Button>
     </ModalFooter>
   </Modal>
      </div>

    )
  }
}

function mapStateToProps(state){
  return {calendar: state.calendarReducer}
}

export default connect(mapStateToProps)(AdminCalendar)
