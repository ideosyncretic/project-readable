import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import EditPostForm from './components/EditPostForm'
import { getCategoriesRequest, addPostRequest } from '../../actions/index.js'
import { Card } from 'rebass'

class AddPost extends Component {
  componentDidMount() {
    this.props.getCategoriesRequest()
  }

  onSubmit = params => {
    const { notify } = this.props
    this.props
      .addPostRequest(params)
      .then(notify('Posted!'))
      .then(this.props.history.push('/'))
  }

  render() {
    const { categories } = this.props
    return (
      <Card>
        <EditPostForm
          categories={categories}
          handleSubmit={this.props.handleSubmit}
          onSubmit={this.onSubmit}
          isAdding={true}
        />
      </Card>
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
