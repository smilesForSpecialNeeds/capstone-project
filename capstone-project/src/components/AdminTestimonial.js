import React, { Component } from 'react'
import { Card, Button, CardTitle,FormGroup, Label, Input, FormText, Form, CardText, Row, Col, Modal, ModalBody } from 'reactstrap';
import { updateTestimonial} from '../redux/actions/testimonial'
import { deleteTestimonial} from '../redux/actions/testimonial'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import moment from 'moment'



class AdminTestimonial extends Component {


  state = {
    formSubmitted: false,
    name: this.props.testItem.name,
    content: this.props.testItem.content,
    date: this.props.testItem.date
  }

  handleSubmitUpdate = (e) => {
    this.props.updateTestimonial(this.state, this.props.testItem._id)
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
    const id = this.props.testItem._id
		this.props.deleteTestimonial(id)
  }

	toggle() {
		this.setState({
			formSubmitted: !this.state.formSubmitted
		})
	}

  render(){
    		let newDate = moment(this.props.testItem.date).format('YYYY-MM-DD')

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
                  <Input type="text" name="name" value={this.state.name}
                  onChange={(e)=> this.setState({name: e.target.value})} id="exampleTitle" placeholder="Name" />
                </Col>
              </FormGroup>

                <FormGroup row >
                  <Label for="exampleTitle" sm={2}></Label>
                  <Col sm={10}>
                    <Input type="date" name="date" value={this.state.date}
                    onChange={(e)=> this.setState({date: e.target.value})} id="exampleTitle" placeholder="Date" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleDate" sm={2}></Label>
                  <Col sm={10}>
                    <Input type="textarea" name="content" value={this.state.content}
                    onChange={(e)=> this.setState({content: e.target.value})} id="exampleDate" placeholder="Content" />
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
        <Card body style={{ width: '25em', marginLeft: '2em', marginTop: '2em', backgroundColor: 'rgba(0,151,201, 0.4)',border: 'solid', borderWidth: 'thin'}}>
          <CardText> Date: {newDate}</CardText>
          <CardText>Name: {this.props.testItem.name}</CardText>
          <CardText> Subject: {this.props.testItem.content}</CardText>
          <Row>
          <Button style={{height: '2em', textAlign: 'center', width: '7em',lineHeight: '1em', marginLeft: '1em'}} onClick={this.handleSubmit}><strong>Update</strong></Button>
          <Button style={{height: '2em', textAlign: 'center', width: '7em',lineHeight: '1em', marginLeft: '1em'}} onClick={this.handleSubmitDelete}><strong>Delete</strong></Button>
          </Row>
          </Card>
        </Col>

      </Row>
      </div>

  );
};
}

const mapDispatchToProps = dispatch => bindActionCreators({

  deleteTestimonial

}, dispatch)

export default connect(null, mapDispatchToProps)(AdminTestimonial)
