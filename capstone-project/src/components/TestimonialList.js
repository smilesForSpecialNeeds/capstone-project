import React from 'react'
import Testimonial from './Testimonial'
import {connect} from 'react-redux'

class TestimonialList extends React.Component {
  render() {

    const listOfTestimonials = this.props.testimonials.map(test => (<Testimonial key={test.id} testimonialItem={test}/>))
    return <div style={{
        backgroundColor: 'rgba(0,151,201, .1)'
      }}>{listOfTestimonials}</div>
  }
}

function mapStateToProps(state) {
  return {testimonials: state.testimonialReducer}
}

export default connect(mapStateToProps)(TestimonialList)
