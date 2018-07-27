import React, { Component } from 'react'
import { Media } from 'reactstrap';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
import { addMessage} from '../redux/actions/message'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'



class AdminCreateMessage extends Component {

  state = {

  recipient: '',
  sender: '',
  subject: '',
  body: '',
  date: ''
}
handleSubmit = (e) => {

  this.props.addMessage(this.state)
}

  render(){

    return(
      <div>
      <div style={{ fontSize:'20px', color:'#1476A8', width: '25em', marginTop: '2em',  border: 'solid #1598AF', borderWidth: 'thin', marginBottom: '2em',backgroundColor: 'rgba(0,151,201, 0.4)', marginRight: '2em', marginLeft: '3em'}}>
      <Form style={{padding: '1em', marginRight: '2em'}} onSubmit={this.handleSubmit}>


      <FormGroup>
        <Label for="exampleRegister">NEW Message</Label>
        <Input plaintext></Input>
      </FormGroup>

    <FormGroup row >
      <Label for="exampleTitle" sm={2}></Label>
      <Col sm={10}>
        <Input type="text" name="child_name" value={this.state.recipient}
        onChange={(e)=> this.setState({recipient: e.target.value})} id="exampleTitle" placeholder="Recipient" />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleDate" sm={2}></Label>
      <Col sm={10}>
        <Input type="date" name="date" value={this.state.date}
        onChange={(e)=> this.setState({date: e.target.value})} id="exampleDate" placeholder="Date" />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleImage" sm={2}></Label>
      <Col sm={10}>
        <Input type="text" name="img" value={this.state.sender}
        onChange={(e)=> this.setState({sender: e.target.value})} id="exampleImage" placeholder="Sender" />
      </Col>
    </FormGroup>

    <FormGroup row>
        <Label for="exampleText" sm={2}></Label>
        <Col sm={10}>
          <Input type="text" name="text" value={this.state.subject} onChange={(e)=> this.setState({subject: e.target.value})} id="exampleText" placeholder="Subject" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleDate" sm={2}></Label>
        <Col sm={10}>
          <Input type="textarea" name="body" value={this.state.body}
          onChange={(e)=> this.setState({body: e.target.value})} id="exampleDate" placeholder="Body" />
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
  addMessage
}, dispatch)

export default connect(null, mapDispatchToProps)(AdminCreateMessage)
