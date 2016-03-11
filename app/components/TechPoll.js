import React from 'react'
import {TechCard} from './TechCard'
import {connect} from 'react-redux'

export class TechPoll extends React.Component {
  render() {
    var techList = this.props.tech.map(t => <TechCard key={t.get('name')} tech={t}></TechCard>)
    return (
      <div>
        <h2>{'Here\'s all the tech'}</h2>
        {techList}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tech: state.get('tech')
  }
}

export const TechPollContainer = connect(mapStateToProps)(TechPoll)
