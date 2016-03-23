import React from 'react'

import RadioButtonGroup from 'material-ui/lib/radio-button-group'
import RadioButton from 'material-ui/lib/radio-button'
import SelectField from 'material-ui/lib/select-field'
import MenuItem from 'material-ui/lib/menus/menu-item'

import { Input } from './Input'

const handleChange = (handler) => (e, i, v) => handler(v)

function optionInput(value, onChange, required, placeholder, options) {
  const menuItems = options.map(o => <MenuItem key={`option-${o}`} value={o} primaryText={o} />)
  return (
    <SelectField value={value} onChange={handleChange(onChange)}>
      {menuItems}
    </SelectField>
  )
}

const radioButton = o => (
  <RadioButton key={`option-${o}`}
    value={o}
    label={o}
  />
)

function radioInput(value, onChange, required, options, name) {
  return (
    <RadioButtonGroup name={name} defaultSelected={value}>
      {options.map(radioButton)}
    </RadioButtonGroup>
  )
}

export const OptionInput =
      ({ heading, placeholder, value, onChange, required, options, warning, type, name }) => (
  <Input heading={heading} warning={warning}>
    { type === 'radio'
      ? radioInput(value, onChange, required, options, name)
      : optionInput(value, onChange, required, placeholder, options)
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
