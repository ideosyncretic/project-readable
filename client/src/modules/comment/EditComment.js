import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import EditCommentForm from './components/EditCommentForm'
import {
  getCommentRequest,
  editCommentRequest,
  deleteCommentRequest
} from '../../actions/index.js'
import { Card } from 'rebass'

class EditComment extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getCommentRequest(id)
  }

  onSubmit = params => {
    const { parentId } = params
    console.log(params)
    this.props
      .editCommentRequest(params)
      .then(this.props.history.push(`/post/${parentId}`))
  }

  handleDelete = () => {
    const { id, parentId } = this.props.comment
    this.props
      .deleteCommentRequest(id)
      .then(this.props.history.push(`/post/${parentId}`))
  }

  render() {
    const id = this.props.match.params.id
    return (
      <Card>
        <EditCommentForm
          handleSubmit={this.props.handleSubmit}
          onSubmit={this.onSubmit}
          handleDelete={this.handleDelete}
        />
      </Card>
    )
  }
}

const formOptions = {
  form: 'editComment',
  enableReinitialize: true
}

EditComment = reduxForm(formOptions)(EditComment)

export default connect(
  state => ({
    initialValues: state.comment,
    comment: state.comment
  }),
  {
    getCommentRequest,
    editCommentRequest,
    deleteCommentRequest
  }
)(EditComment)
