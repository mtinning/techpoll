import React from 'react'
import MaterialCard from 'material-ui/lib/card/card'

const cardStyle = {
  borderRadius: '5px',
  margin: '15px 0',
}

const radiusWithHeader = {
  borderBottomRightRadius: '5px',
  borderBottomLeftRadius: '5px',
}

const radiusWithoutHeader = {
  borderRadius: '5px',
}

function contentStyle(isInput, header) {
  const radius = header ? radiusWithHeader : radiusWithoutHeader

  return {
    background: isInput ? 'rgb(255, 64, 129)' : '#00bcd4',
    padding: '10px',
    ...radius,
  }
}

export const Card = ({ isInput, header, children }) => (
  <MaterialCard style={cardStyle}>
    { header }
    <div style={contentStyle(isInput, header)}>{children}</div>
  </MaterialCard>
)

Card.propTypes = {
  isInput: React.PropTypes.bool.isRequired,
  children: React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.object]),
  header: React.PropTypes.object,
}
