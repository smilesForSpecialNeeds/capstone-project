import React from 'react'
import Testimonial from './Testimonial'
import { connect } from 'react-redux'
import { Nav, NavItem, NavLink, Row, Col } from 'reactstrap';

class TestimonialList extends React.Component {
	render() {

		const listOfTestimonials = this.props.testimonials.map(test => (
			<Testimonial key={test.id} testimonialItem={test} />
		))
		return (
		<div style={{backgroundColor: 'rgba(0,151,201, .1)', height: '100vh'}}>
		<Row>
		{listOfTestimonials}
		</Row>
		</div>
	)
	}
}

function mapStateToProps(state) {
	return { testimonials: state.testimonialReducer }
}

export default connect(mapStateToProps)(TestimonialList)
