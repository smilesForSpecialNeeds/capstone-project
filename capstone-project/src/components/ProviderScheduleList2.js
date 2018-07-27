import React, { Component } from 'react'
import ProviderSchedule2 from './ProviderSchedule2'
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
import { connect } from 'react-redux'
import Moment from 'react-moment'



class ProviderScheduleList2 extends Component {

  state = {
    filter: '',
    month: '',
    year: '',
    content: '',
    isClient: false,
    isNoFilter: true,
    isProvider: false,
    isHours: false,
    isPayOne: false,
    isPayTwo: false,
    isNamePayOne: false,
    isNamePayTwo: false,
    isPayOneMonthYear: false,
    isJuly: false,
    isJanuary: false,
    isFebruary: false,
    isMarch: false,
    isApril: false,
    isMay: false,
    isJune: false,
    isAugust: false,
    isSep: false,
    isOct: false,
    isNov: false,
    isDec: false
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
        isClient: false,
        isNoFilter:false
      })
    }else if(this.state.filter === 'Pay Period One' && this.state.content === '' ){
      this.setState({
        isPayOne: true,
        isHours: false,
        isClient: false,
        isNoFilter:false,

      })
    }else if(this.state.filter === 'Pay Period Two' && this.state.content === ''){
      this.setState({
        isPayTwo: true,
        isPayOne: false,
        isHours: false,
        isClient: false,
        isNoFilter:false
      })
  }else if(this.state.filter === 'Pay Period One'){
    this.setState({
      isNamePayOne: true,
      isPayTwo: false,
      isPayOne: false,
      isHours: false,
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
      isClient: false,
      isNoFilter:false
    })
  }else if(this.state.month === 'July'){
    this.setState({
      isJuly: true,
      isJanuary: false,
      isFebruary: false,
      isMarch: false,
      isApril: false,
      isMay: false,
      isJune: false,
      isAugust: false,
      isSep: false,
      isOct: false,
      isNov: false,
      isDec: false,
      isClient: false,
      isNoFilter: false,
      isProvider: false,
      isHours: false,
      isPayOne: false,
      isPayTwo: false,
      isNamePayOne: false,
      isNamePayTwo: false
    })
  }
}
  render(){
    console.log(this.state)
    const listOfCalendars =  this.props.calendar.map(item =>
			item.assigned_child && item.event_name === this.props.user.name ? <ProviderSchedule2 key={item.id} calendarItem={item} /> : ''
    )
//tests
    const clientListOfCalendars =  this.props.calendar.map(item =>
      item.assigned_child && item.assigned_child === this.state.content && item.event_name === this.props.user.name ? <ProviderSchedule2 key={item.id} calendarItem={item} /> : ''
    )


    const filterPayOne =  this.props.calendar.map(item =>
      item.assigned_child && /-02T|-03T|-04T|-05T|-06T|-07T|-08T|-09T|-10T|-11T|-12T|-13T|-14T|-15T/.test(item.date) && item.event_name === this.props.user.name ? <ProviderSchedule2 key={item.id} calendarItem={item} /> : ''
    )

    const filterPayTwo =  this.props.calendar.map(item =>
      item.assigned_child && /-17T|-18T|-19T|-20T|-21T|-22T|-23T|-24T|-25T|-26T|-27T|-28T|-29T|-30T|-31T/.test(item.date) && item.event_name === this.props.user.name ? <ProviderSchedule2 key={item.id} calendarItem={item} /> : ''
    )

    const filterNamePayOne =  this.props.calendar.map(item =>
      item.assigned_child && /-02T|-03T|-04T|-05T|-06T|-07T|-08T|-09T|-10T|-11T|-12T|-13T|-14T|-15T/.test(item.date) && item.assigned_child === this.state.content && item.event_name === this.props.user.name ? <ProviderSchedule2 key={item.id} calendarItem={item} /> : ''
    )
    const filterNamePayTwo =  this.props.calendar.map(item =>
      item.assigned_child && /-17T|-18T|-19T|-20T|-21T|-22T|-23T|-24T|-25T|-26T|-27T|-28T|-29T|-30T|-31T/.test(item.date) && item.assigned_child === this.state.content && item.event_name === this.props.user.name ? <ProviderSchedule2 key={item.id} calendarItem={item} /> : ''
    )


    let newDate = <Moment format="MM/DD/YYYY ">{this.props.calendar.date}</Moment>
    console.log(newDate)


      let curYear = new Date().getFullYear();
      let prevYear = (new Date().getFullYear()-1)
      let prevYear1 = (new Date().getFullYear()-2)
      let prevYear2 = (new Date().getFullYear()-3)
      let prevYear3 = (new Date().getFullYear()-4)
      let prevYear4 = (new Date().getFullYear()-5)
      let prevYear5 = (new Date().getFullYear()-6)
      let prevYear6 = (new Date().getFullYear()-7)
      let prevYear7 = (new Date().getFullYear()-8)
      let prevYear8 = (new Date().getFullYear()-9)
      let prevYear9 = (new Date().getFullYear()-10)
      let prevYear10 = (new Date().getFullYear()-11)
      let prevYear11 = (new Date().getFullYear()-12)
      let prevYear12 = (new Date().getFullYear()-13)
      let prevYear13 = (new Date().getFullYear()-14)
      let prevYear14 = (new Date().getFullYear()-15)
      let prevYear15 = (new Date().getFullYear()-16)
      let prevYear16 = (new Date().getFullYear()-17)
      let prevYear17 = (new Date().getFullYear()-18)
      let prevYear18 = (new Date().getFullYear()-19)



//tests

const listOfCalendarsJuly =  this.props.calendar.map(item =>
  item.assigned_child && item.event_name === this.props.user.name && /-07/.test(item.date) ? <ProviderSchedule2 key={item.id} calendarItem={item} /> : ''
)





    return(
      <div >

      <Row>
      <Col className="child-list" xs="8">
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

         </Input>
         </Col>
       </FormGroup>
       <FormGroup row style={{ width: '10em'}}>
         <Label for="exampleSelect"></Label>
          <Col sm={10}>
         <Input type="select" value={this.state.month} onChange={(e) => this.setState({month: e.target.value})} name="select" id="exampleSelect" >
          <option>Select</option>
           <option>January</option>
           <option>March</option>
           <option>April</option>
           <option>May</option>
           <option>June</option>
           <option>July</option>
           <option>August</option>
           <option>September</option>
           <option>October</option>
           <option>November</option>
          <option>December</option>
         </Input>
         </Col>
       </FormGroup>
       <FormGroup row style={{ width: '10em'}}>
         <Label for="exampleSelect"></Label>
          <Col sm={10}>
         <Input type="select" value={this.state.year} onChange={(e) => this.setState({year: e.target.value})} name="select" id="exampleSelect" >
            <option>Select</option>
            <option>{curYear}</option>
            <option>{prevYear}</option>
            <option>{prevYear1}</option>
            <option>{prevYear2}</option>
            <option>{prevYear3}</option>
            <option>{prevYear4}</option>
            <option>{prevYear5}</option>
            <option>{prevYear6}</option>
            <option>{prevYear7}</option>
            <option>{prevYear8}</option>
            <option>{prevYear9}</option>
            <option>{prevYear10}</option>
            <option>{prevYear11}</option>
            <option>{prevYear12}</option>
            <option>{prevYear13}</option>
            <option>{prevYear14}</option>
            <option>{prevYear15}</option>
            <option>{prevYear16}</option>
            <option>{prevYear17}</option>
            <option>{prevYear18}</option>


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
    
     {this.state.isPayOne ? filterPayOne  : null}
     {this.state.isPayTwo ? filterPayTwo  : null}
     {this.state.isNamePayOne ? filterNamePayOne  : null}
     {this.state.isNamePayTwo ? filterNamePayTwo  : null}
      {this.state.isJuly ? listOfCalendarsJuly  : null}




      </Col>
            <Col xs="6" >

            </Col>

        </Row>


      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    calendar: state.calendarReducer,
    user: state.authReducer}
}

export default connect(mapStateToProps)(ProviderScheduleList2)
