import React from 'react'

import { Input } from './Input'

const commentStyle = {
  width: '250px',
  height: '84px',
  resize: 'none',
  fontFamily: 'Helvetica',
  padding: '5px',
}

function textInput(placeholder, value, onChange, required, name) {
  return (
    <input type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />)
}

function textArea(placeholder, value, onChange, required, name) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      style={commentStyle}
    />)
}

export const TextInput =
      ({ heading, placeholder, value, onChange, required, warning, type, name }) => (
  <Input heading={heading} warning={warning}>
    { type === 'multiline'
      ? textArea(placeholder, value, onChange, required, name)
      : textInput(placeholder, value, onChange, required, name)
    }
  </Input>
)

TextInput.propTypes = {
  heading: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
  required: React.PropTypes.bool,
  warning: React.PropTypes.string,
  type: React.PropTypes.string,
  name: React.PropTypes.string,
}
