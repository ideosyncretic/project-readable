import React from 'react'
import { Box, Input, Label, Textarea } from 'rebass'

const InputField = props => {
  const { input, placeholder, label, type } = props
  return (
    <Box pb={3}>
      <Label htmlFor={input.name}>{label}</Label>
      {type === 'textarea' ? (
        <Textarea
          rows={4}
          {...input}
          id={input.name}
          placeholder={placeholder}
        />
      ) : (
        <Input {...input} id={input.name} placeholder={placeholder} />
      )}
    </Box>
  )
}

export default InputField
