import React, { Component } from 'react'
import { Media } from 'reactstrap';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
import { addTestimonial} from '../redux/actions/testimonial'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'



class ClientAddTestimonial extends Component {

  state = {
  name: '',
  content: '',
  date: ''
}
handleSubmit = (e) => {

  this.props.addTestimonial(this.state)
}

  render(){
    console.log('state in Client Add Testimonial', this.state)
    return(
      <div>
      <div style={{ fontSize:'20px', color:'#1476A8', marginTop: '1.5em',  border: 'solid #1598AF', borderWidth: 'thin', marginBottom: '2em',backgroundColor: 'rgba(0,151,201, 0.4)', marginLeft: '6em', width: '25em'}}>
  <Form style={{padding: '1em', marginRight: '2em'}} onSubmit={this.handleSubmit}>

  <FormGroup>
    <Label for="exampleRegister">NEW TESTIMONIAL</Label>
    <Input plaintext></Input>
  </FormGroup>

    <FormGroup row>
      <Label for="exampleDate" sm={2}></Label>
      <Col sm={10}>
        <Input type="date" name="date" value={this.state.date}
        onChange={(e)=> this.setState({date: e.target.value})} id="exampleDate" placeholder="Date" />
      </Col>
    </FormGroup>


    <FormGroup row>
        <Label for="exampleText" sm={2}></Label>
        <Col sm={10}>
          <Input type="text" name="text" value={this.state.name} onChange={(e)=> this.setState({name: e.target.value})} id="exampleText" placeholder="Name" />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="exampleDate" sm={2}></Label>
        <Col sm={10}>
          <Input type="textarea" name="pickup_time" value={this.state.content}
          onChange={(e)=> this.setState({content: e.target.value})} id="exampleDate" placeholder="Body" />
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
  addTestimonial
}, dispatch)

export default connect(null, mapDispatchToProps)(ClientAddTestimonial)
