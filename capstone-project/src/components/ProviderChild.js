import React, { Component } from 'react'
import { Card, Button, CardTitle,FormGroup, Label, Input, FormText, Form, CardText, Row, Col, Modal, ModalBody } from 'reactstrap';
import Moment from 'react-moment'
import moment from 'moment'
import { Media } from 'reactstrap';




class ProviderChild extends Component {

  state = {
    formSubmitted: false

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
    		let newDate = moment(this.props.childItem.date).format('YYYY-MM-DD')
        console.log('state in admin child-update', this.state)
    return(

      <div>

      <Row>
        <Col >
          <Card body style={{ width: '20em', marginLeft: '5em', marginTop: '2em', backgroundColor: 'rgba(0,151,201, 0.4)',border: 'solid', borderWidth: 'thin'}}>
            <CardText> <img src={this.props.childItem.child_img} alt="Generic placeholder image" style={{width:'100px', height:'100px', marginLeft: '10px'}} /></CardText>
            <CardText> <strong>Date: </strong>  {newDate}</CardText>
            <CardText><strong>Client Name: </strong> {this.props.childItem.child_name}</CardText>
            <CardText><strong>Client Age: </strong>{this.props.childItem.age}</CardText>
            <CardText><strong>Birthdate: </strong>{this.props.childItem.birthdate}</CardText>
            <CardText><strong>Address: </strong>{this.props.childItem.address}</CardText>
            <CardText><strong>Parent Name: </strong>{this.props.childItem.parent_name}</CardText>
            <CardText><strong>Notes: </strong>{this.props.childItem.notes}</CardText>
            <Row>


          </Row>
          </Card>
        </Col>

      </Row>

    </div>

    )
  }
  }


  export default ProviderChild
