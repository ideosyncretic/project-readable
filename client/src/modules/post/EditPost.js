import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import EditPostForm from './components/EditPostForm'
import { getPostRequest } from '../../actions/index.js'

class EditPost extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getPostRequest(id)
  }
  render() {
    return <EditPostForm handleSubmit={this.props.handleSubmit} />
  }
}

const formOptions = {
  form: 'editPost',
  enableReinitialize: true
}

EditPost = reduxForm(formOptions)(EditPost)

export default connect(
  state => ({
    initialValues: state.post
  }),
  { getPostRequest }
)(EditPost)
