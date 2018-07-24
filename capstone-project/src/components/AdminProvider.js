import React, { Component } from 'react'
import { Card, Button, CardTitle,FormGroup, Label, Input, FormText, Form, CardText, Row, Col, Modal, ModalBody } from 'reactstrap';
import Moment from 'react-moment'
import moment from 'moment'
import { Media } from 'reactstrap';
import { updateProvider} from '../redux/actions/provider'
import { deleteProvider} from '../redux/actions/provider'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'



class AdminProvider extends Component {

  state = {
    formSubmitted: false,
    name: this.props.providerItem.name,
    age: this.props.providerItem.age,
    provider_img: this.props.providerItem.provider_img,
    vehicle: this.props.providerItem.vehicle,
    address: this.props.providerItem.address,
    date: this.props.providerItem.date,
    birthdate: this.props.providerItem.birthdate,
    notes: this.props.providerItem.notes,
    email: this.props.providerItem.email,
    phone: this.props.providerItem.phone
  }

  handleSubmitUpdate = (e) => {
    this.props.updateProvider(this.state, this.props.providerItem._id)
  }

	handleSubmit = e => {
		e.preventDefault()
		this.setState({
      formSubmitted: true
		})
	}


  handleSubmitDelete = e => {

    const id = this.props.providerItem._id
		this.props.deleteProvider(id)

  }

	toggle() {
		this.setState({
			formSubmitted: !this.state.formSubmitted
		})
  }

  render(){
    		let newDate = moment(this.props.providerItem.date).format('YYYY-MM-DD')
        console.log('state in admin child-update', this.state)
    return(

      <div >
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
                    <Input type="text" name="name" value={this.state.name}
                    onChange={(e)=> this.setState({name: e.target.value})} id="exampleTitle" placeholder="Provider Name" />
                  </Col>
                </FormGroup>
                <FormGroup row >
                  <Label for="exampleTitle" sm={2}></Label>
                  <Col sm={10}>
                    <Input type="text" name="age" value={this.state.age}
                    onChange={(e)=> this.setState({age: e.target.value})} id="exampleTitle" placeholder="Age" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleDate" sm={2}></Label>
                  <Col sm={10}>
                    <Input type="text" name="phone" value={this.state.phone}
                    onChange={(e)=> this.setState({phone: e.target.value})} id="exampleDate" placeholder="Phone Number" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleDate" sm={2}></Label>
                  <Col sm={10}>
                    <Input type="text" name="email" value={this.state.email}
                    onChange={(e)=> this.setState({email: e.target.value})} id="exampleDate" placeholder="Email" />
                  </Col>
                </FormGroup>
                <FormGroup row >
                  <Label for="exampleTitle" sm={2}></Label>
                  <Col sm={10}>
                    <Input type="text" name="birthdate" value={this.state.birthdate}
                    onChange={(e)=> this.setState({birthdate: e.target.value})} id="exampleTitle" placeholder="Birthdate" />
                  </Col>
                </FormGroup>
                <FormGroup row >
                  <Label for="exampleTitle" sm={2}></Label>
                  <Col sm={10}>
                    <Input type="text" name="note" value={this.state.vehicle}
                    onChange={(e)=> this.setState({vehicle: e.target.value})} id="exampleTitle" placeholder="Vehicle Details" />
                  </Col>
                </FormGroup>
                <FormGroup row >
                  <Label for="exampleTitle" sm={2}></Label>
                  <Col sm={10}>
                    <Input type="date" name="date" value={newDate}
                    onChange={(e)=> this.setState({date: e.target.value})} id="exampleTitle" placeholder="Date" />
                  </Col>
                </FormGroup>
                <FormGroup row >
                  <Label for="exampleTitle" sm={2}></Label>
                  <Col sm={10}>
                    <Input type="text" name="note" value={this.state.address}
                    onChange={(e)=> this.setState({address: e.target.value})} id="exampleTitle" placeholder="Address" />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="exampleDate" sm={2}></Label>
                  <Col sm={10}>
                    <Input type="text" name="child_img" value={this.state.provider_img}
                    onChange={(e)=> this.setState({provider_img: e.target.value})} id="exampleDate" placeholder="Provider Image" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleDate" sm={2}></Label>
                  <Col sm={10}>
                    <Input type="textarea" name="notes" value={this.state.notes}
                    onChange={(e)=> this.setState({notes: e.target.value})} id="exampleDate" placeholder="Notes" />
                  </Col>
                </FormGroup>

                <Button  style={{marginLeft:'12em', marginBottom:'10px', marginRight:'430px', color:'#1476A8'}}>Submit</Button>
                </Form>
                <Button
									style={{
										marginTop: '7em',
										margingRight: '7em',
										marginLeft: '3em'
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

          <Card body  style={{ width: '35em', marginLeft: '5em', marginTop: '2em', backgroundColor: 'rgba(0,151,201, 0.4)',border: 'solid', borderWidth: 'thin'}}>
            <CardText> <img src={this.props.providerItem.provider_img} alt="Generic placeholder image" style={{width:'100px', height:'100px', marginLeft: '10px'}} /></CardText>
            <CardText> <strong>Date: </strong>  {newDate}</CardText>
            <CardText><strong>Provider Name: </strong> {this.props.providerItem.name}</CardText>
            <CardText><strong>Provider Email: </strong> {this.props.providerItem.email}</CardText>
            <CardText><strong>Phone Number: </strong> {this.props.providerItem.phone}</CardText>
            <CardText><strong>Provider Age: </strong>{this.props.providerItem.age}</CardText>
            <CardText><strong>Birthdate: </strong>{this.props.providerItem.birthdate}</CardText>
            <CardText><strong>Address: </strong>{this.props.providerItem.address}</CardText>
            <CardText><strong>Provider Vehicle: </strong>{this.props.providerItem.vehicle}</CardText>
            <CardText><strong>Notes: </strong>{this.props.providerItem.notes}</CardText>
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

    deleteProvider,
    updateProvider
  }, dispatch)

  export default connect(null, mapDispatchToProps)(AdminProvider)
