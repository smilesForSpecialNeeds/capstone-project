import React, { Component } from 'react'
import AdminChild from './AdminChild'
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
import AdminCreateChild from './AdminCreateChild'
import { connect } from 'react-redux'


class AdminChildList extends Component {
  state = {
    filter: '',
    content: '',
    isChild: false,
    isNoFilter: true
  }

  handleFilter = (e) => {
    e.preventDefault()
    if(this.state.filter === 'Client Name'){
      this.setState({
        isChild: true,
        isNoFilter: false,
      })
  }
}


  render(){
    console.log('props in admin child list',this.props)
    const listOfChilds =  this.props.child.map(item =>
			<AdminChild key={item._id} childItem={item} />
    )
    const oneChildList =  this.props.child.map(item =>
     item.child_name === this.state.content ? <AdminChild key={item.id} childItem={item} /> : ''
    )


    return(
      <div >

      <Row>
          <Col xs="6" className="child-list">
          <div style={{width: '25em', height: '8em', margin: 'auto', marginTop: '2em', marginLeft: '2em', border: 'solid #1598AF',borderWidth: 'thin', padding: '1em', marginBottom: '2em', backgroundColor: 'rgba(0,151,201, 0.4)'}}>

          <Form onSubmit={this.handleFilter}>
            <Row style={{marginLeft: '1em'}}>

           <FormGroup row style={{ width: '10em'}}>
             <Label for="exampleSelect"></Label>
              <Col sm={10}>
             <Input type="select" value={this.state.filter} onChange={(e) => this.setState({filter: e.target.value})} name="select" id="exampleSelect" >
              <option>Select</option>
              <option>Client Name</option>

             </Input>
             </Col>
           </FormGroup>
           <FormGroup row style={{width: '15em'}}>
             <Label for="exampleImage" sm={2}></Label>
             <Col sm={18}>
               <Input type="text" name="filter" value={this.state.content}
               onChange={(e)=> this.setState({content: e.target.value})} id="exampleImage" placeholder="Content" />
             </Col>
           </FormGroup>

           <button style={{color: '#1598AF', marginLeft: '1em', height: '2em', marginBottom: '1em'}} type="Submit">Submit</button>

            </Row>
         </Form>
         </div>
         {this.state.isNoFilter ? listOfChilds  : null}
         {this.state.isChild ? oneChildList  : null}

      </Col>
            <Col xs="4" >
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
