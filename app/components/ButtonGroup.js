import React from 'react'

const buttonGroupStyle = {
  margin: '5px 0',
}

export const ButtonGroup = ({ buttonDefinitions }) => (
  <div className="votes" style={buttonGroupStyle}>
    {
      buttonDefinitions
        .map((d, i) =>
             <button
               className={`button ${d.class}`}
               onClick={d.onClick}
               key={`button-${i}`}
             >
               {d.content}
             </button>)
    }
  </div>
)

ButtonGroup.propTypes = {
  buttonDefinitions: React.PropTypes.array.isRequired,
}
