import React, {Component} from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {userRegistration} from '../redux/actions/auth'

class Registration extends Component {

  state = {
    email: '',
    password: '',
    password2: '',
    name: '',
    user_type: ''
  }
  handleRegistrationSubmit = (e) => {
    e.preventDefault()
    this.props.userRegistration(this.state, this.props.history)

  }
  render() {
    return (<div>
      <div style={{
          width: '30em',
          height: '35em',
          margin: 'auto',
          marginTop: '5em',
          border: 'solid #1598AF',
          borderWidth: 'thin',
          padding: '1em',
          marginBottom: '3em',
          backgroundColor: 'rgba(0,151,201, 0.4)'
        }}>

        <Form onSubmit={this.handleRegistrationSubmit}>

          <FormGroup>
            <Label for="exampleRegister">REGISTRATION</Label>
            <Input plaintext="plaintext"></Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleName"></Label>
            <Input name="name" type="name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} id="exampleName" placeholder="Name"/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail"></Label>
            <Input name="email" type="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} id="exampleEmail" placeholder="Email"/>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword"></Label>
            <Input name="password" type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} id="examplePassword" placeholder="Password"/>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword2"></Label>
            <Input type="password" value={this.state.password2} onChange={(e) => this.setState({password2: e.target.value})} name="password" id="examplePassword2" placeholder="Confirm Password"/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect"></Label>
            <Input type="select" value={this.state.user_type} onChange={(e) => this.setState({user_type: e.target.value})} name="select" id="exampleSelect">
              <option>Select</option>
              <option>Admin</option>
              <option>Client</option>
              <option>Provider</option>
            </Input>
          </FormGroup>
          <button style={{
              color: '#1598AF',
              marginTop: '1em'
            }} type="Submit">Submit</button>
        </Form>
      </div>

    </div>)
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({

  userRegistration
}, dispatch)

export default connect(null, mapDispatchToProps)(Registration)
