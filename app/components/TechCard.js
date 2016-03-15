import React from 'react'

export class TechCard extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.tech.name}</div>
        <div>Score: {this.props.tech.score}</div>
        <button onClick={() => this.props.vote(this.props.tech, { score: 1, comment: ""})}>Vote Up!</button>
        <button onClick={() => this.props.vote(this.props.tech, { score: -1, comment: ""})}>Vote Down!</button>
      </div>
    )
  }
}
