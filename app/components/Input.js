import React from 'react'

const headingStyle = {
  fontWeight: 'bold',
  verticalAlign: 'middle',
}

const propertyStyle = {
  margin: '10px 0',
}

const inputStyle = {
  float: 'right',
}

export const Input = ({ heading, warning, children }) => (
  <div style={propertyStyle}>
    { heading ? <span style={headingStyle}>{heading}</span> : null }
    <span style={inputStyle}>{children}</span>
    {
      !!warning ?
      <span className="validation-error" style={inputStyle}>{warning}</span> :
      null
    }
  </div>
)

Input.propTypes = {
  heading: React.PropTypes.string,
  children: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]).isRequired,
  warning: React.PropTypes.string,
}
