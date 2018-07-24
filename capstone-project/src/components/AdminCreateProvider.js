import React, { Component } from 'react'
import { Media } from 'reactstrap';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
import { addProvider} from '../redux/actions/provider'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'



class AdminCreateProvider extends Component {

  state = {
  name: '',
  notes: '',
  address: '',
  provider_img: '',
  birthdate: '',
  age: '',
  vehicle: '',
  date: ''
}
handleSubmit = (e) => {

  this.props.addProvider(this.state)
}

  render(){

    return(
      <div>
      <div style={{ fontSize:'20px', color:'#1476A8', width: '25em', marginTop: '2em',  border: 'solid #1598AF', borderWidth: 'thin', marginBottom: '2em',backgroundColor: 'rgba(0,151,201, 0.4)', marginRight: '2em', marginLeft: '3em'}}>
      <Form style={{padding: '1em', marginRight: '2em'}} onSubmit={this.handleSubmit}>


      <FormGroup>
        <Label for="exampleRegister">NEW PROVIDER</Label>
        <Input plaintext></Input>
      </FormGroup>

    <FormGroup row >
      <Label for="exampleTitle" sm={2}></Label>
      <Col sm={10}>
        <Input type="text" name="name" value={this.state.name}
        onChange={(e)=> this.setState({name: e.target.value})} id="exampleTitle" placeholder="Provider Name" />
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
        <Input type="text" name="img" value={this.state.provider_img}
        onChange={(e)=> this.setState({provider_img: e.target.value})} id="exampleImage" placeholder="Provider Image" />
      </Col>
    </FormGroup>

    <FormGroup row>
        <Label for="exampleText" sm={2}></Label>
        <Col sm={10}>
          <Input type="text" name="text" value={this.state.age} onChange={(e)=> this.setState({age: e.target.value})} id="exampleText" placeholder="Provider Age" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleDate" sm={2}></Label>
        <Col sm={10}>
          <Input type="text" name="birthdate" value={this.state.birthdate}
          onChange={(e)=> this.setState({birthdate: e.target.value})} id="exampleDate" placeholder="Provider Birthdate" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleDate" sm={2}></Label>
        <Col sm={10}>
          <Input type="text" name="address" value={this.state.address}
          onChange={(e)=> this.setState({address: e.target.value})} id="exampleDate" placeholder="Address" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleDate" sm={2}></Label>
        <Col sm={10}>
          <Input type="text" name="age" value={this.state.vehicle}
          onChange={(e)=> this.setState({vehicle: e.target.value})} id="exampleDate" placeholder="Vehicle" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleDate" sm={2}></Label>
        <Col sm={10}>
          <Input type="text" name="notes" value={this.state.notes}
          onChange={(e)=> this.setState({notes: e.target.value})} id="exampleDate" placeholder="Notes" />
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
  addProvider
}, dispatch)

export default connect(null, mapDispatchToProps)(AdminCreateProvider)
