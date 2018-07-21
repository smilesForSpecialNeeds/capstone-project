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
import {userLogin} from '../redux/actions/auth'

class Login extends Component {

  state = {
    email: '',
    password: '',
    password2: '',
    name: '',
    user_type: ''
  }

  handleLoginSumbit = (e) => {
    e.preventDefault()
    this.props.userLogin(this.state, this.props.history)
  }
  render() {
    return (<div >

      <div style={{
          width: '30em',
          height: '20em',
          margin: 'auto',
          marginTop: '7em',
          border: 'solid #1598AF',
          borderWidth: 'thin',
          padding: '1em',
          marginBottom: '2em',
          backgroundColor: 'rgba(0,151,201, 0.4)'
        }}>
        <Form onSubmit={this.handleLoginSumbit}>
          <FormGroup>
            <Label for="exampleRegister">LOGIN</Label>
            <Input plaintext="plaintext"></Input>
          </FormGroup>

          <FormGroup>
            <Label for="exampleEmail"></Label>
            <Input name="email" type="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} id="exampleEmail" placeholder="Email"/>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword"></Label>
            <Input type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} name="password" id="examplePassword" placeholder="Password"/>
          </FormGroup>
          <button style={{
              color: '#1598AF',
              marginTop: '1em'
            }}>Submit</button>
        </Form>
      </div>

    </div>)
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  userLogin
}, dispatch)

export default connect(null, mapDispatchToProps)(Login)
