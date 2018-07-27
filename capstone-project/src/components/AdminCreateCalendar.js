import React, { Component } from 'react'
import { Media } from 'reactstrap';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
import { addCalendar} from '../redux/actions/calendar'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Moment from 'moment';



class AdminCreateCalendar extends Component {

  state = {

  event_name: '',
  assigned_child: '',
  child_age: '',
  pickup_address: '',
  dropoff_address: '',
  activities_end: '',
  parent_name: '',
  hours_type: '',
  hours: '',
  ratio: '',
  pickup_time: '',
  date: '',
  notes: ''

}
handleSubmit = (e) => {

  this.props.addCalendar(this.state)
}

  render(){
    console.log('state in AdminCreateCalandar', this.state)

      let newDate = <Moment>{this.state.date}.add(1, 'd')</Moment>
    return(
      <div>

      <div style={{ fontSize:'20px', color:'#1476A8', width: '25em', marginTop: '2em',  border: 'solid #1598AF', borderWidth: 'thin', marginBottom: '2em',backgroundColor: 'rgba(0,151,201, 0.4)', marginRight: '1em', marginLeft: '2em'}}>
  <Form style={{padding: '1em', marginRight: '2em'}} onSubmit={this.handleSubmit}>

  <FormGroup>
    <Label for="exampleRegister">NEW SCHEDULE</Label>
    <Input plaintext></Input>
  </FormGroup>
    <FormGroup row style={{marginTop: '-1em'}}>
      <Label for="exampleTitle" sm={2}></Label>
      <Col sm={10}>
        <Input type="text" name="event_name" value={this.state.event_name}
        onChange={(e)=> this.setState({event_name: e.target.value})} id="exampleTitle" placeholder="Provider Name" />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleDate" sm={2}></Label>
      <Col sm={10}>
        <Input type="date" name="date" value={this.state.date}
        onChange={(e)=> this.setState({date: e.target.value})} id="exampleDate" placeholder="Assignment Date" />
      </Col>
    </FormGroup>


    <FormGroup row>
        <Label for="exampleText" sm={2}></Label>
        <Col sm={10}>
          <Input type="text" name="text" value={this.state.assigned_child} onChange={(e)=> this.setState({assigned_child: e.target.value})} id="exampleText" placeholder="Client Name" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleDate" sm={2}></Label>
        <Col sm={10}>
          <Input type="text" name="age" value={this.state.child_age}
          onChange={(e)=> this.setState({child_age: e.target.value})} id="exampleDate" placeholder="Client Age" />
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
          <Input type="text" name="ratio" value={this.state.ratio}
          onChange={(e)=> this.setState({ratio: e.target.value})} id="exampleDate" placeholder="Ratio" />
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
          <Input type="text" name="parent_name" value={this.state.parent_name}
          onChange={(e)=> this.setState({parent_name: e.target.value})} id="exampleDate" placeholder="Parent Name" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleDate" sm={2}></Label>
        <Col sm={10}>
          <Input type="text" name="pickup_address" value={this.state.pickup_address}
          onChange={(e)=> this.setState({pickup_address: e.target.value})} id="exampleDate" placeholder="Pickup Address" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleDate" sm={2}></Label>
        <Col sm={10}>
          <Input type="text" name="dropoff_address" value={this.state.dropoff_address}
          onChange={(e)=> this.setState({dropoff_address: e.target.value})} id="exampleDate" placeholder="Dropoff Address" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleDate" sm={2}></Label>
        <Col sm={10}>
          <Input type="text" name="pickup_time" value={this.state.pickup_time}
          onChange={(e)=> this.setState({pickup_time: e.target.value})} id="exampleDate" placeholder="Pickup Time" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleDate" sm={2}></Label>
        <Col sm={10}>
          <Input type="text" name="dropoff_time" value={this.state.activities_end}
          onChange={(e)=> this.setState({activities_end: e.target.value})} id="exampleDate" placeholder="Dropoff Time" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleDate" sm={2}></Label>
        <Col sm={10}>
          <Input type="textarea" name="notes" value={this.state.notes}
          onChange={(e)=> this.setState({notes: e.target.value})} id="exampleDate" placeholder="Notes" />
        </Col>
      </FormGroup>
      <Button  style={{marginLeft:'5em', marginBottom:'10px', marginRight:'430px', color:'#1476A8'}} >Submit</Button>
      </Form>
      </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  addCalendar
}, dispatch)

export default connect(null, mapDispatchToProps)(AdminCreateCalendar)
