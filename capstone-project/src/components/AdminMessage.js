import React, { Component } from 'react'
import { Card, Button, CardTitle,FormGroup, Label, Input, FormText, Form, CardText, Row, Col, Modal, ModalBody } from 'reactstrap';
import Moment from 'react-moment'
import moment from 'moment'
import { Media } from 'reactstrap';
import { updateMessage} from '../redux/actions/message'
import { deleteMessage} from '../redux/actions/message'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'



class AdminMessage extends Component {

  state = {
    formSubmitted: false,
    recipient: this.props.messageItem.recipient,
    sender: this.props.messageItem.sender,
    subject: this.props.messageItem.subject,
    body: this.props.messageItem.body,
    date: this.props.messageItem.date,
    reply: this.props.messageItem.reply
  }

  handleSubmitUpdate = (e) => {
    this.props.updateMessage(this.state, this.props.messageItem._id)
  }

	handleSubmit = e => {
		e.preventDefault()
		this.setState({
      formSubmitted: true
		})
	}


  handleSubmitDelete = e => {

    const id = this.props.messageItem._id
		this.props.deleteMessage(id)

  }

	toggle() {
		this.setState({
			formSubmitted: !this.state.formSubmitted
		})
  }

  render(){
    		let newDate = moment(this.props.messageItem.date).format('YYYY-MM-DD')

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
               <Input type="date" name="date" value={newDate}
               onChange={(e)=> this.setState({date: e.target.value})} id="exampleTitle" placeholder="Date" />
             </Col>
           </FormGroup>
                <FormGroup row >
                  <Label for="exampleTitle" sm={2}></Label>
                  <Col sm={10}>
                    <Input type="text" name="recipient" value={this.state.recipient}
                    onChange={(e)=> this.setState({recipient: e.target.value})} id="exampleTitle" placeholder="Recipient Name" />
                  </Col>
                </FormGroup>
                <FormGroup row >
                  <Label for="exampleTitle" sm={2}></Label>
                  <Col sm={10}>
                    <Input type="text" name="sender" value={this.state.sender}
                    onChange={(e)=> this.setState({sender: e.target.value})} id="exampleTitle" placeholder="Sender's Name" />
                  </Col>
                </FormGroup>
                <FormGroup row >
                  <Label for="exampleTitle" sm={2}></Label>
                  <Col sm={10}>
                    <Input type="text" name="subject" value={this.state.subject}
                    onChange={(e)=> this.setState({subject: e.target.value})} id="exampleTitle" placeholder="Subject" />
                  </Col>
                </FormGroup>
                <FormGroup row >
                  <Label for="exampleTitle" sm={2}></Label>
                  <Col sm={10}>
                    <Input type="textarea" name="body" value={this.state.body}
                    onChange={(e)=> this.setState({body: e.target.value})} id="exampleTitle" placeholder="Body" />
                  </Col>
                </FormGroup>
                <FormGroup row >
                  <Label for="exampleTitle" sm={2}></Label>
                  <Col sm={10}>
                    <Input type="textarea" name="reply" value={this.state.reply}
                    onChange={(e)=> this.setState({reply: e.target.value})} id="exampleTitle" placeholder="Reply" />
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
          <Card body style={{ width: '25em', marginLeft: '2em', marginTop: '2em', backgroundColor: 'rgba(0,151,201, 0.4)',border: 'solid', borderWidth: 'thin'}}>

            <CardText> <strong>Date: </strong>  {newDate}</CardText>
            <CardText><strong>Recipient: </strong> {this.props.messageItem.recipient}</CardText>
            <CardText><strong>Sender: </strong>{this.props.messageItem.sender}</CardText>
            <CardText><strong>Subject: </strong>{this.props.messageItem.subject}</CardText>
            <CardText><strong>Message: </strong>{this.props.messageItem.body}</CardText>
            <CardText><strong>Reply: </strong>{this.props.messageItem.reply}</CardText>


            <Row>
            <Button style={{height: '2em', textAlign: 'center', width: '7em',lineHeight: '1em', marginLeft: '1em'}} onClick={this.handleSubmit}><strong>Reply</strong></Button>
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

    deleteMessage,
    updateMessage
  }, dispatch)

  export default connect(null, mapDispatchToProps)(AdminMessage)
