import React from 'react'

export class TechCard extends React.Component {
  render() {
    return <div>{this.props.tech.get('name')}</div>
  }
}
