import React, { Component } from 'react'
import AdminChild from './AdminChild'
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
import AdminCreateChild from './AdminCreateChild'
import { connect } from 'react-redux'


class AdminChildList extends Component {

  render(){
    console.log('props in admin child list',this.props)
    const listOfChilds =  this.props.child.map(item =>
			<AdminChild key={item._id} childItem={item} />
    )
    // listOfNotes = this.props.notes.map(note =>
    //   <AdminChild key={note._id} noteItem={note} />
    // )

    return(
      <div style={{ marginBottom: '3em', marginLeft: '2em'}}>

      <Row>
          <Col xs="6" className="child-list">
      {listOfChilds}

      </Col>
            <Col xs="6" >
            <AdminCreateChild/>
            </Col>

        </Row>



      </div>
    )
  }
}
function mapStateToProps(state){
  return {child: state.childReducer,
    user: state.userReducer,
    notes: state.messageReducer
  }
}

export default connect(mapStateToProps)(AdminChildList)
