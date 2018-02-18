import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import EditPostForm from './components/EditPostForm'
import {
  getCategoriesRequest,
  getPostRequest,
  editPostRequest,
  deletePostRequest
} from '../../actions/index.js'
import { Card } from 'rebass'

class EditPost extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getCategoriesRequest()
    this.props.getPostRequest(id)
  }

  onSubmit = params => {
    this.props.editPostRequest(params).then(this.props.history.push('/'))
  }

  onDelete = id => {
    this.props.deletePostRequest(id).then(this.props.history.push('/'))
  }

  render() {
    const { categories } = this.props
    const id = this.props.match.params.id
    return (
      <Card>
        <EditPostForm
          categories={categories}
          handleSubmit={this.props.handleSubmit}
          onSubmit={this.onSubmit}
          onDelete={this.onDelete}
          isAdding={false}
          id={id}
        />
      </Card>
    )
  }
}

const formOptions = {
  form: 'editPost',
  enableReinitialize: true
}

EditPost = reduxForm(formOptions)(EditPost)

export default connect(
  state => ({
    initialValues: state.post,
    categories: Object.keys(state.categories)
  }),
  {
    getCategoriesRequest,
    getPostRequest,
    editPostRequest,
    deletePostRequest
  }
)(EditPost)
