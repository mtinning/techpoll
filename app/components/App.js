import React from 'react'

const style = {
  margin: '0 auto',
  maxWidth: '1200px',
}

export const App = (props) => (
  <div style={style}>{props.children}</div>
)

App.propTypes = {
  children: React.PropTypes.object.isRequired,
}
