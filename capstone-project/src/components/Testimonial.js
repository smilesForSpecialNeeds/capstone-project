import React, { Component } from 'react'
import { Media } from 'reactstrap';
import { Card, Button, CardTitle,FormGroup, Label, Input, FormText, Form, CardText, Row, Col, Modal, ModalBody } from 'reactstrap';
import Moment from 'react-moment'



const Testimonial =(props) => {
  let newDate = <Moment format="MM/DD/YYYY ">{props.testimonialItem.date}</Moment>

  return (

    <div >
    <Row >
    <Row >

        <Card body style={{ width: '20em', marginLeft: '5em', marginTop: '2em', backgroundColor: 'rgba(0,151,201, 0.2)',border: 'solid', borderWidth: 'thin'}}>
          <CardText> <strong>Posting Date: </strong>  {newDate}</CardText>
          <CardText><strong>Name: </strong>
         {props.testimonialItem.name}</CardText>
          <CardText><strong>Content: </strong> {props.testimonialItem.content}</CardText>


        </Card>

    </Row>
    </Row>
    </div>
  )
}



export default Testimonial
