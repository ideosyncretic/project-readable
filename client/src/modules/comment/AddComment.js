import React, { Component } from 'react'
import { reduxForm, Field, reset } from 'redux-form'
import { connect } from 'react-redux'
import { Box, Card, Button } from 'rebass'
import { addCommentRequest } from '../../actions'
import InputField from '../post/components/InputField.js'

class AddComment extends Component {
  onSubmit = params => {
    const { parentId, notify, addCommentRequest } = this.props
    addCommentRequest(params, parentId).then(notify('Comment posted!'))
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <Card m={2} p={3}>
        <Box is="form" onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            name="body"
            component={InputField}
            type="textarea"
            label="Comment"
          />
          <Field
            name="author"
            component={InputField}
            type="text"
            label="Author"
          />
          <Button type="submit">Comment</Button>
        </Box>
      </Card>
    )
  }
}

const resetForm = (result, dispatch) => dispatch(reset('addComment'))

const formOptions = {
  form: 'addComment',
  onSubmitSuccess: resetForm
}

AddComment = reduxForm(formOptions)(AddComment)

export default connect(null, { addCommentRequest })(AddComment)
