import React, { Component } from 'react'
import { Card, Button, CardTitle,FormGroup, Label, Input, FormText, Form, CardText, Row, Col, Modal, ModalBody } from 'reactstrap';
import AdminEditCalendar from './AdminEditCalendar'
import { updateCalendar} from '../redux/actions/calendar'
import { deleteCalendar} from '../redux/actions/calendar'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import moment from 'moment'



class ProviderSchedule extends Component {


  state = {
    formSubmitted: false,
    notes: this.props.calendarItem.notes,
    event_name: this.props.calendarItem.event_name,
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

	handleSubmit = e => {
		e.preventDefault()
		this.setState({
      formSubmitted: true
		})
	}


  handleSubmitDelete = e =>{
  console.log('test' )
    e.preventDefault()
    const id = this.props.calendarItem._id
		this.props.deleteCalendar(id)
  }

	toggle() {
		this.setState({
			formSubmitted: !this.state.formSubmitted
		})
	}

  render(){
    		let newDate = moment(this.props.calendarItem.date).format('YYYY-MM-DD')
        console.log(this.props.calendarItem)
    return(
      <div >
      {this.state.formSubmitted ? (
      <div>
						<Modal
							style={{ marginTop: '100px', height: '70vh', width: '500px' }}
							isOpen={this.state.formSubmitted}
							toggle={this.toggle}
							className={this.props.className}
						>
							<ModalBody
								style={{ fontSize: '15px', backgroundColor: '#E0E0E0' }}
								toggle={this.formSubmitted}
							>
              <Form style={{  fontSize:'20px', color:'#1476A8', marginLeft: '1em', marginRight: '3em', marginTop: '3em', marginBottom: '1em'}} onSubmit={this.handleSubmitUpdate}>


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
                    <Input type="text" name="provider_name" value={this.state.event_name}
                    onChange={(e)=> this.setState({event_name: e.target.value})} id="exampleTitle" placeholder="Provider Name" />
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
                    onChange={(e)=> this.setState({assigned_child: e.target.value})} id="exampleTitle" placeholder="Client Name" />
                  </Col>
                </FormGroup>
                <FormGroup row >
                  <Label for="exampleTitle" sm={2}></Label>
                  <Col sm={10}>
                    <Input type="text" name="child_img" value={this.state.child_img}
                    onChange={(e)=> this.setState({child_img: e.target.value})} id="exampleTitle" placeholder="Client Image" />
                  </Col>
                </FormGroup>
                <FormGroup row >
                  <Label for="exampleTitle" sm={2}></Label>
                  <Col sm={10}>
                    <Input type="text" name="note" value={this.state.child_age}
                    onChange={(e)=> this.setState({child_age: e.target.value})} id="exampleTitle" placeholder="Client Age" />
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
                <Button
									style={{
										marginTop: '7em',
										margingRight: '7em',
										marginLeft: '2em'
									}}
									color="primary"
									onClick={() => {
										this.toggle()
									}}
								>
									Close
								</Button>{' '}

							</ModalBody>
						</Modal>
					</div>
        ): null}

      <Row>
        <Col>
      
          <Card body style={{ width: '20em', marginLeft: '5em', marginTop: '2em', backgroundColor: 'rgba(0,151,201, 0.4)',border: 'solid', borderWidth: 'thin'}}>
            <CardText> <strong>Assignment Date: </strong>  {newDate}</CardText>
            <CardText><strong>Provider Name: </strong>
           {this.props.calendarItem.event_name}</CardText>
            <CardText><strong>Client Name: </strong> {this.props.calendarItem.assigned_child}</CardText>
            <CardText><strong>Pickup Location: </strong> {this.props.calendarItem.pickup_address}</CardText>
            <CardText><strong>Pickup Time: </strong> {this.props.calendarItem.pickup_time}</CardText>
            <CardText><strong>Hours: </strong> {this.props.calendarItem.hours}</CardText>
            <CardText><strong>Hours Type: </strong> {this.props.calendarItem.hours_type}</CardText>
            <CardText><strong>Notes: </strong>{this.props.calendarItem.notes}</CardText>
            <Row>
            <Button style={{height: '2em', textAlign: 'center', width: '7em',lineHeight: '1em', marginLeft: '1em'}} onClick={this.handleSubmit}><strong>Update</strong></Button>
            <Button style={{height: '2em', textAlign: 'center', width: '7em',lineHeight: '1em', marginLeft: '1em'}} onClick={this.handleSubmitDelete}><strong>Delete</strong></Button>

          </Row>
          </Card>
        </Col>

      </Row>
      </div>
    )
  }
  }
  const mapDispatchToProps = dispatch => bindActionCreators({

    deleteCalendar,
    updateCalendar
  }, dispatch)

  export default connect(null, mapDispatchToProps)(ProviderSchedule)
