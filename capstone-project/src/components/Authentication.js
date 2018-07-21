import React, {Component} from 'react'
import {connect} from 'react-redux'

export default function(ComposedComponent) {
  class Authentication extends Component {

    componentWillMount() {
      if (!localStorage.getItem('admin')) {
        this.props.history.push('/')
      }
    }

    componentWillUpdate(nextProps) {
      if (!localStorage.getItem('admin')) {
        this.props.history.push('/')
      }
    }

    render() {

      return <ComposedComponent {...this.props}/>
    }
  }

  function mapStateToProps(state) {
    return {admin: state.admin}
  }

  return connect(mapStateToProps)(Authentication)
}
