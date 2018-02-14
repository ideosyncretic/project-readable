import React from 'react'
import { Field } from 'redux-form'
import InputField from './InputField'
import { Box, ButtonOutline } from 'rebass'

const EditPostForm = props => {
  const { categories } = props
  return (
    <Box
      is="form"
      onSubmit={props.handleSubmit(mockSubmit)}
      w={[1, 3 / 4, 5 / 6]}
      p={4}
    >
      <Field
        name="title"
        component={InputField}
        label="Title"
        placeholder="Title here"
        type="text"
      />
      <Field
        name="body"
        component={InputField}
        label="Body"
        placeholder="Write something interesting!"
        type="textarea"
      />
      <Field
        name="category"
        component={InputField}
        label="Category"
        placeholder="Write something interesting!"
        type="select"
        options={categories}
      />
      <ButtonOutline type="submit">Post</ButtonOutline>
    </Box>
  )
}

export default EditPostForm

const mockSubmit = params => console.log(params)
