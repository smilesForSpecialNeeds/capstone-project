import React, { Component } from 'react'
import AdminTestimonial from './AdminTestimonial'
import { connect } from 'react-redux'
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';


class AdminTestimonialList extends Component {
  render(){
    const listOfTestimonials =  this.props.testimonial.map(item =>
			<AdminTestimonial key={item.id} testItem={item} />
    )
    return(
      <div>

      <Row>
          <Col className="schedule-list" xs="6">
      {listOfTestimonials}

      </Col>

          <Col xs="6">

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

export default connect(mapStateToProps)(AdminTestimonialList)
