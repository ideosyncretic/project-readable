import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import EditPostForm from './components/EditPostForm'
import { getCategoriesRequest, addPostRequest } from '../../actions/index.js'

class AddPost extends Component {
  componentDidMount() {
    this.props.getCategoriesRequest()
  }

  onSubmit = params => {
    this.props.addPostRequest(params).then(this.props.history.push('/'))
  }

  render() {
    const { categories } = this.props
    return (
      <EditPostForm
        categories={categories}
        handleSubmit={this.props.handleSubmit}
        onSubmit={this.onSubmit}
        isAdding={true}
      />
    )
  }
}

const formOptions = {
  form: 'addPost'
}

AddPost = reduxForm(formOptions)(AddPost)

export default connect(
  state => ({
    categories: Object.keys(state.categories)
  }),
  {
    getCategoriesRequest,
    addPostRequest
  }
)(AddPost)
