import React, {Component} from 'react'
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row
} from 'reactstrap';
import {updateCalendar} from '../redux/actions/calendar'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class ProviderEditNote extends Component {
  state = {
    notes: ''
  }

  handleSubmit = (e) => {
    this.props.updateCalendar(this.state, this.props.calendars.id)
  }

  render() {
    return (<div>
      <Form style={{
          marginRight: '50%',
          marginLeft: '1em',
          marginBottom: '50px',
          fontSize: '20px',
          color: '#1476A8'
        }} onSubmit={this.handleSubmitUpdate}>

        <FormGroup row="row">
          <Label for="exampleTitle" sm={2}></Label>
          <Col sm={10}>
            <Input type="textarea" name="note" value={this.state.notes} onChange={(e) => this.setState({notes: e.target.value})} id="exampleTitle" placeholder="Enter Note"/>
          </Col>
        </FormGroup>
        <Button style={{
            marginLeft: '12em',
            marginBottom: '10px',
            marginRight: '430px',
            color: '#1476A8'
          }} onClick={this.handleSubmit}>Submit</Button>
      </Form>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {calendar: state.calendarReducer};
};

const mapDispatchToProps = dispatch => bindActionCreators({
  updateCalendar
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProviderEditNote)
