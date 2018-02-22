import React from 'react'
import { Field } from 'redux-form'
import InputField from '../../../components/InputField.js'
import { Box, ButtonOutline } from 'rebass'
import { REQUIRED } from '../../../utils/validations'

const EditPostForm = props => {
  const {
    categories,
    onSubmit,
    validate,
    invalid,
    pristine,
    submitting,
    isAdding,
    handleDelete
  } = props
  return (
    <Box
      is="form"
      onSubmit={props.handleSubmit(onSubmit)}
      w={[1, 3 / 4, 5 / 6]}
      p={4}
    >
      <Field
        name="title"
        component={InputField}
        label="Title"
        placeholder="Title here"
        type="text"
        validate={REQUIRED}
      />
      <Field
        name="body"
        component={InputField}
        label="Body"
        placeholder="Write something interesting!"
        type="textarea"
        validate={REQUIRED}
      />
      <Field
        name="category"
        component={InputField}
        label="Category"
        placeholder="Write something interesting!"
        type="select"
        options={categories}
        disabled={!isAdding}
        validate={REQUIRED}
      />
      <Field
        name="author"
        component={InputField}
        label="Author"
        placeholder="Your name"
        type="text"
        disabled={!isAdding}
        validate={REQUIRED}
      />
      <ButtonOutline type="submit" disabled={pristine || invalid || submitting}>
        {isAdding ? 'Create post' : 'Update post'}
      </ButtonOutline>
      {isAdding ? null : (
        <ButtonOutline
          onClick={e => {
            e.preventDefault()
            handleDelete()
          }}
        >
          Delete post
        </ButtonOutline>
      )}
    </Box>
  )
}

export default EditPostForm
