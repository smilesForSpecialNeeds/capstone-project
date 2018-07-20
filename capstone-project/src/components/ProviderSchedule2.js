import React, { Component } from 'react'
import { Card, Button, CardTitle,FormGroup, Label, Input, FormText, Form, CardText, Row, Col, Modal, ModalBody } from 'reactstrap';
import Moment from 'react-moment'
import moment from 'moment'
import { updateCalendar} from '../redux/actions/calendar'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'



class ProviderSchedule2 extends Component {


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
    date: this.props.newDate
  }

  handleSubmitUpdate = (e) => {
    this.props.updateCalendar(this.state, this.props.calendarItem._id)
  }
  handleExport = e => {

  }

	handleSubmit = e => {
		e.preventDefault()
		this.setState({
      formSubmitted: true
		})
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
      <div>
      {this.state.formSubmitted ? (
      <div>
						<Modal
							style={{ marginTop: '200px', height: '275px', width: '500px' }}
							isOpen={this.state.formSubmitted}
							toggle={this.toggle}
							className={this.props.className}
						>
							<ModalBody
								style={{ fontSize: '15px', backgroundColor: '#E0E0E0' }}
								toggle={this.formSubmitted}
							>
              <Form style={{  fontSize:'20px', color:'#1476A8',padding: '1em', marginLeft: '1em', marginRight: '3em', marginTop: '3em', marginBottom: '1em'}} onSubmit={this.handleSubmitUpdate}>


                <FormGroup row >
                  <Label for="exampleTitle" sm={2}></Label>
                  <Col sm={10}>
                    <Input style={{height: '20em'}} type="textarea" name="note" value={this.state.notes}
                    onChange={(e)=> this.setState({notes: e.target.value})} id="exampleTitle" placeholder="Enter Note" />
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
        <Col >
          <Card body style={{ width: '20em', marginLeft: '5em', marginTop: '2em', backgroundColor: 'rgba(0,151,201, 0.4)',border: 'solid', borderWidth: 'thin'}}>
            <CardText> <strong>Schedule Date: </strong>  {newDate}</CardText>
            <CardText><strong>Provider Name: </strong>
           {this.props.calendarItem.event_name}</CardText>
            <CardText><strong>Client Name: </strong> {this.props.calendarItem.assigned_child}</CardText>
            <CardText><strong>Pickup Location: </strong> {this.props.calendarItem.pickup_address}</CardText>
            <CardText><strong>Pickup Time: </strong> {this.props.calendarItem.pickup_time}</CardText>
            <CardText><strong>Hours: </strong> {this.props.calendarItem.hours}</CardText>
            <CardText><strong>Hours Type: </strong> {this.props.calendarItem.hours_type}</CardText>
            <CardText><strong>Notes: </strong>{this.props.calendarItem.notes}</CardText>
            <Row>
            <Button style={{height: '2em', textAlign: 'center', width: '7em',lineHeight: '1em', marginLeft: '1em'}} onClick={this.handleSubmit}><strong>Add Note</strong></Button>
            <Button style={{height: '2em', textAlign: 'center', width: '7em',lineHeight: '1em', marginLeft: '1em'}} onClick={this.handleExport}><strong>Export</strong></Button>




          </Row>
          </Card>
        </Col>

      </Row>
      </div>
    )
  }
  }


  const mapDispatchToProps = dispatch => bindActionCreators({

    updateCalendar
  }, dispatch)

  export default connect(null, mapDispatchToProps)(ProviderSchedule2)
