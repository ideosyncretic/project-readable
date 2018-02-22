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
    const { post, notify } = this.props
    this.props
      .editCommentRequest(params)
      .then(notify('Comment edited!'))
      .then(this.props.history.push(`/${post.category}/${parentId}`))
  }

  handleDelete = () => {
    const { id, parentId } = this.props.comment
    const { post, notify } = this.props
    this.props
      .deleteCommentRequest(id)
      .then(notify('Comment deleted!'))
      .then(this.props.history.push(`/${post.category}/${parentId}`))
  }

  render() {
    const id = this.props.match.params.id
    return (
      <Card>
        <EditCommentForm
          handleSubmit={this.props.handleSubmit}
          onSubmit={this.onSubmit}
          handleDelete={this.handleDelete}
          {...this.props}
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
    comment: state.comment,
    post: state.post
  }),
  {
    getCommentRequest,
    editCommentRequest,
    deleteCommentRequest
  }
)(EditComment)
