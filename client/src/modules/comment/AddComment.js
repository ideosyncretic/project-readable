import React, { Component } from 'react'
import { reduxForm, Field, reset } from 'redux-form'
import { connect } from 'react-redux'
import { Box, Card, Button } from 'rebass'
import { addCommentRequest } from '../../actions'
import InputField from '../../components/InputField.js'
import { REQUIRED } from '../../utils/validations'

class AddComment extends Component {
  onSubmit = params => {
    const { parentId, notify, addCommentRequest } = this.props
    addCommentRequest(params, parentId).then(notify('Comment posted!'))
  }

  render() {
    const { handleSubmit, validate, invalid, pristine, submitting } = this.props
    return (
      <Card m={2} p={3}>
        <Box is="form" onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            name="body"
            component={InputField}
            type="textarea"
            label="Comment"
            validate={REQUIRED}
          />
          <Field
            name="author"
            component={InputField}
            type="text"
            label="Author"
            validate={REQUIRED}
          />
          <Button type="submit" disabled={pristine || invalid || submitting}>
            Comment
          </Button>
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
