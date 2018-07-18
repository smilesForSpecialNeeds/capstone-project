import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Moment from 'react-moment'
import moment from 'moment'
import ClientAddTestimonial from './ClientAddTestimonial'




class ClientTestimonial extends Component {


  render(){
    let newDate = moment(this.props.testItem.date).format('YYYY-MM-DD')
  return (
    <div>

    <Row>
      <Col >
        <Card body style={{ width: '20em', marginLeft: '5em', marginTop: '2em', backgroundColor: '#f0ffff'}}>
          <CardText> Date: {newDate}</CardText>
          <CardText>Name: {this.props.testItem.name}</CardText>
          <CardText> Subject: {this.props.testItem.content}</CardText>
          <Row>
          <Button style={{height: '2em', textAlign: 'center', width: '4em',lineHeight: '1em', backgroundColor: '#1598AF',marginLeft: '1em'}}>Edit</Button>
          <Button style={{height: '2em', width: '5em',marginLeft: '1em',lineHeight: '1em',textAlign: 'center', backgroundColor: '#1598AF'}}>Delete</Button>
        </Row>
        </Card>
      </Col>

    </Row>


    </div>

  );
};
}

export default ClientTestimonial;
