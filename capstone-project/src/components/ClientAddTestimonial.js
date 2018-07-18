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
      <div style={{marginBottom:'10px', fontSize:'20px',width:'10em', color:'#1598AF',padding:'.5em', marginTop: '3em', marginLeft: '8em'}}><strong>New Testimonial</strong></div>

  <Form style={{fontSize:'20px', color:'#1598AF', width: '40',margin: 'auto', marginRight: '6em', marginLeft: '2em', border: 'solid #1598AF', borderWidth: 'thin', padding: '2em', paddingRight: '2em'}} onSubmit={this.handleSubmit}>


    <FormGroup row >
      <Label for="exampleTitle" sm={2}></Label>
      <Col sm={10}>
        <Input type="text" name="name" value={this.state.name}
        onChange={(e)=> this.setState({name: e.target.value})} id="exampleTitle" placeholder="Name" />
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
        <Input type="textarea" name="content" value={this.state.content}
        onChange={(e)=> this.setState({content: e.target.value})} id="exampleImage" placeholder="Content" />
      </Col>
    </FormGroup>
    <Button  style={{marginLeft:'12em', marginBottom:'10px', marginRight:'430px', backgroundColor: '#1598AF'}} >Submit</Button>

    </Form>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  addTestimonial
}, dispatch)

export default connect(null, mapDispatchToProps)(ClientAddTestimonial)
