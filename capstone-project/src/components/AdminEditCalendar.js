import React, { Component } from 'react'
import { updateCalendar} from '../redux/actions/calendar'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Card, Button, CardTitle,FormGroup, Label, Input, FormText, Form, CardText, Row, Col, Modal, ModalBody } from 'reactstrap';



class AdminEditCalendar extends Component {
  state = {
    notes: this.props.calendarItem.notes,
    provider_name: this.props.calendarItem.provider_name,
    assigned_child: this.props.calendarItem.assigned_child,
    child_img: this.props.calendarItem.child_img,
    child_age: this.props.calendarItem.child_age,
    pickup_address: this.props.calendarItem.pickup_address,
    parent_name: this.props.calendarItem.parent_name,
    hours_type: this.props.calendarItem.hours_type,
    hours: this.props.calendarItem.hours,
    pickup_time: this.props.calendarItem.pickup_time,
    date: this.props.calendarItem.date
  }

  handleSubmitUpdate = (e) => {
    this.props.updateCalendar(this.state, this.props.calendarItem._id)
  }
  render(){
    console.log(this.props.calendar)
    return(
      <div>
      <div style={{marginRight:'50%', marginLeft:'1em',width: '400px', marginBottom:'50px'}}>
      <Form style={{  fontSize:'20px', color:'#1476A8'}} onSubmit={this.handleSubmitUpdate}>


        <FormGroup row >
          <Label for="exampleTitle" sm={2}></Label>
          <Col sm={10}>
            <Input type="textarea" name="note" value={this.state.notes}
            onChange={(e)=> this.setState({notes: e.target.value})} id="exampleTitle" placeholder="Enter Note" />
          </Col>
        </FormGroup>
        <FormGroup row >
          <Label for="exampleTitle" sm={2}></Label>
          <Col sm={10}>
            <Input type="text" name="provider_name" value={this.state.provider_name}
            onChange={(e)=> this.setState({provider_name: e.target.value})} id="exampleTitle" placeholder="Enter Note" />
          </Col>
        </FormGroup>
        <FormGroup row >
          <Label for="exampleTitle" sm={2}></Label>
          <Col sm={10}>
            <Input type="text" name="parent_name" value={this.state.parent_name}
            onChange={(e)=> this.setState({parent_name: e.target.value})} id="exampleTitle" placeholder="Parent Name" />
          </Col>
        </FormGroup>
        <FormGroup row >
          <Label for="exampleTitle" sm={2}></Label>
          <Col sm={10}>
            <Input type="text" name="note" value={this.state.assigned_child}
            onChange={(e)=> this.setState({assigned_child: e.target.value})} id="exampleTitle" placeholder="Child Name" />
          </Col>
        </FormGroup>
        <FormGroup row >
          <Label for="exampleTitle" sm={2}></Label>
          <Col sm={10}>
            <Input type="text" name="child_img" value={this.state.child_img}
            onChange={(e)=> this.setState({child_img: e.target.value})} id="exampleTitle" placeholder="Child Image" />
          </Col>
        </FormGroup>
        <FormGroup row >
          <Label for="exampleTitle" sm={2}></Label>
          <Col sm={10}>
            <Input type="text" name="note" value={this.state.child_age}
            onChange={(e)=> this.setState({child_age: e.target.value})} id="exampleTitle" placeholder="Child Age" />
          </Col>
        </FormGroup>
        <FormGroup row >
          <Label for="exampleTitle" sm={2}></Label>
          <Col sm={10}>
            <Input type="date" name="date" value={this.state.date}
            onChange={(e)=> this.setState({date: e.target.value})} id="exampleTitle" placeholder="Date" />
          </Col>
        </FormGroup>
        <FormGroup row >
          <Label for="exampleTitle" sm={2}></Label>
          <Col sm={10}>
            <Input type="text" name="note" value={this.state.pickup_address}
            onChange={(e)=> this.setState({pickup_address: e.target.value})} id="exampleTitle" placeholder="Pickup Address" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleDate" sm={2}></Label>
          <Col sm={10}>
            <Input type="text" name="hours" value={this.state.hours}
            onChange={(e)=> this.setState({hours: e.target.value})} id="exampleDate" placeholder="Hours" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleDate" sm={2}></Label>
          <Col sm={10}>
            <Input type="text" name="hours_type" value={this.state.hours_type}
            onChange={(e)=> this.setState({hours_type: e.target.value})} id="exampleDate" placeholder="Hours Type" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleDate" sm={2}></Label>
          <Col sm={10}>
            <Input type="text" name="pickup_time" value={this.state.pickup_time}
            onChange={(e)=> this.setState({pickup_time: e.target.value})} id="exampleDate" placeholder="Pickup Time" />
          </Col>
        </FormGroup>
        <Button  style={{marginLeft:'12em', marginBottom:'10px', marginRight:'430px', color:'#1476A8'}}>Submit</Button>
        </Form>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    calendar: state.calendarReducer

  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  updateCalendar

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AdminEditCalendar)
