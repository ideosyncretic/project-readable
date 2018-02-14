import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import EditPostForm from './components/EditPostForm'
import {
  getCategoriesRequest,
  getPostRequest,
  editPostRequest
} from '../../actions/index.js'

class EditPost extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getCategoriesRequest()
    this.props.getPostRequest(id)
  }

  onSubmit = params => {
    this.props.editPostRequest(params)
  }

  render() {
    const { categories } = this.props
    return (
      <EditPostForm
        categories={categories}
        handleSubmit={this.props.handleSubmit}
        onSubmit={this.onSubmit}
      />
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
    editPostRequest
  }
)(EditPost)
