import React, { Component } from 'react'
import ClientTestimonial from './ClientTestimonial'
import { connect } from 'react-redux'
import ClientAddTestimonial from './ClientAddTestimonial'
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';


class ClientTestimonialList extends Component {
  render(){
    const listOfTestimonials =  this.props.testimonial.map(item =>
			<ClientTestimonial key={item.id} testItem={item} />
    )
    return(
      <div>

      <Row>
          <Col className="schedule-list" xs="6">
      {listOfTestimonials}

      </Col>

          <Col xs="6">
            <ClientAddTestimonial />
          </Col>
        </Row>

      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    testimonial: state.testimonialReducer,
    user: state.userReducer}
}

export default connect(mapStateToProps)(ClientTestimonialList)
