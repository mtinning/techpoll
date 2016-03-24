import React from 'react'
import AppBar from 'material-ui/lib/app-bar'

const backgroundStyle = {
  background: '#f7f7f7',
}

const appStyle = {
  margin: '0 auto',
  maxWidth: '1400px',
}

export const App = (props) => (
  <div style={backgroundStyle}>
    <AppBar title="Tech Poll" showMenuIconButton={false} />
    <div style={appStyle}>{props.children}</div>
  </div>
)

App.propTypes = {
  children: React.PropTypes.object.isRequired,
}
