import React, { Component } from 'react'
import { Media } from 'reactstrap';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
import { addCalendar} from '../redux/actions/calendar'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'



class AdminCreateCalendar extends Component {

  state = {

  event_name: '',
  pickup_address: '',
  activities_end: '',
  pickup_time: '',
  date: ''
}
handleSubmit = (e) => {

  this.props.addCalendar(this.state)
}

  render(){
    console.log('state in AdminCreateCalandar', this.state)
    return(
      <div>

      <div style={{ fontSize:'20px', color:'#1476A8', marginTop: '1.5em',  border: 'solid #1598AF', borderWidth: 'thin', marginBottom: '2em',backgroundColor: 'rgba(0,151,201, 0.4)', marginLeft: '6em', width: '25em'}}>
  <Form style={{padding: '1em', marginRight: '2em'}} onSubmit={this.handleSubmit}>

  <FormGroup>
    <Label for="exampleRegister">NEW ACTIVITY</Label>
    <Input plaintext></Input>
  </FormGroup>
    <FormGroup row style={{marginTop: '-1em'}}>
      <Label for="exampleTitle" sm={2}></Label>
      <Col sm={10}>
        <Input type="text" name="event_name" value={this.state.event_name}
        onChange={(e)=> this.setState({event_name: e.target.value})} id="exampleTitle" placeholder="Activity Name" />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleDate" sm={2}></Label>
      <Col sm={10}>
        <Input type="date" name="date" value={this.state.date}
        onChange={(e)=> this.setState({date: e.target.value})} id="exampleDate" placeholder="Activity Date" />
      </Col>
    </FormGroup>


    <FormGroup row>
        <Label for="exampleText" sm={2}></Label>
        <Col sm={10}>
          <Input type="text" name="text" value={this.state.pickup_address} onChange={(e)=> this.setState({pickup_address: e.target.value})} id="exampleText" placeholder="Location" />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="exampleDate" sm={2}></Label>
        <Col sm={10}>
          <Input type="text" name="pickup_time" value={this.state.pickup_time}
          onChange={(e)=> this.setState({pickup_time: e.target.value})} id="exampleDate" placeholder="Start Time" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleDate" sm={2}></Label>
        <Col sm={10}>
          <Input type="text" name="activities_end" value={this.state.activities_end}
          onChange={(e)=> this.setState({activities_end: e.target.value})} id="exampleDate" placeholder="End Time" />
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
