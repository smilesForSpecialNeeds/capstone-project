import React, {Component} from 'react'
import {connect} from 'react-redux'
import BigCalendar from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

BigCalendar.momentLocalizer(moment);

class ClientCalendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  consolidateEventData = (arr) => arr.map(event => {
    return {'start': event.date, 'end': event.date, 'title': event.assigned_child}
  })

  render() {

    let listOfActivities = this.props.activities.map(activity => activity)

    let listOfCalendars = this.props.calendar.filter(item => item.parent_name === this.props.user.name)

    return (<div style={{
        height: '50em',
        padding: '3em'
      }}>

      <BigCalendar selectable="selectable" popup="popup" events={this.consolidateEventData(listOfCalendars)} defaultDate={new Date()} defaultView="month" onSelectEvent={this.toggle}/>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>Test</ModalHeader>
        <ModalBody>
          <h5>Scheduled Event: {this.props.calendar.event_name}</h5>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>

    </div>)
  }
}

function mapStateToProps(state) {
  return {calendar: state.calendarReducer, user: state.authReducer, activities: state.activitiesReducer}
}

export default connect(mapStateToProps)(ClientCalendar)
