import React, {Component} from 'react'
import {
  Card,
  Button,
  CardTitle,
  FormGroup,
  Label,
  Input,
  FormText,
  Form,
  CardText,
  Row,
  Col,
  Modal,
  ModalBody
} from 'reactstrap';
import Moment from 'react-moment'
import moment from 'moment'
import {Media} from 'reactstrap';
import {updateChild} from '../redux/actions/child'
import {deleteChild} from '../redux/actions/child'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class AdminChild extends Component {

  state = {
    formSubmitted: false,
    child_img: this.props.childItem.child_img,
    child_name: this.props.childItem.child_name,
    age: this.props.childItem.age,
    birthdate: this.props.childItem.birthdate,
    address: this.props.childItem.address,
    parent_name: this.props.childItem.parent_name,
    notes: this.props.childItem.notes,
    date: this.props.childItem.date
  }

  handleSubmitUpdate = (e) => {
    this.props.updateChild(this.state, this.props.childItem._id)
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({formSubmitted: true})
  }

  handleSubmitDelete = e => {

    const id = this.props.childItem._id
    this.props.deleteChild(id)

  }

  toggle() {
    this.setState({
      formSubmitted: !this.state.formSubmitted
    })
  }
  render() {
    let newDate = moment(this.props.childItem.date).format('YYYY-MM-DD')
    return (<div>
      {
        this.state.formSubmitted
          ? (<div>
            <Modal style={{
                marginTop: '200px',
                height: '275px',
                width: '500px'
              }} isOpen={this.state.formSubmitted} toggle={this.toggle} className={this.props.className}>
              <ModalBody style={{
                  fontSize: '15px',
                  backgroundColor: '#E0E0E0'
                }} toggle={this.formSubmitted}>
                <Form style={{
                    fontSize: '20px',
                    color: '#1476A8',
                    padding: '1em',
                    marginLeft: '1em',
                    marginRight: '3em',
                    marginTop: '3em',
                    marginBottom: '1em'
                  }} onSubmit={this.handleSubmitUpdate}>

                  <FormGroup row="row">
                    <Label for="exampleTitle" sm={2}></Label>
                    <Col sm={10}>
                      <Input type="text" name="child_name" value={this.state.child_name} onChange={(e) => this.setState({child_name: e.target.value})} id="exampleTitle" placeholder="Client Name"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row="row">
                    <Label for="exampleTitle" sm={2}></Label>
                    <Col sm={10}>
                      <Input type="text" name="parent_name" value={this.state.parent_name} onChange={(e) => this.setState({parent_name: e.target.value})} id="exampleTitle" placeholder="Parent Name"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row="row">
                    <Label for="exampleTitle" sm={2}></Label>
                    <Col sm={10}>
                      <Input type="text" name="birthdate" value={this.state.birthdate} onChange={(e) => this.setState({birthdate: e.target.value})} id="exampleTitle" placeholder="Birthdate"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row="row">
                    <Label for="exampleTitle" sm={2}></Label>
                    <Col sm={10}>
                      <Input type="text" name="note" value={this.state.age} onChange={(e) => this.setState({age: e.target.value})} id="exampleTitle" placeholder="Client Age"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row="row">
                    <Label for="exampleTitle" sm={2}></Label>
                    <Col sm={10}>
                      <Input type="date" name="date" value={newDate} onChange={(e) => this.setState({date: e.target.value})} id="exampleTitle" placeholder="Date"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row="row">
                    <Label for="exampleTitle" sm={2}></Label>
                    <Col sm={10}>
                      <Input type="text" name="note" value={this.state.address} onChange={(e) => this.setState({address: e.target.value})} id="exampleTitle" placeholder="Pickup Address"/>
                    </Col>
                  </FormGroup>

                  <FormGroup row="row">
                    <Label for="exampleDate" sm={2}></Label>
                    <Col sm={10}>
                      <Input type="text" name="child_img" value={this.state.child_img} onChange={(e) => this.setState({child_img: e.target.value})} id="exampleDate" placeholder="Hours Type"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row="row">
                    <Label for="exampleDate" sm={2}></Label>
                    <Col sm={10}>
                      <Input type="textarea" name="notes" value={this.state.notes} onChange={(e) => this.setState({notes: e.target.value})} id="exampleDate" placeholder="Pickup Time"/>
                    </Col>
                  </FormGroup>
                  <Button style={{
                      marginLeft: '12em',
                      marginBottom: '10px',
                      marginRight: '430px',
                      color: '#1476A8'
                    }}>Submit</Button>
                </Form>
                <Button style={{
                    marginTop: '7em',
                    margingRight: '7em',
                    marginLeft: '3em'
                  }} color="primary" onClick={() => {
                    this.toggle()
                  }}>
                  Close
                </Button>{' '}

              </ModalBody>
            </Modal>
          </div>)
          : null
      }

      <Row>
        <Col >
          <Card body="body" style={{
              width: '20em',
              marginLeft: '5em',
              marginTop: '2em',
              backgroundColor: 'rgba(0,151,201, 0.4)',
              border: 'solid',
              borderWidth: 'thin'
            }}>
            <CardText>
              <img src={this.props.childItem.child_img} alt="Generic placeholder image" style={{
                  width: '100px',
                  height: '100px',
                  marginLeft: '10px'
                }}/></CardText>
            <CardText>
              <strong>Date:
              </strong>
              {newDate}</CardText>
            <CardText>
              <strong>Child Name:
              </strong>
              {this.props.childItem.child_name}</CardText>
            <CardText>
              <strong>Child Age:
              </strong>{this.props.childItem.age}</CardText>
            <CardText>
              <strong>Birthdate:
              </strong>{this.props.childItem.birthdate}</CardText>
            <CardText>
              <strong>Address:
              </strong>{this.props.childItem.address}</CardText>
            <CardText>
              <strong>Parent Name:
              </strong>{this.props.childItem.parent_name}</CardText>
            <CardText>
              <strong>Notes:
              </strong>{this.props.childItem.notes}</CardText>
            <Row>
              <Button style={{
                  height: '2em',
                  textAlign: 'center',
                  width: '7em',
                  lineHeight: '1em',
                  marginLeft: '1em'
                }} onClick={this.handleSubmit}>
                <strong>Update</strong>
              </Button>
              <Button style={{
                  height: '2em',
                  textAlign: 'center',
                  width: '7em',
                  lineHeight: '1em',
                  marginLeft: '1em'
                }} onClick={this.handleSubmitDelete}>
                <strong>Delete</strong>
              </Button>

            </Row>
          </Card>
        </Col>

      </Row>

    </div>)
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({

  deleteChild,
  updateChild
}, dispatch)

export default connect(null, mapDispatchToProps)(AdminChild)
