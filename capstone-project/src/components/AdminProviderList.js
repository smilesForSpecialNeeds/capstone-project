import React, { Component } from 'react'
import AdminProvider from './AdminProvider'
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
import AdminCreateProvider from './AdminCreateProvider'
import { connect } from 'react-redux'


class AdminProviderList extends Component {
  state = {
    filter: '',
    content: '',
    isProvider: false,
    isNoFilter: true
  }

  handleFilter = (e) => {
    e.preventDefault()
    if(this.state.filter === 'Provider Name'){
      this.setState({
        isProvider: true,
        isNoFilter: false,
      })
  }
}

  render(){
    console.log(this.props.provider)
    console.log(this.state)

      const listOfProviders =  this.props.provider.map(item =>
  			<AdminProvider key={item.id} providerItem={item} />
      )
      const providerListOfCalendars =  this.props.provider.map(item =>
       item.name === this.state.content ? <AdminProvider key={item.id} providerItem={item} /> : ''
      )

      return(
        <div >

        <Row>
            <Col className="provider-list"  xs="6">
            <div style={{width: '25em', height: '8em', margin: 'auto', marginTop: '2em', marginLeft: '2em', border: 'solid #1598AF',borderWidth: 'thin', padding: '1em', marginBottom: '2em', backgroundColor: 'rgba(0,151,201, 0.4)'}}>

            <Form onSubmit={this.handleFilter}>
              <Row style={{marginLeft: '1em'}}>

             <FormGroup row style={{ width: '10em'}}>
               <Label for="exampleSelect"></Label>
                <Col sm={10}>
               <Input type="select" value={this.state.filter} onChange={(e) => this.setState({filter: e.target.value})} name="select" id="exampleSelect" >
                <option>Select</option>
                <option>Provider Name</option>

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
           {this.state.isNoFilter ? listOfProviders  : null}
           {this.state.isProvider ? providerListOfCalendars  : null}


        </Col>
              <Col xs="4" >
              <AdminCreateProvider/>
              </Col>

          </Row>



        </div>
      )
  }
}
function mapStateToProps(state){
  return {provider: state.providerReducer, user: state.userReducer}
}

export default connect(mapStateToProps)(AdminProviderList)
