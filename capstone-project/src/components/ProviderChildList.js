import React, { Component } from 'react'
import ProviderChild from './ProviderChild'
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';

import { connect } from 'react-redux'


class ProviderChildList extends Component {

  state = {
    filter: '',
    content: ''
  }

  handleFilter = () => {

  }

  render(){
    console.log('props in admin child list',this.props)
    const listOfChilds =  this.props.child.map(item =>
			<ProviderChild key={item._id} childItem={item} />
    )

    return(
      <div >

      <Row>
          <Col className="schedule-list" xs="6">
          <div style={{width: '25em', height: '8em', margin: 'auto', marginTop: '2em', border: 'solid #1598AF',borderWidth: 'thin', padding: '1em', marginBottom: '2em', backgroundColor: 'rgba(0,151,201, 0.4)'}}>

          <Form onSubmit={this.handleFilter}>
            <Row style={{marginLeft: '1em'}}>

           <FormGroup row style={{ width: '10em'}}>
             <Label for="exampleSelect"></Label>
              <Col sm={10}>
             <Input type="select" value={this.state.filter} onChange={(e) => this.setState({filter: e.target.value})} name="select" id="exampleSelect" >
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
