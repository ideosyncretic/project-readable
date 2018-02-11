import React from 'react'
import { Field, reduxForm } from 'redux-form'
import EditPostForm from './components/EditPostForm'

const EditPost = props => {
  return <EditPostForm handleSubmit={props.handleSubmit} />
}

const formOptions = {
  form: 'editPost'
}

export default reduxForm(formOptions)(EditPost)
