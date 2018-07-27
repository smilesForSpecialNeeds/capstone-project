import React, { Component } from 'react'
import ProviderSchedule from './ProviderSchedule'
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
import { connect } from 'react-redux'
import AdminCreateCalendar from './AdminCreateCalendar'
import Moment from 'react-moment'


class ProviderScheduleList extends Component {
  state = {
    filter: '',
    content: '',
    isClient: false,
    isNoFilter: true,
    isProvider: false,
    isHours: false,
    isPayOne: false,
    isPayTwo: false,
    isNamePayOne: false,
    isNamePayTwo: false
  }

  handleFilter = (e) => {
    e.preventDefault()
    if(this.state.filter === 'Client Name'){
      this.setState({
        isClient: true,
        isNoFilter: false,
      })
    }else if(this.state.filter === 'Provider Name'){
      this.setState({
        isProvider: true,
        isClient: false,
        isNoFilter: false
      })
    }else if(this.state.filter === 'Hours Type'){
      this.setState({
        isHours: true,
        isProvider: false,
        isClient: false,
        isNoFilter:false
      })
    }else if(this.state.filter === 'Pay Period One' && this.state.content === ''){
      this.setState({
        isPayOne: true,
        isHours: false,
        isProvider: false,
        isClient: false,
        isNoFilter:false
      })
    }else if(this.state.filter === 'Pay Period Two' && this.state.content === ''){
      this.setState({
        isPayTwo: true,
        isPayOne: false,
        isHours: false,
        isProvider: false,
        isClient: false,
        isNoFilter:false
      })
  }else if(this.state.filter === 'Pay Period One'){
    this.setState({
      isNamePayOne: true,
      isPayTwo: false,
      isPayOne: false,
      isHours: false,
      isProvider: false,
      isClient: false,
      isNoFilter:false
    })
  }else if(this.state.filter === 'Pay Period Two'){
    this.setState({
      isNamePayTwo: true,
      isNamePayOne: false,
      isPayTwo: false,
      isPayOne: false,
      isHours: false,
      isProvider: false,
      isClient: false,
      isNoFilter:false
    })
  }
}


  render(){
    const listOfCalendars =  this.props.calendar.map(item =>
			item.assigned_child ? <ProviderSchedule key={item.id} calendarItem={item} /> : ''
    )

    const clientListOfCalendars =  this.props.calendar.map(item =>
			item.assigned_child && item.assigned_child === this.state.content ? <ProviderSchedule key={item.id} calendarItem={item} /> : ''
    )
    const providerListOfCalendars =  this.props.calendar.map(item =>
			item.assigned_child && item.event_name === this.state.content ? <ProviderSchedule key={item.id} calendarItem={item} /> : ''
    )

    const hoursTypeListOfCalendars =  this.props.calendar.map(item =>
      item.assigned_child && item.hours_type === this.state.content ? <ProviderSchedule key={item.id} calendarItem={item} /> : ''
    )

    const filterPayOne =  this.props.calendar.map(item =>
      item.assigned_child && /-02T|-03T|-04T|-05T|-06T|-07T|-08T|-09T|-10T|-11T|-12T|-13T|-14T|-15T/.test(item.date) ? <ProviderSchedule key={item.id} calendarItem={item} /> : ''
    )

    const filterPayTwo =  this.props.calendar.map(item =>
      item.assigned_child && /-17T|-18T|-19T|-20T|-21T|-22T|-23T|-24T|-25T|-26T|-27T|-28T|-29T|-30T|-31T/.test(item.date) ? <ProviderSchedule key={item.id} calendarItem={item} /> : ''
    )

    const filterNamePayOne =  this.props.calendar.map(item =>
      item.assigned_child && /-02T|-03T|-04T|-05T|-06T|-07T|-08T|-09T|-10T|-11T|-12T|-13T|-14T|-15T/.test(item.date) && item.event_name === this.state.content ? <ProviderSchedule key={item.id} calendarItem={item} /> : ''
    )
    const filterNamePayTwo =  this.props.calendar.map(item =>
      item.assigned_child && /-17T|-18T|-19T|-20T|-21T|-22T|-23T|-24T|-25T|-26T|-27T|-28T|-29T|-30T|-31T/.test(item.date) && item.event_name === this.state.content ? <ProviderSchedule key={item.id} calendarItem={item} /> : ''
    )


    console.log('state in Admin Schedule List', this.state)
    console.log('props in Admin Schedule List', this.props.calendar)
    let newDate = <Moment format="MMMM D, YYYY ">{this.props.calendar.date}</Moment>

    return(
      <div >

      <Row>
          <Col className="child-list" xs="6">
          <div style={{width: '25em', height: '8em', margin: 'auto', marginTop: '2em', marginLeft: '2em', border: 'solid #1598AF',borderWidth: 'thin', padding: '1em', marginBottom: '2em', backgroundColor: 'rgba(0,151,201, 0.4)'}}>

          <Form onSubmit={this.handleFilter}>
            <Row style={{marginLeft: '1em'}}>

           <FormGroup row style={{ width: '10em'}}>
             <Label for="exampleSelect"></Label>
              <Col sm={10}>
             <Input type="select" value={this.state.filter} onChange={(e) => this.setState({filter: e.target.value})} name="select" id="exampleSelect" >
              <option>Select</option>
               <option>Pay Period One</option>
               <option>Pay Period Two</option>
               <option>Client Name</option>
               <option>Provider Name</option>
               <option>Hours Type</option>
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

          {this.state.isNoFilter ? listOfCalendars  : null}
          {this.state.isClient ? clientListOfCalendars  : null}
          {this.state.isProvider ? providerListOfCalendars  : null}
          {this.state.isHours ? hoursTypeListOfCalendars  : null}
          {this.state.isPayOne ? filterPayOne  : null}
          {this.state.isPayTwo ? filterPayTwo  : null}
          {this.state.isNamePayOne ? filterNamePayOne  : null}
          {this.state.isNamePayTwo ? filterNamePayTwo  : null}





      </Col>
            <Col style={{padding: '0'}}xs="4" >
            <AdminCreateCalendar/>
            </Col>

        </Row>


      </div>
    )
  }
}
function mapStateToProps(state){
  return {calendar: state.calendarReducer, user: state.userReducer}
}

export default connect(mapStateToProps)(ProviderScheduleList)
