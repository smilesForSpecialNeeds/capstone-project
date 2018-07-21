import React, {Component} from 'react'
import AdminProvider from './AdminProvider'
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row
} from 'reactstrap';
import AdminCreateProvider from './AdminCreateProvider'
import {connect} from 'react-redux'

class AdminProviderList extends Component {

  render() {
    if (this.props.provider) {
      const listOfProviders = this.props.provider.map(item => <AdminProvider key={item.id} providerItem={item}/>)

      return (<div style={{
          marginBottom: '3em',
          marginLeft: '2em'
        }}>

        <Row>
          <Col className="provider-list" xs="6">
            {listOfProviders}

          </Col>
          <Col xs="6">
            <AdminCreateProvider/>
          </Col>

        </Row>

      </div>)
    } else {
      console.log("I don't have it yet!")
      return (<div>Loading...</div>)
    }
  }
}
function mapStateToProps(state) {
  return {provider: state.providerReducer, user: state.userReducer}
}

export default connect(mapStateToProps)(AdminProviderList)
