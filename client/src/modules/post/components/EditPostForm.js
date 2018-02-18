import React from 'react'
import { Field } from 'redux-form'
import InputField from './InputField'
import { Box, ButtonOutline } from 'rebass'

const EditPostForm = props => {
  const { id, categories, onSubmit, isAdding, onDelete } = props
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
        disabled={!isAdding}
      />
      <Field
        name="author"
        component={InputField}
        label="Author"
        placeholder="Your name"
        type="text"
        disabled={!isAdding}
      />
      <ButtonOutline type="submit">
        {isAdding ? 'Create post' : 'Update post'}
      </ButtonOutline>
      {isAdding ? null : (
        <ButtonOutline
          onClick={e => {
            e.preventDefault()
            onDelete(id)
          }}
        >
          Delete post
        </ButtonOutline>
      )}
    </Box>
  )
}

export default EditPostForm
