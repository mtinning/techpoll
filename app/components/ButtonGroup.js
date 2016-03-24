import React from 'react'

import RaisedButton from 'material-ui/lib/raised-button'

const buttonGroupStyle = {
  margin: '5px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100%',
}

const buttonStyle = {
  margin: '2px',
}

export const ButtonGroup = ({ buttonDefinitions, className }) => (
  <div className={className} style={buttonGroupStyle}>
    {
      buttonDefinitions
        .map((d, i) =>
             <RaisedButton
               className={`button ${d.class}`}
               onClick={d.onClick}
               key={`button-${i}`}
               style={buttonStyle}
             >
               {d.content}
             </RaisedButton>)
    }
  </div>
)

ButtonGroup.propTypes = {
  buttonDefinitions: React.PropTypes.array.isRequired,
  className: React.PropTypes.string,
}
