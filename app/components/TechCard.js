import React from 'react'

export class TechCard extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.tech.get('name')}</div>
        <div>Score: {this.props.tech.get('score')}</div>
        <button onClick={() => this.props.vote(this.props.tech, 1)}>Vote Up!</button>
        <button onClick={() => this.props.vote(this.props.tech, -1)}>Vote Down!</button>
      </div>
    )
  }
}
