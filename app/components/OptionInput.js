import React from 'react'

import { Input } from './Input'

function createOptionInput(value, onChange, required, placeholder, options) {
  return (
    <select
      value={value}
      onChange={onChange}
      required={required}
    >
      <option value="" disabled>{placeholder}</option>
      {options.map(o => <option key={`option-${o}`}>{o}</option>)}
    </select>
  )
}

function createRadioInput(value, onChange, required, options, name) {
  return options
    .map(o =>
         <input
           type="radio"
           name={name}
           value={o}
           defaultChecked={o === value}
           key={`option-${o}`}
         >{o}
         </input>
        )
}

export const OptionInput =
      ({ heading, placeholder, value, onChange, required, options, warning, type, name }) => (
  <Input heading={heading} warning={warning}>
    { type === 'radio'
      ? createRadioInput(value, onChange, required, options, name)
      : createOptionInput(value, onChange, required, placeholder, options)
    }
  </Input>
)

OptionInput.propTypes = {
  heading: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func,
  required: React.PropTypes.bool,
  options: React.PropTypes.array.isRequired,
  warning: React.PropTypes.string,
  type: React.PropTypes.string,
  name: React.PropTypes.string,
}
