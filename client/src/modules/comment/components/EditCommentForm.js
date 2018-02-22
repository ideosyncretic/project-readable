import React from 'react'
import { Field } from 'redux-form'
import InputField from '../../../components/InputField.js'
import { Box, ButtonOutline } from 'rebass'
import { REQUIRED } from '../../../utils/validations'

const EditCommentForm = props => {
  const {
    onSubmit,
    handleDelete,
    validate,
    invalid,
    pristine,
    submitting
  } = props
  return (
    <Box
      is="form"
      onSubmit={props.handleSubmit(onSubmit)}
      w={[1, 3 / 4, 5 / 6]}
      p={4}
    >
      <Field
        name="body"
        component={InputField}
        label="Comment"
        placeholder="Write something interesting!"
        type="textarea"
        validate={REQUIRED}
      />
      <ButtonOutline type="submit" disabled={pristine || invalid || submitting}>
        Update comment
      </ButtonOutline>
      <ButtonOutline
        onClick={e => {
          e.preventDefault()
          handleDelete()
        }}
      >
        Delete comment
      </ButtonOutline>
    </Box>
  )
}

export default EditCommentForm
