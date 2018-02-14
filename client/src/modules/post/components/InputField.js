import React from 'react'
import { Box, Input, Label, Select, Textarea } from 'rebass'

const InputField = ({ input, placeholder, label, type, options }) => {
  switch (type) {
    case 'textarea':
      return (
        <Box pb={3}>
          <Label htmlFor={input.name}>{label}</Label>
          <Textarea
            rows={6}
            {...input}
            id={input.name}
            placeholder={placeholder}
          />
        </Box>
      )
    case 'text':
      return (
        <Box pb={3}>
          <Label htmlFor={input.name}>{label}</Label>
          <Input {...input} id={input.name} placeholder={placeholder} />
        </Box>
      )
    case 'select':
      return (
        <Box pb={3}>
          <Label htmlFor={input.name}>{label}</Label>
          <Select pb={3}>
            {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </Box>
      )
    default:
      return null
  }
}

export default InputField
