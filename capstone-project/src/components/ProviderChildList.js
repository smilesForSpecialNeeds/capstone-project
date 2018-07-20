import React, { Component } from 'react'
import ProviderChild from './ProviderChild'
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';

import { connect } from 'react-redux'


class ProviderChildList extends Component {

  render(){
    console.log('props in admin child list',this.props)
    const listOfChilds =  this.props.child.map(item =>
			<ProviderChild key={item._id} childItem={item} />
    )

    return(
      <div style={{ marginBottom: '3em', marginLeft: '2em'}}>

      <Row>
          <Col className="schedule-list" xs="6">
      {listOfChilds}

      </Col>
            <Col xs="6" >

            </Col>

        </Row>



      </div>
    )
  }
}
function mapStateToProps(state){
  return {child: state.childReducer, user: state.userReducer}
}

export default connect(mapStateToProps)(ProviderChildList)
