import React, { Component } from 'react'
import AdminMessage from './AdminMessage'
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
import AdminCreateMessage from './AdminCreateMessage'
import { connect } from 'react-redux'


class AdminMessageList extends Component {


  render(){

    const filteredRecipient = this.props.messages.filter(item => item.recipient === this.props.user.name)

    const filteredSender = this.props.messages.filter(item => item.sender === this.props.user.name)

    const combinedMessages = filteredRecipient.concat(filteredSender)

    const listOfMessages =  combinedMessages.map(item =>
      <AdminMessage key={item._id} messageItem={item} />
    )



    return(
      <div >

      <Row>
          <Col xs="6" className="child-list">

      {listOfMessages}

      </Col>
            <Col xs="6" >
            <AdminCreateMessage/>
            </Col>

        </Row>



      </div>
    )
  }
}
function mapStateToProps(state){
  return {child: state.childReducer,
    user: state.authReducer,
    messages: state.messageReducer
  }
}

export default connect(mapStateToProps)(AdminMessageList)
