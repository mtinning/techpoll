import React from 'react'

export class NewTech extends React.Component {
  render() {
      var newTechItem = { name: 'Test', category: 'Web Front-End', score: 0 };
    return (
      <div>
        <button onClick={() => this.props.newTech(newTechItem)}>New Tech</button>
      </div>
    )
  }
}
