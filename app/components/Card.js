import React from 'react'

function cardStyle(isInput) {
  return {
    background: isInput ? 'rgb(255, 64, 129)' : '#00bcd4',
    borderRadius: '5px',
    padding: '10px',
    margin: '15px 0',
  }
}

export const Card = (props) => <div style={cardStyle(props.isInput)}>{props.children}</div>

Card.propTypes = {
  isInput: React.PropTypes.bool.isRequired,
  children: React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.object]),
}
